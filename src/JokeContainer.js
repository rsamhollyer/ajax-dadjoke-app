import React from "react";

function JokeContainer({ jokes, deleteHandler }) {
	return (
		<section className="joke-container">
			<h3>Jokes go Here!</h3>

			{jokes.map((j) => {
				return (
					<p key={j.id}>
						{j.joke}
						<button
							onClick={() => {
								deleteHandler(j.id);
							}}
						>
							X
						</button>
					</p>
				);
			})}
		</section>
	);
}

export default JokeContainer;
