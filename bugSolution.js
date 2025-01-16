function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; // Handle null or undefined values explicitly
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(undefined, 5)); // Output: 0
console.log(foo(5, 5)); // Output: 10