let r = parseInt(prompt("Nhập bán kính của hình cầu:"));
const pi = Math.PI;

let V = (4 / 3) * pi * Math.pow(r, 3);
let Sbemat = 4 * pi * Math.pow(r, 2);
let CMax = 2 * pi * r;
alert("Thể tích hình cầu: " + V.toFixed(2));
alert("Diện tích bề mặt: " + Sbemat.toFixed(2));
alert("Chu vi lớn nhất: " + CMax.toFixed(2));
document.writeln("Thể tích hình cầu: " + V.toFixed(2) + "<br>");
document.writeln("Diện tích bề mặt: " + Sbemat.toFixed(2) + "<br>");
document.writeln("Chu vi lớn nhất: " + CMax.toFixed(2));
