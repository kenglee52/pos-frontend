import { Unit } from "./unit.type";
import { Category } from "./category.type";
export interface Product {
    productID: number;
    productName: string;
    categoryID: number;
    unitID: number;
    stockQty: number;
    price: number;
    image: string;
    importPrice: number;
    manufacture?: string;
    expiry?: string;
    description?: string;
    category?: Category;
    unit?: Unit;
}