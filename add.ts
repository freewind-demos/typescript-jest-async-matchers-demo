export default function add(a: number, b: number): Promise<number> {
  return new Promise<number>(resolve => {
    resolve(a + b);
  })
}
