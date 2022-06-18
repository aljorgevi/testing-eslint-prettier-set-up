import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("test of useFetchGifs hook", () => {
	test("should return the initial state", () => {
		// Arrange
		const { result } = renderHook(() => useFetchGifs("chile"));
		const { images, isLoading } = result.current;

		// Assert
		expect(images).toEqual([]);
		expect(isLoading).toBeTruthy();
	});

	test("should return an array of images and isLoading false", async () => {
		// Arrange
		const { result } = renderHook(() => useFetchGifs("chile"));
		await waitFor(() => expect(result.current.isLoading).toBeFalsy());
		const { images, isLoading } = result.current;

		// Assert
		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
