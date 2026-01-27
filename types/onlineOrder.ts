import { Product } from "./product.type";

export interface OnlineOrder {
  onlineOrderID: number;
  onlineBillID: number;
  productID: number;
  saleQty: number;
  total: number;
  product: Product;
}