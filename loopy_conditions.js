/**
 * Create a function called 'greaterNumber'
 * This function will take in 2 Parameters.
 * You need to check which number is greater and return that number
 * @param  { Number } a
 * @param  { Number } b
 * @return { Number }
 */

function greaterNumber (a,b) {
  if (a > b) {
    return a;
  }
  else if (a < b) {
    return b;
  }
}

console.log(greaterNumber (21, 69));

/**
 * Create a function called 'stringOfNumbers'.
 * This function will take in 1 parameter
 * Your task is to add all the numbers in between 0 and n
 * For example if the number is 10 than the function should return:
 * "0,1,2,3,4,5,6,7,8,9,10"
 * @param  { Number } n
 * @return { String }
 */

function stringOfNumbers(n) {
  var numberN = "";
  for (i=0; i < n; i++) {
    numberN += i;
  }
  return numberN;
}

console.log(stringOfNumbers(7));

/**
 * Create a function called 'sumOfArray'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return the sum of all the numbers in the array.
 * You must check if the item in the array is a number
 * @param  { array } arr
 * @return { Number }
 */

 function sumOfArray (anArray) {
  var sum = 0;
  var lengthOfArray = anArray.length;
  var overallSum = [];

  for (i=0; i < lengthOfArray; i++) {
    if (isNaN(anArray[0])) {
      anArray.shift();
    }

    else {
      overallSum.push (anArray[0]);
      anArray.shift();
    }
  }

  if (anArray.length <= 0) {
    for(i=0; i < overallSum.length; i++) {
      sum += overallSum[i];
    }
    return sum;
  }
 }

console.log(sumOfArray(4, 9, 21, "Some random iss array"));



/**
 * Create a function called 'getEvens'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the even numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */


/**
 * Create a function called 'getOdds'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the odd numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */


/**
 * Create a function called 'calculate'.
 * This function will take in 3 parameters:
 * The first parameter is a number.
 * The second parameter is a number.
 * The third param is a string that will be 'add', 'subtract', 'multiply', 'divide'.
 * Your task is to do a mathematical operation on the 2 numbers based on the third parameter.
 * The function should return the string "Invalid operator" if the operator is
 * not 'add', 'subtract', 'multiply', 'divide'.
 * @param  { Number } int1
 * @param  { Number } int2
 * @param  { String } operator ('add', subtract, 'multiply', 'divide')
 * @return { Number/String }
 */
