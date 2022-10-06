import {multiply, sum} from "../src";

test("testing sum function", () => {
    expect(sum(1, 2)).toBe(1 + 2);
})

test("testing multiply function", () => {
    expect(multiply(2, 4)).toBe(2 * 4);
})