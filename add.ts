export default function add(a: number, b: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    const result = a + b;
    if (result === 0) {
      reject(new Error('Invalid'));
    } else {
      resolve(result);
    }
  })
}
