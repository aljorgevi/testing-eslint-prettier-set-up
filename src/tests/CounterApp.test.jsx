import { render, screen } from "@testing-library/react";
import { CounterApp } from "../components/CounterApp";

describe("test CounterApp", () => {
	const initialValue = 0;

	test("must be match with snapshot", () => {
		const { container } = render(<CounterApp value={initialValue} />);
		expect(container).toMatchSnapshot();
	});

	test("must render the component with a initial value of 100", () => {
		render(<CounterApp value={100} />);
		expect(screen.getByText(100)).toBeTruthy();
	});
});
