import { render, screen } from "@testing-library/react";
import Async from "../components/Async";

describe("Async component", () => {
	test("renders post if request succeeds", async () => {
		// Arrange
		window.fetch = jest.fn().mockResolvedValueOnce({
			json: async () => {
				return [
					{
						id: "p1",
						title: "first post",
					},
				];
			},
		});
		render(<Async />);

		// Act
		// .. nothing

		// Assert
		const listItemElements = await screen.findAllByRole(
			"listitem"
			// {},
			// {
			// 	timeout: 5000,
			// }
		);
		expect(listItemElements).not.toHaveLength(0);
	});
});
