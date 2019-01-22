/** 
 * @param {Object}
 * @returns {Object}
 * */
function ToDoItem(props) {
	return (
		<tr>
			<td>{props.text}</td>
			<td>
				<input type="checkbox" 
						checked={props.completed} 
						onChange={() => props.handleChange(props.id)} 
				/>
			</td>
		</tr>
	)
}