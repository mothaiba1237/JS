let n = parseInt(prompt("nhap vao mot thang (1-12): "))
if(n >= 1 && n <=12){
    switch(n){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("thang " + n + " co 31 ngay")
            break
        case 2:
            alert("thang " + n + " co 28 hoac 29 ngay nam nhuan")
            break
        case 4:
        case 6:
        case 9:
        case 11:
            alert("thang " + n + " co 30 ngay")
    }
}else{
    alert("nhap vao khong hop le")
}