import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: null,
  status: "idle",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action.payload, 'hi');
      state.status = "fulfilled";
      state.products = [...action.payload.data];
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "http://localhost:8080/api/products-by-categories"
    );
    const data = await response.json();
    // console.log(data, 'hi');
    return data;
  }
);

export const selectAllProducts = (state) => state.products;
