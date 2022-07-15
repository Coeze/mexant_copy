const spans = document.querySelectorAll("div.span_toggle span");
const texts = document.querySelectorAll("p.toggle_text_hidden");
const largerTxts = document.querySelectorAll("div.actual_toggle p.isolate");


spans.forEach((span, index) => {
span.addEventListener("click", ()=>{
    span.classList.toggle("about_span_rotate");
        texts[index].classList.toggle("toggle_text_hidden");

    
        largerTxts[index].classList.toggle("green_shade_text_about_toggle");
    
    
})

})

