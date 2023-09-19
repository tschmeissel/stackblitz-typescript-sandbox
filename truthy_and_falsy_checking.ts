/**
 * How to check a value for truthy or falsy.
 * Strict means with type checking ans without implicit type conversion.
 *
 * Don't use == or != because they lead to unexpected results due to implicit type conversion.
 *
 * Unexpected result
 *  " " == true => false
 *  " " == false => true
 *
 * Todo
 *  void 0 checking
 */
class TruthyAndFalsyChecker {
  private static readonly TRUTHY_VALUES = [true, ' ', -1, {}, []];
  private static readonly FALSY_VALUES = [false, '', 0, null, undefined, NaN, void 0];

  static check(): void {
    this.TRUTHY_VALUES.concat(this.FALSY_VALUES).forEach((x) => {
      this.isTruthyOrFalsy(x);
    });
  }

  static isTruthyOrFalsy(value: any): void {
    console.log("================================");
    console.log('value to check', value);

    console.log('simple truthy: value');
    if (value) {
      console.log('simple truthy: true, " ", <>0, {}, []');
    } else {
      console.log('not simple truthy: false, "", 0, null, undefined, NaN');
    }

    // private static readonly TRUTHY_VALUES = [true, ' ', -1, {}, []];
    // private static readonly FALSY_VALUES = [false, '', 0, null, undefined, NaN];
    console.log("simple falsy: !value");
    if (!value) {
      console.log("simple falsy: false, \"\", 0, null, undefined, NaN");
    } else {
      console.log("not simple falsy: true, \" \", -1, {}, []");
    }

    console.log('strictly boolean true: value === true');
    if (value === true) {
      console.log('strictly boolean true: true');
    } else {
      console.log(
        'not strictly boolean true: "", " ", <>0, 0, {}, [], false, null, undefined, NaN'
      );
    }

    console.log('boolean true: value == true');
    if (value == true) {
      console.log('boolean true: true');
    } else {
      console.log(
        'not boolean true: " ", -1, {}, [], false, "", 0, null, undefined, NaN'
      );
    }

    console.log('strictly not boolean true: value !== true');
    if (value !== true) {
      console.log(
        'strictly not boolean true: " ", -1, {}, [], false, "", 0, null, undefined, NaN'
      );
    } else {
      console.log('not stricly not boolean true: true');
    }

    console.log('not boolean true: value != true');
    if (value != true) {
      console.log(
        'not boolean true: " ", -1, {}, [], false, "", 0, null, undefined, NaN'
      );
    } else {
      console.log('boolean true: true');
    }

    console.log('strictly boolean false: value === false');
    if (value === false) {
      console.log('strictly boolean false: false');
    } else {
      console.log(
        'not strictly boolean false: true, " ", -1, {}, [], "", 0, null, undefined, NaN'
      );
    }

    console.log("boolean false: value == false");
    if (value == false) {
      console.log("boolean false: \" \", \"\", false, 0");
    } else {
      console.log("not boolean false: true, -1, {}, [], null, undefined, NaN");
    }

    console.log("not strictly boolean false: value !== false")
    if (value !== false) {
      console.log("not strictly boolean false: true, \"\", -1, {}, [], \" \", 0, null, undefined, NaN");
    } else {
      console.log("strictly boolean false: false");
    }

    // value != false
  }
}
TruthyAndFalsyChecker.check();
