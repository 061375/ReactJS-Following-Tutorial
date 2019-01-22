function Loading(props) {
	if(props.isLoading) {
		return ( 
			<div id="loading">
				<h1>Loading...</h1>
			</div>
		)
	}else{
		return <div></div>
	}
}