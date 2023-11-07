const rates ={
    "usd":{
        "INR":83.27,
        "pound":0.80,
        "euros":0.93,
        "taka": 109.84,
        "yuan": 7.27,
        "dinar": 0.308
    },
    "INR":{
        "usd":0.012,
        "pound":0.0098,
        "euros":0.011,
        "taka": 1.33,
        "yuan": 0.087,
        "dinar":0.0037

    },
    "pound":{
        "INR":102.49,
        "usd":1.23,
        "euros":1.15,
        "taka": 136.24,
        "yuan": 8.97,
        "dinar":0.38

    },
    "euros":{
        "INR":89.05,
        "pound":0.87,
        "usd":1.07,
        "taka": 118.38,
        "yuan": 7.79,
        "dinar":0.33
    },
    "taka":{
        "INR":0.75,
        "pound":0.0073,
        "euros":0.0085,
        "usd": 0.0090,
        "yuan": 0.066,
        "dinar":0.0037

    },
    "yuan":{
        "INR":11.63,
        "pound":0.11,
        "euros":0.13,
        "taka": 15.69,
        "usd": 0.14,
        "dinar":0.0425
    },
    "dinar":{
        "INR":269.68,
        "pound":2.63,
        "euros":3.03,
        "taka": 358.47,
        "yuan": 23.59,
        "usd":3.24
    }

}

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
    answer=number*rates[tobeConverted][converted]
    output.value=answer;
} 

