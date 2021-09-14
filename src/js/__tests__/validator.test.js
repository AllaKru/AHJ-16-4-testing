// test('should ...', () => {
// });
import { isValid } from '../validators';

test('it should return true', () => {
  const input = '4532331341630018';

  expect(isValid(input)).toBe(true);
});

test.each([
  ['true ', '5576221819361291', true],
  ['false', '7715964234556981999', false],
])('it should be %s', (_, input, expected) => {
  expect(isValid(input)).toBe(expected);
});
