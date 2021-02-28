// function-signature
export type FirstOrderFunc<T, R> = (T) => R;
export type SecondOrderFunc<T, R> = (T) => FirstOrderFunc<T, R>;
export type ThirdOrderFunc<T, R> = (T) => SecondOrderFunc<T, R>;

// compose
// export const compose = <T, R>(...functions: readonly Function[]): Function => (
//   x: T,
// ): ((T) => R) => {
//   const deepCopiedFunctions = [...functions];
//   return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x);
// };

// pipe
const pipe = <T>(...functions: Function[]): Function => (x: T): T => {
  return functions.reduce((value, func) => func(value), x);
};

const f = <T>(x: T): string => `f(${x})`;
const g = <T>(x: T): string => `g(${x})`;
const h = <T>(x: T): string => `h(${x})`;

const piped = pipe(f, g, h);

console.log(piped('x'));
