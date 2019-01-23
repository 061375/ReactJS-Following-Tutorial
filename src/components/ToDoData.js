// @const {Object}
var ToDoData = [{
	id: 1,
	text: "Take out the papers and the trash",
	completed: true
}, {
	id: 2,
	text: "Grocery Shopping",
	completed: false
}, {
	id: 3,
	text: "Get the mail",
	completed: false
}, {
	id: 4,
	text: "Brush my teeth",
	completed: false
}, {
	id: 5,
	text: "Walk the dog",
	completed: false
}];
/** 
 * @param {Function}
 * @returns {Object}
 * */
function buildToDoComponent(handleChange) {
	// @let {Number}
	var i = 0;
	// @let {Array}
	var todo = ToDoData.map(function (todo, i) {
		//i++;
		return React.createElement(ToDoItem, {
			id: todo.id,
			key: i,
			text: todo.text,
			completed: todo.completed,
			handleChange: handleChange
		});
	});
	// @let {Object}
	var table = React.createElement(
		"table",
		null,
		React.createElement(
			"thead",
			null,
			React.createElement(
				"tr",
				null,
				React.createElement(
					"th",
					null,
					"Task"
				),
				React.createElement(
					"th",
					null,
					"Complete"
				)
			)
		),
		React.createElement(
			"tbody",
			null,
			todo
		)
	);

	return table;
}