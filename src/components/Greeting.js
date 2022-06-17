import { useState } from "react";

export default function Greeting() {
	const [changedText, setChangedText] = useState(false);

	const changeTextHandler = () => {
		setChangedText(true);
	};

	return (
		<div>
			<h2>hello world!</h2>
			{!changedText && <p>it's good to see you!</p>}
			{changedText && <p>Changed!</p>}
			<button onClick={changeTextHandler}>Change Text!</button>
		</div>
	);
}
