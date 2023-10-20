// 등장액션대상
const aboutSection = document.querySelectorAll('.section')
// 화면높이값 2/3 구하기
const screenH = window.innerHeight / 3*2;

// 등장액션대상 위치값 리턴함수
const retVal = ele => ele.getBoundingClientRect().top;

console.log(aboutSection)
console.log(screenH)
console.log("",retVal)

const showTit = x => {
  let xval = retVal(x);
  // if(xval < screenH && xval > 0){
  //   x.classList.add("on");
  // } 
  if (xval > 0 && xval < screenH) { // xval이 양수일 때만 클래스 추가
    x.classList.add("on");
  } 
};


window.addEventListener("scroll",()=>{
  // console.log("어바웃섹션",aboutSection)
  // showTit(aboutSection)
  for(let x of aboutSection)showTit(x);
 
});

// window.addEventListener("load", () => {
//   window.scrollTo(0, 0); // 스크롤 위치를 (0, 0)으로 설정
//   console.log("새로고침",aboutSection[0].classList);
//   for(let x of aboutSection){
//     console.log("x.클래스리스트",x.classList)
//     x.classList.remove("on");
//   };
// });



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

// $(window).scroll(function(){
//   const bg = 
// })


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

window.onload = fadeOut;






// 어바웃 섹션 mbti 텍스트 부분
// const string = "새로운 경험의 대한 도전이 늘 즐겁고, 어려운 일에도 주저하지 않아요😀";


// const str = string.split("");
// const el = document.getElementById('str');

// (function animate(){
//   str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
//   const running = setTimeout(animate, 60);
// })();








