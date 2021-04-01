const fs = require('fs');

const products = JSON.parse(fs.readFileSync('products.json'));
const productPrices = JSON.parse(fs.readFileSync('productPrices.json'));

const myMap = {};

productPrices.forEach(productPrice => {
	myMap[productPrice.key] = productPrice.price;
});

const res = products.map(product => {
	return {
		description: product.description,
		groupKey: product.groupKey,
		sectionKey: product.sectionKey,
		price: myMap[product.key]
	};
});

fs.writeFileSync('actual.json', JSON.stringify(res, null, ' '));