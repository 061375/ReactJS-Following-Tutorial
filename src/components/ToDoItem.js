/** 
 * @param {Object}
 * @returns {Object}
 * */
function ToDoItem(props) {
	return React.createElement(
		"tr",
		null,
		React.createElement(
			"td",
			null,
			props.text
		),
		React.createElement(
			"td",
			null,
			React.createElement("input", { type: "checkbox",
				checked: props.completed,
				onChange: function onChange() {
					return props.handleChange(props.id);
				}
			})
		)
	);
}