/**
 * 平衡因子
 */
export const enum BalanceFactor {
  unBalancedRight = 1,
  slightlyBalancedRight ,
  balanced,
  slightlyBalancedLeft,
  unBalancedLeft
}

export const isUnBalancedRight = (balance: BalanceFactor) => balance === BalanceFactor.unBalancedRight;
export const isUnBalancedLeft = (balance: BalanceFactor) => balance === BalanceFactor.unBalancedLeft;
