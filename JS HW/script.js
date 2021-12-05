import { counterSum, arrayUpdater } from './functions.js';

const counter = counterSum();
const getUpdatedArr = arrayUpdater();

console.log('Counter (3): ', counter(3));
console.log('Counter (5): ', counter(5));
console.log('Counter (228): ', counter(228));
console.log('Counter (3): ', counter(3));
console.log('Counter (5): ', counter(5));

console.log('--------------------');

console.log('Array (3): ', getUpdatedArr(3));
console.log('Array (5): ', getUpdatedArr(5));
console.log('Array ({ name: \'Vasya\' }): ', getUpdatedArr({ name: 'Vasya' }));
console.log('Array (): ', getUpdatedArr());
console.log('Array (4): ', getUpdatedArr(4));
console.log('Array (false): ', getUpdatedArr(false));
console.log('Array (NaN): ', getUpdatedArr(NaN));
console.log('Array (null): ', getUpdatedArr(null));
console.log('Array (3): ', getUpdatedArr(3));
console.log('Array (undefined): ', getUpdatedArr(undefined));
console.log('Array (5): ', getUpdatedArr(5));
console.log('Array ( ): ', getUpdatedArr());
console.log('Array (true): ', getUpdatedArr(true));
console.log('Array (3): ', getUpdatedArr(3));
console.log('Array (\'\'): ', getUpdatedArr(''));
console.log('Array (5): ', getUpdatedArr(5));
