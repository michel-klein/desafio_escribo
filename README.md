# desafio_escribo

## Problema
Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

## Explicação do código da resolução
Primeiramente, é inserido uma caixa de prompt para a inserção do número inteiro por parte do usuário, dentro de um loop while que realiza a validação do número inserido. Em seguida, é realizada uma iteração dos números entre 0 e o número inserido pelo usuário. Os números cuja divisão por 3 e por 5 apresentam resto zero são, então, adicionados ao valor de soma acumulado. Dentro do teste da divisão por 3, foi incluído um continue para interromper a iteração, evitando que números divisíveis por 3 e por 5 (por exemplo, 15) sejam adicionados duas vezes à soma acumulada. Por fim, o valor de soma acumulado é impresso no console e exibido em uma caixa de alerta.

## Como executar
O código da resolução foi desenvolvido em Javascript, linguagem escolhida pela facilidade de execução. Para executar o código, basta abrir as ferramentas de desenvolvedor do navegador Chrome (atalho ctrl+shift+i), selecionar o console, copiar o código do arquivo Solution.js e apertar a tecla Enter. Será aberta uma caixa de prompt para a inserção do número inteiro. O valor da soma desejada será, então, exibida no console e em uma caixa de alerta.
