const countLowerCaseLetters = (s: string): { [k: string]: number } => {
  const result: { [k: string]: number } = {};
  [...s].forEach((x) => {
    let charCode = x.charCodeAt(0);
    if (charCode < 97 || charCode > 122) {
      return;
    }

    let current = result[x];
    if (isNaN(current)) {
      result[x] = 1;
    } else {
      result[x] = ++current;
    }
  });

  return result;
};

const createCharCode = (char: string, count: number): string => {
  let result = '';
  for (let i = 0; i < count; i++) {
    result = result + char;
  }
  return result;
};

export const mix = (s1: string, s2: string): string => {
  const s1Result = countLowerCaseLetters(s1);
  const s2Result = countLowerCaseLetters(s2);
  console.log(s1Result);
  console.log(s2Result);
  const result = [];
  for (let i = 97; i <= 122; i++) {
    let key = String.fromCharCode(i);
    let result1 = s1Result[key];
    let result2 = s2Result[key];
    if (result1 && result2) {
      if (result1 > result2) {
        result.push('1:' + createCharCode(key, s1Result[key]));
        console.log(result);
      }
    }
  }
  return result.join('/');
};

const s1 = 'A aaaa bb c',
  s2 = '& aaa bbb c d';
const result = mix(s1, s2);
console.log(result);
