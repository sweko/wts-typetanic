type AlphaChar = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';
type NumChar = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type UrlSpecialChar = '.' | '-' | '_' | '?' | '#' | '+' | ',' | '=' | '%' | '/';

type ValidURLChar = AlphaChar | Uppercase<AlphaChar> | NumChar | UrlSpecialChar;

type ValidScheme = `http${'s' | ''}://`;

type ValidDomain = `${string}.${string}` | 'localhost';

type IsValidUriSegment<T extends string> = T extends `${infer First}${infer Rest}`
  ? First extends ValidURLChar
    ? IsValidUriSegment<Rest> extends true
      ? true // Valid character and rest of the string is valid
      : false // Valid character but rest of the string is invalid
    : false // Invalid character at first position
  : true; // Empty string is valid

type URLString<T extends string> = T extends `${ValidScheme}${ValidDomain}${infer Rest}` 
  ? IsValidUriSegment<Rest> extends true
    ? T
    : never
  : never;

function doSomethingWithUrl<T extends string>(url: URLString<T>) {
  console.log(`Processing URL: ${url}`);
}

// Usage examples
doSomethingWithUrl("http://www.google.com"); // Valid
doSomethingWithUrl("https://example.com/path?query=123"); // Valid
doSomethingWithUrl("http://localhost"); // Valid

// @ts-expect-error
doSomethingWithUrl("not-a-url"); // Compile error

// @ts-expect-error
doSomethingWithUrl("ftp://invalid-scheme.com"); // Compile error

// @ts-expect-error
doSomethingWithUrl("https://valid-domain.com/invalid<path>"); // Compile error