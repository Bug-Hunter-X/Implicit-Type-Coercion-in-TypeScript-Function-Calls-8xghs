function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, '10'); // Type Error, but not immediately obvious
console.log(result);