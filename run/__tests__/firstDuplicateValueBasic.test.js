const {
  firstDuplicateValue,
} = require("../../firstDuplicateValue")

describe("Basic Test", () => {
  it("Test Case #1", () => {
    expect(firstDuplicateValue([])).toBe(-1)
  })

  it("Test Case #2", () => {
    expect(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4])).toBe(2)
  })

  it("Test Case #3", () => {
    expect(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4, 5])).toBe(2)
  })

  it("Test Case #4", () => {
    expect(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4])).toBe(3)
  })

  it("Test Case #5", () => {
    expect(firstDuplicateValue([1, 1, 2, 3, 3, 2, 2])).toBe(1)
  })

  it("Test Case #6", () => {
    expect(firstDuplicateValue([3, 1, 3, 1, 1, 4, 4])).toBe(3)
  })
})
