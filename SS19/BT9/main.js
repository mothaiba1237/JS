let result1 = "javascript" + 5;
// "javascript5"
//Chuỗi + Số → Nối chuỗi: "javascript" + "5" → "javascript5"
let result2 = "javascript" - 1;
// NaN
//Chuỗi không thể chuyển thành số → Kết quả là NaN (Not-a-Number)
let result3 = "3" + 2;
// "32"
//Chuỗi + Số → Nối chuỗi: "3" + "2" → "32"
let result4 = "5" - 4;
// 1
//Chuỗi số "5" được chuyển thành số 5 → 5 - 4 = 1
let result5 = isNaN("123");
// false
//"123" có thể chuyển thành số → Không phải NaN → Kết quả là false
let result6 = isNaN("hello");
 // true
//"hello" không thể chuyển thành số → isNaN("hello") = true
let result7 = Number.isNaN("123");
 // false
//"123" không phải NaN và Number.isNaN() không ép kiểu → false
let result8 = Number.isNaN(NaN);
 // true
//NaN chính là NaN → Kết quả là true
