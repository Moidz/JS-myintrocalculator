function add(m,d){
    return m + d;
}
function subtract(m,d){
    return m - d;
}

function multiply(m,d){
    return m * d;
}

function divide(m,d){
    return m / d;
}
function remain(m,d){
    return m % d;
}

function calculate(){
    let m = Number(prompt("WELCOME TO YOUR CALCULATOR \n Enter the first number: "));
    let d = Number(prompt("Enter the second number: "));
    let sign = prompt("Enter arithmetic sign: ");
    let result = 0;
    if (sign == "+"){
        result = add(m,d);
    }
    else if (sign == "-"){
        result = subtract(m,d);
    }
    else if (sign == "*"){
        result = multiply(m,d);
    }
    else if (sign == "/"){
        result = divide(m,d);
    }
    else if (sign == "%"){
        result = remain(m,d);
    }
    else{
        alert("Please enter a valid number or arithmetic sign/operator");
    }
    alert(m + " " + sign + " " + d);
    alert("Result: " + result);
}

calculate();
