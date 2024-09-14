
declare function omit(object: any, key: string): any;
declare function pick(object: any, ...keys: string[]): any;

const weko = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 0x2F,
    email: "swekster@gmail.com",
    password: '123456'
};

const wekoWithoutPassword = omit(weko, 'password');
// wekoWithoutPassword.... // Hover over age to see the inferred type and properties
console.log(wekoWithoutPassword);

// @ts-expect-error
const wekoWithoutCar = omit(weko, 'car'); // Compile error


const nameOnly = pick(weko, 'firstName', 'lastName');
// nameOnly.... // Hover over nameOnly to see the inferred type and properties
console.log(nameOnly);

//@ts-expect-error
const wekoRestricted = pick(weko, 'car', 'yacht'); // Compile error


export {}