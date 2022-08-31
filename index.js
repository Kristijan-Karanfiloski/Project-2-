const mainContainer =document.querySelector(".main-container")
const ratingContainer = document.querySelector(".rating")
const submitButton=document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")


submitButton.addEventListener("click", () => {
    ratingContainer.classList.remove("hidden")
    mainContainer.style.display="none"
})


rates.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        rating.innerHTML=rate.innerHTML
    } )
})
