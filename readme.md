Pequeno teste

post - "/api/v1/payment"</br>
post - "/api/v1/user/payment"</br>
get - "/api/v1/payment"</br>
delete - "/api/v1/payment"</br>

1. - O serviço deve processar transações, recebendo as seguintes informações:

[x] - Valor da transação</br>
[x] - Descrição da transação. Ex: 'Smartband XYZ 3.0'</br>
[x] - Método de pagamento (debit_card ou credit_card)</br>
[x] - Número do cartão</br>
[x] - Nome do portador do cartão</br>
[x] - Data de validade do cartão</br>
[x] - Código de verificação do cartão (CVV)</br>

2. [x] - O serviço deve retornar uma lista das transações já criadas</br>

3. [x] - Como o número do cartão é uma informação sensível, o serviço só pode armazenar e retornar os 4 últimos dígitos do cartão.</br>

4. - O serviço deve criar os recebíveis do cliente (payables), com as seguintes regras: Se a transação for feita com um cartão de débito:</br>

Se a transação for feita com um cartão de débito</br>

[x] - O payable deve ser criado com status = paid (indicando que o cliente já recebeu esse valor)</br>
[x] - O payable deve ser criado com a data de pagamento (payment_date) = data da criação da transação (D+0).</br>

Se a transação for feita com um cartão de crédito</br>

[x] - O payable deve ser criado com status = waiting_funds (indicando que o cliente vai receber esse dinheiro no futuro)</br>
[x] - O payable deve ser criado com a data de pagamento (payment_date) = data da criação da transação + 30 dias (D+30).</br>

5. No momento de criação dos payables também deve ser descontado a taxa de processamento (que chamamos de fee) do cliente. Ex: se a taxa for 5% e o cliente processar uma transação de R$100,00, ele só receberá R$95,00. Considere as seguintes taxas:</br>

[x] - 3% para transações feitas com um cartão de débito</br>
[x] - 5% para transações feitas com um cartão de crédito</br>

6. - O serviço deve prover um meio de consulta para que o cliente visualize seu saldo com as seguintes informações:</br>

[x] - Saldo available (disponível): tudo que o cliente já recebeu (payables paid)</br>
[x] - Saldo waiting_funds (a receber): tudo que o cliente tem a receber (payables waiting_funds)</br>
