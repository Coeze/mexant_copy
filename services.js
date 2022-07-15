const investButton = document.querySelector("div#ci")
const marketButton = document.querySelector("div#cm")
const financeButton = document.querySelector("div#fp")
const investButtonAnchor = document.querySelector("div#ci a")
const marketButtonAnchor = document.querySelector("div#cm a")
const financeButtonAnchor = document.querySelector("div#fp a")
const investDiv = document.querySelector('div.invest')
const marketDiv = document.querySelector("div.market")
const financeDiv = document.querySelector("div.finance")
let ul = document.querySelector('ul#hamburger_ul')
let hamburger = document.querySelector('.hamburger')
const pages_child1 = document.querySelector('div#servicese')
const pages_child2 = document.querySelector('div#contactUs')
const pages_child3 = document.querySelector("div#abouts")
const page = document.querySelector('div#expand')
const anchor1 = document.querySelector('div#servicese a')
const anchor2 = document.querySelector('div#contactUs a')
const anchor3 = document.querySelector("div#abouts a")


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


hamburger.addEventListener("click", () => {
ul.classList.toggle('shown')
hamburger.classList.toggle('rotat')
})



investButton.addEventListener("click", ()=>{
    if (!marketDiv.classList.contains("service_hide")){
        marketDiv.classList.add("service_hide")
    }
    if (!financeDiv.classList.contains("service_hide")){
        financeDiv.classList.add("service_hide")
    }
    if (investDiv.classList.contains("service_hide")){
        investDiv.classList.remove("service_hide")
    }
    investButtonAnchor.classList.add("service_anchor_color_toggle")
    if (financeButtonAnchor.classList.contains("service_anchor_color_toggle")){
        financeButtonAnchor.classList.remove("service_anchor_color_toggle")
    }
    if (marketButtonAnchor.classList.contains("service_anchor_color_toggle")){
        marketButtonAnchor.classList.remove("service_anchor_color_toggle")
    }
})
marketButton.addEventListener("click", ()=>{
    if (!investDiv.classList.contains("service_hide")){
        investDiv.classList.add("service_hide")
    }
    if (!financeDiv.classList.contains("service_hide")){
        financeDiv.classList.add("service_hide")
    }
    if (marketDiv.classList.contains("service_hide")){
        marketDiv.classList.remove("service_hide")
    }
    marketButtonAnchor.classList.add("service_anchor_color_toggle")
    if (investButtonAnchor.classList.contains("service_anchor_color_toggle")){
            investButtonAnchor.classList.remove("service_anchor_color_toggle")
    }
    if (financeButtonAnchor.classList.contains("service_anchor_color_toggle")){
        financeButtonAnchor.classList.remove("service_anchor_color_toggle")
    }
})
financeButton.addEventListener("click", ()=>{
    if (!marketDiv.classList.contains("service_hide")){
        marketDiv.classList.add("service_hide")
    }
    if (!investDiv.classList.contains("service_hide")){
        investDiv.classList.add("service_hide")
    }
    if (financeDiv.classList.contains("service_hide")){
        financeDiv.classList.remove("service_hide")
    }
    financeButtonAnchor.classList.add("service_anchor_color_toggle")
    if (investButtonAnchor.classList.contains("service_anchor_color_toggle")){
            investButtonAnchor.classList.remove("service_anchor_color_toggle")
    }
    if (marketButtonAnchor.classList.contains("service_anchor_color_toggle")){
        marketButtonAnchor.classList.remove("service_anchor_color_toggle")
    }
})