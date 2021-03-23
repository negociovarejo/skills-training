const fs = require('fs');

var inputA = JSON.parse(fs.readFileSync('src/input-a.json'));
var inputB = JSON.parse(fs.readFileSync('src/input-b.json'));

const res = inputA.map((inputAItem, i) => {
    return {
			description: inputAItem.description,
			groupKey: inputAItem.groupKey,
			sectionKey: inputAItem.sectionKey,
			price: inputB[i].price
		};
});

const object = res.reduce((obj, item, i) => {
	return Object.assign(obj, { [inputB[i].key]: item}, {});
})

console.log(object);