import axios from "axios";
import { server } from "../../server";

// Get all sellers (admin) with JWT authentication
export const getAllSellers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllSellersRequest",
    });

    // Fetch the JWT token from where it is stored (e.g., localStorage, cookies)
    const token = localStorage.getItem("user-token");

    if (!token) {
      // Handle the case where the token is not available (admin is not authenticated)
      dispatch({
        type: "getAllSellersFailed",
        payload: "Admin is not authenticated",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.get(`${server}/shop/admin-all-sellers`, config);

    dispatch({
      type: "getAllSellersSuccess",
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: "getAllSellersFailed",
      payload: error.response.data.message,
    });
  }
};
