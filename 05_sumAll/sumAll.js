const sumAll = function(num1, num2) {
  //SOLUCTIONS
  if(!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR"
  } else if(num1 < 0 || num2 < 0) {
    return "ERROR"
 }

  if(num1 > num2) {
    [num1, num2] = [num2, num1]
  }

  let result = 0;

  for(let i = num1; i <= num2; i++) {
     result += i
  }
  return result
};
// Do not edit below this line
module.exports = sumAll;

/*
 HABILIDADES QUE QCHEI NECESSÁRIOS PARA RESOLVER ESTE EXERCÍCIO:
 
1. Foi necessário entender o problema com clareza;
2. Escrever o problema num papel e escrever o pseudocódigo
3. Recapitular iterações (loop);
4. recapitular aula sobre desestruturação;
5. Recapitular operadores lógicos;
6. lógica de programação, no caso usei if;
*/