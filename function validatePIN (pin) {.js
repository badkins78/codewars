function validatePIN(pin) {
  //return true or false
  let num = [];
  let res = [];
  if (pin.length < 4 || pin.length == 5 || pin.length > 6) {
    return false;
  }
  for (i = 0; i < pin.length; i++) {
    num.push(parseInt(pin[i]));
  }
  console.log(num);
  for (j = 0; j < num.length; j++) {
    if (num.includes(NaN)) {
      return false;
    } else {
      res.push(num[j]);
    }
  }
  console.log(res);
  if (res.length == 4 || res.length == 6) {
    return true;
  }
}
validatePIN("2345");
