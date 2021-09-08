// document.querySelector('.js-btn').addEventListener('click',btnFunc)

// function btnFunc (e) {
//    let btn = document.querySelector('.js-btn')
//    btn.style.backgroundColor = '#ADD8E6'
// }




// add an event to button one and two
// if both button are clicked, display a new page with  recommendations 
// add the page to HTML (hide it first)

document.querySelector('#btncheck1').addEventListener('click',buttonFunc)

function buttonFunc(e) {
let container = document.querySelector('.entire-container')
if (container.style.display === "none") {
    container.style.display = "block"
 }
}
