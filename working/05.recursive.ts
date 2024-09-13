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

// type DeepReadonly<T> = {
//     readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
// };

type DeepReadonly<T> = T extends object ? {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
} : T;

const readonlyTree: DeepReadonly<BinaryTreeNode> = tree;

// @ts-expect-error
readonlyTree.name = "new root"; // Error

if (readonlyTree.left) {
    // @ts-expect-error
    readonlyTree.left.name = "new left child"; // Error
}

type DeepPropertyType<T, P> = P extends `${infer Key}.${infer Rest}`
    ? Key extends keyof T
        ? DeepPropertyType<T[Key], Rest>
        : never
    : P extends keyof T
        ? T[P]
        : never;

// Usage
type NestedObj = {
    a: {
        b: {
            c: string;
        };
    };
};

type ResultType = DeepPropertyType<NestedObj, "a.b.c">; // string
