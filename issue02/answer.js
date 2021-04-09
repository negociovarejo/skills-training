const fs = require('fs');

const productMap = JSON.parse(fs.readFileSync('./products.json'));
const sectionMap = JSON.parse(fs.readFileSync('./sections.json'));

let map = {};

Object.keys(productMap).forEach(key => {
  const { sectionKey, groupKey, description } = productMap[key];
  const { name, groups } = sectionMap[sectionKey];
  
  if (!map[sectionKey]) {
    map[sectionKey] = { name, products: {} };
  }

  map[sectionKey].products[key] = {
    description: `${groups[groupKey].name} ${description}`
  };
});

fs.writeFileSync('actual.json', JSON.stringify(map, null, ' '));
