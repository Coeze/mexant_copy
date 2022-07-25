const spans = document.querySelectorAll("div.span_toggle span");
const texts = document.querySelectorAll("p.toggle_text_hidden");
const largerTxts = document.querySelectorAll("div.actual_toggle p.isolate");
const popup = document.querySelector("div.contact_support_popup")
const contactSupportBtn = document.querySelector("div.contact_button button")
const closePopUpBtn = document.querySelector("span#close_popup")

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

