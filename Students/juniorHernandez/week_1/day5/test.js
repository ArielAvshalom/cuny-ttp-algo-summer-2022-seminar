const set1 = new Set([["one", "two"], ["three"]]);

let containsArray = false;
const checkForArr = ["one", "two"];

for (const arr of set1) {
  if (arr.toString() === checkForArr.toString()) {
    containsArray = true;
    break;
  }
}

console.log(containsArray); // 👉️ true
