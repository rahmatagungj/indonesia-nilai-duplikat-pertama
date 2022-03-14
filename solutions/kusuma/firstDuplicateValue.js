function firstDuplicateValue(array) {
  if (array.length <= 1 || typeof array[0] !== "number") return -1;

  const hasil = array.find(
    (element, index) => array.indexOf(element) !== index
  );

  return hasil ? hasil : -1;
}

// dont change the code below
exports.firstDuplicateValue = firstDuplicateValue;
