let num1 = prompt("Masukkan angka ke-1: ");
let num2 = prompt("Masukkan angka ke-2: ");

let operator = prompt("Tentukan operasi yang ingin dilakukan (+, -, *, /): ");

if(operator === '+'){
    result = parseInt(num1) + parseInt(num2);
} else if(operator === '-'){
    result = parseInt(num1) - parseInt(num2);
} else if(operator === '*'){
    result = parseInt(num1) * parseInt(num2);
} else if(operator === '/'){
    result = parseInt(num1) / parseInt(num2);
} else {
    alert("Operator tidak valid!");
}

alert("Hasilnya adalah: " + result);
