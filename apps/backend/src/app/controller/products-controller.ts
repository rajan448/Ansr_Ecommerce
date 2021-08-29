import { Request, Response } from 'express';
import { model } from 'mongoose';
import { Product, productSchema } from '../model/product';

const ProductModel = model<Product>('products', productSchema);


export const getProducts = (req: Request, res: Response) => {
    const sortOrder = req.query.sort;
    const sortBy = sortOrder === '1' ? 1 : -1;

    const searchText = req.query.search === 'undefined' ? '' : req.query.search;

    ProductModel.find({})
        .sort({ 'discounted_price': sortBy })
        .exec(function (err, products) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(products);
            }
        });
};

export const getProductsById = (req: Request, res: Response) => {
    const uniq_id = req.params.id;

    ProductModel.find({ uniq_id }, function (err, products) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(products);
        }
    });
};
