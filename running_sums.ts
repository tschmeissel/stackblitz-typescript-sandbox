// const runningSum = (nums: number[]): number[] => {
//   const result: number[] = [];
//   let curr: number = 0;
//   nums.forEach(x => {
//     curr = curr + x;
//     result.push(curr);
//   })
//   return result;
// };

// const runningSum = (nums: number[]): number[] => {
//   let curr = 0;
//   return nums.map(x => curr = curr + x);
// };

// const runningSum = (nums: number[]): number[] => {
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] += nums[i - 1];
//   }
//   return nums;
//};

const runningSum = (nums: number[]): number[] => {
  const result: number[] = [];
  result[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] + nums[i];
  }
  return result;
};

console.log(runningSum([3,1,2,10,1])); // [3,4,6,16,17]