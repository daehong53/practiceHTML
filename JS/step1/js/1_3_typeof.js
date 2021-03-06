/*
    ? 자료형
    * 1. 숫자형 (Number)
    * 정수형 10진수(일상생활 사용 숫자 소수점x) ex > 33, 44
    * 정수형 16진수(0x ~ 로 시작하여 0~9, A~F 로 모든 숫자 표현) ex> #f00 색상코드
    * 실수형 (소수점을 갖는 숫자) ex > 60.6 
    * 2. 문자형 (String)
    * 일상생활 사용 글자
    
    * 3. 논리형 (Boolean)
    * true(참) or false(거짓)
    * true : 맞음, 1, 같음, 진실, 성공
    * false : 틀림, 0, 같지않음, 거짓, 실패
    
    * 4. undefined
    * 미정의된(초기화 되지 않은, 기본초기값), 들어오지 않은 자료형.
    * ex.1 > var data1; alert('data1 =' + data1);
    * ex.2 >
    function exFunc(data1){
        alert("data1 = " + data1);
    }
    exFunc();
    * 5. null
    * 아무것도 참조하지 않은 자료형. (객체를 담기위한 변수를 초기화 하는 상태)
    * ex > var data = null;
    ! 이외 함수(function), 객체(object) 등이 존재.
*/

var favorNumber = 3;


// todo.2 자신의 영어이름을 engName 변수에 담아 출력 및 자료형판단.
var engName = "Mark";

// todo.3 현재 자신이 춥다,아니다를 cold 변수에 담아 출력 및 자료형판단.
var cold = false;

// todo.4 현재 로그인 상태가 아니다를 loginStatus 변수에 담아 및 자료형판단.
var loginStatus = false;
console.log('loginStat = ' + loginStatus);

// todo.5 test 변수를 선언하고 초기화 하지 않은 상태에서 출력 및 자료형판단.
var test;


// todo.6 obj 변수에 객체를 담을 예정이니 null로 초기화해서 출력.
var obj = null;
