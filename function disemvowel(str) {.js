function disemvowel(str) {
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    if (
      !str[i].includes("a") &&
      !str[i].includes("e") &&
      !str[i].includes("i") &&
      !str[i].includes("o") &&
      !str[i].includes("u") &&
      !str[i].includes("A") &&
      !str[i].includes("E") &&
      !str[i].includes("I") &&
      !str[i].includes("O") &&
      !str[i].includes("U")
    ) {
      newStr += str[i];
    }
  }
  return newStr;
}
