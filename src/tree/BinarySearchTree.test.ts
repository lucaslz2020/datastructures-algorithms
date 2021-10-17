import BinarySearchTree from "./BinarySearchTree";

describe("BinarySearchTree", () => {
  let tree: BinarySearchTree<number>;
  beforeEach(() => {
    tree = new BinarySearchTree<number>();
  })
  it("starts empty", () => {
    expect(tree.getRoot()).toBeUndefined();
  });

  it("inserts element in the BST", () => {
    expect(tree.getRoot()).toBeUndefined();
    tree.insert(11);
    tree.insert(1);
    tree.insert(3);
    tree.insert(22);
    tree.insert(122);

    tree.preOrderTraverse((key) => {
      console.log("key", key);
    })
  })
})