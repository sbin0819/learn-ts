import { range, fold, filter, map } from './utils';

let numbers: number[] = range(1, 100 + 1);

let result = fold(
  map(numbers, (value) => value * value),
  (result, value) => result + value,
  0,
);

console.log(result);
