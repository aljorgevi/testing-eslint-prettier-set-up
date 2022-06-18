import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe("testing <AddCategory />", () => {
	test("should change the text box", () => {
		render(<AddCategory onNewCategory={function () {}} />);
		const input = screen.getByRole("textbox");

		fireEvent.input(input, { target: { value: "test" } });

		expect(input.value).toBe("test");
		// screen.debug();
	});

	test("should call onNewCategory if input is not empty", () => {
		// Arrange
		const inputValue = "england";
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);
		const input = screen.getByRole("textbox");
		const form =
			screen.getByRole("form"); /* had to include an arial-label form to get it to work */

		// Act
		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		// Assert
		expect(input.value).toBe("");
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
		// screen.debug();
	});

	test("should not be call onNewCategory in input is empty", () => {
		// Arrange
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);
		const form = screen.getByRole("form");

		// Act
		fireEvent.submit(form);

		// Assert
		expect(onNewCategory).toHaveBeenCalledTimes(0);
	});
});
