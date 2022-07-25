const graphics = document.querySelector("div.graphics")
const webDesign = document.querySelector("div.web_design")
const webCoding = document.querySelector("div.web_coding")
const webDesignButton = document.querySelector("div#wd")
const webCodingButton = document.querySelector("div#wc")
const GraphicsButton = document.querySelector("div#gr")
const forwardArrow = document.querySelector("div.forward_arrow")
const backArrow = document.querySelector("div.back_arrow")
const Header = document.querySelector(".index_header")
let ul = document.querySelector('ul#hamburger_ul')
let hamburger = document.querySelector('.hamburger')
const pages_child1 = document.querySelector('div#servicese')
const pages_child2 = document.querySelector('div#contactUs')
const pages_child3 = document.querySelector("div#abouts")
const page = document.querySelector('div#expand')
const anchor1 = document.querySelector('div#servicese a')
const anchor2 = document.querySelector('div#contactUs a')
const anchor3 = document.querySelector("div#abouts a")
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

const urls = ["./media/images/main_background.jpg", './media/images/slide2.jpg', './media/images/slide3.jpg']

forwardArrow.addEventListener("click", () => { 
const style = window.getComputedStyle(Header, false) 
const url = `.${style.backgroundImage.slice(26, -1).replace(/"/g, "")}`; 
const currIdx = urls.indexOf(url)
const newIdx = (currIdx + 1) % urls.length
Header.style.backgroundImage = `url(${urls[newIdx]})`
Header.style.transition = "all 2s";

})

backArrow.addEventListener("click", () => { 
    const style = window.getComputedStyle(Header, false)  
    const url = `.${style.backgroundImage.slice(26, -1).replace(/"/g, "")}`;  
    const currIdx = urls.indexOf(url)
    const newIdx = Math.abs((currIdx - 1)) % urls.length
    Header.style.transition = "all 2s";
    Header.style.backgroundImage = `url(${urls[newIdx]})`
    
    })

GraphicsButton.addEventListener("click", () => {
    if (!(webDesign.classList.contains("hide"))){
        webDesign.classList.add("hide")
    }
    if (!(webCoding.classList.contains("hide"))){
        webCoding.classList.add("hide")
    }
    if (graphics.classList.contains("hide")){
        graphics.classList.remove("hide")
    }
    
})
webDesignButton.addEventListener("click", () => {
    if (!(graphics.classList.contains("hide"))){
        graphics.classList.add("hide")
    }
    if (!(webCoding.classList.contains("hide"))){
        webCoding.classList.add("hide")
    }
    if (webDesign.classList.contains("hide")){
        webDesign.classList.remove("hide")
    }
})
webCodingButton.addEventListener("click", () => {
    if (!(webDesign.classList.contains("hide"))){
        webDesign.classList.add("hide")
    }
    if (!(graphics.classList.contains("hide"))){
        graphics.classList.add("hide")
    }
    if (webCoding.classList.contains("hide")){
        webCoding.classList.remove("hide")
    }

})

