import { bubbleSort, bubbleSortV1 } from "../../src/sorting/bubbleSort";
import { selectionSort } from "../../src/sorting/selectSort";
import { insertionSort } from "../../src/sorting/insertionSort";
import { mergeSort } from "../../src/sorting/mergeSort";
import { quickSort } from "../../src/sorting/quickSort";
import { countingSort } from "../../src/sorting/countingSort";

const nonSorted = [
  100, 30, 28, 10, 8, 1, 300, 1000, 2, 99, 150, 7, 31, 98, 250,
];
const sorted = [1, 2, 7, 8, 10, 28, 30, 31, 98, 99, 100, 150, 250, 300, 1000];

describe("sort", () => {
  it("should be bubble sorted", function () {
    expect(bubbleSort(nonSorted)).toStrictEqual(sorted);
  });
  it("should be bubble sorted v1", function () {
    expect(bubbleSortV1(nonSorted)).toStrictEqual(sorted);
  });
  it("should be selection sorted", function () {
    expect(selectionSort(nonSorted)).toStrictEqual(sorted);
  });
  it("should be insertion sorted", function () {
    expect(insertionSort(nonSorted)).toStrictEqual(sorted);
  });
  it("should be merge sorted", function () {
    expect(mergeSort(nonSorted)).toStrictEqual(sorted);
  });
  it("should be quick sorted", function () {
    expect(quickSort(nonSorted)).toStrictEqual(sorted);
  });
  it("should be counting sorted", function () {
    expect(countingSort(nonSorted)).toStrictEqual(sorted);
  });
});
