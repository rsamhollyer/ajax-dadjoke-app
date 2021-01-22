async function GetJoke(setJokeArray, jokeArray) {
	const jokePromise = fetch("https://icanhazdadjoke.com", {
		headers: {
			Accept: "application/json",
		},
	});

	const response = await jokePromise;

	const jokeData = await response.json();

	setJokeArray([...jokeArray, jokeData]);
}

export default GetJoke;
