function cal(){
    let number1 = document.querySelector("#num1").value;
    let oper = document.querySelector("#opr").value;
    let number2 = document.querySelector("#num2").value;
    let res;
    if(oper == "add"){
        res = parseFloat(number1) + parseFloat(number2)
        document.querySelector("#result").innerHTML = "Result is" + " " +res+" " + "😎";
    }
}

