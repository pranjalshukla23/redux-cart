import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice";

//define store
const store = configureStore({
  //add reducers
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

//export store
export default store;