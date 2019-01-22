function Header(props) {
	const styles = {
		backgroundColor:"whitesmoke", 
		color: "#000000",
		textAlign:"center",
		padding: "10px",
		margin: "0"
	}
	return (
		<header>
			<h1 style={styles}> 
				{props.firstName} {props.lastName}&apos;s
				<br />
				TODO List
			</h1>
		</header>
	)
}