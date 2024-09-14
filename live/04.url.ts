
function doSomethingWithUrl(url: string) {
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

export {}