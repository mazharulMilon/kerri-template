const themeIcon = document.querySelector('.t-icon');

themeIcon.addEventListener("click", () => {
    document.querySelector('.theme-swicther').classList.toggle("active");
});


const themeCss = document.querySelectorAll('.theme-css');

function themeChange(color){
    localStorage.setItem("kerriTheme", color);
    changeColor();
}

function changeColor(){
    themeCss.forEach(style => {
        if(localStorage.getItem("kerriTheme") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled", "true");
        }
    })
}

if(localStorage.getItem("kerriTheme") !== ""){
    changeColor();
}


window.addEventListener("scroll", () => {
    document.querySelector('.theme-swicther').classList.remove("active");
})