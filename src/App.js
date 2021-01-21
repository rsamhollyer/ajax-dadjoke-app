import "./App.css";
import Header from "./Header";
import JokeButton from "./JokeButton";
import JokeContainer from "./JokeContainer";
import { useEffect, useState } from "react";
import GetJoke from "./Getjoke";

function App() {
	useEffect(() => {
		// tells React to perform actions that are not directly related to drawing -- side-effects
		//This side effect will run exactly one time no matter how often App() function is refun
		// If anything needs redrawing in the live DOM on the page.
		// This calculation and reconciliation process is known as React's Virtual DOM
		GetJoke(setJokeArray);
	}, []);

	const [jokeArray, setJokeArray] = useState([]);

	const runGetJoke = () => {
		GetJoke(setJokeArray);
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
