type BinaryTreeNode<T = number> = {
    name: string;
    value: T;
    left: BinaryTreeNode<T> | null;
    right: BinaryTreeNode<T> | null;
};

const tree: BinaryTreeNode = {
    name: "root",
    value: 1,
    left: {
        name: "left child",
        value: 2,
        left: null,
        right: null
    },
    right: {
        name: "right child",
        value: 3,
        left: {
            name: "right's left child",
            value: 4,
            left: null,
            right: null
        },
        right: null
    }
};

const readonlyTree = tree;

// @ts-expect-error
readonlyTree.name = "new root"; // Error

if (readonlyTree.left) {
    // @ts-expect-error
    readonlyTree.left.name = "new left child"; // Error
}
