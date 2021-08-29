import { model } from 'mongoose';
import { Product, productSchema } from '../model/product';

const ProductModel = model<Product>('products', productSchema);


export const getProducts = (req, res) => {
    ProductModel.find({}, function (err, products) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(products);
        }
    });
};
