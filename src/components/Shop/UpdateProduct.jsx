import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProductDetails } from "../../redux/actions/product";
import { categoriesData } from "../../static/data";
import { toast } from "react-toastify";

const UpdateProductDetails = () => {
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();
  const [condition, setCondition] = useState(""); // Add condition state
  const [aboutProduct, setAboutProduct] = useState(""); // Add aboutProduct state
  const [brand, setBrand] = useState(""); // Add brand state
  const [model, setModel] = useState(""); // Add model state
  const [displaySize, setDisplaySize] = useState(""); // Add displaySize state
  const [color, setColor] = useState(""); // Add color state
  const [os, setOS] = useState(""); // Add OS state
  const [memorySize, setMemorySize] = useState(""); // Add memorySize state
  const [cellularTechnology, setCellularTechnology] = useState(""); // Add cellularTechnology state
  const [connectivityTechnology, setConnectivityTechnology] = useState(""); // Add connectivityTechnology state
  const [simCard, setSimCard] = useState(""); // Add simCard state
  const [dimensions, setDimensions] = useState(""); // Add dimensions state
  const [serialNumber, setSerialNumber] = useState(""); // Add serialNumber state
  const [weight, setWeight] = useState(""); // Add weight state
  const [inTheBox, setInTheBox] = useState(""); // Add inTheBox state
  const [minDelivery, setMinDelivery] = useState(""); // Add minDelivery state
  const [maxDelivery, setMaxDelivery] = useState(""); // Add maxDelivery state

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Product created successfully!");
      navigate("/dashboard");
      window.location.reload();
    }
  }, [dispatch, error, success]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const newForm = new FormData();
  
    images.forEach((image) => {
      newForm.append("images", image);
    });
  
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category);
    newForm.append("tags", tags);
    newForm.append("originalPrice", originalPrice);
    newForm.append("discountPrice", discountPrice);
    newForm.append("stock", stock);
    newForm.append("condition", condition);
    newForm.append("aboutProduct", aboutProduct);
    newForm.append("brand", brand);
    newForm.append("model", model);
    newForm.append("displaySize", displaySize);
    newForm.append("color", color);
    newForm.append("os", os);
    newForm.append("memorySize", memorySize);
    newForm.append("cellularTechnology", cellularTechnology);
    newForm.append("connectivityTechnology", connectivityTechnology);
    newForm.append("simCard", simCard);
    newForm.append("dimensions", dimensions);
    newForm.append("serialNumber", serialNumber);
    newForm.append("weight", weight);
    newForm.append("inTheBox", inTheBox);
    newForm.append("minDelivery", minDelivery);
    newForm.append("maxDelivery", maxDelivery);
    newForm.append("shopId", seller._id);
  
    try {
      // Assuming updateProductDetails is an asynchronous function
      await dispatch(
        updateProductDetails({
          name,
          description,
          category,
          tags,
          originalPrice,
          discountPrice,
          stock,
          shopId: seller._id,
          images,
          condition,
          aboutProduct,
          brand,
          model,
          displaySize,
          color,
          os,
          memorySize,
          cellularTechnology,
          connectivityTechnology,
          simCard,
          dimensions,
          serialNumber,
          weight,
          inTheBox,
          minDelivery,
          maxDelivery,
        })
      );
  
      toast.success("Product created successfully!");
      navigate("/dashboard");
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    } finally {
      // Loading is set to false after dispatch or in case of an error
      setLoading(false);
    }
  };
  
  
  
  

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white mt-16 rounded-[4px] p-3 ">
  <h5 className="text-[30px] font-Poppins text-gray-700">Add A Product - Details</h5>
  {/* create product form */}
  <form onSubmit={handleSubmit}>
    <br />
    <div>
      <label className="pb-2">
        Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="name"
        value={name}
        className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your product name and a short title..."
      />
    </div>
    <br />
    <div>
      <label className="pb-2">
        Description <span className="text-red-500">*</span>
      </label>
      <textarea
        cols="30"
        required
        rows="8"
        type="text"
        name="description"
        value={description}
        className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter your product description, e.g. a brief description about the product from the manufacturer..."
      ></textarea>
    </div>
    <br />
    <div>
      <label className="pb-2">
        Category <span className="text-red-500">*</span>
      </label>
      <select
        className="w-full mt-2 border py-3 rounded-[5px]"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Choose a category</option>
        {categoriesData &&
          categoriesData.map((i) => (
            <option value={i.title} key={i.title}>
              {i.title}
            </option>
          ))}
      </select>
    </div>
    <br />
    <div>
      <label className="pb-2">Tags</label>
      <input
        type="text"
        name="tags"
        value={tags}
        className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        onChange={(e) => setTags(e.target.value)}
        placeholder="e.g. barcode for tracking or SKU number. ..."
      />
    </div>
    <br />
    <div className="flex justify-between">
      <div className="w-[48%]">
        <label className="pb-2">Original Price</label>
        <input
          type="number"
          name="originalPrice"
          value={originalPrice}
          className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          onChange={(e) => setOriginalPrice(e.target.value)}
          placeholder="Enter original price..."
        />
      </div>
      <div className="w-[48%]">
        <label className="pb-2">Price (With Discount) <span className="text-red-500">*</span></label>
        <input
          type="number"
          name="discountPrice"
          value={discountPrice}
          className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          onChange={(e) => setDiscountPrice(e.target.value)}
          placeholder="price with discount..."
        />
      </div>
    </div>
    <div className="flex justify-between">
      <div className="w-[48%]">
        <label className="pb-2">Product Stock <span className="text-red-500">*</span></label>
        <input
          type="number"
          name="stock"
          value={stock}
          className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          onChange={(e) => setStock(e.target.value)}
          placeholder="Enter stock No..."
        />
      </div>
      {/* Add the additional input fields here */}
      <div className="w-[48%]">
        <label className="pb-2">Condition</label>
        <input
          type="text"
          name="condition"
          value={condition}
          className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          onChange={(e) => setCondition(e.target.value)}
          placeholder="new, used or refurbished..."
        />
      </div>
      {/* Add more input fields here */}
    </div>
    <br />
    <div>
    <label className="pb-2">About</label>
      <textarea
        cols="30"
        rows="8"
        type="text"
        name="aboutProduct"
        value={aboutProduct}
        className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        onChange={(e) => setAboutProduct(e.target.value)}
        placeholder="Enter information about the product; outline the full specs of the product..."
      ></textarea>
    </div>
    <br />
    <div className="flex flex-wrap -mx-2">
  <div className="w-full sm:w-1/2 px-2">
    <label className="pb-2">Brand</label>
    <input
      type="text"
      name="brand"
      value={brand}
      className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus-border-blue-500 sm:text-sm"
      onChange={(e) => setBrand(e.target.value)}
      placeholder="Enter product brand..."
    />
  </div>

  <div className="w-full sm:w-1/2 px-2">
    <label className="pb-2">Model</label>
    <input
      type="text"
      name="model"
      value={model}
      className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus-border-blue-500 sm:text-sm"
      onChange={(e) => setModel(e.target.value)}
      placeholder="Enter product model..."
    />
  </div>

  <div className="w-full sm:w-1/2 px-2">
    <label className="pb-2">Display Size</label>
    <input
      type="text"
      name="displaySize"
      value={displaySize}
      className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus-border-blue-500 sm:text-sm"
      onChange={(e) => setDisplaySize(e.target.value)}
      placeholder="Enter product display size..."
    />
  </div>

  <div className="w-full sm:w-1/2 px-2">
    <label className="pb-2">Color</label>
    <input
      type="text"
      name="color"
      value={color}
      className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus-border-blue-500 sm:text-sm"
      onChange={(e) => setColor(e.target.value)}
      placeholder="Enter product color..."
    />
  </div>

  <div className="w-full sm:w-1/2 px-2">
    <label className="pb-2">OS</label>
    <input
      type="text"
      name="os"
      value={os}
      className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus-border-blue-500 sm:text-sm"
      onChange={(e) => setOS(e.target.value)}
      placeholder="Enter product OS..."
    />
  </div>

  <div className="w-full sm:w-1/2 px-2">
    <label className="pb-2">Memory Size</label>
    <input
      type="text"
      name="memorySize"
      value={memorySize}
      className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus-border-blue-500 sm:text-sm"
      onChange={(e) => setMemorySize(e.target.value)}
      placeholder="e.g. RAM and Hard drive..."
    />
  </div>

  <div className="w-full sm:w-1/2 px-2">
    <label className="pb-2">Cellular Technology</label>
    <input
      type="text"
      name="cellularTechnology"
      value={cellularTechnology}
      className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus-border-blue-500 sm:text-sm"
      onChange={(e) => setCellularTechnology(e.target.value)}
      placeholder="e.g. 3G, 4G, 5G, if any..."
    />
  </div>

  <div className="w-full sm:w-1/2 px-2">
    <label className="pb-2">Connectivity Technology</label>
    <input
      type="text"
      name="connectivityTechnology"
      value={connectivityTechnology}
      className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus-border-blue-500 sm:text-sm"
      onChange={(e) => setConnectivityTechnology(e.target.value)}
      placeholder="e.g. Bluetooth and wifi type,..."
    />
  </div>

  <div className="w-full sm:w-1/2 px-2">
    <label className="pb-2">SIM Card</label>
    <input
      type="text"
      name="simCard"
      value={simCard}
      className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus-border-blue-500 sm:text-sm"
      onChange={(e) => setSimCard(e.target.value)}
      placeholder="e.g. unlocked or not (if any)..."
    />
  </div>

  <div className="w-full sm:w-1/2 px-2">
    <label className="pb-2">Dimensions</label>
    <input
      type="text"
      name="dimensions"
      value={dimensions}
      className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus-border-blue-500 sm:text-sm"
      onChange={(e) => setDimensions(e.target.value)}
      placeholder="Enter product dimensions..."
    />
  </div>

  <div className="w-full sm:w-1/2 px-2">
    <label className="pb-2">Serial Number</label>
    <input
      type="text"
      name="serialNumber"
      value={serialNumber}
      className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus-border-blue-500 sm:text-sm"
      onChange={(e) => setSerialNumber(e.target.value)}
      placeholder="Enter product serial number..."
    />
  </div>

  <div className="w-full sm:w-1/2 px-2">
    <label className="pb-2">Weight</label>
    <input
      type="text"
      name="weight"
      value={weight}
      className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus-border-blue-500 sm:text-sm"
      onChange={(e) => setWeight(e.target.value)}
      placeholder="Enter product weight..."
    />
  </div>

  <div className="w-full sm:w-1/2 px-2">
    <label className="pb-2">In The Box</label>
    <input
      type="text"
      name="inTheBox"
      value={inTheBox}
      className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus-border-blue-500 sm:text-sm"
      onChange={(e) => setInTheBox(e.target.value)}
      placeholder="Enter what's included in the box..."
    />
  </div>
