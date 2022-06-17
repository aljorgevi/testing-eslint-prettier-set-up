import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from '../components/Greeting';

describe('Greeting component', () => {
	test('renders Hello World as a text', () => {
		//Arrange
		render(<Greeting />);

		// Act
		// .. nothing
		const greeting = screen.getByText(/hello world!/i);

		// Assert
		expect(greeting).toBeInTheDocument();
	});

	test('renders good to see you if the button was NOT clicked', () => {
		//Arrange
		render(<Greeting />);

		// Act
		// .. nothing

		// Assert
		const greeting = screen.getByText("it's good to see you!", { exact: false });
		expect(greeting).toBeInTheDocument();
	});

	test('renders Changed! if the button was clicked', () => {
		//Arrange
		render(<Greeting />);

		// Act
		const buttonElemt = screen.getByRole('button');
		userEvent.click(buttonElemt);

		// Assert
		const outputElement = screen.getByText('Changed!');
		expect(outputElement).toBeInTheDocument();
	});

	test('does not render "good to see you" if the button was clicked', () => {
		//Arrange
		render(<Greeting />);

		// Act
		const buttonElemt = screen.getByRole('button');
		userEvent.click(buttonElemt);

		// Assert
		const outputElement = screen.queryByText("it's good to see you!", { exact: false });
		expect(outputElement).not.toBeInTheDocument();
	});
});
