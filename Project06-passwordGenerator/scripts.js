const output= document.getElementById('pass-box')
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghojklmnopqrstuvwxyz"
const numberSet="0123456789"
const symbols="`~!@#$%^&*()_+-={}[]<>"


//selectors
const totalCh=document.getElementById('total-char')
const upperInput=document.getElementById('upper-case')
const lowerInput=document.getElementById('lower-case')
const numberInput=document.getElementById('numbers')
const symbolInput=document.getElementById('symbols')



const getRandom=(set)=>{
    return set[Math.floor(Math.random()*set.length)]
    
}

const generatePassword=(passWord="")=>{
    if(upperInput.checked){
        passWord+=getRandom(upperCase);
    }
    if(lowerInput.checked){
        passWord+=getRandom(lowerCase);
    }
    if(numberInput.checked){
        passWord+=getRandom(numberSet)
    }
    if(symbolInput.checked){
        passWord+=getRandom(symbols);
    }
    if(passWord.length < totalCh.value){
        return generatePassword(passWord);
    }
   
    output.innerText=passWord.slice(0,totalCh.value);
}

document.getElementById('btn').addEventListener('click',function(){
    generatePassword();
})
