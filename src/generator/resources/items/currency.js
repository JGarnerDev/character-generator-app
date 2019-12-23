function copper(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { name: "Copper", quantity: q, value: 0.01, weight: 0.02 * q };
}
function silver(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { name: "Silver", quantity: q, value: 0.1, weight: 0.02 * q };
}
function electrum(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { name: "Electrum", quantity: q, value: 0.5, weight: 0.02 * q };
}
function gold(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { name: "Gold", quantity: q, value: 1, weight: 0.02 * q };
}
function platinum(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { name: "Platinum", quantity: q, value: 10, weight: 0.02 * q };
}

var currency = {
   copper,
   silver,
   electrum,
   gold,
   platinum
};

module.exports = currency;
