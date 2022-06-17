const graphics = document.querySelector("div.graphics")
const webDesign = document.querySelector("div.web_design")
const webCoding = document.querySelector("div.web_coding")
const webDesignButton = document.querySelector("a#wd")
const webCodingButton = document.querySelector("a#wc")
const GraphicsButton = document.querySelector("a#gr")


GraphicsButton.addEventListener("click", () => {
    if (webDesign.style.display == "block"){
        webDesign.classList.add(".hide")
    }

    if (webCoding.style.display == "block"){
        webCoding.classList.add(".hide")
    }
    graphics.classList.add(".show")
})
webDesignButton.addEventListener("click", () => {
    webDesign.classList.add(".show")
    if (webCoding.style.display == "block"){
        webCoding.classList.add(".hide")
    }
    if (graphics.style.display == "block"){
    graphics.classList.add(".hide")
    }
})
webCodingButton.addEventListener("click", () => {
    if (webDesign.style.display == "block"){
        webDesign.classList.add(".hide")
    }

    webCoding.classList.add(".show")
    if (graphics.style.display == "block"){
        graphics.classList.add(".hide")
        }

})