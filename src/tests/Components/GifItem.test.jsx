import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("<GifItem /> tests", () => {
	const title = "Saitama";
	const url = "https://one-punch.com/saitama.jpg";

	test.skip("must be match with snaptshot", () => {
		const { container } = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});

	test("must show the image with the url and alt passed", () => {
		render(<GifItem title={title} url={url} />);
		// screen.debug();
		const $img = screen.getByRole("img");
		const { src, alt } = $img;

		expect(src).toBe(url);
		expect(alt).toBe(alt);
	});

	test("must show the title passed", () => {
		render(<GifItem title={title} url={url} />);
		// screen.debug();
		const $title = screen.getByText(title);
		expect($title).toBeInTheDocument();
	});
});
