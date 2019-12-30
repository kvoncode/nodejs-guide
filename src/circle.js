const { PI } = Math;

exports.area = r => {
  console.log("circle.js is called as main script? :",require.main === module);
  return PI * r ** 2;
};

