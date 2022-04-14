function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let test = sq + 1;
  if (!Number.isInteger(Math.sqrt(sq))) {
    return -1;
  }
  while (!Number.isInteger(Math.sqrt(test))) {
    test++;
  }
  return test;
}
