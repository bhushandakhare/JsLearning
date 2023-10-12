console.log(`=================== Check whether the given Number is Prime or Not===================`);
const isPrime = num=> {
  const boundary = Math. floor(Math.sqrt(num));
  for (let index = 2; index <= boundary; index++) 
  if (num % index===0) 
  return false; 
  return num >= 2;
    
  };
  console.log(`The Number 11 is ${isPrime(11)}`);
  console.log(`The Number 23 is ${isPrime(23)}`);
  console.log(`The Number 31 is ${isPrime(31)}`);
  console.log(`The Number 44 is ${isPrime(44)}`);
  console.log(`The Number 56 is ${isPrime(56)}`);
  console.log(`===============================================================`);