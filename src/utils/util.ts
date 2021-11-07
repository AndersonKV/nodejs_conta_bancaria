class Util {
    formatedCurrentDate(payment_method: string) {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const date = new Date();

        if (payment_method === "debit_card") {
            const currentDate = time + " " + ('0' + date.getDate()).slice(-2) + '/'
                + ('0' + (date.getMonth() + 1)).slice(-2) + '/'
                + date.getFullYear();

            return currentDate;
        } else if (payment_method === "credit_card") {
            date.setDate(date.getDate() + 30);

            const currentDate = time + " " + ('0' + date.getDate()).slice(-2) + '/'
                + ('0' + (date.getMonth() + 1)).slice(-2) + '/'
                + date.getFullYear();

            return currentDate;
        } else {
            throw new Error("problem with method payment")
        }

    }


    hidenCardNumber(cardNumbers: string) {
        const hidenCardNumber = [];

        for (let i = 0; i < cardNumbers.length; i++) {
            if (i < cardNumbers.length - 4) {
                hidenCardNumber.push("*");
            } else {
                hidenCardNumber.push(cardNumbers[i]);
            }
        }
        return hidenCardNumber.join("");
    }

    discontDebitCard(price: number) {
        const discont = 3;
        const s = 100 - discont;
        const amount = (s * price) / 100;
        return amount;
    }

    discontCreditCard(price: number) {
        const discont = 5;
        const s = 100 - discont;
        const amount = (s * price) / 100;
        return amount;
    }


}

export { Util }