</div>

    <div className="flex justify-between">
      <div className="w-[48%]">
        <label className="pb-2">Min Delivery time frame e.g. 3-5 days or hours</label>
        <input
          type="text"
          name="minDelivery"
          value={minDelivery}
          className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          onChange={(e) => setMinDelivery(e.target.value)}
          placeholder="e.g. 3 days or hours  ..."
        />
      </div>
      <div className="w-[48%]">
        <label className="pb-2">Max Delivery time frame e.g. 3-5 days or hours</label>
        <input
          type="text"
          name="maxDelivery"
          value={maxDelivery}
          className="mt-2 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          onChange={(e) => setMaxDelivery(e.target.value)}
          placeholder=" e.g. 5 days or hours "
        />
      </div>
    </div>
    <div>

      <label className="pb-2">Upload downloaded clear 1080p Images and a live picture proof of the product, Ensure the first image on the list is the downloaded 1080p picture. Limit of 5 pictures <span className="text-red-500">*</span></label>
      <input
        type="file"
        name=""
        id="upload"
        className="hidden"
        multiple
        onChange={handleImageChange}
      />
      <div className="w-full flex items-center flex-wrap">
        <label htmlFor="upload">
          <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
        </label>
        {images &&
          images.map((i) => (
            <img
              src={i}
              key={i}
              alt=""
              className="h-[120px] w-[120px] object-cover m-2"
            />
          ))}
      </div>
      <br />
      <div>
  <input
    type="submit"
    value={loading ? "Loading..." : "Add Product"}
    disabled={loading}
    className="mt-2 cursor-pointer appearance-none text-center block w-full bg-[#0077B6] text-white px-3 py-4 border border-gray-300 rounded-[6px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  />
</div>
    </div>
  </form>
</div>


  );
};

export default UpdateProductDetails;
