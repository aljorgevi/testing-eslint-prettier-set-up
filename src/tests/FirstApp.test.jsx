import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import FirstApp from "../components/FirstApp";

describe("Test of <FirstApp />", () => {
	test.skip("must match eith snapshot", () => {
		const title = "Hello World";
		const { container } = render(<FirstApp title={title} />);
		expect(container).toMatchSnapshot();
	});

	test("Should show title and data-testid", () => {
		const title = "Hello World";
		// eslint-disable-next-line no-unused-vars
		const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
		expect(getByText(title)).toBeInTheDocument();
		expect(getByTestId("test-title")).toHaveTextContent(title);

		// const h1 = container.querySelector("h1");
		// expect(h1.innerHTML).toBe(title);
	});

	test("should show the subtitle send by props", () => {
		const subtitle = "Hello World";
		const { getByText } = render(<FirstApp subTitle={subtitle} />);
		expect(getByText(subtitle)).toBeInTheDocument();
	});
});
