function palindrome(str) {
    let word = str.toLowerCase();
    let regex = /[^a-z0-9]/i
  
    while(word.search(regex) != -1){
      let index = word.search(regex);
      word = word.slice(0,index) + word.slice(index + 1);
    }
    let endindex = word.length;
  
    for(let index = 0; index < word.length; ++index){
      --endindex;
      if(word[index] != word[endindex]){
        return false
      }
    }
    return true;
  }
  
  
  
  palindrome("_eye");