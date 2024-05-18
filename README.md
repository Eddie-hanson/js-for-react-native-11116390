# JavaScript for React Native - Assignment

## Student ID: 11116390

This repository contains solutions to JavaScript exercises for React Native.

### Tasks:

1. **Task 1: Process Array**

   - Created a function `processArray` that takes an array of numbers as input and returns a new array where each even number is squared and each odd number is tripled.

2. **Task 2: Format Array Strings**

   - Added a function `formatArrayStrings` that takes two arrays as arguments: an array of strings and an array of numbers processed by `processArray`.
   - The function modifies each string based on its corresponding number:
     - Capitalizes the entire string if the number is even.
     - Converts the string to lowercase if the number is odd.

3. **Task 3: Create User Profiles**
   - Implemented a function `createUserProfiles` that takes an array of names and the array of modified names from Task 2.
   - Returns an array of objects, each containing originalName, modifiedName, and id (auto-incremented starting from 1).

## Usage

To test the code, simply run:

```bash
node userInfo.mjs
```
