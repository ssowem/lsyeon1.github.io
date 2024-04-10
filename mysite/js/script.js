const targetElement = document.querySelectorAll('.scroll');
const section = document.querySelectorAll('section')
const crossPoint = .3;

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-action');
    }
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
  updatePagination();
});


function next() {
  if (slidesNum < slides.length - 1) {
    prevBtn.removeAttribute('disabled');
    slideValue -= slideWidth;
    slideWrap.style.transform = `translateX(${slideValue}px)`;
    slidesNum += 1;
    updateSlideWidth();
    updatePagination();
  }

  if (slidesNum === slides.length - 1) {
    nextBtn.setAttribute('disabled', true);
  }
}

function prev() {
  if (slidesNum > 0) {
    nextBtn.removeAttribute('disabled');
    slideValue += slideWidth;
    slideWrap.style.transform = `translateX(${slideValue}px)`;
    slidesNum -= 1;
    updateSlideWidth();
    updatePagination();
  }

  if (slidesNum === 0) {
    prevBtn.setAttribute('disabled', true);
  }
}

// 터치 슬라이드 영역
let touchStartX = 0;
let touchEndX = 0;
let touchMoved = false;

// 터치이벤트 시작 위치
function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
  touchMoved = false;
}

// 이동 중 마지막 위치
function handleTouchMove(e) {
  if (touchStartX !== 0) {
    touchEndX = e.touches[0].clientX;
    touchMoved = true;
    const threshold = 10;
    const distance = touchStartX - touchEndX;

    // 움직임이 설정값 10보다 클때 페이지 스크롤 방지
    //  math.abs함수는 절대값을 반환해서 +,-를 무시함. 즉, 양쪽 움직임을 감지
    if(Math.abs(distance) > threshold) {
      e.preventDefault();
    }
  }

}

// 터치이벤트 종료하는 순간을 감지하고 좌우이동 결정
function handleTouchEnd() {
  if (!touchMoved) {
    return;
  }
  const threshold = 50; //최소 값 설정하기
  const distance = touchStartX - touchEndX; //이동된 거리 계산한 값

  //왼쪽으로 이동한거리가 설정값보다 컸을때 next()호출
  if (distance > threshold) {
    console.log("next()호출")
    next()
  }

  //오른쪽으로 이동한거리가 설정값보다 작을때(즉,-50보다 작을때) prev()호출
  else if (distance < -threshold) {
    console.log("prev()호출")
    prev();
  }
}

// { passive: false } ios에서 e.preventDefault()작동 (페이지스크롤방지)
function initTouchEvents() {
  slideWrap.addEventListener('touchstart', handleTouchStart, false);
  slideWrap.addEventListener('touchmove', handleTouchMove,{ passive: false });
  slideWrap.addEventListener('touchend', handleTouchEnd, false);
}

function init() {
  prevBtn.setAttribute('disabled', 'true');
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  updatePagination();
  updateSlideWidth();
  initTouchEvents();
}

init();
