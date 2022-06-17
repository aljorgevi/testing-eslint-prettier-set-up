import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../components/CounterApp";

describe("test CounterApp", () => {
	const initialValue = 5;

	test.skip("must be match with snapshot", () => {
		const { container } = render(<CounterApp value={initialValue} />);
		expect(container).toMatchSnapshot();
	});

	test("must render the component with a initial value of 100", () => {
		render(<CounterApp value={100} />);
		expect(screen.getByText(100)).toBeTruthy();
	});

	test("the value must be increment by 1 when click +1", () => {
		render(<CounterApp value={initialValue} />);
		const button = screen.getByText("+1");
		fireEvent.click(button);
		expect(screen.getByText(initialValue + 1)).toBeTruthy();
	});

	test("the value must be decrement by 1 when click -1", () => {
		render(<CounterApp value={initialValue} />);
		const button = screen.getByText("-1");
		fireEvent.click(button);
		expect(screen.getByText(initialValue - 1)).toBeTruthy();
	});

	test("the value must be reset to initial value when click reset", () => {
		render(<CounterApp value={initialValue} />);
		const buttonIncrement = screen.getByText("+1");
		fireEvent.click(buttonIncrement);
		// screen.debug();
		const buttonReset = screen.getByRole("button", { name: "btn-reset" });
		// const buttonReset = screen.getByText("Reset");
		fireEvent.click(buttonReset);
		expect(screen.getByText(initialValue)).toBeTruthy();
	});
});
