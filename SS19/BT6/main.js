let a = parseFloat(prompt("nhap vao a: "))
let b = parseFloat(prompt("nhap vao b: "))
let c = parseFloat(prompt("nhap vao c: "))
let delta = b * b - 4 * a * c
if(delta < 0){
    alert("phuong trinh vo nghiem")
}else if(delta === 0){
    let x = -b / (2 * a)
    alert("phuong trinh co nghiem kep x1 = x2 = "+x)
}else{
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    alert("phuong trinh co 2 nghiem phan biet: x1 = " + x1 + "; x2 = "+x2)
}