import { getProducts, getProductsById } from "../controller/products-controller";

const routes = (app) => {
    app.get('/api/products', getProducts);
    app.get('/api/products/:id', getProductsById);
}

export default routes;