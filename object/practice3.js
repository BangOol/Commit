//object/practice3.js
// 달력 만들기

// 테이블 HTML 구성
// <table><thead></thead><tr></tr><td></td><tbody></tbody> </table>
// 테이블 자바 구성
// 2. 날짜 월, 일 입력 통해서 한줄 출력
// 1. 7줄씪 끊어서 출력
// 3.


// 자바 - 마지막 날 계산 메소드

let today = new Date(); // Date 객체를 이용한 메서드로만 현재 시간을 받을 수 있음.
console.log(today.getDay()); // 요일: 0~6까지 반환
console.log(today.getMonth()); // 월 : 0부터 반환
console.log(today.getFullYear()); // 년도 4자리 수 반환
console.log(today.getHours()); // 현재 시 반환
console.log(today.getMinutes()); //현재 분 반환
console.log(new Date(2022, 2, 0)); //일 부분에 0을 넣으면 전 날이 반환


// 마지막 날짜 찾는 함수
function lastDate(year, month) { // -1 넣으며 1일 기준 이틀 전 날이 반환됨. 그래서 이 경우는 원하는 달 그대로 입력가능
    let lastDate = new Date(year, month, 0); 
    return lastDate.getDate();
} 

function firstDate(year, month) { // 위의 lastDate와 동일하게 month 설정
    let dd = new Date(year, (month - 1), 1);
    return dd.getDay(); //Date와 다르게 Day는 요일을 숫자로 출력함.
}


let year = 2022;
let month = 6;


document.write(`<table border = 1> Calendar`);
document.write(`<thead>`)
let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
for (let i = 0; i < week.length; i++) {
    document.write(`<th>${week[i]}</th>`);
}
document.write(`</thead>`);
document.write(`<tbody>`)

for(let i = 0; i <firstDate(year,month); i++){ // 1일 전에 위한 날에 빈칸 만드는 구문
    document.write(`<td></td>`)
}

for (let i = 1; i <= lastDate(year, month); i++) {
    document.write(`<td>${i}</td>`)
    if ((i + firstDate(year, month)) % 7 == 0) {
        document.write(`</tr><tr>`)
    }
}

// 오늘의 날을 표시하기 위한 함수?
// new Date 함수를 통해 오늘의 (년도, 월, 일)을 받고
// 현재 출력하고 있는 달력과 오늘의 년도, 월을 비교하여 일치할 경우  색깔을 