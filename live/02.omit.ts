type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type Omit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};


declare function omit<T, K extends keyof T>(object: T, key: K): Omit<T, K>;
declare function pick<T, K extends keyof T>(object: T, ...keys: K[]): Pick<T, K>;

const weko = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 0x2F,
    email: "swekster@gmail.com",
    password: '123456'
};

const wekoWithoutPassword = omit(weko, 'password');
console.log(wekoWithoutPassword);

// @ts-expect-error
const wekoWithoutCar = omit(weko, 'car'); // Compile error

const nameOnly = pick(weko, 'firstName', 'lastName');
console.log(nameOnly);

//@ts-expect-error
const wekoRestricted = pick(weko, 'car', 'yacht'); // Compile error


export {}