// let but=document.querySelector(button)
let author=document.querySelector('#author')
let book=document.querySelector('#book')
let form=document.querySelector('.form')
// let output=document.querySelector('.output')
let ulone=document.querySelector('.bookL')
form.addEventListener('submit',change)
function change(e){
    e.preventDefault()
  let inputa=author.value
  let inputb=book.value
ulone.innerHTML+=`<li class='bookdiv'><p>${inputb}</p><p>${inputa}</p><button class='btn'>remove</button></li>
`
let butns =document.querySelectorAll('.btn')
// Button.addEventListener('click',butns),
let bookdiv=document.querySelector('.bookdiv')
// 

butns.forEach(function(btn){
btn.addEventListener('click',function(){
bookdiv.remove()
})
})




}
