const investButton = document.querySelector("div#ci")
const marketButton = document.querySelector("div#cm")
const financeButton = document.querySelector("div#fp")
const investButtonAnchor = document.querySelector("div#ci a")
const marketButtonAnchor = document.querySelector("div#cm a")
const financeButtonAnchor = document.querySelector("div#fp a")
const investDiv = document.querySelector('div.invest')
const marketDiv = document.querySelector("div.market")
const financeDiv = document.querySelector("div.finance")



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