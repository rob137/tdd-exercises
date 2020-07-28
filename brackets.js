// Write a function that says whether an input string contains the correct combination of opening / closing brackets

const checkBrackets = str => {
  if (!str) return true;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') count++;
    if (str[i] === ')') count--;
    if (count < 0) return false;
  }
  return count === 0;
}
if (typeof checkBrackets() !== 'boolean') throw "Should return a boolean";
if (checkBrackets() !== true) throw "Should return true for nothing";
if (checkBrackets('') !== true) throw "Should return true for empty string";
if (checkBrackets('(') !== false) throw "Should return false for single bracket";
if (checkBrackets(')') !== false) throw "Should return false for single bracket";
if (checkBrackets('((') !== false) throw "Should return false for double bracket";
if (checkBrackets('))') !== false) throw "Should return false for double bracket";
if (checkBrackets(')(') !== false) throw "Should return false for a wrongly ordered pair of brackets";
if (checkBrackets('(foo)') !== true) throw "Should return true for correctly bracketed text";
