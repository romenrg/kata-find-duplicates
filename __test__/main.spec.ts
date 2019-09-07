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

describe("Find Min Index Tests", () => {
  it('Should return Dojo.MAX if empty', () => {
    const inputArray: Array<number> = [];
    const testDistances: Array<number> = [];
    const dojo = new Dojo(inputArray);
    expect(dojo.findMinIndex(testDistances)).toEqual(Dojo.MAX);
  });
  it("Should return second element (i=1) since it's the actual Min", () => {
    const inputArray: Array<number> = [];
    const testDistances: Array<number> = [3, 1, Dojo.MAX, 2, Dojo.MAX];
    const dojo = new Dojo(inputArray);
    expect(dojo.findMinIndex(testDistances)).toEqual(1);
  });
  it("Should return the last element since it's the actual Min", () => {
    const inputArray: Array<number> = [];
    const testDistances: Array<number> = [7, 8, Dojo.MAX, 4, 2];
    const dojo = new Dojo(inputArray);
    expect(dojo.findMinIndex(testDistances)).toEqual(4);
  });
  it('Should return Dojo.MAX if all Dojo.MAX', () => {
    const inputArray: Array<number> = [];
    const testDistances: Array<number> = [Dojo.MAX, Dojo.MAX, Dojo.MAX, Dojo.MAX, Dojo.MAX];
    const dojo = new Dojo(inputArray);
    expect(dojo.findMinIndex(testDistances)).toEqual(Dojo.MAX);
  });
});
