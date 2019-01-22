function ContactCard(props) {
	return React.createElement(
		"div",
		{ className: "contacts" },
		React.createElement(
			"div",
			{ className: "contact-card" },
			React.createElement("img", { src: props.imgsrc, alt: props.imgalt }),
			React.createElement(
				"h3",
				null,
				props.h3
			),
			React.createElement(
				"p",
				null,
				props.p1
			),
			React.createElement(
				"p",
				null,
				props.p2
			)
		)
	);
}