function copper(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { name: "Copper", quantity: q, weight: 0.02 * q };
}
function silver(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { name: "Silver", quantity: q, weight: 0.02 * q };
}
function electrum(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { name: "Electrum", quantity: q, weight: 0.02 * q };
}
function gold(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { name: "Gold", quantity: q, weight: 0.02 * q };
}
function platinum(x) {
  let q = 1;
  if (x > 1) {
    q = x;
  }
  return { name: "Platinum", quantity: q, weight: 0.02 * q };
}

var currency = {
   copper,
   silver,
   electrum,
   gold,
   platinum
};

module.exports = currency;
