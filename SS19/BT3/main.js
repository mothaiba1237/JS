let n = parseInt(prompt("1.VND-->USD\n2.USD-->VND\nnhap lua chon cua ban: "))
switch(n){
    case 1:
        let n1 = parseInt(prompt("nhap vao so tien ban muon quy doi: "))
        let USD = n1 / 23000
        alert(USD+" USD")
        break
    case 2:
        let n2 = parseInt(prompt("nhap vao so tien ban muon quy doi : "))
        let VND = n2 * 23000
        alert(VND+" VND")
}