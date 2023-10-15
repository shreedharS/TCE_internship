function c(){
    let num1 = document.querySelector("#n1").value;
    let opr = document.getElementById("#opr").value
    let num2 = document.getElementById("#n2").value;
   let res;
   if(opr == "+"){
    res = parseFloat(num1) + parseFloat(num2);
    document.getElementById("output").innerHTML = "ans is = "+ " "+res;
   }
}