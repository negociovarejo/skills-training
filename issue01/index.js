const fs = require('fs');

var inputA = JSON.parse(fs.readFileSync('input-a.json'));
var inputB = JSON.parse(fs.readFileSync('input-b.json'));

const res = inputA.map((inputA, i) => {
	const rightPrice = inputB.filter(item => item.key == inputA.key);

	return {
		description: inputA.description,
		groupKey: inputA.groupKey,
		sectionKey: inputA.sectionKey,
		price: rightPrice[0]
	};
});

// const object = res.reduce((obj, item, i) => {
// 	return Object.assign(obj, { [inputB[i].key]: item }, {});
// })

fs.writeFileSync('actual.json', JSON.stringify(res, null, ' '));