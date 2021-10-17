import { Compare, defaultCompare } from "./domain/Compare";

export const swap = <T>(array: T[], lhs: number, rhs: number) => {
  const temp = array[lhs];
  array[lhs] = array[rhs];
  array[rhs] = temp;
  // [array[lhs], array[rhs]] = [array[rhs], array[lhs]];
};

export const getMaxValue = (array: number[], compareFn = defaultCompare) => {
  if (array.length > 0) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (compareFn(max, array[i]) === Compare.lessThan) {
        max = array[i];
      }
    }
    return max;
  }
};
