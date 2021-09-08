document.querySelector('.js-btn').addEventListener('click',btnFunc)

function btnFunc (e) {
   let btn = document.querySelector('.js-btn')
   btn.style.backgroundColor = '#ADD8E6'
}

getReco()

function getReco (e) {
let button1 = document.querySelectorAll('#btncheck1');
let button2 = document.querySelectorAll('#btncheck2');
 if (button1) {
        button1.innerHTML ='you clicked me'
    }
}

getReco()