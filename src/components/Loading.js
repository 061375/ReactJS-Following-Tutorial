function Loading(props) {
	if (props.isLoading) {
		return React.createElement(
			"div",
			{ id: "loading" },
			React.createElement(
				"h1",
				null,
				"Loading..."
			)
		);
	} else {
		return React.createElement("div", null);
	}
}