declare interface addon {
  name: string;
  price: number;
}
declare interface ProductType {
  id: number;
  name: string;
  price: number;
  quantity_available: number;
  image: string;
  vat: number;
  quantity?: number;
  addons: addon[];
}
