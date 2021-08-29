import { Schema } from "mongoose";

export interface Product {
    uniq_id: string;
    product_name: string;
    retail_price: number;
    discounted_price: number;
    image: Array<string>;
    description: string;
    product_rating: string;
    overall_rating: string
    brand: string
}


export const productSchema = new Schema<Product>({
    uniq_id: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    brand: String,
    description: String,
    discounted_price: Number,
    image: [{type: String}],
    overall_rating: String,
    product_rating: String,
    retail_price: Number
});
