type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};


type Exclude<T, U> = T extends U ? never : T;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

declare function omit<T, K extends keyof T>(object: T, key: K): Omit<T, K>;

const weko = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 0x2F,
    email: "swekster@gmail.com",
    password: '123456'
};

const wekoWithoutPassword = omit(weko, 'password');
console.log(wekoWithoutPassword);

export {}