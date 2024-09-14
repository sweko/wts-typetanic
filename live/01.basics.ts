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


const { age, ...rest } = person;
console.log(age, rest);

const add = (a: number, b: number) => a + b;
const result = add(2, 3);
console.log(result);

const add2 = (a: number, b: number) => ({ result: a + b });
const result2 = add2(2, 3);
console.log(result2.result);

export {};