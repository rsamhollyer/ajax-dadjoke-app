import "./App.css";
import Header from "./Header";
import JokeButton from "./JokeButton";
import JokeContainer from "./JokeContainer";
import { useState } from "react";
import GetJoke from "./Getjoke";

function App() {
	const [joke, setJoke] = useState([]);
	// useEffect(() => {
	// tells React to perform actions that are not directly related to drawing -- side-effects
	//This side effect will run exactly one time no matter how often App() function is refun
	// If anything needs redrawing in the live DOM on the page.
	// This calculation and reconciliation process is known as React's Virtual DOM
	// }, []);
	// GetJoke(setJokeArray, jokeArray);

	// async function GetJoke() {
	// 	const jokePromise = fetch("https://icanhazdadjoke.com", {
	// 		headers: {
	// 			Accept: "application/json",
	// 		},
	// 	});

	// 	const response = await jokePromise;

	// 	const jokeData = await response.json();

	// 	console.log(jokeData.joke);
	// 	setJoke(jokeData.joke);
	// }

	// const runGetJoke = () => {
	// 	GetJoke(setJokeArray, jokeArray);
	// };

	return (
		<div className="App">
			<Header />
			<JokeButton
				handleClick={() => {
					GetJoke(setJoke, joke);
				}}
			/>
			<JokeContainer joke={joke} />
		</div>
	);
}

export default App;
