async function GetJoke(setJokeArray, jokeArray) {
	const jokePromise = fetch("https://icanhazdadjoke.com", {
		headers: {
			Accept: "application/json",
		},
	});

	const response = await jokePromise;

	const jokeData = await response.json();

	console.log(jokeData.joke);
	setJokeArray([...jokeArray, jokeData]);
}

export default GetJoke;
