window.onload = function(){
  
  // debugger;
  const elm = document.querySelectorAll('.section');
  const elmCount = elm.length;
  // debugger;
  elm.forEach(function(item, index){
    // debugger;
    item.addEventListener('mousewheel', function(event){
      // debugger;
      event.preventDefault();
      let delta = 0;

      if (!event) event = window.event;
      if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
      } 
      else if (event.detail)
          delta = -event.detail / 3;

      let moveTop = window.scrollY;
      let elmSelector = elm[index];

      // wheel down : move to next section
      if (delta < 0){
        if (elmSelector !== elmCount-1){
          try{
            moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
          }catch(e){}
        }
      }
      // wheel up : move to previous section
      else{
        if (elmSelector !== 0){
          try{
            moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
          }catch(e){}
        }
      }

      const body = document.querySelector('html');
      window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
    });
  });
  fadeOut();
}


// window.addEventListener('load',function(){
//   const loadingModal = document.getElementById('loading');
//   const main = document.getElementById('maincontent')
//   loadingModal.style.display = 'none';
//   main.style.display = 'block';
  
// })




window.onscroll = function(){
  const mainTop = document.documentElement.scrollTop;
  const bg = document.getElementById("mainbg");
  const mainText = document.getElementById("main-text");
  const mainNav = document.getElementById("mainnav")
  // const hamBtn = document.getElementById("ham-btn")

  // const gitIcon = document.getElementById("giticon");
  // const gitText = document.getElementById("gittext");

  if(mainTop > 100) {
    bg.setAttribute(
      "style",
      "width:100%; height: 100vh; border-radius:0; top:0;")
    mainText.setAttribute(
      "style",
      "top:5%")
    mainNav.setAttribute(
      "style",
      "bottom:5%"
    )

  } else {
    bg.setAttribute(
      "style",
      "width: 90%; height: 1110px; border-radius:555px; top:20%;")
      mainText.setAttribute(
        "style",
        "top:10")
      mainNav.setAttribute(
        "style",
        "bottom:0"
      )
  } 
}


var swiper = new Swiper(".content-slider", {
  spaceBetween: 100,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction"
  // },
  // navigator: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  loop:true,
  loopedSlides: 2,
  speed: 3000,
});

function loader(){
  document.querySelector('.swiper-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

// window.onload = fadeOut;






// 어바웃 섹션 mbti 텍스트 부분
// const string = "새로운 경험의 대한 도전이 늘 즐겁고, 어려운 일에도 주저하지 않아요😀";


// const str = string.split("");
// const el = document.getElementById('str');

// (function animate(){
//   str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
//   const running = setTimeout(animate, 60);
// })();








