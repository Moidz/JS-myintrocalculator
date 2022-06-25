function addition(r,t){
    return r + t;
}
function subtraction(r,t){
    return r - t;
}

function multiplication(r,t){
    return r * t;
}

function division(r,t){
    return r / t;
}
function remainder(r,t){
    return r % t;
}

function calculator(){
    let r = Number(prompt("WELCOME TO YOUR CALCULATOR \n Enter the first number: "));
    let t = Number(prompt("Enter the second number: "));
    let sign = prompt("Enter arithmetic sign: ");
    let result = 0;
    if (sign == "+"){
        result = addition(r,t);
    }
    else if (sign == "-"){
        result = subtraction(r,t);
    }
    else if (sign == "*"){
        result = multiplication(r,t);
    }
    else if (sign == "/"){
        result = division(r,t);
    }
    else if (sign == "%"){
        result = remainder(r,t);
    }
    else{
        alert("Please enter a valid number or arithmetic sign/operator");
    }
    alert(r + " " + sign + " " + t);
    alert("Result: " + result);
}

calculator();
