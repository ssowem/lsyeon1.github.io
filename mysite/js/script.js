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


let slidesNum = 0;
let slideValue = 0;
let slideWidth;

const prevBtn = document.querySelector(".swiper-button-prev");
const nextBtn = document.querySelector(".swiper-button-next");
const slideWrap = document.querySelector(".slider-wrap");
const slides = document.querySelectorAll(".slide")
const paginationCurrent = document.querySelector(".swiper-pagination-current");
const paginationTotal = document.querySelector(".swiper-pagination-total");

function updatePagination() {
  paginationCurrent.textContent = slidesNum + 1;
  paginationTotal.textContent = slides.length;
}

function updateSlideWidth() {
  slideWidth = slideWrap.getBoundingClientRect().width;
  slideValue = -slidesNum * slideWidth;
  slideWrap.style.transform = `translateX(${slideValue}px)`;
}
  window.addEventListener("resize", () => {
    updateSlideWidth();
  });


  function next() {
  if (slidesNum < 2) {

    prevBtn.removeAttribute('disabled');
    slideValue -= slideWidth;

    slideWrap.style.transform = `translateX(${slideValue}px)`;

    slidesNum += 1;
    updatePagination();
  }

  if (slidesNum === 2) {
    nextBtn.setAttribute('disabled','true');
  }
}

function prev() {
  if (slidesNum > 0) {
    nextBtn.removeAttribute('disabled');
    slideValue += slideWidth;

    slideWrap.style.transform = `translateX(${slideValue}px)`;

    slidesNum -= 1;
    updatePagination();
  }

  if (slidesNum === 0) {
    prevBtn.setAttribute('disabled','true');
  }
}

function init() {
  prevBtn.setAttribute('disabled', 'true');
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  updatePagination();
}

init();
updateSlideWidth();

