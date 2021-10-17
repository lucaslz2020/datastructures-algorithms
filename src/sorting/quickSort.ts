import { Compare, defaultCompare, ICompareFunction } from "../domain/Compare";
import { swap } from "../utils";

const partition = <T>(
  array: T[],
  lhs: number,
  rhs: number,
  compareFn: ICompareFunction<T>
) => {
  // 基准值
  const pivot = array[Math.floor((rhs + lhs) / 2)];
  let i = lhs;
  let j = rhs;
  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.lessThan) {
      i++;
    }
    while (compareFn(array[j], pivot) === Compare.moreThan) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
};

const quick = <T>(
  array: T[],
  lhs: number,
  rhs: number,
  compareFn: ICompareFunction<T>
) => {
  let index;
  if (array.length > 1) {
    index = partition(array, lhs, rhs, compareFn);
    if (lhs < index - 1) {
      quick(array, lhs, index - 1, compareFn);
    }
    if (index < rhs) {
      quick(array, index, rhs, compareFn);
    }
  }
  return array;
};

export const quickSort = <T>(array: T[], compareFn = defaultCompare) =>
  quick(array, 0, array.length - 1, compareFn);
