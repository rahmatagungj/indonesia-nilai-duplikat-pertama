function firstDuplicateValue(array) {
  const item = array.find((x, i) => array.indexOf(x) !== i);

  return item ? item : -1;
}

// dont change the code below
exports.firstDuplicateValue = firstDuplicateValue;