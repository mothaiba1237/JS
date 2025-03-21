let n = parseInt(prompt("nhap vao mot so tu 0-999: "))
if(n >= 0 && n < 1000){
    let DV = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    let hangChuc = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
    let tram = Math.floor(n / 100);
    let chuc = Math.floor((n % 100) / 10);
    let dv = n % 10;
    let result = "";
    if (n === 0) {
        result = "không";
    } else {
        if (tram > 0) {
            result += DV[tram] + " trăm";
        }
        if (chuc > 0) {
            if (result !== "") result += " ";
            result += hangChuc[chuc];
        }
        if (dv > 0) {
            if (result !== "") result += " ";
            result += DV[dv];
        }
    }
    alert(result);
}else {
    alert("so nhap khong hop le!")
}