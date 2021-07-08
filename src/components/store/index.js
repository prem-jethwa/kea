import { createSlice, configureStore } from "@reduxjs/toolkit";
import {
  addItemToCart,
  clearCart,
  clearLocal,
  getLocal,
  removeItemFromCart,
  setLocal,
  setSignup,
  setUserDetails,
} from "./helpers";

const restStateSlice = createSlice({
  name: "Rest",
  initialState: {
    isSignup: false,
    user: {
      cart: [],
    },
  },
  reducers: {
    addItemToCart,
    removeItemFromCart,
    setSignup,
    setUserDetails,
    clearCart,
    setLocal,
    getLocal,
    clearLocal,
  },
});

export const restActions = restStateSlice.actions;

// const configLocal = () => {
//   restStateSlice.actions.setLocal();
//   restStateSlice.actions.getLocal();
// };
// configLocal();

const store = configureStore({
  reducer: restStateSlice.reducer,
});

export default store;
