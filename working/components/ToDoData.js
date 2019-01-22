// @const {Object}
const ToDoData = [
	{
		id: 1,
		text: "Take out the papers and the trash",
		completed: true
	},
	{
		id: 2,
		text: "Grocery Shopping",
		completed: false
	},
	{
		id: 3,
		text: "Get the mail",
		completed: false
	},
	{
		id: 4,
		text: "Brush my teeth",
		completed: false
	},
	{
		id: 5,
		text: "Walk the dog",
		completed: false
	}
];
/** 
 * @param {Function}
 * @returns {Object}
 * */
function buildToDoComponent(handleChange) {
	// @let {Number}
	let i = 0;
	// @let {Array}
	let todo =  ToDoData.map(
		todo => {
			i++;
			return (<ToDoItem
				id={todo.id}
				key={i}
				text={todo.text}
				completed={todo.completed}
				handleChange={handleChange}
			/>);
		}
	);
	// @let {Object}
	let table = (
		<table>
			<thead>
				<tr>
					<th>Task</th>
					<th>Complete</th>
				</tr>
			</thead>
			<tbody>
				{todo}
			</tbody>
		</table>
	);

	return table;
}