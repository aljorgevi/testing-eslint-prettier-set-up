// import FirstApp from "./components/FirstApp";

import { CounterApp } from "./components/CounterApp";

function App() {
	return (
		<div className="App ">
			{/* <FirstApp title="Hello, I'm Vegeta" /> */}
			<CounterApp value={0} />
		</div>
	);
}

export default App;
