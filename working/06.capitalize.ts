// Implement the CapitalizeX type using Uppercase and Lowercase utility types
type Titlelize<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Lowercase<Rest>}`
  : S;

// Test cases
type Test1 = Titlelize<'hello'>; // Expected: "Hello"
type Test2 = Titlelize<'WORLD'>; // Expected: "World"
type Test3 = Titlelize<'a'>; // Expected: "A"
type Test4 = Titlelize<''>; // Expected: ""
type Test5 = Titlelize<'alREADY mixed'>; // Expected: "Already mixed"

// Usage demonstration
function capitalizeStringX<S extends string>(s: S): Titlelize<S> {
  return (s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()) as Titlelize<S>;
}

// Example usage
const result1 = capitalizeStringX('hello'); // Type is "Hello"
const result2 = capitalizeStringX('WORLD'); // Type is "World"
const result3 = capitalizeStringX('a'); // Type is "A"
const result4 = capitalizeStringX(''); // Type is ""
const result5 = capitalizeStringX('alREADY mixed'); // Type is "Already mixed"

console.log(result1, result2, result3, result4, result5);

// Comparison with built-in Capitalize
type BuiltInTest1 = Capitalize<'hello'>; // "Hello"
type BuiltInTest2 = Capitalize<'WORLD'>; // "WORLD"
type BuiltInTest3 = Capitalize<'alREADY mixed'>; // "AlREADY mixed"