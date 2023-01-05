import { createSlice } from "@reduxjs/toolkit";

const initialState: CartType = {
  customer: {
    name: "",
    address: "",
    phone: "",
  },
  calculation: {
    price: 0,
    vat: 0,
    total: 0,
  },
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
