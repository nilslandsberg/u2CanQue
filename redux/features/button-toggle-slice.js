import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navBarLinksShown: false,
}

export const buttonToggleSlice = createSlice({
  name: "buttonToggle",
  initialState: initialState,
  reducers: {
    showNavBarMobileLinks: (state, action) => {
      state.navBarLinksShown = true;
    },
    hideNavBarMobileLinks: (state, action) => {
      state.navBarLinksShown = false;
    }
  }
})

const { reducer, actions } = buttonToggleSlice;

export const { showNavBarMobileLinks, hideNavBarMobileLinks } = actions;

export default reducer;