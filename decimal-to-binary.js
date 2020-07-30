const dtb = (dec) => {
  let str = '';
  while (dec > 1) {
    const remainder = dec % 2;
    str = String(remainder) + str;
    dec = (dec - remainder) / 2; 
  }
  const result = String(dec % 2) + str;
  return result;
};

const endsWith = (str, end) => str[str.length-1] === end;
const randOdd = Math.floor(Math.random * 30);
const randEven = Math.floor(Math.random * 30 + 1);
if (dtb(0) !== '0') throw "Should return 0 for 0";
if (dtb(1) !== '1') throw "Should return 1 for 1";
if (dtb(2) !== '10') throw "Should return 10 for 2";
if (dtb(3) !== '11') throw "Should return 11 for 3";
if (dtb(4) !== '100') throw "Should return 100 for 3";
if (endsWith(dtb(randOdd, 0))) throw "Odd inputs should end in 1";
if (endsWith(dtb(randEven, 1))) throw "Even inputs should end in 0";

