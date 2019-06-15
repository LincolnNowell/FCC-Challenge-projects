function rot13(str) { // LBH QVQ VG!
  let replstr = "";
  for(let letter in str){
      if(str.charCodeAt(letter) > 64 && 
      str.charCodeAt(letter) < 91){
          let value = str.charCodeAt(letter) + 13;
          if(value > 90){value = (value - 90) + 64}
          replstr += String.fromCharCode(value);
      }
      else{
          replstr += str[letter];
      }
  }

  return replstr;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));