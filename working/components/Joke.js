function Joke(props) {
	let jclass = ""
	if(undefined === props.joke)
		jclass = "hide"
	return (
		<div className="joke">
			<p className={jclass}>
				Question: {props.joke}
			</p>
			<hr className={jclass} />
			<p>
				Answer: {props.punchLine}
			</p>
		</div>
	)
}