import React from "react";

function JokeContainer({ joke }) {
	return (
		<section className="joke-container">
			<h3>Jokes go Here!</h3>

			{joke.map((j) => {
				return <p key={j.id}> {j.joke} </p>;
			})}
		</section>
	);
}

export default JokeContainer;
