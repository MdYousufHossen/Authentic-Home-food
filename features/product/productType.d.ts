declare interface ProductType {
  id: number;
  name: string;
  price: number;
  quantity_available: number;
  image: string;
  vat: number;
  addons: {
    name: string;
    is_default?: boolean;
    price: number;
  };
}
