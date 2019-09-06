/**
 * Dojo Class
 * Should return an array with the numbers that are repeated, sorted by first repeated element
 */
export class Dojo {
  public static COMMANDS = 'Coding Dojo';

  public elementsList: Array<number>;

  constructor(elementsList: Array<number>) {
    this.elementsList = elementsList;
  }

  public calcOrderedRepetitionsList(): Array<number> {
    if (this.elementsList.length === 0)
      return [];
    else
      return [1];
  }
}
