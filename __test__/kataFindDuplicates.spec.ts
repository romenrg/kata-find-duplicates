import { KataFindDuplicates } from '../src/kataFindDuplicates';

describe('Test', () => {
  it('Should return empty list when empty list is imput', () => {
    const testArray: Array<number> = [];
    const dojo = new KataFindDuplicates(testArray);
    expect(dojo.calcOrderedRepetitionsList()).toEqual([]);
  });
  it('Should return empty list when no duplicates are present', () => {
    const testArray: Array<number> = [0, 1, 2, 3, 4, 5];
    const dojo = new KataFindDuplicates(testArray);
    expect(dojo.calcOrderedRepetitionsList()).toEqual([]);
  });
  it('Should return one element', () => {
    const testArray: Array<number> = [1, 2, 3, 1];
    const dojo = new KataFindDuplicates(testArray);
    expect(dojo.calcOrderedRepetitionsList()).toEqual([1]);
  });
  it('Should return two elements. Order following the first duplicate', () => {
    const testArray: Array<number> = [1, 2, 2, 1];
    const dojo = new KataFindDuplicates(testArray);
    expect(dojo.calcOrderedRepetitionsList()).toEqual([2, 1]);
  });
});

describe("Find Min Index Tests", () => {
  it('Should return KataFindDuplicates.MAX_DISTANCE if empty', () => {
    const inputArray: Array<number> = [];
    const testDistances: Array<number> = [];
    const dojo = new KataFindDuplicates(inputArray);
    expect(dojo.findMinIndex(testDistances)).toEqual(KataFindDuplicates.MAX_DISTANCE);
  });
  it("Should return second element (i=1) since it's the actual Min", () => {
    const inputArray: Array<number> = [];
    const testDistances: Array<number> = [3, 1, KataFindDuplicates.MAX_DISTANCE, 2, KataFindDuplicates.MAX_DISTANCE];
    const dojo = new KataFindDuplicates(inputArray);
    expect(dojo.findMinIndex(testDistances)).toEqual(1);
  });
  it("Should return the last element since it's the actual Min", () => {
    const inputArray: Array<number> = [];
    const testDistances: Array<number> = [7, 8, KataFindDuplicates.MAX_DISTANCE, 4, 2];
    const dojo = new KataFindDuplicates(inputArray);
    expect(dojo.findMinIndex(testDistances)).toEqual(4);
  });
  it('Should return KataFindDuplicates.MAX_DISTANCE if all KataFindDuplicates.MAX_DISTANCE', () => {
    const inputArray: Array<number> = [];
    const testDistances: Array<number> = [KataFindDuplicates.MAX_DISTANCE, KataFindDuplicates.MAX_DISTANCE, KataFindDuplicates.MAX_DISTANCE, KataFindDuplicates.MAX_DISTANCE, KataFindDuplicates.MAX_DISTANCE];
    const dojo = new KataFindDuplicates(inputArray);
    expect(dojo.findMinIndex(testDistances)).toEqual(KataFindDuplicates.MAX_DISTANCE);
  });
});
