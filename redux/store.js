import { configureStore } from "@reduxjs/toolkit";
import buttonToggleReducer from "./features/button-toggle-slice";


export const store = configureStore({
  reducer: {
    buttonToggle: buttonToggleReducer
  },
  devTools: true,
})