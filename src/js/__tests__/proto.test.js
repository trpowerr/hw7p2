import enemyOne from '../proto';

test('should calculate total for purchases', () => {
  const expected = 52;
  const received = enemyOne.damage(80);

  expect(received).toBe(expected);
});
