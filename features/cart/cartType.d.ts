declare interface CartType {
  customer: {
    name: string;
    address: string;
    phone: string;
  };
  calculation: {
    price: number;
    vat: number;
    total: number;
  };
  items: ProductType[];
}
