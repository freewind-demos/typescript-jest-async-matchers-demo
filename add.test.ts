import add from './add';

test('async/await', async () => {
  expect(await add(1, 2)).toBe(3);
})

test('resolves', async () => {
  await expect(add(1, 2)).resolves.toBe(3);
})

test('rejects', async () => {
  await expect(add(1, -1)).rejects.toThrowError('Invalid');
})
