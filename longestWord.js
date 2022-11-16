function LongestWord(sen) {

    const template = /^[A-Z]$/i;

    let tem = '';
    let long = '';
    for(let s of sen){
      if(template.test(s)){
        tem += s;
      }else{
        long = tem.length > long.length?tem:long;
        tem = '';
      }
    }
    long = tem.length > long.length?tem:long;
    // code goes here
    return long;

  }

  // keep this function call here
  console.log(LongestWord("fun&!! time"));
