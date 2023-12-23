// pair programming between Mike & Rey
const wordSearch = (letters, word) => { 
  let result = false;
  const horizontalJoin = letters.map(ls => ls.join(''));
  let vertical = [];
  for (let row = 0; row < letters.length; row++) {
    for (let column = 0; column < letters[row].length; column++) {
        if (row === 0) {
          vertical.push([letters[row][column]]);
        } else {
          vertical[column].push(letters[row][column]);
      }
    }
  }        
  
  const verticalJoin = vertical.map(ls => ls.join(''));

  for (let l of verticalJoin) {
    if (l.includes(word)) {
      result = true;
    }
  }

  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return result;
}

module.exports = wordSearch