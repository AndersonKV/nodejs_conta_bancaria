1. - O serviço deve processar transações, recebendo as seguintes informações:

[x] - Valor da transação
[x] - Descrição da transação. Ex: 'Smartband XYZ 3.0'
[x] - Método de pagamento (debit_card ou credit_card)
[x] - Número do cartão
[x] - Nome do portador do cartão
[x] - Data de validade do cartão
[x] - Código de verificação do cartão (CVV)

2. [x] - O serviço deve retornar uma lista das transações já criadas

3. [x] - Como o número do cartão é uma informação sensível, o serviço só pode armazenar e retornar os 4 últimos dígitos do cartão.

4. - O serviço deve criar os recebíveis do cliente (payables), com as seguintes regras: Se a transação for feita com um cartão de débito:

Se a transação for feita com um cartão de débito

[x] - O payable deve ser criado com status = paid (indicando que o cliente já recebeu esse valor)
[x] - O payable deve ser criado com a data de pagamento (payment_date) = data da criação da transação (D+0).

Se a transação for feita com um cartão de crédito

[x] - O payable deve ser criado com status = waiting_funds (indicando que o cliente vai receber esse dinheiro no futuro)
[x] - O payable deve ser criado com a data de pagamento (payment_date) = data da criação da transação + 30 dias (D+30).

5. No momento de criação dos payables também deve ser descontado a taxa de processamento (que chamamos de fee) do cliente. Ex: se a taxa for 5% e o cliente processar uma transação de R$100,00, ele só receberá R$95,00. Considere as seguintes taxas:

[x] - 3% para transações feitas com um cartão de débito
[x] - 5% para transações feitas com um cartão de crédito

6. - O serviço deve prover um meio de consulta para que o cliente visualize seu saldo com as seguintes informações:

[x] - Saldo available (disponível): tudo que o cliente já recebeu (payables paid)
[x] - Saldo waiting_funds (a receber): tudo que o cliente tem a receber (payables waiting_funds)
