import { configureStore } from "@reduxjs/toolkit";
import buttonToggleReducer from "./features/button-toggle-slice";
import modifierDetailsReducer from "./features/clover-api-call-slice";


export const store = configureStore({
  reducer: {
    buttonToggle: buttonToggleReducer,
    modifierDetails: modifierDetailsReducer
  },
  devTools: true,
})