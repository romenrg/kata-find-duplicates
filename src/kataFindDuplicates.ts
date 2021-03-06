/**
 * Find Duplicates Kata
 * Given an array of numbers, return the list of numbers that are repeated, sorted by occurrence of the repetition
 * From CodeWars: https://www.codewars.com/kata/5558cc216a7a231ac9000022
 */
export class KataFindDuplicates {
  public static MAX_DISTANCE = 999;

  public elementsList: Array<number>;

  constructor(elementsList: Array<number>) {
    this.elementsList = elementsList;
  }

  public calcOrderedRepetitionsList(): Array<number> {
    if (this.elementsList.length === 0) {
      return [];
    } else {
      let result: Array<number> = [];
      let distancesArray = this.calcDistancesArray();
      distancesArray[distancesArray.length - 1] = KataFindDuplicates.MAX_DISTANCE;
      for (let i = 0; i < this.elementsList.length; i++) {
        const minIndex = this.findMinIndex(distancesArray);
        if (this.wasMinFoundAndHasValidValue(minIndex, distancesArray)) {
          result.push(this.elementsList[minIndex]);
          distancesArray[minIndex] = KataFindDuplicates.MAX_DISTANCE;
        }
      }
      return result;
    }
  }

  private wasMinFoundAndHasValidValue(minIndex: number, distancesArray: Array<number>) {
    return minIndex !== KataFindDuplicates.MAX_DISTANCE && distancesArray[minIndex] !== KataFindDuplicates.MAX_DISTANCE;
  }

  private calcDistancesArray() {
    let distancesArray: Array<number> = new Array<number>(this.elementsList.length);
    for (let i = 0; i < this.elementsList.length; i++) {
      for (let j = i + 1; j < this.elementsList.length; j++) {
        if (this.elementsList[i] === this.elementsList[j]) {
          distancesArray[i] = j - i; //TODO: Break for third occurrence
        } else if (this.isLastNumberAndDoesNotMatch(j, distancesArray, i)) {
          distancesArray[i] = KataFindDuplicates.MAX_DISTANCE;
        }
      }
    }
    return distancesArray;
  }

  private isLastNumberAndDoesNotMatch(j: number, distancesArray: Array<number>, i: number) {
    return (j === this.elementsList.length - 1) && (distancesArray[i] === undefined);
  }

  private findMinIndex(distancesArray: Array<number>) : number {
    let min = KataFindDuplicates.MAX_DISTANCE;
    let index = KataFindDuplicates.MAX_DISTANCE;
    for (let i = 0; i < distancesArray.length; i++) {
      if (distancesArray[i] < min) {
        min = distancesArray[i];
        index = i;
      }
    }
    return index;
  }
}
