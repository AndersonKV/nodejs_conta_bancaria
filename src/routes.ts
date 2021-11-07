import { Router } from 'express';

import { PaymentController } from './controller/PaymentController';

const paymentController = new PaymentController();

const routes = Router();

routes.post("/api/v1/payment", paymentController.create);
routes.post("/api/v1/user/payment", paymentController.index);
routes.get("/api/v1/payment", paymentController.list);
routes.delete("/api/v1/payment", paymentController.destroyer);

export default routes;