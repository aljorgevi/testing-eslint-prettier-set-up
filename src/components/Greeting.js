import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
	const [changedText, setChangedText] = useState(false);

	const changeTextHandler = () => setChangedText(true);

	return (
		<div>
			<h2>hello world!</h2>
			{!changedText && <Output>it's good to see you!</Output>}
			{changedText && <Output>Changed!</Output>}
			<button onClick={changeTextHandler}>Change Text!</button>
		</div>
	);
}
