const transformRoNu = (number) => {
  let roman = '';
  if (number < 4) {
    for (let i = 1; i <= number; i++) {
      key = 'I';
      roman += key;
    }
  } else if (number == 4) {
    roman = 'IV';
  } else if (number == 5) {
    roman = 'V';
  }

  return roman;
};

module.exports = transformRoNu;
