let palinWord = "saippuakivikauppias";
let x = palinWord.length;
let palindrome = true;

for(let i = 0; i <= (x/2); i++){
    if(palinWord[i] === palinWord[x - 1 - i]){
        palindrome = true;
        console.log(`Kata ${palinWord} adalah palindrome.`);
    } else{
        palindrome = false;
        console.log(`Kata ${palinWord} bukan palindrome.`);
        break;
    }
}
