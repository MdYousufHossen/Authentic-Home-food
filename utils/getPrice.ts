const getPrice = (cart, type) => {
  if (type === "totalPrice") {
    return cart?.reduce((a, b) => a + b.price * b.quantity, 0);
  } else if (type === "totalVat") {
    return cart?.reduce((a, b) => a + b.vat * b.quantity, 0);
  }
};
export default getPrice;
