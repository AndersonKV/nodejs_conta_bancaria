import { Request, Response } from 'express';


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

export { PaymentController };