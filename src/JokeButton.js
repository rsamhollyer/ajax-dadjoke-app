import React from "react";

function JokeButton(props) {
	return (
		<nav className="nav-bar">
			<button className="joke-button" onClick={props.GetJoke}>
				Get Joke
			</button>
		</nav>
	);
}

export default JokeButton;
