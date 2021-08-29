import { Request, Response } from 'express';
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

export const getProductsById = (req: Request , res: Response) => {
    const uniq_id = req.params.id;

    ProductModel.find({uniq_id}, function (err, products) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(products);
        }
    });
};
