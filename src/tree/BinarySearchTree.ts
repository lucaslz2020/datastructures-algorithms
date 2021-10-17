import { defaultCompare, ICompareFunction, isLessThan, isMoreThan } from "../domain/Compare";
import Node from "../domain/Node";

export default class BinarySearchTree<T> {
  
  protected root: Node<T>;

  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {}

  public insert(key: T) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  public getRoot() {
    return this.root;
  }

  public search(key: T) {
    return this.searchNode(this.root, key);
  }


  public preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  public min() {
    return this.minNode(this.root);
  }

  public max() {
    return this.maxNode(this.root);
  }

  public remove(key: T) {
    this.root = this.removeNode(this.root, key);
  }

  protected insertNode(node: Node<T>, key: T) {
    if (isLessThan(this.compareFn(key, node.key))) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
  }

  protected minNode(node: Node<T>) {
    let current = node;
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }

  protected maxNode(node:Node<T>) {
    let current = node;
    while (current !== null && current.right !== null) {
      current = current.right;
    }
    return current;
  }

  protected removeNode(node:Node<T>, key: T) {
    if (node ===null) {
      return null;
    }
    if (isLessThan(this.compareFn(key, node.key))) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (isMoreThan(this.compareFn(key, node.key))) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }

  private preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  private searchNode(node: Node<T>, key: T) {
    if (node === null) {
      return false;
    }
    if (isLessThan(this.compareFn(key, node.key))) {
      return this.searchNode(node.left, key);
    } else if (isMoreThan(this.compareFn(key, node.key))) {
      return this.searchNode(node.right, key);
    }
    return true;
  }
}