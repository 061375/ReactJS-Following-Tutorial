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
	 * @deprecated 16.3
	 * */
	componentWillMount() {

	}
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
	 * @deprecated 16.3
	 * */
	componentWillUpdate() {

	}
	/** 
	 * create backup of current state
	 * https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
	 * @returns {Object}
	 * */
	getSnapshotBeforeUpdate() {

	}
	/** 
	 * return the new, updated state based on the props
	 * https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops
	 * @warning https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
	 * @static
	 * @param {Object}
	 * @param {Object}
	 * @returns {Object}
	 * */
	static getDerivedStateFromProps(props, state) {

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
