import axios from "axios";
import { server } from "../../server";

// get all orders of user
export const getAllOrdersOfUser = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllOrdersUserRequest",
    });

    const token = localStorage.getItem("user-token");

    if (!token) {
      // Handle the case where the token is not available
      dispatch({
        type: "getAllOrdersUserFailed",
        payload: "Authentication token not found",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.get(`${server}/order/get-all-orders/${userId}`, config);

    dispatch({
      type: "getAllOrdersUserSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "getAllOrdersUserFailed",
      payload: error.response.data.message,
    });
  }
};

// get all orders of seller
export const getAllOrdersOfShop = (shopId) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllOrdersShopRequest",
    });

    const token = localStorage.getItem("seller-token");

    if (!token) {
      // Handle the case where the token is not available
      dispatch({
        type: "getAllOrdersShopFailed",
        payload: "Authentication token not found",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.get(`${server}/order/get-seller-all-orders/${shopId}`, config);

    dispatch({
      type: "getAllOrdersShopSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "getAllOrdersShopFailed",
      payload: error.response.data.message,
    });
  }
};


// get all orders of Admin
export const getAllOrdersOfAdmin = () => async (dispatch) => {
  try {
    dispatch({
      type: "adminAllOrdersRequest",
    });

    const token = localStorage.getItem("user-token");

    if (!token) {
      // Handle the case where the token is not available
      dispatch({
        type: "adminAllOrdersFailed",
        payload: "Authentication token not found",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.get(`${server}/order/admin-all-orders`, config);

    dispatch({
      type: "adminAllOrdersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "adminAllOrdersFailed",
      payload: error.response.data.message,
    });
  }
};

