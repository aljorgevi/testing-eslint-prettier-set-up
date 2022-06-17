import { retrieveArray } from "../utils";

describe("testing array", () => {
	test("must return a string and a number", () => {
		const [letters, numbers] = retrieveArray();

		expect(typeof letters).toBe("string");
		expect(typeof numbers).toBe("number");
	});
});
