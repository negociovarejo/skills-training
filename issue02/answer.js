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

sectionValues.forEach((section, i) => {
  let groupKeys = Object.keys(section.groups);
  let groupValues = Object.values(section.groups);

  if (groupValues.length > 1) {
    groupValues.forEach((groupValue, j) => {
      let key = `${sectionKeys[i]}_${groupKeys[j]}`;
      let value = {
        productName: groupValue.name,
        sectionName: section.name
      };

      groupMap[key] = value;
    });
  }

  let key = `${sectionKeys[i]}_${groupKeys[0]}`;
  let value = {
    productName: groupValues[0].name,
    sectionName: section.name
  };

  groupMap[key] = value;
});

productValues.forEach((product, i) => {
  let sectionName = sectionMap[product.sectionKey];
  let sectionItem = sectionMap[product.sectionKey].products[productKeys[i]];
  let group = groupMap[`${product.sectionKey}_${product.groupKey}`];

  sectionItem.description = `${group.productName} ${sectionItem.description}`;
  sectionName.name = group.sectionName;
});

fs.writeFileSync('answer.json', JSON.stringify(sectionMap, null, ' '));













