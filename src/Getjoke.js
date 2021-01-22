async function GetJoke(setJoke, joke) {
	const jokePromise = fetch("https://icanhazdadjoke.com", {
		headers: {
			Accept: "application/json",
		},
	});

	const response = await jokePromise;

	const jokeData = await response.json();

	console.log(jokeData.joke);
	setJoke([...joke, jokeData]);
}

export default GetJoke;
