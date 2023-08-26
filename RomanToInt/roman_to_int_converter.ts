/**
 * Implementation of the conversion of roman into arabic numbers.
 * See https://de.wikipedia.org/wiki/R%C3%B6mische_Zahlschrift
 * 
 * The substraction rule is known without execptions.
 */
export class RomanToIntConverter {
  private singleRomanToIntMap: Map<string, number> = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  private doubleRomanToIntMap: { [k: string]: number } = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  /**
   * Converts a roman number in to a arabic number.
   * 
   * @param {string} romans - The roman number.
   * @returns {number} - The result as a arabic number.
   */
  public romanToInt = (romans: string): number => {
    let result = 0,
      roman: string;

    for (let i = 0; i < romans.length; i++) {
      roman = romans[i];
      if (
        this.hasNext(romans, i) &&
        this.doubleRomanToIntMap[roman + romans[i + 1]]
      ) {
        result = result + this.doubleRomanToIntMap[roman + romans[i + 1]];
        i++;
      } else {
        result = result + this.singleRomanToIntMap.get(roman);
      }
    }

    return result;
  };

  private hasNext = (romans: string, index: number): boolean =>
    ++index >= romans.length ? false : true;
}
