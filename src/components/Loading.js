function Loading(props) {
	return props.isLoading ? React.createElement(
		"div",
		{ id: "loading" },
		React.createElement(
			"h1",
			null,
			"Loading..."
		)
	) : React.createElement("div", null);
}