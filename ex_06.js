document.addEventListener("DOMContentLoaded", function() {
let phone = document.querySelector("img[src='../Iphone22.png']");    
if (phone) {
phone.addEventListener("mouseover", function() {
alert("Pretty, isn't it?");
});
}
});
window.addEventListener("DOMContentLoaded", function() {
window.addEventListener("resize", function(){
alert("size matters")
})
})