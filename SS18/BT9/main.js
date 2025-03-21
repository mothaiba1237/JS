let hour = parseInt(prompt("nhap gio(0-23)"))
let minute = parseInt(prompt("nhap phut(0-59)")).toString().padStart(2, "0")
let second = parseInt(prompt("nhap giay(0-59)")).toString().padStart(2, "0")
if(hour >= 0 && hour < 24 || minute >= 0 && minute < 60 || second >= 0 && second < 60){
    let period = hour >= 12 ? "PM" : "AM"
    let hour12 = (hour % 12 || 12).toString().padStart(2, "0")
    alert(hour12 + ":"+ minute + ":"+ second + " " + period)
}else {
    alert("nhap khong dung")
}