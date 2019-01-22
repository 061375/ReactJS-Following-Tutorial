function Header(props) {
	var styles = {
		backgroundColor: "whitesmoke",
		color: "#000000",
		textAlign: "center",
		padding: "10px",
		margin: "0"
	};
	return React.createElement(
		"header",
		null,
		React.createElement(
			"h1",
			{ style: styles },
			props.firstName,
			" ",
			props.lastName,
			"'s",
			React.createElement("br", null),
			"TODO List"
		)
	);
}