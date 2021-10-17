import { defaultCompare, ICompareFunction, isLessThan, isMoreThan } from "../domain/Compare";
import BinarySearchTree from "./BinarySearchTree";
import { BalanceFactor, isUnBalancedLeft, isUnBalancedRight } from "../domain/BalanceFactor";
import Node from "../domain/Node";

class AVLTree<T> extends BinarySearchTree<T> {

  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
    super(compareFn);
  }

  insert(key: T) {
    this.root = this.insertNode(this.root, key);
  }

  protected insertNode(node: Node<T>, key: T) {
    if (node == null) {
      return new Node(key);
    } else if (isLessThan(this.compareFn(key, node.key))) {
      node.left = this.insertNode(node.left, key);
    } else if (isMoreThan(this.compareFn(key, node.key))) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; // 重复的
    }
    const balanceFactor = this.getBalanceFactor(node);
    if (isUnBalancedLeft(balanceFactor)) {
      if (isLessThan(this.compareFn(key, node.left.key))) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }
    if (isUnBalancedRight(balanceFactor)) {
      if (isMoreThan(this.compareFn(key, node.right.key))) {
        node = this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }
    return node;
  }


  getNodeHeight(node) {
    if (node === null) {
      return -1;
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.unBalancedRight;
      case -1:
        return BalanceFactor.slightlyBalancedRight;
      case 1:
        return BalanceFactor.slightlyBalancedLeft;
      case 2:
        return BalanceFactor.unBalancedLeft;
      default:
        return BalanceFactor.balanced;
    }
  }

  rotationLL(node) {
    const temporary = node.left;
    node.left = temporary.right;
    temporary.right = node;
    return temporary;
  }

  rotationRR(node) {
    const temporary = node.right;
    node.right = temporary.left;
    temporary.left = node;
    return temporary;
  }

  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }
}