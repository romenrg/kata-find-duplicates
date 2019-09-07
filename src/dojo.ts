/**
 * Dojo Class
 * Should return an array with the numbers that are repeated, sorted by first repeated element
 */
export class Dojo {
  public static MAX = 999;

  public elementsList: Array<number>;

  constructor(elementsList: Array<number>) {
    this.elementsList = elementsList;
  }

  public calcOrderedRepetitionsList(): Array<number> {
    if (this.elementsList.length === 0) {
      return [];
    } else {
      let result: Array<number> = [];
      let distancesArray: Array<number> = new Array<number>(this.elementsList.length);
      for (let i = 0; i < this.elementsList.length; i++) {
        for (let j = i + 1; j < this.elementsList.length; j++) {
          if (this.elementsList[i] === this.elementsList[j]) {
            distancesArray[i] = j - i; //TODO: Break for third occurrence
          } else if ((j === this.elementsList.length - 1) && (distancesArray[i] === undefined)) {
            distancesArray[i] = Dojo.MAX;
          }
        }
      }
      distancesArray[distancesArray.length - 1] = Dojo.MAX;
      for (let i = 0; i < this.elementsList.length; i++) {
        const minIndex = this.findMinIndex(distancesArray);
        if (minIndex !== Dojo.MAX && distancesArray[minIndex] !== Dojo.MAX) {
          result.push(this.elementsList[minIndex]);
          distancesArray[minIndex] = Dojo.MAX;
        }
      }
      return result;
    }
  }

  private findMinIndex(distancesArray: Array<number>) : number {
    let min = Dojo.MAX;
    let index = Dojo.MAX;
    for (let i = 0; i < distancesArray.length; i++) {
      if (distancesArray[i] < min) {
        min = distancesArray[i];
        index = i;
      }
    }
    return index;
  }
}
