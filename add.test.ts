import add from './add';

test('async/await', async () => {
  expect(await add(1, 2)).toBe(3);
})

test('resolves', () => {
  // Notice: the 'return' here is needed
  return expect(add(1, 2)).resolves.toBe(3);
})

test('rejects', () => {
  // Notice: the 'return' here is needed
  return add(1, -1).catch(error => expect(error.message).toBe('Invalid'));
})
