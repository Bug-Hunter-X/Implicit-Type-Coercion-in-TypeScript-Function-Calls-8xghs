# Implicit Type Coercion in TypeScript Function Calls

This code demonstrates a subtle type-related issue that can arise in TypeScript when performing operations involving type coercion.  The function `add` is declared to take two numbers as input and return their sum. However, it implicitly allows string addition when a string is passed.  While the code compiles without errors, it produces unexpected results at runtime.

The goal is to highlight how TypeScript's type system, while powerful, doesn't always prevent unexpected behavior due to JavaScript's implicit type conversions.  The solution will make this error immediately obvious.