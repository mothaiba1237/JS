let sotiengui = parseInt(prompt("nhap vao so tien gui: "))
let sothang = parseInt(prompt("nhap vao so thang gui: "))
let laisuatthang = 0.043/12
let tienlai = sotiengui * sothang *laisuatthang
tienlai = Math.round(tienlai)
alert("so tien lai la: "+tienlai+"VND")
document.writeln("so tien lai la: "+tienlai+"VND")