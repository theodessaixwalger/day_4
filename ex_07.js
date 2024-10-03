document.addEventListener("DOMContentLoaded", function(){
document.querySelector(".cart-btn").textContent = "CHANGE COLOR"
document.querySelector(".cart-btn").addEventListener("click", changecolor);
})
function changecolor(){
let color = '#' + Math.floor(Math.random() * 15183147).toString(16)
document.body.style.backgroundColor = color;
}