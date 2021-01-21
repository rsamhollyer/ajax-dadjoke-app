import React from "react";

function JokeContainer(props) {
	return (
		<section className="joke-container">
			<h3>Jokes go Here!</h3>

			{props.jokes.map((j) => (
				<p>{j}</p>
			))}
		</section>
	);
}

export default JokeContainer;
