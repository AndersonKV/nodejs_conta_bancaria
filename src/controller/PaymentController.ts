import { Request, Response } from 'express';
import { Payment, PaymentInterface } from '../model/Payment';
import { Util } from '../utils/util';

class PaymentController {


    async create(request: Request, response: Response): Promise<Response> {
        const { transaction_amount,
            description_transaction,
            payment_method,
            card_number,
            name_card_holder,
            card_expiration_date,
            card_verification_code } = request.body as PaymentInterface;

        try {
            if (transaction_amount.toString.length === 0 || transaction_amount === 0) {
                return response.status(400).json({ error: "problem with value transaction amount" })
            }

            if (description_transaction.length === 0) {
                return response.status(400).json({ error: "problem about transaction description" })
            }

            if (payment_method === "debit_card") {
                //dont make nothing
            } else if (payment_method === "credit_card") {
                //dont make nothing
            } else {
                return response.status(400).json({ error: "problem with selection payment method" })
            }

            const splitCardNumber = card_number.split("-").join('');

            if (splitCardNumber.length !== 16) {
                return response.status(400).json({ error: "problem with card number" })
            }


            if (name_card_holder.length === 0) {
                return response.status(400).json({ error: "problem with card holder name" })
            }

            const formatedCardExpiration = card_expiration_date.replace("/", "");

            if (formatedCardExpiration.length !== 4) {
                return response.status(400).json({ error: "problem with card expiration date" })
            }

            if (String(card_verification_code).length !== 4) {
                return response.status(400).json({ error: "problem with card verification code" })
            }

            const data = new Array();
            const util = new Util();

            data.push({
                transaction_amount: payment_method === "debit_card" ? util.discontDebitCard(transaction_amount) : util.discontCreditCard(transaction_amount),
                fee: payment_method === "debit_card" ? "3%" : "5%",
                description_transaction,
                payment_method,
                card_number: splitCardNumber,
                name_card_holder,
                card_expiration_date,
                card_verification_code,
                payment_date: util.formatedCurrentDate(payment_method),
                status: payment_method === "debit_card" ? "paid" : "waiting_funds"
            })


            await Payment.create(data);

            data[0].card_number = util.hidenCardNumber(splitCardNumber);

            return response.status(200).json(data);
        } catch (err) {
            return response.status(400).json(err);
        }


    }

    async index(request: Request, response: Response): Promise<Response> {
        const { card_number, status } = request.body

        try {
            const payment = await Payment.find({ card_number: card_number, status: status });

            if (payment.length === 0) {
                return response.status(400).json({ error: "could not find" })
            }

            return response.status(200).json(payment)
        } catch (err) {
            return response.status(400).json(err)

        }

    }

    async list(request: Request, response: Response): Promise<Response> {
        const payment = await Payment.find();
        return response.status(200).json(payment)
    }

    async destroyer(request: Request, response: Response): Promise<Response> {
        try {
            const user = await Payment.find().remove();
            return response.json(user);
        } catch (err) {
            return response.status(400).send(err);
        }
    }
}

export { PaymentController };