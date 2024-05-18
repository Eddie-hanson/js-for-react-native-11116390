function processArray(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) {
      return number * number;
    } else {
      return number * 3;
    }
  });
}
ed = [2, 4, 1, 5, 7, 3];
Test = processArray(ed);
console.log(Test);
