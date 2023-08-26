/**
 * Investigate the different ways of declaring a function in typescript.
 */

/**
 * class functions
 * 
 * func.bind(this) might be necessary to get the right contextId
 * e.g. when subscribing to an event to call a member function.
 */
class SomeClass {
  private property = 'private property';
  /**
   * arrow function
   */
  doSomething = () => {
    console.log('doing something', this.property);
  };

  /**
   * member function
   */
  public callApi(): void {
    console.log('api has been called', this.property);
  }
}
const someClass = new SomeClass();
someClass.doSomething();
someClass.callApi();

/**
 * object property shorthand notation?
 */
const Greetee = {
  greetMessage: 'hi',
  greet: (): void => {
    console.log('hi');
  },
};
Greetee.greet();

/**
 * arrow functions
 *
 * support one line notation without return
 * get this from the surrounding context
 */
// complete Function object inheritance (no own this, arguments and super)
let func2 = () => {
  console.log('func2 this', Greetee.greet() /* undefined */);
  console.log('func2 this', someClass.doSomething());
  console.log('func2 this', declare());
};
func2();

const addFive = (num) => num + 5;
console.log('arrow function', addFive(3)); // 8

(function accessParentThis() {
  (function withCallbackFunctionDeclaration() {
    // with function declaration inside the 'map' method
    function increment() {
      console.log(
        this.numbers.map(function (val) {
          return val + this.add;
        })
      );
      //let numbers = [1, 2, 3];
      //console.log(this.numbers.map(function (val) { return val}));
    }
    // will not recognise 'this.add', because `function` has its own `this`
    // which is does not reference to `increment` context
    increment.call({ numbers: [1, 2, 3], add: 5 }); // [undefined, undefined, undefined]
  })();

  (function withCallbackFunctionDeclaration() {
    // with arrow function inside the 'map' function
    function increment() {
      console.log(this.numbers.map((val) => val + this.add));
    }
    // will return correct mapped result
    increment.call({ numbers: [1, 2, 3], add: 5 }); // [6, 7, 8]
  })();
})();

/**
 * declaration
 */
// supports hoisting = function can be declared anywhere in the code
declare();
console.log('length of function declare', declare.length);
console.log('name of function declare', declare.name);

function declare() {
  console.log('function declared');
}

/**
 *  expression
 */
// no name necessary because bound to a variable
// end with ;
// no hoisting
// assign different function implmentation before execution

// expression(); <- not working
const expression = function () {
  console.log('function expression');
  console.log('length of function expression', expression.length);
  console.log('name of function expression', expression.name);
};
expression();

(function condititonalFunction() {
  let greet;

  if (true) {
    greet = function () {
      console.log('hi');
    };
  } else {
    greet = function () {
      console.log('bye');
    };
  }

  greet(); // hi

  // immediately invoked
  const result = (function () {
    return 2;
  })();

  console.log('conditional function result', result); // 2
})();

(function recurseReferenceFunction() {
  const getSum = function sum(num, total = 0) {
    if (num === 0) {
      return total;
    }

    return sum(num - 1, total + num);
  };
  console.log('sum', getSum(3)); // 6
})();
