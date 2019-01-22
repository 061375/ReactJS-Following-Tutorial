<?php 
$version = strtotime('now');
$scripts = [
	'ToDoItem',
	'ToDoData',
	'Product',
	'ToDoItem',
	'Nav',
	'Main',
	'Header',
	'Footer',
	'MyApp',
	'ContactCard',
	'Joke',
	'JokesData'
];
?>
<html>
	<head>
		<meta name="viewport" content="initial-scale=1">
		<meta name="viewport" content="user-scalable=yes,width=device-width,initial-scale=1">
		<style>
			html, body {
				font-family: Arial;	
				background-color: whitesmoke;
			}
			#root {
				background-color: white;
				margin: auto;
				width: 414px;
				display: flex;
				flex-direction: column;
				align-items: center;
				border: solid 1px #efefef;
				box-shadow: 
					0 1px 1px rgba(0,0,0,0.15),
					0 10px 0 -5px #eee,
					0 10px 1px -4px rgba(0,0,0,0.15),
					0 20px 0 -10px #eee,
					0 20px 1px -9px rgba(0,0,0,0.15);
			}
			.joke {
				background: #f4f5ed;
			    margin: 5px;
			    padding: 5px;
			    text-align: center;
			}
			.pl_item { 
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding: 30px 20px 0;
				width: 70%;
				border-bottom: 1px solid #cecece;
				font-weight: 100;
				font-size: 15px;
				margin: auto;
			}
			h1 {
				box-shadow: inset 0px -10px 30px #0000000a;
			}
			.pl_item input {
				margin-top: 20px;
				margin-left: 30px;
			}
			.pl_item input,
			.pl_item p {
				float: left;
			}
			footer {
				clear: both;
			}
			.hide {
				display: none;
			}
			table {
				width: 100%;
			}
			table tr {
				box-shadow: 0px 2px 1px #ccc;
			}
			table th, td {
				text-align: center;
				margin: 0;
			}
			table th {
				padding-top: 10px;
    			width: 50%;
			}
			table td {
				font-size: 10px;
    			padding: 10px 0px;
			}
		</style>
	</head>
	<body>
		<div id="root"></div>
		<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  		<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  		<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  		<?php 
  			foreach ($scripts as $script) {
  				echo '<script src="/src/components/'.$script.'.js?v='.$version.'" type="text/babel"></script>'."\n";
  			}
  		?>
  		<script src="/src/index.js?v=<?php echo $version; ?>" type="text/babel"></script>
	</body>
</html>