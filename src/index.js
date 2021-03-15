module.exports = function reverse (n) {
  let str = String(Math.abs(n));
  let newstr = '';
  for (i = str.length; i > 0; i--)
  {
    newstr = newstr + str[i -1];
    } 

    return newstr;
}
