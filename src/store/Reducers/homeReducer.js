import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_category = createAsyncThunk(
  "category/get_category",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get("/home/get-categorys");
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error);
    }
  }
);

export const get_products = createAsyncThunk(
  "product/get_products",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get("/home/get-products");
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error);
    }
  }
);
export const price_range_product = createAsyncThunk(
  "product/price_range_product",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get("/home/price-range-product");
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error);
    }
  }
);
export const query_products = createAsyncThunk(
  "product/query_products",
  async (query, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get(
        `/home/query-products?category=${query.category}&&rating=${query.rating}&&lowPrice=${
          query.low
        }&&highPrice=${query.high}&&sortPrice=${query.sortPrice}&&pageNumber=${
          query.pageNumber
        }&&searchValue=${query.searchValue ? query.searchValue : ""}`
      );
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error);
    }
  }
);

export const get_product = createAsyncThunk(
  "product/get_product",
  async (slug, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get(`/home/get-product/${slug}`);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error);
    }
  }
);

//review product
export const customer_review = createAsyncThunk(
  "review/customer_review",
  async (info, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.post("/home/customer/submit-review", info);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const get_reviews = createAsyncThunk(
  "review/get_reviews",
  async ({ productId, pageNumber }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get(`/home/customer/get-reviews/${productId}?pageNo=${pageNumber}`);
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const all_banners = createAsyncThunk(
  "review/all_banners",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await api.get("/banners");
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const homeReducer = createSlice({
  name: "home",
  initialState: {
    categorys: [],
    products: [],
    totalProduct: 0,
    latest_product: [],
    topRated_product: [],
    discount_product: [],
    priceRange: {
      low: 0,
      high: 2000,
    },
    product: {},
    relatedProducts: [],
    moreProducts: [],
    successMessage: "",
    errorMessage: "",
    totalReview: 0,
    rating_review: [],
    reviews: [],
    banners: [],
    loader: false,
  },
  reducers: {
    messageClear: (state, _) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: {
    [get_category.fulfilled]: (state, { payload }) => {
      state.categorys = payload.categorys;
    },
    [all_banners.fulfilled]: (state, { payload }) => {
      state.banners = payload.banners;
    },
    [get_products.pending]: (state, { payload }) => {
      state.loader = true;
    },
    [get_products.fulfilled]: (state, { payload }) => {
      state.products = payload.products;
      state.latest_product = payload.latest_product;
      state.topRated_product = payload.topRated_product;
      state.discount_product = payload.discount_product;
      state.loader = false;
    },
    [price_range_product.fulfilled]: (state, { payload }) => {
      state.priceRange = payload.priceRange;
      state.latest_product = payload.latest_product;
    },
    [query_products.fulfilled]: (state, { payload }) => {
      state.products = payload.products;
      state.totalProduct = payload.totalProduct;
    },
    [get_product.fulfilled]: (state, { payload }) => {
      state.product = payload.product;
      state.relatedProducts = payload.relatedProducts;
      state.moreProducts = payload.moreProducts;
    },
    [customer_review.fulfilled]: (state, { payload }) => {
      state.successMessage = payload.message;
    },
    [get_reviews.fulfilled]: (state, { payload }) => {
      state.reviews = payload.reviews;
      state.totalReview = payload.totalReview;
      state.rating_review = payload.rating_review;
    },
  },
});

export const { messageClear } = homeReducer.actions;
export default homeReducer.reducer;
