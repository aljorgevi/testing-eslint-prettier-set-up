import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import FirstApp from "../components/FirstApp";

describe("Test of <FirstApp />", () => {
	test("must match eith snapshot", () => {
		const title = "Hello World";
		const { container } = render(<FirstApp title={title} />);
		expect(container).toMatchSnapshot();
	});

	test("must show the title in h1", () => {
		const title = "Hello World";
		const { container, getByText } = render(<FirstApp title={title} />);
		expect(getByText(title)).toBeInTheDocument();

		const h1 = container.querySelector("h1");
		expect(h1.innerHTML).toBe(title);
	});
});
