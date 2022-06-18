import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { gifts } from "../__mocks__/gifts";

jest.mock("../../hooks/useFetchGifs");

describe("test for <GifGrid />", () => {
	const category = "england";

	test("should start with loading", () => {
		useFetchGifs.mockReturnValue({ images: [], isLoading: true });
		render(<GifGrid category={category} />);

		expect(screen.getByText("Loading...")).toBeInTheDocument();
	});

	test("should show images when data is ready", () => {
		useFetchGifs.mockReturnValue({ images: gifts, isLoading: false });

		render(<GifGrid category={category} />);
		expect(screen.getAllByRole("img")).toHaveLength(2);
		// screen.debug();
	});
});
