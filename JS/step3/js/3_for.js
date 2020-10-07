/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...
    *루프
    * 1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    * 3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계
*/
//!단일 for

//*exp.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for (var i = 1; i <= 10; i++) {
        document.write(i+'.'+ userName +'<br>');
    }
}

// *exp.2 이름을 1000번 출력.
function namePrint1000(){
    var userName = 'Mark';
    for (var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *exp.3 이름을 500번만 찍되 홀수만 나와야됨.
function namePrint500(){
    var userName = 'Mark';
    for (var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}

// *exp.4 js engine처럼 생각하기
function thinkJS(){
    for (var i = 0; i < 10; i++){ //? 10보다 작을때(0~9)까지만 반복수행
        document.write('i = ' + i, '<br>'); //? 0 ~ 9번까지 출력.
    }
    document.write('종료 i = ' + i); //? 이미 변경된 10이 출력.
}

function answer1(){
    for(var i=0; i<10; i++){ //? 10보다 작을때 (0~9) 까지 만 반복 수행
        document.write((i+1)+"<br>");//? 1~ 10번 까지 출력
    }
}
function answer2(){
    for(var i=1; i<=10; i++){ //? 10보다 작거나 같을때 (1~10)까지 만 반복 수행
        document.write(i+"<br>"); //? 1~10번 까지 출력
    }
}
function answer3(){
    for(var i=100; i<110; i++){ //? 110보다 작거나 같을때 (100~109)까지만 반복 수행
        document.write((i-99)+"<br>"); //?1~10번 까지 출력
    }
}
function answer4(){
    for (var i =1; i<=10; i+=2){
        document.write(i+'<br>');
        document.write((i+1) + '<br>');
    }
}

function answer5(){
    for(var i = 10; i >= 1; i--){
        document.write((11-1)+'<br>');
    }
}
//*exp.6 역반복 배열

function reverseFavorFluit(){
    var array = ['포도','사과','바나나','망고']; //?4개의 배열 선언후

    for (var i = array.length - 1; i >=0; i--){ //?i 변수는 배열의 갯수 -1 (4-1 = 3) 로 선언, 그 변수가 0보다 크거나 같을때 까지 (3>=0 ----> 3,2,1,0) 실행 .
        alert(array[i]); //?그래서 3,2,1,0 순으로 출력. 이것을 역반복
    }
    
}

// *exp.7 continue문
function forContinue(){
    for (var i = 0; i <= 10; i++){
        continue; //? 위 조건이 참일 지라도 continue가 존재 하면, continue 이하 구문은 실행 되지 않는다.
        document.write(i+'<br>'); //?vscode 에서는 불투명하게 시각화 해서 보여준다.
    }
    document.write('최종 i = ' + i + '<br>'); //? 최종 적으로 변경된 i 의 수치(11)만 출력된다.
}

// * exp.8 continue활용
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){
        if (i % 2 == 1){
            continue;
        }
        output += i;
        alert(output);
    }
}
