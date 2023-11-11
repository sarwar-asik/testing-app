# unit-testing

- dom testing
- react app testing

#### Created another testing with separate branch **dom-test & react-testing **

- https://github.com/sarwar-asik/testing-titans/tree/dom-test
- https://github.com/sarwar-asik/testing-titans/tree/react-testing

# Overview of Testing with Vitest

## 1. Unit Testing

### Definition:

Unit testing is a software testing technique where individual units or components of a software are tested in isolation to ensure they perform as expected.

### Key Points:

- Focuses on testing the smallest parts of a software application.
- Tests are written for functions, methods, or modules.
- Aims to validate that each unit of code works correctly in isolation.

## 2. DOM Testing

### Definition:

DOM (Document Object Model) testing is a type of testing that involves validating the behavior and interactions of the HTML document structure.

### Key Points:

- Verifies how the application interacts with the DOM.
- Ensures proper rendering of UI components.
- Tests events, changes in state, and dynamic updates to the DOM.

## 3. React App Testing

### Definition:

React app testing involves testing React components, ensuring they render correctly, handle state and props properly, and respond to user interactions as expected.

### Key Points:

- Utilizes tools like Vitest for testing React applications.
- Involves unit testing of individual React components.
- Tests React component lifecycle methods, state changes, and UI rendering.

## Vitest Testing Framework

### Overview:

Vitest is a lightweight testing framework for JavaScript applications. It supports unit testing, provides a simple syntax, and is suitable for testing various aspects of web applications.

### Key Features:

- Minimal setup and configuration.
- Built-in support for testing in a browser environment.
- Designed for simplicity and ease of use.

## Example Usage:
- js function 'clnNumber.js'

```javascript
// Sample  js function
import { transformToNum } from "../transformNum";

export function validateNumber(value) {
  return +value;
}

export function cleanNumbers(values) {
  const numbers = [];
  for (const value of values) {
    validateNumber(value);
    const number = transformToNum(value);
    numbers.push(number);
  }
  return numbers;
}
```
- testing file in in 'clnNumber.test.js'

```js
import { expect, it } from "vitest";
import { cleanNumbers } from "./numberCheck";
// Sample Vitest testing file
it("array of number provided", () => {
  const stringNumber = ["2", "3"];
  const result = cleanNumbers(stringNumber);
  expect(result[0]).toBeTypeOf("number");
});
```
