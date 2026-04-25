function soma(a, b) {
  return a + b;
}

test('soma 1 + 1 = 2', () => {
  expect(soma(1, 1)).toBe(2);
});

test('soma 2 + 2 = 4', () => {
  expect(soma(2, 2)).toBe(4);
});

test('soma 5 + 5 = 10', () => {
  expect(soma(5, 5)).toBe(10);
});

test('soma 0 + 0 = 0', () => {
  expect(soma(0, 0)).toBe(0);
});

test('soma 10 + 5 = 15', () => {
  expect(soma(10, 5)).toBe(15);
});
