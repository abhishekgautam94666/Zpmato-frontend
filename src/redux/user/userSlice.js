import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  back: true,
  restaurant: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currUser: (state) => {
      state.currentUser = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },

    show: (state, action) => {
      state.back = action.payload;
    },

    currentResto: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const {
  signInStart,
  signInFailure,
  signInSuccess,
  currUser,
  show,
  currentResto,
} = userSlice.actions;

export default userSlice.reducer;
