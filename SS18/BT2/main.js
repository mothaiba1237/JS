let t = prompt("nhap vao diem mon toan: ")
let v = prompt("nhap vao diem mon van: ")
let a = prompt("nhap vao diem mon anh: ")
let average = (t + v + a)/3
if(average >= 8){
    alert("gioi")
    document.writeln("gioi")
} else if(average >= 6.5){
    alert("kha")
    document.writeln("kha")
}else if(average >= 5){
    alert("trung binh")
    document.writeln("trung binh")
}else{
    alert("yeu")
    document.writeln("yeu")
}