/** 
 *
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
	
	// ----- LIFECYCLE

	/** 
	 * a ready state handler
	 * */
	componentDidMount() {

	}
	/** 
	 * check if the props received has changed
	 * @param {Object}
	 * @deprecated 16.3
	 * */
	componentWillReceiveProps(nextProps) {

	}
	/** 
	 * should component re-render
	 * @return {Boolean}
	 * */
	shouldComponentUpdate(nextProps, nextState) {
		
	}
	/** 
	 * clean-up code before component disappears
	 * */
	componentWillUnmount() {

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



	// ----- START MY METHODS

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
	
}
