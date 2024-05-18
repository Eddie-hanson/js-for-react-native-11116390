export function processArray(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) {
      return number * number;
    } else {
      return number * 3;
    }
  });
}

export function formatArrayStrings(strings, numbers) {
  if (strings.length !== numbers.length) {
    throw new Error("The lengths of the input arrays must match.");
  }

  return strings.map((str, index) => {
    const number = numbers[index];
    if (number % 2 == 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}
