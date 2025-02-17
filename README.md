# Unexpected Type Coercion in JavaScript Addition Function

This repository demonstrates a common error in JavaScript related to type coercion in functions. The `foo` function, designed to add two numbers, unexpectedly concatenates strings and arrays due to JavaScript's loose typing. This highlights the need for explicit type checking in functions to prevent such errors.

## Bug

The `bug.js` file contains the problematic function.  Observe the unexpected results when different data types are passed as arguments.

## Solution

The `bugSolution.js` file provides a corrected version with explicit type checking to ensure that only numbers are added.  This avoids the unintended type coercion.