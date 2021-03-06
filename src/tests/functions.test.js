import { getGifs } from "../helpers/getGifs";
import { getActiveUser, getHeroeById, getHoresByOwner, getUser } from "../utils";

describe("testing functions", () => {
	test("getUser should return a object", () => {
		const testUser = { id: "ABC123", username: "mamawebo" };
		const user = getUser();

		expect(testUser).toEqual(user);
	});

	test("get active user", () => {
		const testUser = { id: "ABC567", username: "jorge" };
		const user = getActiveUser("jorge");

		expect(testUser).toEqual(user);
	});

	test("getHeroeByid", () => {
		const id = 1;
		const hero = getHeroeById(id);

		expect(hero).toEqual({
			id: 1,
			name: "Batman",
			owner: "DC",
		});
	});

	test("getHeroeByid should return undefined if id not exist", () => {
		const id = 100;
		const hero = getHeroeById(id);

		expect(hero).toBeFalsy();
	});

	test("getHeroeByOwner", () => {
		const owner = "DC";
		const hero = getHoresByOwner(owner);

		expect(hero).toHaveLength(3);
	});

	test("getGifts should return an array of gifts", async () => {
		const gifts = await getGifs("one punch");
		expect(gifts.length).toBeGreaterThan(0);
		expect(gifts[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		});
	});
});
