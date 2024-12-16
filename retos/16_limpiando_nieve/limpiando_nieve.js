/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  const regex = /(.)\1/g;

  while(regex.test(s)){
    const matches = s.match(regex)
    matches.forEach(match => {
        s = s.replace(match,'')
    })
  }

  return s;
}

module.exports = removeSnow