const spans = document.querySelectorAll("div.span_toggle span");
const texts = document.querySelectorAll("p.toggle_text_hidden");
const largerTxts = document.querySelectorAll("div.actual_toggle p.isolate");
const popup = document.querySelector("div.contact_support_popup")
const contactSupportBtn = document.querySelector("div.contact_button button")
const closePopUpBtn = document.querySelector("span#close_popup")
const pages_child1 = document.querySelector('div#servicese')
const pages_child2 = document.querySelector('div#contactUs')
const pages_child3 = document.querySelector("div#abouts")
const page = document.querySelector('div#expand')
const anchor1 = document.querySelector('div#servicese a')
const anchor2 = document.querySelector('div#contactUs a')
const anchor3 = document.querySelector("div#abouts a")

closePopUpBtn.addEventListener("click" , () => {
    popup.style.visibility = "hidden";
})

contactSupportBtn.addEventListener("click", () => {
 
 if (popup.style.visibility === "visible"){
popup.style.visibility = "hidden"
 }else{
    popup.style.visibility = "visible";
 }
 popup.classList.toggle("pop")
})



spans.forEach((span, index) => {
span.addEventListener("click", ()=>{
    span.classList.toggle("about_span_rotate");
        texts[index].classList.toggle("toggle_text_hidden");

    
        largerTxts[index].classList.toggle("green_shade_text_about_toggle");
    
    
})

})



page.addEventListener("mouseenter", () => {
    
    pages_child1.style.visibility = "visible";
    pages_child1.style.transition = "all 0.5s"
    pages_child2.style.visibility = "visible";
    pages_child2.style.transition = "all 0.5s"
    pages_child3.style.visibility = "visible";
    pages_child3.style.transition = "all 0.5s"


})
anchor1.addEventListener("mouseenter", () => {

pages_child1.style.visibility = "visible";

pages_child2.style.visibility = "visible";

pages_child3.style.visibility = "visible";


})
anchor2.addEventListener("mouseenter", () => {

pages_child1.style.visibility = "visible";

pages_child2.style.visibility = "visible";

pages_child3.style.visibility = "visible";


})
anchor1.addEventListener("mouseout", () => {

pages_child1.style.visibility = "hidden";

pages_child2.style.visibility = "hidden";

pages_child3.style.visibility = "hidden";


})
anchor2.addEventListener("mouseout", () => {

pages_child1.style.visibility = "hidden";

pages_child2.style.visibility = "hidden";

pages_child3.style.visibility = "hidden";



})
anchor3.addEventListener("mouseout", () => {

pages_child1.style.visibility = "hidden";

pages_child2.style.visibility = "hidden";

pages_child3.style.visibility = "hidden";



})
pages_child1.addEventListener("mouseenter", () => {

pages_child1.style.visibility = "visible";

pages_child2.style.visibility = "visible";

pages_child3.style.visibility = "visible";


})
pages_child2.addEventListener("mouseenter", () => {

pages_child1.style.visibility = "visible";

pages_child2.style.visibility = "visible";

pages_child3.style.visibility = "visible";


})
pages_child3.addEventListener("mouseenter", () => {

pages_child1.style.visibility = "visible";

pages_child2.style.visibility = "visible";

pages_child3.style.visibility = "visible";



})
page.addEventListener("mouseout", () => {
pages_child1.style.visibility = "hidden";
    
pages_child2.style.visibility = "hidden";

pages_child3.style.visibility = "hidden";

})

pages_child1.addEventListener("mouseout", () => {
pages_child1.style.visibility = "hidden";
    
pages_child2.style.visibility = "hidden";

pages_child3.style.visibility = "hidden";

})
pages_child2.addEventListener("mouseout", () => {
pages_child1.style.visibility = "hidden";
    
pages_child2.style.visibility = "hidden";

pages_child3.style.visibility = "hidden";

})
