// 슬라이드 JS
'use strict'
$(function(){
    var width = 100;
    let animationSpeed = 2000;
    let pause = 3000;
    let currentSlide = 1;

    let slider = $('#main-slider')
    let slideContainer = $('.slides')
    let slides = $('.slide')
    let interval;


    
})



let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


window.onscroll = ()=>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')

    section.forEach((sec)=>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id')
        //  
        if(top >= offset && top < offset+height){
            navLinks.forEach((links)=>{
                links.classList.remove('active')
                // id 값만 가져와야함 문자열과 문자열 을 더해줌   * <-모든것 
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active')
            })
        }

    })

}

document.querySelector("#search-icon").onclick = ()=>{
    document.querySelector("#search-form").classList.toggle('active')
}

document.querySelector("#close").onclick = ()=>{
    document.querySelector("#search-form").classList.remove('active')
}



// let slide = document.querySelector('.homeslide')
// let slideContainer = document.querySelector('#main-slider')

// for(let i=0; i<slide.length; i++){
//     console.log(slide[i])
// }



// slide.forEach((item)=>{
//     let width = item.offsetWidth
//     console.log(width,item)
//     let animationSpeed = 2000;
//     let pause = 3000;
//     let currentSlide = 1;
//     let interval;

//     interval = setInterval(function(){
//         slideContainer.animate({'margin-left':"-="+ width}, animationSpeed, function(){
//             if( ++currentSlide === slide.length){
//                 currentSlide=1;
//                 slideContainer.classList('margin-left',0)
//             }
//         })
//     },pause)
    
// })


// console.log(menu)
// console.log(navbar)
// console.log(section)
// console.log(navLinks)