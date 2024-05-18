function processArray(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) {
      return number * number;
    } else {
      return number * 3;
    }
  });
}

function formatArrayStrings(strings, numbers) {
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

const ed = [2, 4, 1, 5, 7, 3];
const hans = ["Ed", "Chels", "Wind", "Heart", "Qwerty", "Love"];
const Test = processArray(ed);
const Test1 = formatArrayStrings(hans, ed);
console.log(Test, Test1);
