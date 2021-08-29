import { getProducts } from "../controller/products-controller";

const routes = (app) => {
    app.get('/api/products', getProducts);
}

export default routes;