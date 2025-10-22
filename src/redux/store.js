// src/redux/store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice for cart
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Export actions
export const { addToCart } = cartSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// ✅ Default export — required for your main.jsx import
export default store;
