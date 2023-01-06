type priductItem = Pick<
  ProductType,
  | "id"
  | "name"
  | "price"
  | "quantity"
  | "vat"
  | "addon"
  | "quantity_available"
  | "image"
>;

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
  items: priductItem[];
  isProductavailable: boolean;
}
