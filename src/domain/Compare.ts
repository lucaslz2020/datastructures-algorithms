export const enum Compare {
  lessThan = -1,
  equals,
  moreThan,
}

export const isLessThan = (compare: Compare) => compare === Compare.lessThan;
export const isEquals = (compare: Compare) => compare === Compare.lessThan;
export const isMoreThan = (compare: Compare) => compare === Compare.lessThan;

export type ICompareFunction<T> = (lhs: T, rhs: T) => Compare;

export const defaultCompare = <T>(lhs: T, rhs: T) => {
  if (lhs === rhs) {
    return Compare.equals;
  }
  return lhs < rhs ? Compare.lessThan : Compare.moreThan;
};
