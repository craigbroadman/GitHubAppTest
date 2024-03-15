import { isEven } from './is-even';

describe('isEven tests', () => {
  const evenTestCases = [-898, 2, 4, 8, 1042, 568942];
  const oddTestCases = [-885, 3, 11, 59, 3093, 8746721];

  test.each(evenTestCases)('should say %i is even', input => {
    expect(isEven(input)).toEqual(true);
  });

  test.each(oddTestCases)('should say %i is not even', input => {
    expect(isEven(input)).toEqual(false);
  });
});
