const buttons = document.querySelectorAll(".download_pdf");
const contactForm = document.querySelector('form.contact_form')
const confirmation = document.querySelector("div.confirmation")
const closeIcon = document.querySelector("span#close_icon")



// set up paypal payment with this link
// https://www.paypal.com/us/brc/article/how-to-add-a-donate-button


closeIcon.addEventListener("click", ()=>{
    confirmation.classList.remove("show_confirmation")
})

const sendMail = (e) =>{
    e.preventDefault()
    const params = {
        name:document.getElementById("name").value,
        message:document.getElementById("message").value, 
        email:document.getElementById("email").value
    }
    contactForm.reset()
    emailjs.send("service_wgyaap9", "template_7vu02kg", params)
    .then(function(res){
        console.log("success", res.status)
        if (res.status == 200){
            confirmation.classList.add("show_confirmation")
            setTimeout(()=> {
                confirmation.classList.remove("show_confirmation")
            }, 5000)
        }
        
    })
  
}

contactForm.addEventListener("submit", sendMail)
