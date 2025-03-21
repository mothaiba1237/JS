let a = parseFloat(prompt("nhap vao do dai canh thu 1: "))
let b = parseFloat(prompt("nhap vao do dai canh thu 2: "))
let c = parseFloat(prompt("nhap vao do dai canh thu 3: "))
if(a + b > c && a + c > b && b + c > a){
    if(a === b && b === c){
        alert("day la tam giac deu")
    }else if(a === b || a === c || b === c){
        alert("day la tam giac can")
    }else if(a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a){
        alert("day la tam giac vuong")
    }else {
        alert("day la tam giac thuong")
    }
}else {
    alert("day khong phai la tam giac")
}