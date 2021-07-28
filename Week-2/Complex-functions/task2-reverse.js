const splitString = (str) => {
    let resultArray = [];              
    let tempString = '';               
    for(var i = 0; i< str.length;i++){ 
        if(str[i] !== ' '){            
          tempString += str[i];        
         } else {
          resultArray.push(tempString);
          tempString = "";             
        }
    }
    if(tempString){                      //new step
       resultArray.push(tempString);    
    }
    return resultArray;                
 }

 let word = "Saya belajar Javascript";
 console.log(word);
 let div = splitString(word);

 
 const reverseWord = (word) => {
    let ret = new Array;
    for(let i = word.length-1; i >= 0; i--) {
        ret.push(word[i]);
    }
    return ret;
}

console.log(reverseWord(div));