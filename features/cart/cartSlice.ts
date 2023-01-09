import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  cart: [],
  isProductavailable: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Partial<priductItem>>) => {
      // Find product is already exist in the cart...
      const product = state?.cart?.find(
        (item) => item.id === action.payload.id
      );

      if (product) {
        if (product.quantity < product.quantity_available)
          product.quantity += 1;
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
  },
});

export const { addToCart, removeToCart, decreaseProductQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
