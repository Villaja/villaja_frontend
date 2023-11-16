import axios from "axios";
import { server } from "../../server";

// create product
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({
      type: "productCreateRequest",
    });

    const token = localStorage.getItem("seller-token");

    if (!token) {
      // Handle the case where the token is not available
      dispatch({
        type: "productCreateFail",
        payload: "Authentication token not found",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.post(`${server}/product/create-product`, productData, config);

    dispatch({
      type: "productCreateSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "productCreateFail",
      payload: error.response.data.message,
    });
  }
};

// get All Products of a shop
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsShopRequest",
    });

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );
    dispatch({
      type: "getAllProductsShopSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsShopFailed",
      payload: error.response.data.message,
    });
  }
};

// delete product of a shop
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductRequest",
    });

    const token = localStorage.getItem("seller-token");

    if (!token) {
      // Handle the case where the token is not available
      dispatch({
        type: "deleteProductFailed",
        payload: "Authentication token not found",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.delete(`${server}/product/delete-shop-product/${id}`, config);

    dispatch({
      type: "deleteProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductFailed",
      payload: error.response.data.message,
    });
  }
};


// get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsRequest",
    });

    const { data } = await axios.get(`${server}/product/get-all-products`);
    dispatch({
      type: "getAllProductsSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsFailed",
      payload: error.response.data.message,
    });
  }
};

// get all products
export const bestSelling = () => async (dispatch) => {
  try {
    dispatch({
      type: "bestSellingRequest",
    });

    const { data } = await axios.get(`${server}/product/best-selling-products`);
    dispatch({
      type: "bestSellingSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "bestSellingFailed",
      payload: error.response.data.message,
    });
  }
};

// get all products
export const justArrived = () => async (dispatch) => {
  try {
    dispatch({
      type: "justArrivedRequest",
    });

    const { data } = await axios.get(`${server}/product/just-arrived-products`);
    dispatch({
      type: "justArrivedSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "justArrivedFailed",
      payload: error.response.data.message,
    });
  }
};

// get all products
export const topDeals = () => async (dispatch) => {
  try {
    dispatch({
      type: "topDealsRequest",
    });

    const { data } = await axios.get(`${server}/product/top-deals-products`);
    dispatch({
      type: "topDealsSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "topDealsFailed",
      payload: error.response.data.message,
    });
  }
};

// update product stock
export const updateProductStock = (productId, stock) => async (dispatch) => {
  try {
    dispatch({
      type: "updateProductStockRequest",
    });

    const token = localStorage.getItem("seller-token");

    if (!token) {
      // Handle the case where the token is not available
      dispatch({
        type: "updateProductStockFailed",
        payload: "Authentication token not found",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.put(
      `${server}/product/update-product-stock/${productId}`,
      { stock },
      config
    );

    dispatch({
      type: "updateProductStockSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "updateProductStockFailed",
      payload: error.response.data.message,
    });
  }
};

// update product details
export const updateProductDetails = (productId, updateData) => async (dispatch) => {
  try {
    dispatch({
      type: "updateProductDetailsRequest",
    });

    const token = localStorage.getItem("seller-token");

    if (!token) {
      dispatch({
        type: "updateProductDetailsFailed",
        payload: "Authentication token not found",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.put(
      `${server}/product/update-product/${productId}`, // Use the correct productId here
      updateData,
      config
    );

    dispatch({
      type: "updateProductDetailsSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "updateProductDetailsFailed",
      payload: error.response.data.message,
    });
  }
};



// get a single product by ID
export const getProductById = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: "getProductByIdRequest",
    });

    const { data } = await axios.get(`${server}/product/get-product-details/${productId}`);

    dispatch({
      type: "getProductByIdSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "getProductByIdFailed",
      payload: error.response.data.message,
    });
  }
};




