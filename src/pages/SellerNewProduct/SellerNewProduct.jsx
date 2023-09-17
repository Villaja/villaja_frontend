import { useLocation } from 'react-router-dom'
import PhotoIcon from '../../assets/little_photo_icon.svg'
import './sellerNewProduct.css'
import { useEffect, useState } from 'react'

const SellerNewProduct = () => {

    
    const [uploadedImages,setUploadedImages] = useState([])

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.width = 'auto'
        document.getElementsByTagName('body')[0].style.height = 'auto'
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
    },[])


    const handleImageUpload = (e) => {

        let uploadedfiles = e.target.files
        console.log(uploadedfiles);
        setUploadedImages(uploadedfiles)
        var image = document.getElementById('up-img-central');
        var subimages = document.getElementsByClassName('ims-select-img');
        image.src = URL.createObjectURL(uploadedfiles[0]);
        for(let i = 0;i<5;i++)
        {
            subimages[i].src = URL.createObjectURL(uploadedfiles[i]);
        }
        console.log(uploadedfiles[0]);
    }

    const handleImageChange = (val) => {
        var image = document.getElementById('up-img-central');
        image.src = URL.createObjectURL(uploadedImages[val]);
    }

    const location = useLocation()
  return (
    <div className="snp-wrapper">
        <div className="snp-container">
                <div className="snp-top">
                    <div className="snp-top-title">
                        Add a Product - Add Details
                    </div>

                    <div className="snp-top-action">
                        <div className="snp-action snp-cancel">CANCEL</div>
                        <div className="snp-action snp-save">SAVE & ADD</div>
                    </div>
                </div>

            <div className="snp-main">
                <div className="snp-left">
                    <div className="snp-info">
                        <p>Product Name</p>
                        <input type="text" name="" id="snp-product-name" placeholder='Insert product name here ... '/>
                        <p>Please do not include the brand name here</p>
                    </div>
                    <div className="snp-info">
                        <p>Product Description</p>
                        <textarea type="text" name="" id="snp-product-description" placeholder="Summarize the product's key features ... "/>
                    </div>

                    <div className="snp-info-flex">
                        <div className="sif-input">
                            <p>Price</p>
                            <input type="text" name="" id="snp-price" placeholder='N100,000 '/>
                        </div>
                        <div className="sif-input">
                            <p>Discount Price</p>
                            <input type="text" name="" id="snp-discount-price" placeholder='N105,000'/>
                            <p>Villaja adds a 5% commission to your price</p>

                        </div>
                        <div className="sif-input">
                            <p>Number of item is stock</p>
                            <input type="text" name="" id="snp-stock" placeholder='0'/>
                        </div>
                        <div className="sif-input">
                            <p>SKU</p>
                            <input type="text" name="" id="snp-sku" placeholder='ABCDEFG1234567890'/>
                        </div>
                    </div>

                    <div className="snp-info-cat">
                        <p>Category</p>
                        <p>{location.pathname.split('/')[3].split('%20').join(" ")}</p>
                    </div>

                    <div className="snp-info-tags">
                        <p>Add Tags</p>
                        <p>This would allow your products to be discovered through our Search bar. Use a maximum of 5 tags.</p>
                        <p>Product Tags</p>
                        <input type="text" name="" id="snp-product-tags" placeholder='e.g. iphone, iphone 14, purple'/>
                        <p>Separate each tag with commas (,)</p>

                    </div>
                </div>
                <div className="snp-right">

                    <div className={`large-img-container ${uploadedImages.length > 0?'lic-active':""}`}>
                        <div className={`lic-photo-select ${uploadedImages.length > 0?'lic-inactive':""}`}>
                            <label htmlFor="image-select">
                                    <img src={PhotoIcon} alt="" />
                                    <p>Click to Upload</p>
                                    <p>Maximum of 5 images</p>
                            </label>
                            <input type="file" name="" id="image-select" multiple style={{display:"none"}} onChange={(e) => handleImageUpload(e)}/>
                        </div>

                        <img src={PhotoIcon} alt="" id='up-img-central' style={uploadedImages.length > 0?{display:"flex"}:{display:'none'}}/>
                    </div>

                        


                    <div className="other-image-selects">
                        <div className="ims-select"><img src="" alt="" className='ims-select-img' style={uploadedImages.length > 0?{display:"flex"}:{display:'none'}} onClick={() => handleImageChange(0)}/></div>
                        <div className="ims-select"><img src="" alt="" className='ims-select-img' style={uploadedImages.length > 1?{display:"flex"}:{display:'none'}} onClick={() => handleImageChange(1)}/></div>
                        <div className="ims-select"><img src="" alt="" className='ims-select-img' style={uploadedImages.length > 2?{display:"flex"}:{display:'none'}} onClick={() => handleImageChange(2)}/></div>
                        <div className="ims-select"><img src="" alt="" className='ims-select-img' style={uploadedImages.length > 3?{display:"flex"}:{display:'none'}} onClick={() => handleImageChange(3)}/></div>
                        <div className="ims-select"><img src="" alt="" className='ims-select-img' style={uploadedImages.length > 4?{display:"flex"}:{display:'none'}} onClick={() => handleImageChange(4)}/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SellerNewProduct