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

export { Payment };
// function formatedDate() {
//     const data = new Date();
//     const day = data.getDate().toString().padStart(2, "0");
//     const month = (data.getMonth() + 1).toString().padStart(2, "0"); //+1 pois no getMonth Janeiro começa com zero.
//     const year = data.getFullYear();
//     return `${day}/${month}/${year}`;
// }