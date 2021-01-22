import "./App.css";
import Header from "./Header";
import JokeButton from "./JokeButton";
import JokeContainer from "./JokeContainer";
import { useEffect, useState } from "react";
import GetJoke from "./Getjoke";

function App() {
	const [jokeArray, setJokeArray] = useState([]);
	useEffect(() => {
		debugger;
		// tells React to perform actions that are not directly related to drawing -- side-effects
		//This side effect will run exactly one time no matter how often App() function is refun
		// If anything needs redrawing in the live DOM on the page.
		// This calculation and reconciliation process is known as React's Virtual DOM
		GetJoke(setJokeArray, jokeArray);
	}, []);

	const runGetJoke = () => {
		GetJoke(setJokeArray, jokeArray);
	};

	return (
		<div className="App">
			<Header />
			<JokeButton GetJoke={runGetJoke} />
			<JokeContainer jokes={jokeArray} />
		</div>
	);
}

export default App;
