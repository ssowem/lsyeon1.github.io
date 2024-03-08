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
selected.forEach(function(item){
    item.addEventListener('click', function(event){
        const fold = item.querySelector('.fold');
        const isActive = fold.classList.contains("fold-active");

        if(isActive){
            fold.classList.remove("fold-active");
        }else{
            fold.classList.add("fold-active");
        }

        const targetId = item.getAttribute('data-target');
        const sub = document.getElementById(targetId);
        
        if(sub) {
            sub.classList.toggle('active');
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


var inputs = document.querySelectorAll('.info-modal input');
var select = document.querySelectorAll('.info-modal select');
var btnUpload = document.querySelector('#btn-upload');
userData.forEach(function(item){
    item.addEventListener("click",function(event){
        infoModal.style.display = "block";
        btnUpload.style.display = "none";
        inputs.forEach(function(input){
            input.setAttribute('readonly', 'true');
            input.style.pointerEvents = 'none';
      
        });
        // accent-color: #2C80FF;

        select.forEach(function(select){
            select.style.pointerEvents = 'none'
        });
    });
})

function closeBtn() {
    infoModal.style.display = "none";
    addModal.style.display = "none";
}

function editBtn() {
    btnUpload.style.display = "block";
    inputs.forEach(function(input){
        input.removeAttribute('readonly')
        input.style.pointerEvents = 'auto';
    });

    select.forEach(function(select){
        select.style.pointerEvents = 'auto'
    });

    const modalTitle = document.getElementById('modal-title');
    modalTitle.textContent = '학생정보 수정'
}

function execDaumPostcode(){
    new daum.Postcode( {
      oncomplete: function( data ) {
        document.getElementById( 'zip-code' ).value = data.zonecode;
        document.getElementById( 'address-1' ).value = data.address;
      }
    } ).open();
  }
