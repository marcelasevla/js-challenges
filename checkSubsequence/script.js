// Crie uma função que retorna um boleano indicando se um array é uma subsenquência de outro.
// Ex:

const arr = [5, 1, 22, 25, 6, -1, 8, 10];
const sub = [1, 6, 8, 10];

// RESPOSTA: true, pois os números do array 'sub' 1,6,8,10 estão contidos no array 'arr' e aparecem na ordem correta.
//Ou seja, o primeiro número é o 1, no arr 1 também vem primeiro. Segundo número é o 6, no arr também vem o 6 em seguida eassim sucessivamente.

const checkSubsequence = (arr, sub) => {
  const result = arr.filter((el) => sub.includes(el));
  if (JSON.stringify(result) === JSON.stringify(sub)) {
    return true;
  }
  return false;
};
console.log(checkSubsequence([3, 2, 5, -45, 3, 1], [2, 5, -45]));

//CASOS DE TESTES

// const arr = [5, 1, 22, 25, 6, -1, 8, 10];
// const sub = [1, 2, 8, 10];
// false

// const arr = [3, 2, 5, -45, 3, 1];
// const sub = [2, 5, -45];
// true
