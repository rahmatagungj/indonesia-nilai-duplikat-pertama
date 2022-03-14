const {
  firstDuplicateValue,
} = require("../../firstDuplicateValue")

describe("Deep Test", () => {
  it("Test Case #1", () => {
    expect(firstDuplicateValue([1])).toStrictEqual(-1)
    expect(firstDuplicateValue([1])).toBeType("number")
  })

  it("Test Case #2", () => {
    expect(firstDuplicateValue([1, 1])).toStrictEqual(1)
    expect(firstDuplicateValue([1, 1])).toBeType("number")
  })

  it("Test Case #3", () => {
    expect(
      firstDuplicateValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10])
    ).toStrictEqual(10)
    expect(firstDuplicateValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10])).toBeType(
      "number"
    )
  })

  it("Test Case #4", () => {
    expect(firstDuplicateValue([2, 1, 1])).toStrictEqual(1)
    expect(firstDuplicateValue([2, 1, 1])).toBeType("number")
  })

  it("Test Case #5", () => {
    expect(firstDuplicateValue([2, 2, 2, 2, 2, 2, 2, 2, 2])).toStrictEqual(2)
    expect(firstDuplicateValue([2, 2, 2, 2, 2, 2, 2, 2, 2])).toBeType("number")
  })

  it("Test Case #6", () => {
    expect(firstDuplicateValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual(
      -1
    )
    expect(firstDuplicateValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBeType(
      "number"
    )
  })

  it("Test Case #7", () => {
    expect(
      firstDuplicateValue([
        23, 25, 9, 26, 2, 19, 24, 18, 25, 17, 13, 3, 14, 17, 9, 20, 26, 15, 21,
        2, 6, 11, 2, 12, 23, 5, 4, 20,
      ])
    ).toStrictEqual(25)
    expect(
      firstDuplicateValue([
        23, 25, 9, 26, 2, 19, 24, 18, 25, 17, 13, 3, 14, 17, 9, 20, 26, 15, 21,
        2, 6, 11, 2, 12, 23, 5, 4, 20,
      ])
    ).toBeType("number")
  })

  it("Test Case #8", () => {
    expect(
      firstDuplicateValue([
        16, 6, 6, 18, 6, 13, 28, 9, 3, 26, 10, 2, 23, 5, 20, 21, 11, 20, 6, 11,
        26, 20, 26, 25, 13, 3, 12, 4,
      ])
    ).toStrictEqual(6)
    expect(
      firstDuplicateValue([
        16, 6, 6, 18, 6, 13, 28, 9, 3, 26, 10, 2, 23, 5, 20, 21, 11, 20, 6, 11,
        26, 20, 26, 25, 13, 3, 12, 4,
      ])
    ).toBeType("number")
  })

  it("Test Case #9", () => {
    expect(
      firstDuplicateValue([
        9, 21, 9, 22, 3, 23, 4, 26, 7, 11, 25, 25, 19, 13, 23, 28, 5, 23, 19,
        13, 10, 26, 28, 9, 28, 16, 7, 13, 22,
      ])
    ).toStrictEqual(9)
    expect(
      firstDuplicateValue([
        9, 21, 9, 22, 3, 23, 4, 26, 7, 11, 25, 25, 19, 13, 23, 28, 5, 23, 19,
        13, 10, 26, 28, 9, 28, 16, 7, 13, 22,
      ])
    ).toBeType("number")
  })

  it("Test Case #10", () => {
    expect(
      firstDuplicateValue([
        11, 6, 1, 1, 4, 19, 10, 12, 19, 8, 12, 15, 26, 9, 6, 20, 17, 12, 26, 15,
        25, 18, 26, 5, 3, 5, 16, 5,
      ])
    ).toStrictEqual(1)
    expect(
      firstDuplicateValue([
        11, 6, 1, 1, 4, 19, 10, 12, 19, 8, 12, 15, 26, 9, 6, 20, 17, 12, 26, 15,
        25, 18, 26, 5, 3, 5, 16, 5,
      ])
    ).toBeType("number")
  })
})
