const ul = document.querySelector("ul#hamburger_ul")
const hamburger = document.querySelector("div.hamburger")

hamburger.addEventListener("click", () => {
    ul.classList.toggle('shown')
    hamburger.classList.toggle('rotat')
    
})
