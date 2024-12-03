# TypeScript Type Error: Argument of type 'string[]' is not assignable to parameter of type 'string'

This repository demonstrates a common type error in TypeScript where an array is passed to a function expecting a string. The `bug.ts` file contains the erroneous code, and `bugSolution.ts` provides the corrected version.

## Bug Description

The `greeter` function expects a single string as input, but an array of strings is passed. This results in a type error.

## Solution

The solution involves either modifying the `greeter` function to accept an array or iterating over the array and calling `greeter` for each element.  The `bugSolution.ts` file demonstrates both.