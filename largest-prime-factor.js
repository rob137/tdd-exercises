//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

const isPrime = (input) => {
  if (input === 1 || input === 0 || input === -1) return false;
  for (let i = 2; i <= input / 2; i++) {
    if (input % i === 0) return false;
  }
  return true;
};

if (isPrime(2) !== true) throw ('Should return true for 2');
if (isPrime(3) !== true) throw ('Should return true for 3');
if (isPrime(4) !== false) throw ('Should return false for 4');
if (isPrime(5) !== true) throw ('Should return true for 5');
if (isPrime(31) !== true) throw ('Should return true for 31');
if (isPrime(32) !== false) throw ('Should return false for 32');
if (isPrime(-2) !== true) throw ('Should return false for 2');
// This shows I'm using a hack:
if (isPrime(1) !== false) throw ('Should return false for 1');
if (isPrime(0) !== false) throw ('Should return false for 0');
if (isPrime(-1) !== false) throw ('Should return false for -1');

const lpf = (input) => {
  if (isPrime(input)) return input;
  else {
    let primes = new Set;
    let primeFactors = new Set;
    for (let i = 1; i <= input / 2; i++) {
      if (isPrime(i)) {
        primes.add(i);
      }
    }
    for (p of primes) if (input % p === 0) primeFactors.add(p);
    return primeFactors.values[primeFactors.values.length - 1];
  }
};

if (lpf(2) !== 2) throw ('should return 2 for 2');
if (lpf(3) !== 3) throw ('should return 3 for 3');
if (lpf(4) !== 2) throw ('should return 2 for 4');
if (lpf(5) !== 5) throw ('should return 5 for 5');
if (lpf(6) !== 3) throw ('should return 3 for 6');
if (lpf(7) !== 7) throw ('should return 7 for 7');
if (lpf(8) !== 2) throw ('should return 2 for 8');
if (lpf(29) !== 29) throw ('should return 29 for 29');
if (lpf(32) !== 2) throw ('should return 2 for 32');
if (lpf(33) !== 11) throw ('should return 11 for 33');
if (lpf(40) !== 5) throw ('should return 5 for 40');
if (lpf(40) !== 5) throw ('should return 5 for 40');
if (lpf(600851475143) !== 6857) throw ('should return 6857 for 600851475143');
