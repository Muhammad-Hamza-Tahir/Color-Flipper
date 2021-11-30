


let btn = document.getElementById('btn');
let color = document.querySelector('.color')
let selectColors = document.getElementById('selectColors')
let arr = ['red','green','yellow','purple',]
//let arr =document.getElementById('')
function getRandomNumber() {
    return Math.floor(Math.random()* arr.length);
}

 btn.addEventListener('click',function () {
   let randomNumber = getRandomNumber()   ;
   selectColors.style.backgroundColor = arr[randomNumber]
  // document.body.style.backgroundColor = arr[randomNumber];
   color.innerHTML = arr[randomNumber]
   
 })
 