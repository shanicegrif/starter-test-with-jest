const { getFullName } = require("../src/products");

describe("this will test getFullName", () => {
  it("should return a string of users first and surname", () => {
    const input = { names: { first: "Tim", surname: "McAwesome" } };
    const actual = getFullName(input);
    const expected = `Tim McAwesome`;
    expect(actual).toEqual(expected);
  });
});
