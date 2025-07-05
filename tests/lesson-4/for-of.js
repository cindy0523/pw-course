 
/* KIẾN THỨC BỔ SUNG ĐỂ LÀM BÀI
Bản chất 1 chuỗi cũng là 1 mảng
Ví dụ chuỗi "Playwright" bản chất là 1 mảng gồm các kí tự
["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"]
 
Để lặp trong mảng này, bạn sử dụng string.length để lấy độ dài của chuỗi
và lấy ra từng phần tử một theo index
 
Ví dụ:
const str = "K11 2024";
for (let i =0; i < str.length; i++) {
    consol.log(str[i]);
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
 
 
 
/*
2. Tạo mảng chứa các kí tự nghịch đảo của 1 chuỗi đã cho
Ví dụ chuỗi "Playwright" thì mảng kết quả sẽ là
["t", "g", "h", "i", "r", "w", "y", "a", "l", "P"]
*/
 
 
 
/*
3. Lọc ra tất cả các phần tử duy nhất trong 1 mảng
Ví dụ mảng [1, 2, 3, 4, 5, 1, 2, 3] thì các phần tử duy nhất là [4, 5]
*/