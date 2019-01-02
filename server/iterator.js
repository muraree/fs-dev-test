const iterator = (it) => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(it.next());
  }
  return arr;
}

module.exports = iterator