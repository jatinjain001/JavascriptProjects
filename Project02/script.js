const units=document.getElementById('unit')
const con=document.getElementById('convert')
const input=document.getElementById('inputval')


const convertBtn=document.querySelector('.btn')
const output=document.getElementById('conversion')
function outputList(){
    var units=document.getElementById('convert')
    var converted=units.options[units.selectedIndex].value;
    return converted
}
function list(){  
        var units=document.getElementById('unit')
        var toBeConverted=units.options[units.selectedIndex].value;
        return toBeConverted;
}
const convert= function(tobeConverted=list(),converted=outputList()){
    
    let answer=parseFloat(output.value)
    const number=parseFloat(input.value);
    if(tobeConverted === converted){
        answer=number
    }
    else if(tobeConverted === "usd" ){
        if(converted === "INR"){
            answer=number*83.27
        }
        if(converted === "euros"){
            answer=number*0.93
        }
        if(converted === "pound"){
            answer=number*0.80
        }
        if(converted === "dinar"){
            answer=number*0.308
        }
        if(converted === "taka"){
            answer=number*109.84
        }
        if(converted === "yuan"){
            answer=number*7.27
        }
    
    }
    else if(tobeConverted === "pound" ){
        if(converted === "INR"){
            answer=number*102.49
        }
        if(converted === "euros"){
            answer=number*1.15
        }
        if(converted === "usd"){
            answer=number*1.23
        }
        if(converted === "dinar"){
            answer=number*0.38
        }
        if(converted === "taka"){
            answer=number*136.24
        }
        if(converted === "yuan"){
            answer=number*8.97
        }
    
    }
    else if(tobeConverted === "euros" ){
        if(converted === "INR"){
            answer=number*89.05
        }
        if(converted === "pound"){
            answer=number*0.87
        }
        if(converted === "usd"){
            answer=number*1.07
        }
        if(converted === "dinar"){
            answer=number*0.33
        }
        if(converted === "taka"){
            answer=number*118.38
        }
        if(converted === "yuan"){
            answer=number*7.79
        }
    
    }
    else if(tobeConverted === "dinar" ){
        if(converted === "INR"){
            answer=number*269.68
        }
        if(converted === "euros"){
            answer=number*3.03
        }
        if(converted === "usd"){
            answer=number*3.24
        }
        if(converted === "pound"){
            answer=number*2.63
        }
        if(converted === "taka"){
            answer=number*358.47
        }
        if(converted === "yuan"){
            answer=number*23.59
        }
    
    }
    else if(tobeConverted === "taka" ){
        if(converted === "INR"){
            answer=number*0.75
        }
        if(converted === "euros"){
            answer=number*0.0085
        }
        if(converted === "usd"){
            answer=number*0.0090
        }
        if(converted === "dinar"){
            answer=number*0.0037
        }
        if(converted === "pound"){
            answer=number*0.0073
        }
        if(converted === "yuan"){
            answer=number*0.066
        }
    
    }
    else if(tobeConverted === "yuan" ){
        if(converted === "INR"){
            answer=number*11.63
        }
        if(converted === "euros"){
            answer=number*0.13
        }
        if(converted === "usd"){
            answer=number*0.14  
        }
        if(converted === "dinar"){
            answer=number*0.0425
        }
        if(converted === "taka"){
            answer=number*15.69
        }
        if(converted === "yuan"){
            answer=number*0.11
        }
    }
    else if(tobeConverted === "INR" ){
        if(converted === "pound"){
            answer=number*0.0098
        }
        if(converted === "euros"){
            answer=number*0.011
        }
        if(converted === "usd"){
            answer=number*0.012
        }
        if(converted === "dinar"){
            answer=number*0.0037
        }
        if(converted === "taka"){
            answer=number*1.33
        }
        if(converted === "yuan"){
            answer=number*0.087
        }
    
    }
    output.value=answer;
} 

