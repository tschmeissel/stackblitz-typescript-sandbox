import { RomanToIntConverter } from './roman_to_int_converter';

const test = (source: number, target: number): void => {
  const op = `${source} === ${target}`;
  console.log(`${op} ${source === target ? "ok": "fail"}`);
}

const cnv = new RomanToIntConverter();
test(cnv.romanToInt("I"), 1);
test(cnv.romanToInt("V"), 5);
test(cnv.romanToInt("X"), 10);
test(cnv.romanToInt("L"), 50);
test(cnv.romanToInt("C"), 100);
test(cnv.romanToInt("D"), 500);
test(cnv.romanToInt("M"), 1000);

test(cnv.romanToInt("MDCCCCLXXXIIII"), 1984);

// substraction
test(cnv.romanToInt("IV"), 4);
test(cnv.romanToInt("IX"), 9);
test(cnv.romanToInt("XL"), 40);
test(cnv.romanToInt("XC"), 90);
test(cnv.romanToInt("CD"), 400);
test(cnv.romanToInt("CM"), 900);
test(cnv.romanToInt("MCMLXXXIV"), 1984);

// substraction deviations
test(cnv.romanToInt("VIII"), 8);
test(cnv.romanToInt("IIX"), 8);
test(cnv.romanToInt("LXXX"), 80);
test(cnv.romanToInt("XXC"), 80);



