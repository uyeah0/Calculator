"use strict";

let num1 = "";
let num2 = "";

let operator = "";

let op_value = document.querySelector("#operator"); // 아이디를 갖고 있는 요소를 꺼내는 것
let result_value = document.querySelector("#result");

let onClikNumber = (number)=>{
    return (event)=>{
        if(operator){
            if(!num2){
                result_value.value = "";
             
            }
            num2 += number;
        }else{
            num1 += number;
        }
        result_value.value += number; 
    }
}

let onClickOperator = (op) =>{ // html 요소는 op
    return() =>{
        if(num1){
            operator = op;
            op_value.value = op; 
        }else{
            alert("숫자를 입력해주세요");
        }
        
        
    }
}


document.querySelector("#num-0").addEventListener("click", onClikNumber(0)); // id가 num0인 요소를 클릭하면 이 함수를 실행
document.querySelector("#num-1").addEventListener("click", onClikNumber(1));
document.querySelector("#num-2").addEventListener("click", onClikNumber(2));
document.querySelector("#num-3").addEventListener("click", onClikNumber(3));
document.querySelector("#num-4").addEventListener("click", onClikNumber(4));
document.querySelector("#num-5").addEventListener("click", onClikNumber(5));
document.querySelector("#num-6").addEventListener("click", onClikNumber(6));
document.querySelector("#num-7").addEventListener("click", onClikNumber(7));
document.querySelector("#num-8").addEventListener("click", onClikNumber(8));
document.querySelector("#num-9").addEventListener("click", onClikNumber(9));
document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document.querySelector("#minus").addEventListener("click",onClickOperator("-"));
document.querySelector("#multiply").addEventListener("click", onClickOperator("x"));
document.querySelector("#divide").addEventListener("click", onClickOperator("/"));
document.querySelector("#clear").addEventListener("click", ()=>{
    result_value.value = '';
    op_value.value = ''; 
    num1 = '';
    num2 = '';
    operator = "";
});
document.querySelector("#calculatate").addEventListener("click", ()=>{
            if(num2){
                switch(operator){
                    case "+": result_value.value = parseInt(num1)+parseInt(num2);break;
                    case "-": result_value.value = num1-num2;break;
                    case "/": result_value.value = num1/num2;break;
                    case "x": result_value.value = num1*num2;break;
                    default :break;
                }
            }else{ alert("두 번째 수를 입력해주세요");}
});

