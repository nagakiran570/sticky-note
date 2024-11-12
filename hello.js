
const button=document.querySelector('button')
const cards =document.querySelector('.cards')
const input= document.querySelector('input')
const errors= document.querySelector('#errors')

button.addEventListener('click',()=>{
  let card=document.createElement('div')
  let text=document.createElement('p')
  text.style.margin='20px'
  
     if(input.value==""){
      console.log(errors.innerText="please enter text")
     }
     
     else{
  card.classList.add('card')
  cards.appendChild(card)
  card.appendChild(text)
  text.innerText=input.value
    }
})