declare interface CartType {
  cart: Partial<ProductType>[];
  toggleSnackbar: boolean;
  snackbarMessage: string | null;
  snackbarVariant: string | null;
}
