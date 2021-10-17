import { Compare, defaultCompare, ICompareFunction } from "../domain/Compare";

const merge = <T>(lhs: T[], rhs: T[], compareFn: ICompareFunction<T>) => {
  let i = 0;
  let j = 0;
  const results = [];
  while (i < lhs.length && j < rhs.length) {
    results.push(
      compareFn(lhs[i], rhs[j]) === Compare.lessThan ? lhs[i++] : rhs[j++]
    );
  }
  return results.concat(i < lhs.length ? lhs.slice(i) : rhs.slice(j));
};

export const mergeSort = <T>(array: T[], compareFn = defaultCompare) => {
  const length = array.length;
  if (length <= 1) {
    return array;
  }
  const middle = Math.floor(length / 2);
  return merge(
    mergeSort(array.slice(0, middle), compareFn),
    mergeSort(array.slice(middle, length), compareFn),
    defaultCompare
  );
};
