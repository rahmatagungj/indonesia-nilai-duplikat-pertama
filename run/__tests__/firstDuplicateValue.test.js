const {
  firstDuplicateValue,
} = require("../../firstDuplicateValue")

describe("Functional Test", () => {
  it("firstDuplicateValue function should defined", () => {
    expect(firstDuplicateValue).toBeDefined()
  })

  it("firstDuplicateValue function should return -1 when array is empty", () => {
    expect(firstDuplicateValue([])).toBe(-1)
  })

  it("firstDuplicateValue function should function type", () => {
    expect(firstDuplicateValue).toBeType("function")
  })

  it("firstDuplicateValue should not throw any error", () => {
    expect(() => firstDuplicateValue([]))
      .not()
      .toThrow()
  })

  it("firstDuplicateValue should return number type", () => {
    expect(firstDuplicateValue([])).toBeType("number")
  })
})
