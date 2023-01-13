import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  cart: [],
  isProductavailable: false,
  toggleSnackbar: false,
  snackbarMessage: null,
  snackbarVariant: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Partial<priductItem>>) => {
      // Find product is already exist in the cart...
      const product = state.cart?.find((item) => item.id === action.payload.id);

      if (product) {
        if (product.quantity < product.quantity_available)
          product.quantity += 1;
        else {
          state.toggleSnackbar = true;
          state.snackbarMessage = "Product is not abailabe!";
          state.snackbarVariant = "warning";
        }
      } else {
        state.cart.push(action.payload);
      }
    },
    removeToCart: (state, action: PayloadAction<any>) => {
      //Remove product from the cart
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    decreaseProductQuantity: (state, action) => {
      // Find product that already exist in the cart
      const product = state.cart.find((item) => item.id === action.payload);
      // Check product quantity greater than 1
      if (product?.quantity > 1) {
        product.quantity -= 1;
      } else {
        // Remove product from the cart
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
    toggleSnackbarClose: (state, action) => {
      state.toggleSnackbar = false;
      state.snackbarMessage = null;
    },
    resetCart: (state) => {
      state.cart = [];
    },
    toggleSnackbarOpen: (
      state,
      action: PayloadAction<{ message: string; variant: string }>
    ) => {
      state.toggleSnackbar = true;
      state.snackbarMessage = action.payload.message;
      state.snackbarVariant = action.payload.variant;
    },
  },
});

export const {
  addToCart,
  removeToCart,
  toggleSnackbarClose,
  resetCart,
  decreaseProductQuantity,
  toggleSnackbarOpen,
} = cartSlice.actions;
export default cartSlice.reducer;
