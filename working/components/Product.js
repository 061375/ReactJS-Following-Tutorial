const productsData = [
	{
		id: 1,
		name: "Pencil",
		price: 1.00,
		description: "It's a pencil"
	},
	{
		id: 2,
		name: "Paper",
		price: 5.00,
		description: "8.5 x 11 - 100 sheets"
	},
	{
		id: 3,
		name: "Eraser",
		price: 0.65,
		description: "Rubber"
	},
	{
		id: 4,
		name: "Scissors",
		price: 7.99,
		description: "Steel for use with paper"
	}
];
const productComponents = productsData.map(item => 
	<Product 
		key={item.id} 
		product={item}
	/>
)
function Product(props) {
	return (
		<div>
			<h2>
				{props.product.name}
			</h2>
			<p>
				{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})} - {props.product.description}
			</p>
		</div>
	)
}