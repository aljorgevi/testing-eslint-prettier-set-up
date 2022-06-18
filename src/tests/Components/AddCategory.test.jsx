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
});
