import { Compare, defaultCompare } from "../domain/Compare";

export const insertionSort = <T>(array: T[], compareFn = defaultCompare) => {
  const length = array.length;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.moreThan) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array;
};
