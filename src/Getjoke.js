async function GetJoke(setJokeArray, jokeArray) {
	const jokePromise = fetch("https://icanhazdadjoke.com", {
		headers: {
			Accept: "application/json",
		},
	});

	const response = await jokePromise;

	const jokeData = await response.json();

	let sortedArr = [...jokeArray, jokeData];
	sortedArr.sort((a, b) => a.joke > b.joke);

	const uniqueJokesById = Array.from(new Set(sortedArr.map((a) => a.id))).map(
		(id) => {
			return sortedArr.find((a) => a.id === id);
		}
	);

	setJokeArray(uniqueJokesById);
}

export default GetJoke;
