// Find the sum of all the multiples of 3 or 5 below 1000.

const main = () => {
  const arr = [];
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) arr.push(i);
  }
  return arr;
}

const result = main();

if (!Array.isArray(result)) throw "Should be an array";
if (result.length === 0) throw "Can't be empty";
if (result.find(n => typeof n !== 'number')) throw "Should only contain numbers";
if (result.find(n => n < 0)) throw "Should only contain positive numbers";
if (!result.includes(0)) throw "Should include 0";
if (!result.includes(3)) throw "Should include 3";
if (!result.includes(5)) throw "Should include 5";
if (result.find(n => n % 3 !== 0 && n % 5 !== 0)) {
  throw "Numbers must be divisible by 3 or 5";
}
if (result.find(n => n >= 1000)) throw "Numbers must be less than 1000"
if (result.reduce((curr, next) => curr + next, 0) < 23) {
  throw "Numbers must total at least 23";
}

