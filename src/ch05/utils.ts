import { ResultType } from './types';

export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];

export const fold = <T>(
  array: T[],
  callback: (result: T, val: T) => T,
  initValue: T,
) => {
  let result: T = initValue;
  for (let i = 0; i < array.length; ++i) {
    const value = array[i];
    result = callback(result, value);
  }
  return result;
};

export const filter = <T>(
  array: T[],
  callback: (value: T, index?: number) => boolean,
): T[] => {
  let result: T[] = [];
  for (let index: number = 0; index < array.length; ++index) {
    const value = array[index];
    if (callback(value, index)) {
      result = [...result, value];
    }
  }
  return result;
};

export const map = <T, Q>(
  array: T[],
  callback: (value: T, index?: number) => Q,
): Q[] => {
  let result: Q[] = [];
  for (let index = 0; index < array.length; ++index) {
    const value = array[index];
    result = [...result, callback(value, index)];
  }
  return result;
};

export const pureSort = <T>(array: readonly []): T[] => {
  let deepCopied = [...array];
  return deepCopied.sort();
};

export const pureDelete = <T>(
  array: readonly T[],
  cb: (val: T, index?: number) => boolean,
): T[] => array.filter((val, index) => cb(val, index) == false);

export const doSomething = (): ResultType => {
  try {
    throw new Error('Some Error occurs..');
  } catch (e) {
    return [false, e.message];
  }
};
