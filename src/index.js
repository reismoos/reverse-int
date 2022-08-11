module.exports = function reverse (n) {
    if (n<0){
        n = -n
      }
  let result='';
  for (let i = String(n).length - 1; i >= 0; i--) {
    result += String(n)[i];
  }
  return +result;
}
