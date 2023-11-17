const menuCommon = document.querySelectorAll('.menubox-link');
menuCommon.forEach(item => onClick(item));

//dom을 클릭했을 때
function onClick(item){
    item.addEventListener("click", event => {
        
        //클릭한 객체에 색깔 넣기
        addClass(item);

        //나머지는 색깔 지우기
        removeClass(item);
    });
}

//색깔 넣기
function addClass(item){
    item.classList.add('active-bg');   
}

function removeClass(item){
    menuCommon.forEach(otherItem =>{
        if(otherItem !== item){
            otherItem.classList.remove('active-bg');
        }
    });
}



const selected = document.querySelectorAll('.selected')
// const arrowFold = document.querySelectorAll('.fold')

//const foldList = document.querySelectorAll('.fold');

selected.forEach(function(item){
    item.addEventListener('click', function(event){
        debugger;


        //화살표
        //foldList.forEach(item2 => item.classList.add("fold-active"));
        //item.classList.add("fold-active");
        const fold = item.querySelector('.fold');
        const isActive = fold.classList.contains("fold-active");

        if(isActive){
            fold.classList.remove("fold-active");
        }else{
            fold.classList.add("fold-active");
        }


        //foldList.forEach(fold => fold.classList.add("fold-active"));

        const targetId = item.getAttribute('data-target');
        const sub = document.getElementById(targetId);
        
        if(sub) {
            sub.classList.toggle('active');
            // const arrowFold = document.querySelector('[data-target="' + targetId + '"]');
            // if(arrowFold) {
            //     arrowFold.classList.add('fold-active')
            // }
        }

    })
})





const ClassAllCheck = document.getElementById("class-all");
const ClassChecks = document.getElementsByClassName("class-chk");

ClassAllCheck.addEventListener("click", function () {
    for (const checkbox of ClassChecks) {
        checkbox.checked = ClassAllCheck.checked;
    }
});

for (const checkbox of ClassChecks) {
    checkbox.addEventListener("click", function () {
        const allChecked = Array.from(ClassChecks).every((chk) => chk.checked);
        ClassAllCheck.checked = allChecked;
    });
}


const dataAllCheck = document.getElementById("data-all");
const dataChecks = document.getElementsByClassName("data-chk");

dataAllCheck.addEventListener("click", function () {
    for (const checkbox of dataChecks) {
        checkbox.checked = dataAllCheck.checked;
    }
});

for (const checkbox of dataChecks) {
    checkbox.addEventListener("click", function () {
        const allChecked = Array.from(dataChecks).every((chk) => chk.checked);
        dataAllCheck.checked = allChecked;
    });
}

function dateInput(n, m) {
    const today = new Date();
    const startDate = new Date(today);
    const endDate = new Date(today);

    // n일 이전으로 이동
    startDate.setDate(startDate.getDate() - n);

    // m일 이후로 이동
    endDate.setDate(endDate.getDate() + m);

    // StartDate와 EndDate를 "yyyy-MM-dd" 형식으로 설정
    document.getElementById("StartDate").value = formatDate(startDate);
    document.getElementById("EndDate").value = formatDate(endDate);
}

// 날짜를 "yyyy-MM-dd" 형식으로 변환하는 함수
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const userData = document.querySelectorAll('.user-data');
const infoModal = document.getElementById('info-modal');
const addModal = document.getElementById("add-modal");


function infoAdd() {
    addModal.style.display = "block";
}

function bgClose() {
    addModal.style.display = "none";
    infoModal.style.display = "none";
}

userData.forEach(function(item){
    item.addEventListener("click",function(event){
        infoModal.style.display = "block";
    });
})

function closeBtn() {
    infoModal.style.display = "none";
    addModal.style.display = "none";
}


function execDaumPostcode(){
    new daum.Postcode( {
      oncomplete: function( data ) {
        document.getElementById( 'zip-code' ).value = data.zonecode;
        document.getElementById( 'address-1' ).value = data.address;
      }
    } ).open();
  }


//   textarea 엔터 도트 출력
// const textArea =  document.getElementById('textarea');
// textArea.addEventListener('input', () => {
//     const currentText = textArea.value;

//         // 텍스트를 줄바꿈으로 분리
//         const lines = currentText.split('\n');

//         // 각 행의 앞에 도트를 추가하여 새로운 텍스트 생성
//         const newText = lines.map(line => `• ${line}`).join('\n');

//         // 텍스트 업데이트
//         textArea.value = newText;
// })