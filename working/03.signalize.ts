const person = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 0x2F,
    email: "swekster@gmail.com"
};

type Signalized<T> = {
    [P in keyof T]: () => T[P];
} & {
    [P in keyof T as `set${Capitalize<P & string>}`]: (value: T[P]) => void;
}

declare function signalize<T>(object: T): Signalized<T>;

const signalizedPerson = signalize(person);

// signalizedPerson.... // Hover over signalizedPerson to see the inferred type and properties

type Observable<T> = {
    on: <K extends keyof T>(property: `${K & string}Changed`, listener: (value: T[K]) => void) => void;
} & T;

declare function observable<T>(object: T): Observable<T>;

const observablePerson = observable(person);
// observablePerson.... // Hover over observablePerson to see the inferred type and properties

observablePerson.on('firstNameChanged', (value) => {
    console.log(`First name changed to: ${value.toUpperCase()}`);
});

observablePerson.on('ageChanged', (value) => {
    console.log(`Age changed to: ${value.toFixed(0)}`);
});

