let str = prompt("nhap vao mot chuoi: ")
let check ="chuoi khong co dau cach"
for(let i = 0; i < str.length; i++){
    if(str[i] === " "){
        check = "chuoi co dau cach"
        break
    }
}
alert(check)