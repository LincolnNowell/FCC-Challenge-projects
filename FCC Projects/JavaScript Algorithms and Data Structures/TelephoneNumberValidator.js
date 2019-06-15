function telephoneCheck(str) {
  const regex = /^[1]?\s?(\d{3}|(\d{3}))[ -]?\d{3}[ -]?\d{4}$/
  const regex2 = /^[1]?\s?\(\d{3}\)[ -]?\d{3}[ -]?\d{4}$/

  if(str.match(regex)){
    return true;
  }
  else if (str.match(regex2)){
    return true;
  }
  return false;
}

console.log(telephoneCheck("(555)-555-5555"));