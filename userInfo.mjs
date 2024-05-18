import { processArray, formatArrayStrings } from "./arrayManipulation.mjs";

function createUserProfiles(names, modifiedNames) {
  if (names.length !== modifiedNames.length) {
    throw new Error("The lengths of the input arrays must match.");
  }

  return names.map((name, index) => {
    return {
      id: index + 1,
      originalName: name,
      modifiedName: modifiedNames[index],
    };
  });
}

const originalNames = ["Edward", "Nana Yaw", "Kojo", "Hanson", "Kwesi"];
const inputNumbers = [1, 2, 3, 4, 5];

const processedNumbers = processArray(inputNumbers);
const modifiedNames = formatArrayStrings(originalNames, processedNumbers);

const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);
