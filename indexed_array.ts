let values1: [string[]] = [[]];
values1.push(['eins', 'one']);
// const values1: [string[]] = [["eins", "one"], ["zwei", "two"]];
console.log(values1);

var indexedArray: { [key: string]: string } = {
  eins: 'one',
  zwei: 'two',
};
console.log(indexedArray);

var indexedArray2: { [key: string]: string } = {};
indexedArray2['eins'] = 'one';
indexedArray2['zwei'] = 'two';
const neutral = 'drei',
  short = 'three';
indexedArray2[neutral] = short;
console.log(indexedArray2);
console.log(Object.keys(indexedArray2));
console.log(Object.values(indexedArray2));
const someValue = 'eins';
console.log(indexedArray2[someValue]);
const index = Object.values(indexedArray2).findIndex(x => x === 'two');
const index2 = Object.values(indexedArray2).indexOf("two");
indexedArray2 = undefined;
console.log(Object.keys(indexedArray)[index]);
console.log(Object.keys(indexedArray)[index2]);

let foo = indexedArray['myKey'];
let bar = indexedArray.myKey;
console.log(typeof(indexedArray2));

var indexedArray3 = {};