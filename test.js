function soma(a, b) {
  return a + b;
}

test('teste 1', () => {
  expect(soma(1, 1)).toBe(2);
});

test('teste 2', () => {
  expect(soma(2, 2)).toBe(4);
});

test('teste 3', () => {
  expect(soma(3, 3)).toBe(6);
});

test('teste 4', () => {
  expect(soma(4, 4)).toBe(8);
});

test('teste 5', () => {
  expect(soma(5, 5)).toBe(10);
});
