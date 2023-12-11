import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const bearerToken = process.env.NEXT_PUBLIC_BEARER_TOKEN;
const merchantId = process.env.NEXT_PUBLIC_MID;
const authHeader = {headers: { Authorization: 'Bearer ' + bearerToken }};

const BaseApiUrl = `https://api.clover.com/v3/merchants/${merchantId}/modifer_groups/`


export const getSidesModifiers = createAsyncThunk("sides/modifiers", async(_, rejectWithValue) => {
  try {
    const response = await axios.get(BaseApiUrl + 'R0P9WPPXQDY4T/modifiers', authHeader);
    return response;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

const initialState = {
  sides: {},
  isLoading: false,
  error: null
}

const modifierDetailSlice = createSlice({
  name: "modifierDetails",
  initialState,
  reducers: {},
  extraReducers: (builder)=> {
    builder.addCase(getSidesModifiers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSidesModifiers.fulfilled, (state, action) => {
      state.sides = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(getSidesModifiers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    })
  }
})

export default modifierDetailSlice.reducer