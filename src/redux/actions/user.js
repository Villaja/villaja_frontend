import axios from "axios";
import { server } from "../../server";

// Load user with JWT authentication
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    // Fetch the JWT token from where it is stored (e.g., localStorage, cookies)
    const token = localStorage.getItem("user-token");

    if (!token) {
      // Handle the case where the token is not available (user is not authenticated)
      dispatch({
        type: "LoadUserFail",
        payload: "User is not authenticated",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.get(`${server}/user/getuser`, config);
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};

// Load seller with JWT authentication
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadSellerRequest",
    });

    // Fetch the JWT token from where it is stored (e.g., localStorage, cookies)
    const token = localStorage.getItem("seller-token");

    if (!token) {
      // Handle the case where the token is not available (user is not authenticated)
      dispatch({
        type: "LoadSellerFail",
        payload: "User is not authenticated",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.get(`${server}/shop/getSeller`, config);
    dispatch({
      type: "LoadSellerSuccess",
      payload: data.seller,
    });
  } catch (error) {
    dispatch({
      type: "LoadSellerFail",
      payload: error.response.data.message,
    });
  }
};

// User update information with JWT authentication
export const updateUserInformation = (name, email, phoneNumber, password) => async (dispatch) => {
  try {
    dispatch({
      type: "updateUserInfoRequest",
    });

    // Fetch the JWT token from where it is stored (e.g., localStorage, cookies)
    const token = localStorage.getItem("user-token");

    if (!token) {
      // Handle the case where the token is not available (user is not authenticated)
      dispatch({
        type: "updateUserInfoFailed",
        payload: "User is not authenticated",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.put(
      `${server}/user/update-user-info`,
      {
        email,
        password,
        phoneNumber,
        name,
      },
      config
    );

    dispatch({
      type: "updateUserInfoSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "updateUserInfoFailed",
      payload: error.response.data.message,
    });
  }
};

// Update user address with JWT authentication
export const updatUserAddress = (country, city, address1, address2, zipCode, addressType) => async (dispatch) => {
  try {
    dispatch({
      type: "updateUserAddressRequest",
    });

    // Fetch the JWT token from where it is stored (e.g., localStorage, cookies)
    const token = localStorage.getItem("user-token");

    if (!token) {
      // Handle the case where the token is not available (user is not authenticated)
      dispatch({
        type: "updateUserAddressFailed",
        payload: "User is not authenticated",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.put(
      `${server}/user/update-user-addresses`,
      {
        country,
        city,
        address1,
        address2,
        zipCode,
        addressType,
      },
      config
    );

    dispatch({
      type: "updateUserAddressSuccess",
      payload: {
        successMessage: "User address updated successfully!",
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: "updateUserAddressFailed",
      payload: error.response.data.message,
    });
  }
};

// Delete user address with JWT authentication
export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteUserAddressRequest",
    });

    // Fetch the JWT token from where it is stored (e.g., localStorage, cookies)
    const token = localStorage.getItem("user-token");

    if (!token) {
      // Handle the case where the token is not available (user is not authenticated)
      dispatch({
        type: "deleteUserAddressFailed",
        payload: "User is not authenticated",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.delete(`${server}/user/delete-user-address/${id}`, config);

    dispatch({
      type: "deleteUserAddressSuccess",
      payload: {
        successMessage: "User deleted successfully!",
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: "deleteUserAddressFailed",
      payload: error.response.data.message,
    });
  }
};

// Get all users (admin) with JWT authentication
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllUsersRequest",
    });

    // Fetch the JWT token from where it is stored (e.g., localStorage, cookies)
    const token = localStorage.getItem("user-token");

    if (!token) {
      // Handle the case where the token is not available (admin is not authenticated)
      dispatch({
        type: "getAllUsersFailed",
        payload: "Admin is not authenticated",
      });
      return;
    }

    const config = {
      headers: {
        Authorization: token,
      },
    };

    const { data } = await axios.get(`${server}/user/admin-all-users`, config);

    dispatch({
      type: "getAllUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "getAllUsersFailed",
      payload: error.response.data.message,
    });
  }
};
