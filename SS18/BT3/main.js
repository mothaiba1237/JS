let user = prompt("nhap ten dang nhap : ")
if(user === "ADMIN"){
    let pass = prompt("nhap mat khau: ")
    if(pass ==="TheMaster"){
        alert("Welcome.")
    }else if(pass === null){
        alert("Cancelled.")
    }else{
        alert("Wrong password.")
    }
}else if(user === null){
    alert("Cancelled")
}else{
    alert("“I Don’t know you”")
}