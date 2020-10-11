/*
    ? 함수의 그룹핑
    복잡한 기능을 담은 컴포넌트일 수록 하나의 함수안에 동작 코드를 모두 작성하면, 이후 재사용 및 수정, 유지보수가
    어려워 지기 떄문에, 각 기능별 함수를 만들어 분리하여 만드는 것이 재사용, 수정, 유지보수에 용이하다.

    ! grouping 순서
    1. 중복 코드 및 재사용 코드 를 찾고 함수화
    2. 중복 코드에서 변경되지 않는 부분과 변경되는 부분확인.
    3. 변경되는 부분을 매개변수화.
*/
//* exp.1 다음은 10, 15, 19가 홀수인지 짝수인지 출력하는 예제입니다. 함수를 이용해 다듬어보기.
/*
var n1 = 10;
document.write(n1+"은 ");
if(n1%2){
    document.write("홀수입니다.<br>");
} else{
    document.write("짝수입니다.<br>");
}
var n2 = 15;
document.write(n2+"은 ");
if(n2%2){
    document.write("홀수입니다.<br>");
} else{
    document.write("짝수입니다.<br>");
}
var n3 = 19;
document.write(n3+"은 ");
if(n3%2){
    document.write("홀수입니다.<br>");
} else{
    document.write("짝수입니다.<br>");
}
*/
function oddOrEven(numb){
    document.write(numb+"은 ");
    if(numb%2){
        document.write("홀수. <br>");
    }else{
        document.write("짝수. <br>");
    }
}
