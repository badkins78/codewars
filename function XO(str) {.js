function XO(str) {
  //code here
  let xCount = 0;
  let oCount = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "x") {
      xCount++;
    } else if (str[i].toLowerCase() == "o") {
      oCount++;
    }
  }
  if (xCount == oCount) {
    return true;
  } else {
    return false;
  }
}
