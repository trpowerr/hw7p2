import {enemyOne} from '../proto';

test('should calculate total for purchases', () => {
  const expected = 58;
  const received = enemyOne.damage(70);

  expect(received).toBe(expected);
});
