import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";

describe("test for <GifGrid />", () => {
	const category = "england";

	test("should start with loading", () => {
		render(<GifGrid category={category} />);

		expect(screen.getByText("Loading...")).toBeInTheDocument();
	});

	test("should show images when data is ready", () => {});
});
