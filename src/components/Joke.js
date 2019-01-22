function Joke(props) {
	var jclass = "";
	if (undefined === props.joke) jclass = "hide";
	return React.createElement(
		"div",
		{ className: "joke" },
		React.createElement(
			"p",
			{ className: jclass },
			"Question: ",
			props.joke
		),
		React.createElement("hr", { className: jclass }),
		React.createElement(
			"p",
			null,
			"Answer: ",
			props.punchLine
		)
	);
}