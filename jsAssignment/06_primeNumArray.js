console.log(` WAP to count the total prime number from the array.`);
const array = [11, 3, 6, 10, 43, 29, 50];
function isPrime(num) {
     for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  let count = 0;
  
  for (const num of array) {
    if (isPrime(num)) {
      count++;
    }
  }
  
  console.log(`Total prime numbers in the array: ${count}`);


  console.log(`------------Assignment Prime No. ------------------------------`);

function isPrimeNumber(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let index = 2; index < number; index++) {
      if (number % index == 0) {
        return false;
      }
    }
    return true;
  }
  
  const array1 = [11, 3, 6, 10, 43, 29, 50];
  console.log(`Given the Array :=> ${array}`);
  let primeCount = 0;
  
  for (const num of array1) {
    const result = isPrimeNumber(num);
    console.log(`-----------------------------------`);
    console.log(`Given the number :=>${num}`);
    console.log(`Is Number ${num} Prime: ${result}`);
  
    if (result) {
      primeCount++;
    }
  }
  
  console.log(`-----------------------------------`);
  console.log(`Number of prime numbers: ${primeCount}`);