// Divisible by 3 = 'fizz, 5 = 'buzz', 3 & 5 = 'fizzbuzz'

const fb = (input) => {
  if (input % 3 + input % 5 === 0) return 'fizzbuzz';
  else if (input % 3 === 0) return 'fizz';
  else if (input % 5 === 0) return 'buzz';
  else return  String(input);
};

if (fb(1) !== '1') throw ("One should be '1'");
if (fb(3) !== 'fizz') throw ("Three should be 'fizz'");
if (fb(5) !== 'buzz') throw ("Five should be 'buzz'");
if (fb(15) !== 'fizzbuzz') throw ("Fifteen should be 'fizzbuzz'");
if (fb(-15) !== 'fizzbuzz') throw ("Minus fifteen should be 'fizzbuzz'");
if (fb(101) !== '101') throw ("101 should be '101'");
