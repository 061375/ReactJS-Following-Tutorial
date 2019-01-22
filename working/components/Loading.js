function Loading(props) {
	return ( 
		props.isLoading ? <div id="loading"><h1>Loading...</h1></div> : <div></div>
	)
	
}