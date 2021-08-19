// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


//Reto 1
/*
Escriba una función, gooseFilter/ goose-filter/ goose_filter/ GooseFilter, que tome una matriz de cadenas como argumento y devuelva una matriz filtrada que contenga los mismos elementos pero con los 'gansos' eliminados.

Los gansos son cadenas de la siguiente matriz, que se rellena previamente en su solución:
*/

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((bird) => !geese.includes(bird))
  // return an array containing all of the strings in the input array except those that match strings in geese
};


//Reto 2
/*
En esta pequeña tarea, se le da una serie de números separados por espacios y debe devolver el número más alto y el más bajo.

*/

function highAndLow(numbers){
  var arr = numbers.split(" ").map( (x) => parseInt(x) );
  var max = arr.reduce((p, c) => p > c ? p : c );
  var min = arr.reduce((p, c) => p < c ? p : c );
  return max+" "+min;
}
//Reto3

/*
Devuelve el número (recuento) de vocales en la cadena dada.

Consideraremos a, e, i, o, ucomo vocales de este Kata (pero no y).

La cadena de entrada solo constará de letras minúsculas y / o espacios.

*/
function getCount(str) {
  var vowelsCount = 0;
  for (index in str){
    switch (str[index]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    vowelsCount++;
    break;
    }   
  }
  return vowelsCount;
}

//Reto 4

/*
¡Los trolls están atacando tu sección de comentarios!

Una forma común de lidiar con esta situación es eliminar todas las vocales de los comentarios de los trolls, neutralizando la amenaza.

Su tarea es escribir una función que tome una cadena y devuelva una nueva cadena con todas las vocales eliminadas.

Por ejemplo, la cadena "Este sitio web es para perdedores LOL!" se convertiría en "Ths wbst s fr lsrs LL!".


*/

const disemvowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let newStr = '';
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i);
    if (vowels.indexOf(char) == -1) {
      newStr += char;
    }
  }
    return newStr;
    
  
};

//Reto5
/* Esta dañado*/


//Reto 6 

/*
Complete la solución para que devuelva una cadena formateada. El valor de retorno debe ser igual a "El valor es VALOR", donde el valor es un número de 5 dígitos con relleno.

*/

function solution(value){
  return "Value is 00000".slice(0, - value.toString().length) + value;
}

//Reto7

/*
Has cultivado una planta y, después de meses de arduo trabajo, ha llegado el momento de cosechar las flores de tu arduo trabajo. Cuando estaba creciendo, agregaste agua y fertilizante y mantuviste una temperatura constante. Es hora de comprobar cuánto ha crecido tu planta.

Una planta se representa horizontalmente, desde la base hacia la izquierda, hasta el final hacia la derecha:


*/

function plant(seed, water, fert, temp){
  //your code here
   
    const tempOK = 20 <= temp && temp <= 30;
    const flower = `-`.repeat(water) + seed.repeat(tempOK && fert);
   return flower.repeat(water) + seed.repeat(!tempOK);  
   
 }
