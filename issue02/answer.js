const fs = require('fs');

const productsJson = JSON.parse(fs.readFileSync('./products.json'));
const sectionsJson = JSON.parse(fs.readFileSync('./sections.json'));

const productKeys = Object.keys(productsJson);
const sectionKeys = Object.keys(sectionsJson);

let sectionMap = {};
let groupMap = {};

productKeys.forEach(productKey => {
  const { sectionKey, description } = productsJson[productKey];

  if (!sectionMap[sectionKey]) {
    sectionMap[sectionKey] = {
      name: '',
      products: {}
    };
  }

  sectionMap[sectionKey].products[productKey] = { description };
});

sectionKeys.forEach(sectionKey => {
  let { groups } = sectionsJson[sectionKey];
  let groupKeys = Object.keys(groups);

  if (groupKeys.length > 1) {
    groupKeys.forEach((groupKey, j) => {
      let key = `${sectionKey}_${groupKeys[j]}`;
      let value = {
        productName: groups[groupKey].name,
        sectionName: sectionsJson[sectionKey].name
      };

      groupMap[key] = value;
    });
  }

  let key = `${sectionKey}_${groupKeys[0]}`;
  let value = {
    productName: groups[groupKeys[0]].name,
    sectionName: sectionsJson[sectionKey].name
  };

  groupMap[key] = value;
});

productKeys.forEach(productKey => {
  let product = productsJson[productKey]

  let sectionName = sectionMap[product.sectionKey];
  let sectionItem = sectionMap[product.sectionKey].products[productKey];
  let group = groupMap[`${product.sectionKey}_${product.groupKey}`];

  sectionItem.description = `${group.productName} ${sectionItem.description}`;
  sectionName.name = group.sectionName;
});

fs.writeFileSync('actual.json', JSON.stringify(sectionMap, null, ' '));













