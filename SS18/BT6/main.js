let year = parseInt(prompt("nhap mot nam bat ky: "));
if(year % 4 ===0 && year % 100 !== 0 ||year % 400 ===0){
    alert("nam nay la nam nhuan")
}else{
    alert("nam nay khong phai la nam nhuan")
}