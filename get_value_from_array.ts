// let treeNodes = [
//   {
//     iconClass: '',
//     neutral: 'Bild',
//     nodes: [
//       {
//         iconClass: '',
//         neutral: 'Digitalfoto',
//         parent: {
//           iconClass: '',
//           neutral: 'Bild',
//           short: 'Picture',
//           value: '',
//         },
//         short: 'Digital photo',
//         value: '',
//       },
//       {
//         iconClass: '',
//         neutral: 'Scan',
//         parent: {
//           iconClass: '',
//           neutral: 'Bild',
//           short: 'Picture',
//           value: '',
//         },
//         short: 'Scan',
//         value: '',
//       },
//     ],
//     short: 'Picture',
//     value: '',
//   },
//   {
//     iconClass: '',
//     neutral: 'Video',
//     nodes: [
//       {
//         iconClass: '',
//         neutral: 'Kurzfilm',
//         parent: {
//           iconClass: '',
//           neutral: 'Video',
//           short: 'Video',
//           value: '',
//         },
//         short: 'Short film',
//         value: '',
//       },
//       {
//         iconClass: '',
//         neutral: 'Spielfilm',
//         parent: {
//           iconClass: '',
//           neutral: 'Video',
//           short: 'Video',
//           value: '',
//         },
//         short: 'Motion pictures',
//         value: '',
//       },
//     ],
//     short: 'Video',
//     value: '',
//   },
//   {
//     iconClass: '',
//     neutral: 'Audio',
//     nodes: [
//       {
//         iconClass: '',
//         neutral: 'Musik',
//         parent: {
//           iconClass: '',
//           neutral: 'Audio',
//           short: 'Audio',
//           value: '',
//         },
//         short: 'Music',
//         value: '',
//       },
//       {
//         iconClass: '',
//         neutral: 'Ger\u00e4usch',
//         parent: {
//           iconClass: '',
//           neutral: 'Audio',
//           short: 'Audio',
//           value: '',
//         },
//         short: 'Noise',
//         value: '',
//       },
//     ],
//     short: 'Audio',
//     value: '',
//   },
// ];

// const search = (tree, target) => {
//   if (tree.neutral === target) {
//     return tree.short;
//   }

//   if (Array.isArray(tree.nodes)) {
//     for (const child of tree.nodes) {
//       const found = search(child, target);
//       if (found) {
//         return found;
//       }
//     }
//   }
// };

// console.log(search({ nodes: treeNodes }, 'Spielfilm'));
