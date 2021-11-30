let btn = document.getElementById('btn');
let color = document.querySelector('.color');
let selectColors = document.getElementById('selectColors');
let colorArr = ['#FFDBDB','#00f9ff','#ab0000','#daa520'];

btn.addEventListener('click',function () {
    let randomNumber = chooseRandomNumber();
     color.innerHTML = colorArr[randomNumber]; 
     selectColors.style.backgroundColor = colorArr[randomNumber];
})



function chooseRandomNumber() {
     return  Math.floor(Math.random()*colorArr.length)
}