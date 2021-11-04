import express, { Router, Request, Response } from 'express';
import cors from "cors";

const app = express();

//create model or entity
import { Schema, model, Document } from 'mongoose';

interface PaymentInterface extends Document {
    transaction_amount: string;
    transaction_description: string;
    payment_method: string;
    card_number: string;
    card_holder_name: string;
    card_expiration_date: string;
    card_verification_code: string;
}

function formatedDate() {
    const data = new Date();
    const day = data.getDate().toString().padStart(2, "0");
    const month = (data.getMonth() + 1).toString().padStart(2, "0"); //+1 pois no getMonth Janeiro começa com zero.
    const year = data.getFullYear();
    return `${day}/${month}/${year}`;
}

const PaymentSchema: Schema = new Schema({
    transaction_amount: { type: String, lowercase: true, requered: true },
    transaction_description: { type: String, lowercase: true, requered: true },
    payment_method: { type: String, lowercase: true, requered: true },
    card_number: { type: String, lowercase: true, requered: true },
    card_holder_name: { type: String, lowercase: true, requered: true },
    card_expiration_date: { type: String, formatedDate: () => Math.floor(Date.now()) },
    card_verification_code: { type: String, lowercase: true, requered: true },
})

const Payment = model<PaymentInterface>("payment_pagarme", PaymentSchema);

//create controller
class PaymentController {
    async create(request: Request, response: Response): Promise<Response> {
        const { transaction_amount,
            transaction_description,
            payment_method,
            card_number,
            card_holder_name,
            card_expiration_date,
            card_verification_code } = request.body

        console.log(request.body)
        try {
            return response.status(200).json({
                transaction_amount,
                transaction_description,
                payment_method,
                card_number,
                card_holder_name,
                card_expiration_date,
                card_verification_code
            });
        } catch (err) {
            return response.status(400).json(err);
        }


    }

}

//create route
const paymentController = new PaymentController();

const routes = Router();

routes.post("/api/v1/payment", paymentController.create);

//final appplication
app.use(express.json());
//app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3333);
