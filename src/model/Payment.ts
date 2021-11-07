import { Schema, model, Document } from 'mongoose';

export interface PaymentInterface extends Document {
    transaction_amount: number;
    description_transaction: string;
    payment_method: string;
    card_number: string;
    name_card_holder: string;
    card_expiration_date: string;
    card_verification_code: number;
    payment_date: string;
    status: string;
    fee: string;
}



const PaymentSchema: Schema = new Schema({
    status: { type: String, required: true },
    fee: { type: String, required: true },
    payment_date: { type: String, required: true },
    transaction_amount: { type: Number, requered: true },
    description_transaction: { type: String, lowercase: true, requered: true },
    payment_method: { type: String, lowercase: true, requered: true },
    card_number: { type: Number, requered: true },
    name_card_holder: { type: String, lowercase: true, requered: true },
    card_expiration_date: { type: String, formatedDate: () => Math.floor(Date.now()) },
    card_verification_code: { type: Number, requered: true },
})

const Payment = model<PaymentInterface>("test_pagarme", PaymentSchema);

export { Payment };
// function formatedDate() {
//     const data = new Date();
//     const day = data.getDate().toString().padStart(2, "0");
//     const month = (data.getMonth() + 1).toString().padStart(2, "0"); //+1 pois no getMonth Janeiro começa com zero.
//     const year = data.getFullYear();
//     return `${day}/${month}/${year}`;
// }