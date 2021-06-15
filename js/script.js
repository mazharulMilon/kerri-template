// ----------------------------------------------- actived the header when scroll --------------------------
const header = document.querySelector('header');

window.addEventListener("scroll", () => {
    if(scrollY > 0){
        header.classList.add("active");
    }else {
        header.classList.remove("active");
    }
})


var swiper = new Swiper(".client-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    loop:true,
});


// ------------------------ create a filter portfolio gallery ----------------

const portfolioNav = document.querySelector('.portfolio-nav'),
portfolioItem = document.querySelectorAll('.portfolio-item');

portfolioNav.addEventListener("click", (e) => {
    if(e.target.classList.contains("p-nav-item")){
        portfolioNav.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const data = e.target.dataset.filter;

        portfolioItem.forEach(item => {
            if(item.classList.contains(data) || data === "all"){
                item.classList.remove("hide");
                item.classList.add("active");
            }else {
                item.classList.add("hide");
                item.classList.remove("active");
            }
        })

    }
})

// ------------------------- when wondow scroll then hightlight the the nav with maching section  name

const section = document.querySelectorAll('section');
const navLink = document.querySelectorAll('.navbar a');

window.addEventListener("scroll", () => {
    let carrent = '';

    section.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
            carrent = section.getAttribute("id");
        }

    });

    navLink.forEach(a => {
        a.classList.remove("active");
        if(a.classList.contains(carrent)){
            a.classList.add("active");
        }
    })

})

// --------------------- responsive navbar -------------
const navToggler = document.querySelector('#toggler'),
navbar = document.querySelector('.nav');

navToggler.addEventListener("click", () => {
    navToggler.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})



window.addEventListener("scroll", () => {
    navToggler.classList.remove("fa-times");
    navbar.classList.remove("active");
});



// ----------------------- scrollTop click on btn ---------------------

const scrollTop = document.querySelector('#scrollTop');

window.addEventListener("scroll", () => {
    if(scrollY > 130){
        scrollTop.classList.add("active");
    }else {
        scrollTop.classList.remove("active");
    }
});

scrollTop.addEventListener("click", () => {
    document.querySelector('html').scrollTop = 0 + 'px';
})


var typed = new Typed(".typing", {
    strings:["Kerri Doe", "A Web Developer", "A Web Designer" , "Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

window.addEventListener("load", () => {
    AOS.init();
})