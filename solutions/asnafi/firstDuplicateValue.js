function firstDuplicateValue(array) {
  const numberExists = {}
  for (let i = 0; i < array.length; i++) {
    if (array[i] in numberExists) return array[i]
    numberExists[array[i]] = 1
  }

  return -1
}

// dont change the code below
exports.firstDuplicateValue = firstDuplicateValue;