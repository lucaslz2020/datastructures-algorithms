import { Compare, defaultCompare } from "../domain/Compare";
import { swap } from "../utils";

export const bubbleSort = <T>(array: T[], compareFn = defaultCompare) => {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.moreThan) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
};

export const bubbleSortV1 = <T>(array: T[], compareFn = defaultCompare) => {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.moreThan) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
};
