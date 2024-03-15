import { isOdd } from './is-odd';

describe('isOdd Tests', () => {
  const oddTestCases = [-11, 5, 33, 79, 4885];
  const evenTestCases = [-20, 44, 98, 35792];

  test.each(oddTestCases)('should say %i is odd', input => {
    expect(isOdd(input)).toEqual(true);
  });

  test.each(evenTestCases)('should say %i is not odd', input => {
    expect(isOdd(input)).toEqual(false);
  });
});
