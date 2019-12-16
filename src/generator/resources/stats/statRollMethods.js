// Rolling a single stat

function roll3d6() {
  let d1 = Math.ceil(Math.random() * 6);
  let d2 = Math.ceil(Math.random() * 6);
  let d3 = Math.ceil(Math.random() * 6);
  return d1 + d2 + d3;
}

function rollXd6DropLowestXdice(x) {
    
  let arr = [];
  for (let i = 0; i < 3 + x; i++) {
    arr.push(Math.ceil(Math.random() * 6));
  }

  arr.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < x; i++) {
    arr.shift();
  }

  let sum = arr.reduce((a, b) => a + b, 0);
  return sum;
}

module.exports = [roll3d6, rollXd6DropLowestXdice];
