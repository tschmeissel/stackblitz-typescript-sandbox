const isPrime = (value: number): boolean => {
  for (let i = 2; i < value; i++) {
    if (value%i == 0) {
      return false;
    }
  }
  return true;
}

const sumOfDivided = (lst: number[]): number[][] => {
  const result: number[][] = [];

  for (let i: number = 2; i < 20; i++) {
    if (!isPrime(i)) {
      continue;
    }
 
    let sum = 0;
    for (let integer of lst) {
      if (integer < 0) {
        break;
      }

      if (integer%i == 0) {
        sum = sum + integer;
      }
    }
    if (sum > 0) {
      result.push([i, sum]);
    }
  }

  return result;
}

// console.log(sumOfDivided([12, 15]));
console.log(sumOfDivided([15,21,24,30,45]));