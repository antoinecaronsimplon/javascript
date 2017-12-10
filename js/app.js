function addition(a, b){
    return a + b;
}

console.log(addition(5, 5));

function substract(a, b){
    return a - b;
}

console.log(substract(10, 5));

function multiply(a, b){
    return a * b;
}

console.log(multiply(10, 10));

function divice(a, b){
    if(b !== 0){
        return a/b;
    } 
    return "Ou pas";
}

console.log(divice(10, 0));
console.log(divice(10, 5));