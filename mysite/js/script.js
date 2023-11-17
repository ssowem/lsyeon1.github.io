const targetElement = document.querySelectorAll('.scroll');
const section = document.querySelectorAll('section')
const crossPoint = .3;

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('scroll-action');
      } 
      else {entry.target.classList.remove('scroll-action');}
  });

}, {
  threshold: crossPoint
});

targetElement.forEach(element => {
  observer.observe(element);
})




const mainBg = document.getElementById("round-bg");
const mainIntro = document.getElementById("main-intro")


// 스크롤 위치 초기화
const savedScrollPosition = localStorage.getItem("scrollPosition");
if (savedScrollPosition) {
  window.scrollTo(0, parseInt(savedScrollPosition));
}

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 100) {
    mainBg.style.width = "100%";
    mainBg.style.borderRadius = "0";
    mainBg.style.top = "0";
    mainIntro.style.top = "45%";

    
  } else {
    mainBg.style.width = "90%";
    mainBg.style.borderRadius = "555px";
    mainBg.style.top = "20%";
    mainIntro.style.top = "57%";

  }

  localStorage.setItem("scrollPosition", scrollPosition);
});


var swiper = new Swiper(".content-slider", {
  spaceBetween: 100,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop:true,
  loopedSlides: 2,
  speed: 4000,
});

function loader(){
  document.querySelector('.swiper-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;



