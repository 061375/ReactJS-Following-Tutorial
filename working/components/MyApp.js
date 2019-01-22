// @const {String}
const firstName = "Jeremy"
// @const {String}
const lastName = "Heminger"
/** 
 * 
 * */
class MyApp extends React.Component {
	//
	constructor() {
		super()
		// {Object}
		this.state = {
			todos: ToDoData
		}
		// {Object}
		this.updateState = this.updateState.bind(this);
	}
	/** 
	 * @param {Number}
	 * */
	updateState(id) {
		/*
		this.setState(prevState => {
			return {
				count: (prevState.count + 1)
			}
		})
		*/
		this.setState(prevState => {
			const updatedTodos = prevState.todos.map(todo => {
				if(todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo
			})
			return {
				todos: updatedTodos
			}
		})
	}
	/** 
	 * 
	 * */
	render() {
		const ToDoComponent = buildToDoComponent(this.updateState);
		return (
			<div>
				<Header firstName={firstName} lastName={lastName} />
				{ToDoComponent}
			</div>
		)	
	}
}
