import { configureStore } from "@reduxjs/toolkit";
import eshopReducer from "./eshopSlice";

export const store = configureStore({
  reducer: {
    eshop: eshopReducer,
  },
});
