import { Compare, defaultCompare } from "../domain/Compare";
import { swap } from "../utils";

export const selectionSort = <T>(array: T[], compareFn = defaultCompare) => {
  const length = array.length;
  let minIndex = 0;
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (compareFn(array[minIndex], array[j]) === Compare.moreThan) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(array, i, minIndex);
    }
  }
  return array;
};
