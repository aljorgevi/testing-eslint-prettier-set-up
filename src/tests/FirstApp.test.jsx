import { render, screen } from "@testing-library/react";
import FirstApp from "../components/FirstApp";

describe("match Snapshot <FirstApp />", () => {
	const title = "Hello, I'm Goku";
	const subtitle = "Hello World";

	test.skip("must match eith snapshot", () => {
		const { container } = render(<FirstApp title={title} />);
		expect(container).toMatchSnapshot();
	});

	test("Should show title and data-testid", () => {
		render(<FirstApp title={title} />);
		expect(screen.getByText(title)).toBeTruthy();
		// screen.debug();
		// const title = "Hello World";
		// // eslint-disable-next-line no-unused-vars
		// const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
		// expect(getByText(title)).toBeInTheDocument();
		// expect(getByTestId("test-title")).toHaveTextContent(title);

		// const h1 = container.querySelector("h1");
		// expect(h1.innerHTML).toBe(title);
	});

	test("should show title in a h1", () => {
		render(<FirstApp title={title} />);
		expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
	});

	test("should show the subtitle send by props", () => {
		render(<FirstApp subTitle={subtitle} />);
		expect(screen.getByText(subtitle)).toBeTruthy();
	});
});
