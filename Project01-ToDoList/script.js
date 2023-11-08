const itemlist=document.querySelectorAll('.items')

let list=document.querySelector('.item')
let text=document.getElementById('listcontent')


const button=document.getElementById('additem')

console.log(text);

const addItem=function(){
    let li=document.createElement('li')
        li.setAttribute('class','item')
        textitem=document.createTextNode(text.value );
        li.appendChild(textitem)
        itemlist[0].appendChild(li)
        text.value=""
}

button.addEventListener('click',addItem)
itemlist.forEach(()=>{
    itemlist[0].addEventListener('click',(e)=>{
        itemlist[0].removeChild(e.target);
    })
})
