import add from './add';

test('async/await', async () => {
  expect(await add(1, 2)).toBe(3);
})

test('resolves', () => {
  expect(add(1, 2)).resolves.toBe(3);
})
