const num: number = 3;
console.log(num);

const firstName: string = 'Wekoslav';
const lastName: string = 'Stefanovski';

const person = {
  firstName,
  lastName,
  age: 0x2F,
  email: "swekster@gmail.com"
};

// person.... // Hover over person to see the inferred type

const { age, ...rest } = person;
// age.... // Hover over age to see the inferred type
// rest.... // Hover over rest to see the inferred type
console.log(age, rest);

const add = (a: number, b: number) => a + b;
const result = add(2, 3);
// result.... // Hover over result to see the inferred type
console.log(result);

const add2 = (a: number, b: number) => ({ result: a + b });
const result2 = add2(2, 3);

// add2Result.... // Hover over add2Result to see the inferred type
console.log(result2.result);

export {};