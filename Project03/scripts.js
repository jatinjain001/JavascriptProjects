
start=document.getElementById('start')

stopp=document.querySelector('#stop')

function randomColor(){
    let color="#";
    const code="0123456789ABCDEF";
    for (let index = 0; index < 6; index++) {
        let number=Math.floor(Math.random()*100);
        color=color+code[number%16];
    }
    return color;
}

function myTimer(){
    document.body.style.backgroundColor=randomColor()
    
}
var myLoop
start.addEventListener('click',()=>{
    myLoop=setInterval(myTimer,1000)
})
stopp.addEventListener('click',()=>{
    clearInterval(myLoop)
    
})