const fs = require('fs');

const productsJson = JSON.parse(fs.readFileSync('./products.json'));
const sectionsJson = JSON.parse(fs.readFileSync('./sections.json'));

const productKeys = Object.keys(productsJson);
const productValues = Object.values(productsJson);

const sectionKeys = Object.keys(sectionsJson);
const sectionValues = Object.values(sectionsJson);

sectionValues.forEach(item => {
  delete item.name;
});

const sectionsNameMap = {};
// const productsMap = {};

// const productsMap = productKeys.forEach((key, i) => {
//   productsMap[key] = productValues[i];
// });

// sectionKeys.forEach((section, i) => {
//   sectionsNameMap[section] = sectionValues[i].name;
// });



// const productsBySection = sectionKeys.map((section) => {
//   return {
//     [section]: {
//       name: sectionsNameMap[section],
//       products: { }
//     }
//   }
// });

console.log(sectionValues);













