// You are tasked with writing a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. How would you implement this function efficiently, ensuring that it accurately identifies prime numbers and returns them in the same order they appear in the input array? For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].


// This function takes an array `arr` as input
function showPrimes(arr) {
    // `filter` method which creates a new array and contains only the elements that satisfy the `isPrime` 
    return arr.filter(isPrime);
  }
  
  // This function checks if a given number `num` is prime or not
  function isPrime(num) {
    // If the number is less than 2, it's not prime 
    if (num < 2) return false;
    // We start the loop from 2 because we've already checked for numbers less than 2
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // If the number is divisible by `i` without a remainder (`num % i === 0`),
      // it means `i` is a factor of `num`, and therefore `num` is not prime
      if (num % i === 0) return false;
    }
    // If the loop completes without finding any factor,
    // and the number is greater than 1,
    // then the number is prime
    return num > 1;
  }
  
// Created an input array of numbers
const inputArray = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// Calls the `showPrimes` function with the `inputArray` as an argument
const primeArray = showPrimes(inputArray);
// Checks the output
console.log(primeArray); // Output: [11, 13, 17, 19]