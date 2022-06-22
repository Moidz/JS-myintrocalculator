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
    var r = Number(prompt("WELCOME TO YOUR CALCULATOR \n Enter the first number: "));
    var t = Number(prompt("Enter the second number: "));
    var sign = prompt("Enter arithmetic sign: ");
    var result = 0;
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
        alert("Please enter a valid number or arithmetic sign")
    }
    alert(result);
    alert(r + " " + sign + " " + t + " = " + result);
    alert(" Next calculation?? ")
}

calculator();
