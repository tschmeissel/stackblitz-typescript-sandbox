let tree2 = [
  {
    iconClass: '',
    neutral: 'Bild',
    nodes: [
      {
        iconClass: '',
        neutral: 'Digitalfoto',
        parent: {
          iconClass: '',
          neutral: 'Bild',
          short: 'Picture',
          value: '',
        },
        short: 'Digital photo',
        value: '',
      },
      {
        iconClass: '',
        neutral: 'Scan',
        parent: {
          iconClass: '',
          neutral: 'Bild',
          short: 'Picture',
          value: '',
        },
        short: 'Scan',
        value: '',
      },
    ],
    short: 'Picture',
    value: '',
  },
  {
    iconClass: '',
    neutral: 'Video',
    nodes: [
      {
        iconClass: '',
        neutral: 'Kurzfilm',
        parent: {
          iconClass: '',
          neutral: 'Video',
          short: 'Video',
          value: '',
        },
        short: 'Short film',
        value: '',
      },
      {
        iconClass: '',
        neutral: 'Spielfilm',
        parent: {
          iconClass: '',
          neutral: 'Video',
          short: 'Video',
          value: '',
        },
        short: 'Motion pictures',
        value: '',
      },
    ],
    short: 'Video',
    value: '',
  },
  {
    iconClass: '',
    neutral: 'Audio',
    nodes: [
      {
        iconClass: '',
        neutral: 'Musik',
        parent: {
          iconClass: '',
          neutral: 'Audio',
          short: 'Audio',
          value: '',
        },
        short: 'Music',
        value: '',
      },
      {
        iconClass: '',
        neutral: 'Ger\u00e4usch',
        parent: {
          iconClass: '',
          neutral: 'Audio',
          short: 'Audio',
          value: '',
        },
        short: 'Noise',
        value: '',
      },
    ],
    short: 'Audio',
    value: '',
  },
];

const getMultilingualMap = (tree) => {
  const result = new Map<string, string>();
  for (let node of tree) {
    traverse(node, result);
  }
  return result;
};

const traverse = (node, map) => {
  map.set(node.neutral, node.short);
  if (Array.isArray(node.nodes)) {
    for (let child of node.nodes) {
      traverse(child, map);
    }
  }
};

console.log(getMultilingualMap(tree2));
