import { Design } from "./design";
import { Size } from "./size";

export interface Product {
    id: string;
    name: string;
    imageUrls: string[];
    price: number;
    designs: Design[];
    sizes: Size[];
}