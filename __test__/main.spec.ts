import { Dojo } from '../src/dojo';

describe('Test', () => {
  it('Should return empty list when empty list is imput', () => {
    const testArray: Array<number> = [];
    const dojo = new Dojo(testArray);
    expect(dojo.calcOrderedRepetitionsList()).toEqual([]);
  });
  it('Should return one element', () => {
    const testArray: Array<number> = [1, 2, 3, 1];
    const dojo = new Dojo(testArray);
    expect(dojo.calcOrderedRepetitionsList()).toEqual([1]);
  });
  it('Should return two elements. Order following the first duplicate', () => {
    const testArray: Array<number> = [1, 2, 2, 1];
    const dojo = new Dojo(testArray);
    expect(dojo.calcOrderedRepetitionsList()).toEqual([2, 1]);
  });
});
