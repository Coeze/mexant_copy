const graphics = document.querySelector("div.graphics")
const webDesign = document.querySelector("div.web_design")
const webCoding = document.querySelector("div.web_coding")
const webDesignButton = document.querySelector("div#wd")
const webCodingButton = document.querySelector("div#wc")
const GraphicsButton = document.querySelector("div#gr")
const forwardArrow = document.querySelector("div.forward_arrow")
const backArrow = document.querySelector("div.back_arrow")
const Header = document.querySelector(".index_header")


const urls = ["http://127.0.0.1:5500/media/images/main_background.jpg", 'http://127.0.0.1:5500/media/images/slide2.jpg', 'http://127.0.0.1:5500/media/images/slide3.jpg']

forwardArrow.addEventListener("click", () => { 
const style = window.getComputedStyle(Header, false)  
const url = style.backgroundImage.slice(4, -1).replace(/"/g, "");  
const currIdx = urls.indexOf(url)
const newIdx = (currIdx + 1) % urls.length
Header.style.backgroundImage = `url(${urls[newIdx]})`
Header.style.transition = "all 2s";

})

backArrow.addEventListener("click", () => { 
    const style = window.getComputedStyle(Header, false)  
    const url = style.backgroundImage.slice(4, -1).replace(/"/g, "");  
    const currIdx = urls.indexOf(url)
    const newIdx = Math.abs((currIdx - 1) % urls.length)
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

