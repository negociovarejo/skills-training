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

// sectionValues.forEach((section, i) => {
sectionKeys.forEach((sectionKey, i) => {
  // let groupKeys = Object.keys(section.groups);
  // let groupValues = Object.values(section.groups);
  let group = sectionsJson[sectionKey];
  let groupKeys = Object.keys(group);

  // if (groupValues.length > 1) {
  if (groupKeys.length > 1) {
    // groupValues.forEach((groupValue, j) => {
    groupKeys.forEach(groupKey => {
      let key = `${sectionKey}_${group[groupKey]}`;
      let value = {
        productName: group[groupKey].name,
        sectionName: sectionsJson[sectionKey].name
      };

      groupMap[key] = value;
    });
  }

  let key = `${sectionKey}_${groupKeys[0]}`;
  let value = {
    productName: group[groupKeys[0]].name,
    sectionName: sectionsJson[sectionKey].name
  };

  groupMap[key] = value;
});

console.log(groupMap);

// productValues.forEach((product, i) => {
productKeys.forEach(productKey => {
  let product = productsJson[productKey]

  // let sectionName = sectionMap[product.sectionKey];
  // let sectionItem = sectionMap[product.sectionKey].products[productKey];
  let group = groupMap[`${product.sectionKey}_${product.groupKey}`];
  console.log(group);

  // sectionItem.description = `${group.productName} ${sectionItem.description}`;
  // sectionName.name = group.sectionName;
});

fs.writeFileSync('answer.json', JSON.stringify(sectionMap, null, ' '));













