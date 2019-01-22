var productsData = [{
	id: 1,
	name: "Pencil",
	price: 1.00,
	description: "It's a pencil"
}, {
	id: 2,
	name: "Paper",
	price: 5.00,
	description: "8.5 x 11 - 100 sheets"
}, {
	id: 3,
	name: "Eraser",
	price: 0.65,
	description: "Rubber"
}, {
	id: 4,
	name: "Scissors",
	price: 7.99,
	description: "Steel for use with paper"
}];
var productComponents = productsData.map(function (item) {
	return React.createElement(Product, {
		key: item.id,
		product: item
	});
});
function Product(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"h2",
			null,
			props.product.name
		),
		React.createElement(
			"p",
			null,
			props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" }),
			" - ",
			props.product.description
		)
	);
}