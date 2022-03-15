/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
// const average = (array) => {
//   const verifica = array.some((element) => typeof element === 'string'); // verifica se é string
//   const arrayVazio = array.length === 0; //verifica se a array está vazia
//   const soma = array.reduce((acc, element) => acc + element, 0); //soma tudo com o reduce
//   const media = soma/array.length; //faz a média
//   // return verifica && 'verifica verdadeiro';
//   return verifica || arrayVazio ? undefined : Math.round(media);
// }
// console.log(average([]));
// Forma alternativa que aprendi com o Allan Carvalho da 19-C depois de ter resolvido conforme o código abaixo.

// 
const average = (array) => {
  let soma = 0;
  let media = 0;
  let string = false;
  array.forEach(element=>{
    if (typeof element === 'string') {
      string = true;
    }
    soma += element;
  });
  if (string === true || array.length === 0) {
    return undefined;
  }
  media = soma / array.length;
  return Math.round(media);
};
console.log(average([3, 4, 5]));

module.exports = average;

// const average = (arr) => {
//   let soma = 0;

//   if (!arr.length) {
//     return undefined;
//   }

//   for (let i of arr) {
//     if (typeof i !== 'number') {
//       return undefined;
//     }
//     soma += i;
//   }
//   return Math.round(soma / arr.length);
// };
// console.log(average([3, 4, 5]));
// module.exports = average;