async function GetJoke(setJokeArray, jokeArray) {
	const jokePromise = fetch("https://icanhazdadjoke.com", {
		headers: {
			Accept: "application/json",
		},
	});

	const response = await jokePromise;

	const jokeData = await response.json();
	let newArr = [...jokeArray, jokeData];
	newArr.sort((a, b) => a.joke > b.joke);
	setJokeArray(newArr);
}

export default GetJoke;
