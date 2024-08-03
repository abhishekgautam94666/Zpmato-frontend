import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  back: true,
  restaurant: null,
  cart: [],
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

    addCart: (state, action) => {
      if (!state.cart) {
        state.cart = [];
      }
      const itemExit = state.cart.some(
        (item) => item.foodId === action.payload.foodId
      );

      if (!itemExit) {
        state.cart.push(action.payload);
      }
    },

    deleteItemCart: (state, action) => {
      // state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = state.cart.filter((item) => item.foodId !== action.payload);
    },

    incrementItem: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.foodId === action.payload
          ? {
              ...item,
              items: { ...item.items, quantity: item.items.quantity + 1 },
            }
          : item
      );
    },

    emptyState: (state) => {
      state.cart = [];
    },

    decrementItem: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.foodId === action.payload && item.items.quantity > 1
          ? {
              ...item,
              items: { ...item.items, quantity: item.items.quantity - 1 },
            }
          : item
      );
    },
  },
});

export const {
  signInSuccess,
  currUser,
  show,
  addCart,
  deleteItemCart,
  incrementItem,
  decrementItem,
  emptyState,
} = userSlice.actions;

export default userSlice.reducer;
