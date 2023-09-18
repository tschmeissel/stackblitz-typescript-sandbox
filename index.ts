/**
 * https://leetcode.com/explore/featured/card/fun-with-arrays/526/deleting-items-from-an-array/3247/
 */
//const input = [3,2,2,3];
const input = [0,1,2,2,3,0,4,2];
console.log(input);

const removeElement = (nums: number[], val: number): number => {
  let result = nums.length, last: number, counter: number;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      last = nums[nums.length - 1];
      nums[nums.length - 1] = nums[i];
      nums[i] = last;
      result--;
    }
  }

  console.log(nums);
  return result;
}

//console.log(removeElement(input, 2));
console.log(removeElement(input, 2));
