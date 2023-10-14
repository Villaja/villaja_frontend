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


// Update product
export const updateProduct = (productId, productData) => async (dispatch) => {
  try {
    dispatch({
      type: "updateProductRequest",
    });

    const token = localStorage.getItem("seller-token");

    if (!token) {
      // Handle the case where the token is not available
      dispatch({
        type: "updateProductFailed",
        payload: "Authentication token not found",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.put(`${server}/product/update-product/${productId}`, productData, config);

    dispatch({
      type: "updateProductSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "updateProductFailed",
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
