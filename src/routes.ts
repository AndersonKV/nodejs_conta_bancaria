import { Router } from 'express';

import { PaymentController } from './controller/PaymentController';

const paymentController = new PaymentController();

const routes = Router();

routes.post("/api/v1/payment", paymentController.create);

export default routes;