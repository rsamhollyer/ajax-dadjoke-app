import "./App.css";
import Header from "./Header";
import JokeButton from "./JokeButton";
import JokeContainer from "./JokeContainer";
import { useEffect } from "react";
import GetJoke from "./Getjoke";

function App() {
	// tells React to perform actions that are not directly related to drawing -- side-effects

	useEffect(() => {
		GetJoke();
	});

	return (
		<div className="App">
			<Header />
			<JokeButton />
			<JokeContainer />
		</div>
	);
}

export default App;
