let entries = ['Apple|', 'Pear|'];

//let entries2 = {"Apple": "payload"};
//let entries2 = {"Apple": "payload"};
let entries2 = {
  Apfel: { short: '', value: 'Apple', iconClass: '' },
  Birne: { short: '', value: 'Pear', iconClass: '' },
};

let nodes = [
  { neutral: 'Apfel', value: '', short: 'Apple', iconClass: '' },
  { neutral: 'Birne', value: '', short: 'Pear', iconClass: '' },
];

let value = nodes.filter((x) => x.neutral == 'Apfel')[0].short;
console.log(value);

let tree: any = {};
if (tree.config?.multilingual) {
  console.log('tree', tree);
}

// console.log(entries2)
// for (let entry in entries2) {
//   console.log(entries2[entry])
// }

// // for (let entry of entries2) {
// //   console.log(entry)
// // }

// let key = "ZEILE0=eins";
// const temp: string[] = key.split(/=(.+)/);
// console.log(temp[1])
//                 //entries.push(temp[1].trim());

// // let entries3: {[string]: string}[];
// let entries3: { [x: string]: string }[] = [];
// //{ [bar: string]: string }

// entries3 = [{"Apfel": "Apple"}, {"Birne": "Pear"}];
// console.log("entries3", entries3);

// var entry = {neutral: "Apfel", value: "Apple"}

// const entries4 = new Map<string, string>();
// entries4.set("a", "klöasdj");
// entries4.set("b", "rzuitzi");
// entries4.set("c", "3245345");
// let index = 0;
// entries4.forEach(x => {
//   console.log("entry", x, index++);
// })
// //console.log(entries4.length)
