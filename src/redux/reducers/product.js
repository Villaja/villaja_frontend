import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const productReducer = createReducer(initialState, {
  productCreateRequest: (state) => {
    state.isLoading = true;
  },
  productCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  productCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all products of shop
  getAllProductsShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  getAllProductsShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete product of a shop
  deleteProductRequest: (state) => {
    state.isLoading = true;
  },
  deleteProductSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteProductFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all products
  bestSellingRequest: (state) => {
    state.isLoading = true;
  },
  bestSellingSuccess: (state, action) => {
    state.isLoading = false;
    state.bestProducts = action.payload;
  },
  bestSellingFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  justArrivedRequest: (state) => {
    state.isLoading = true;
  },
  justArrivedSuccess: (state, action) => {
    state.isLoading = false;
    state.allProducts = action.payload;
  },
  justArrivedFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },


  topDealsRequest: (state) => {
    state.isLoading = true;
  },
  topDealsSuccess: (state, action) => {
    state.isLoading = false;
    state.allProducts = action.payload;
  },
  topDealsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },


  getAllProductsRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsSuccess: (state, action) => {
    state.isLoading = false;
    state.allProducts = action.payload;
  },
  getAllProductsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },















  // update product
  updateProductRequest: (state) => {
    state.isLoading = true;
  },
  updateProductSuccess: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  updateProductFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
