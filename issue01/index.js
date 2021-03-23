const fs = require('fs');


const inputA = JSON.parse(fs.readFileSync('input-a.json'));
const inputB = JSON.parse(fs.readFileSync('input-b.json'));

const myMap = {};

inputB.forEach(itemB => {
	myMap[itemB.key] = itemB.price;
});

const res = inputA.map(inputA => {
	return {
		description: inputA.description,
		groupKey: inputA.groupKey,
		sectionKey: inputA.sectionKey,
		price: myMap[inputA.key]
	};
});

fs.writeFileSync('actual.json', JSON.stringify(res, null, ' '));