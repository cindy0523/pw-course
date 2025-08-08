/* KIẾN THỨC BỔ SUNG ĐỂ LÀM BÀI
Bản chất 1 chuỗi cũng là 1 mảng
Ví dụ chuỗi "Playwright" bản chất là 1 mảng gồm các kí tự
["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"]
 
Để lặp trong mảng này, bạn sử dụng string.length để lấy độ dài của chuỗi
và lấy ra từng phần tử một theo index
 
Ví dụ:
const str = "K11 2024";
for (let i =0; i < str.length; i++) {
    console.log(str[i]);
}
 
// Kết quả in ra
K
1
1
 
2
0
2
4
 
In ra tất cả các kí tự của 1 chuỗi, ex: Playwright
P
l
a
y
w
r
i
g
h
t
 
1. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong 1 mảng bằng với giá trị cho trước
Vd với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là 3
thì vị trí cần ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.
*/
 
let arr1 = [1, 2, 3, 4, 3, 4, 4, 55, 23]; //mảng cho trước
let value = 4 //giá trị cho trước
 
let firstIndex = -1;
let lastIndex = -1;
 
for (i = 0; i < arr1.length; i++) {
    if (value === arr1[i]) {
        if (firstIndex === -1) {
            firstIndex = i;
        } else {
            lastIndex = i;
        };
    };
};
 
if (firstIndex !== -1) {
    console.log(`Vị trí phần tử đầu tiên là ${firstIndex}`);
    console.log(`Vị trí phần tử đầu tiên là ${lastIndex}`);
} else {
    consol.log("Giá trị không hợp lệ")
}
 
/*
2. Tạo mảng chứa các kí tự nghịch đảo của 1 chuỗi đã cho
Ví dụ chuỗi "Playwright" thì mảng kết quả sẽ là
["t", "g", "h", "i", "r", "w", "y", "a", "l", "P"]
*/
 
let char = "Playwright";
let arr2 = []
 
for (i = char.length - 1; i >= 0; i--) {
    arr2.push(char[i]);
}
 
console.log(arr2);
 
/*
3. Lọc ra tất cả các phần tử duy nhất trong 1 mảng
Ví dụ mảng [1, 2, 3, 4, 5, 1, 2, 3] thì các phần tử duy nhất là [4, 5]
*/
 
let arr3 = [1, 2, 3, 4, 5, 1, 2, 3];
 
