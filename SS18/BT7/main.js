let a = parseInt(prompt("nhap vao so a: "))
let b = parseInt(prompt("nhap vao so b: "))
let operator = prompt("moi ban nhap vao cac phep tinh(+,-,*,/)")
let result
switch(operator){
    case "+":
        result = a + b
        break
    case "-":
        result = a - b
        break
    case "*":
        result = a * b
        break
    case "/":
        result = a / b
        break
}
alert("ket qua cua phep tinh tren a "+operator+ " b = "+result)