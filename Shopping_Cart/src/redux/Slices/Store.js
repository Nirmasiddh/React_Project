import cartReducer from "./CartSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer, // ✅ This is the actual reducer function
  },
});
