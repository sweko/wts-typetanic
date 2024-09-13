type FileSystemItem = {
    name: string;
    size: number;
    type: 'file' | 'directory';
    children?: FileSystemItem[]; // Recursive reference
};

const myFileSystem: FileSystemItem = {
    name: 'root',
    size: 1024,
    type: 'directory',
    children: [
        {
            name: 'documents',
            size: 512,
            type: 'directory',
            children: [
                { name: 'report.pdf', size: 100, type: 'file' },
                { name: 'notes.txt', size: 50, type: 'file' }
            ]
        },
        { name: 'image.jpg', size: 200, type: 'file' }
    ]
};

type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

const readonlyFS: DeepReadonly<FileSystemItem> = myFileSystem;




type Flatten<T> = T extends object
    ? {
        [K in keyof T as T[K] extends object ? `${K & string}.${keyof Flatten<T[K]> & string}` : K]: T[K] extends object ? Flatten<T[K]>[keyof Flatten<T[K]>] : T[K]
    }
    : T;

// Usage
type NestedObject = {
    a: string;
    b: {
        c: number;
        d: {
            e: boolean;
        };
    };
};

type FlattenedObject = Flatten<NestedObject>;
// Result:
// {
//   a: string;
//   "b.c": number;
//   "b.d.e": boolean;
// }

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
