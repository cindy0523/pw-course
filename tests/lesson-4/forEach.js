/*
1. In ra tất cả các phần tử của một mảng, ví dụ mảng [1, 2, 3] thì in ra
1
2
3
*/
 
const arr = [1, 2, 3];
 
arr.forEach(function (value, index, array) {
    console.log(value);
});
 
/*
2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng
Ví dụ mảng [1, 2, 3] thì tổng là 6 và giá trị lớn nhất là 3
*/
 
let sum = 0;
let min = arr[0];
let max = arr[0];
 
arr.forEach(function (value, index, array) {
    sum += value;
    if (value < min) min = value;
    if (value > max) max = value;
})
 
console.log("Tổng của mảng: ", sum);
console.log("Giá trị nhỏ nhất: ", min);
console.log("Giá trị lớn nhất: ", max);
 
/*
3. Tạo 1 mảng mới từ 1 mảng đã cho, trong đó mỗi phần tử đc nhân đôi
Ví dụ mảng [1,2,3] thì mảng mới sẽ là [2,4,6]
*/
 
const newArr = [];
 
arr.forEach(function (value, index, array) {
    newArr.push(value * 2);
});
 
console.log(newArr);
 