import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  isProductavailable: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<priductItem>) => {
      // const restCart = [...state.items, action.payload];

      // const arrayUniqueByKey = [
      //   ...(new Map(
      //     restCart.map((item: priductItem) => [item["id"], item])
      //   ).values() as unknown as Array<priductItem>),
      // ];
      let restCart;
      const quantityUpdate = state?.items?.find(
        (item) => item.id === action.payload.id
      );
      if (quantityUpdate) {
        restCart = state.items.map((item) => {
          if (item.id === quantityUpdate.id) {
            if (item.quantity < quantityUpdate.quantity_available) {
              state.isProductavailable = false;
              item.quantity = item.quantity + 1;

              return item;
            } else {
              state.isProductavailable = true;
            }
          }
          return item;
        });
      } else {
        const quantity = 1;
        const item = {
          ...action.payload,
          quantity,
        };
        state.isProductavailable = false;
        restCart = [...state.items, item];
      }
      const price = restCart.reduce((a, b) => a + b.price * b.quantity, 0);
      const vat = restCart.reduce((a, b) => a + b.vat * b.quantity, 0);
      state.calculation.price = price;
      state.calculation.vat = vat;
      state.calculation.total = price + vat;
      state.items = restCart;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
