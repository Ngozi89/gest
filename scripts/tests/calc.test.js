const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 65 for 30 + 35", () => {
            expect(addition(30, 35)).toBe(65);
        })
        test("should return 80 for 40 + 40", () => {
            expect(addition(40, 40)).toBe(80);
        })

    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
});