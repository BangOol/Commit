//AJAX.js
// ajax : Asynchronous Javascript and XML.
// JSON 데이터를 주로 주고받는 웹 비동기 기술(HTML, XML, JSON 데이터 교류 가능)

const ajax = new XMLHttpRequest(); // XMLHttpRequest 객체 : 비동기 통신 구현, 서버 요청 및 요청 결과 비동기로 처리.
const url = 'http://jsonplaceholder.typicode.com/todos/1';
 ajax.onload = function(){ // 로딩 완료 시 콜백 함수 정의 -> XMLHttpRequest 객체 onload 이벤트에 적용
    if(ajax.status >= 200 && ajax.status < 300){
        successCallback(ajax.statusText);
    } else {
        errorCallback(new Error(ajax.statusText));
    }
 };

 ajax.onerror = errorCallback;
 ajax.open('GET', url); // 비동기 연결 시작 : 소스의 URL로 접속 시, JSON 결과가 표시되어서 GET방식으로 연결
 ajax.setRequestHeader('Accept', 'aaplication/json'); // 요청 헤더 값 설정 : 받은 데이터 포맷:JSON -> "application/json"으로 수신 포맷 설정
 ajax.send(); // 전송 시작. 서버에 응답 요청 전달 및 서버의 응답이 회신(JSON)

 function errorCallback(err){  // 에러 방생 시 처리할 에러 콜백 함수명 적용
     console.log('error: ' + err.message);
 }

 function successCallback(response){// 성공 시 XMLHttpRequest 객체의 response에 응답 데이터가 담겨짐.
     console.log('response: ' + response); // 응답 성공 시 처리하는 콜백 함수 파라메터(response)로 응답 객체 ajax.response를 반환
 }

 // ajax로 받은 응답을 기초로 HTML 페이지에 태그를 생성, 붙여 넣거나 하는 경우 HTML DOM이 생성된 후 실행되야 한다.
 // Event Listener 안 ajax 요청 및 응답 처리 시 가능
  document.addEventListener('DOMContentLoaded', function(){
     // AJAX 요청 및 응답 처리
 })

    // 
