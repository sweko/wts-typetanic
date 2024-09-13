"use strict";
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
const doubles = evens.map(n => n * 2);
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const logDoubles = async () => {
    for (const number of doubles) {
        await delay(1000);
        console.log(number);
    }
};
logDoubles();
