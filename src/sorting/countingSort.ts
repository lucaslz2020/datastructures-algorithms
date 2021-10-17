import { getMaxValue } from "../utils";

/**
 * 针对整数排序, 可能最占用大量的内存。
 * @param array
 */
export const countingSort = (array: number[]) => {
  if (array.length < 2) {
    return array;
  }
  const maxValue = getMaxValue(array);
  const counts = new Array(maxValue + 1);
  array.forEach((element) => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });

  let sortedIndex = 0;
  counts.forEach((element, i) => {
    while (element > 0) {
      array[sortedIndex++] = i;
      element--;
    }
  });
  return array;
};
