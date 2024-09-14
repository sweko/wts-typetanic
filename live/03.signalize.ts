const person = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 0x2F,
    email: "swekster@gmail.com"
};

declare function signalize<T>(object: T): any;

const signalizedPerson = signalize(person);

// signalizedPerson.... // Hover over signalizedPerson to see the inferred type and properties

declare function observable<T>(object: T): any;

const observablePerson = observable(person);
// observablePerson.... // Hover over observablePerson to see the inferred type and properties

observablePerson.on('firstNameChanged', (value) => {
    console.log(`First name changed to: ${value.toUpperCase()}`);
});

observablePerson.on('ageChanged', (value) => {
    console.log(`Age changed to: ${value.toFixed(0)}`);
});

export {}