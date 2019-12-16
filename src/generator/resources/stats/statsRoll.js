var statsRollMethod = require("./statRollMethods");

function statsRoll(x) {
  let arr = [];
  for (let i = 0; i < 6; i++) {
    if (x === undefined){
        arr.push(statsRollMethod[0]())
    } else {
        arr.push(statsRollMethod[1](x))
    }
  }
  return arr
}

module.exports = statsRoll
