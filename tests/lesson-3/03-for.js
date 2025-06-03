/*
Kiến thức bổ sung để làm bài: hàm push
Để thêm phần tử vào mảng, ta dùng hàm push
Ví dụ:
const arr = [1,2];
arr.push(3);
console.log(arr);
// Kết quả in ra
[1, 2, 3]
*/
 
/*
1. Tính tổng từ 1 đến 100.
*/
 
let tong = 0;
 
for (let i = 1; i <= 100; i++) {
    tong += i;
}
 
console.log(tong);
/*
2. In bảng cửu chương từ 2 đến 9.
*/
 
for (let i = 2; i <= 9; i++) {
    console.log("Bảng cửu chương", i);
 
    for (let j = 1; j <= 10; j++) {
        console.log(` ${i} x ${j} = ${i * j}`);
    };
}
 
/*
3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
*/
 
const soLe = [];
 
for (let i = 1; i <= 99; i += 2) {
    soLe.push(i);
}
 
console.log(`số lẻ bao gồm: ${soLe}`);
 
/*
4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
user-1@example.com, user2@example.com, ..., user10@example.com).
*/
 
for (let i = 1; i <= 10; i++) {
    console.log(`user-${i}@example.com`)
}
 
/*
5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
{“month”: 2, “total”: 100}
*/
 
const listRevenue = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 300 },
    { month: 4, total: 400 },
    { month: 5, total: 100 },
    { month: 6, total: 200 },
    { month: 7, total: 300 },
    { month: 8, total: 400 },
    { month: 9, total: 100 },
    { month: 10, total: 200 },
    { month: 11, total: 300 },
    { month: 12, total: 400 }
]
 
let tongDoanhThu = 0;
 
for (let i = 0; i <= listRevenue.length; i++) {
    tongDoanhThu += listRevenue[i].total;
}
 
 