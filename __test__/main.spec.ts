import { Dojo } from '../src/dojo';

describe('Test', () => {
  it('Should return one element', () => {
    const testArray: Array<number> = [1, 2, 3, 1];
    const dojo = new Dojo(testArray);
    expect(dojo.calcOrderedRepetitionsList()).toEqual([1]);
  });
});
