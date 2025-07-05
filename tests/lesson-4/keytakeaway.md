lesson-4 > keytakeaway
 
# Quy trình xây dựng framework
---
### 1. Chọn framework automation test
Tùy vào người đứng đầu làm sao cho phù hợp với team
Chọn dựa trên tiêu chí:
- Playwright, Selenium, Cypress,... server có support ngôn ngữ đó không
- Framework đủ nhanh và learning curve nó ko quá lâu và cả team có thể follow
- Cộng đồng active (stackoverflow, cộng đồng)
- có QA/Dev giỏi ngôn ngữ đã chọn (Ví dụ chọn Java thì người đó cứng Java)
 
### 2. Xây dựng framework
- Cử 1-2 bạn xây dựng base project, viết các base page, utils fucntion để giúp việc code nhanh hơn.
Tránh làm đi làm lại 1 việc
ex: login
- Xây dựng hệ thống conventions (camelCase hay bla bla), document các workflow lại
 
### 3. Tiến hành chạy thử trên qui mô nhỏ và sửa đổi FW sao cho khá ưng ý
- Không nên quá hoàn hảo vì nó sẽ bị chậm và sẽ ko xong đc
 
### Cấu trúc thư mục:
Folder nên spread rõ ra ngoài để tránh việc expand folder ra rồi lại đi ra đi vào từng thư mục
``` bash
├── README.md
├── constants
├── fixtures
├── node_modules
├── package-lock.json
├── package.json
├── playwright.config.ts
├── pom
├── tests
├── tests-examples
└── utils
```
trong đó:
- `README.md`: file tài liệu, chứa cách cài đặt, các conventions, các lưu ý và lỗi thường gặp -> nên viết kĩ để người mới đọc họ sẽ biết luôn project của mình
 
- `constants`: folder chứa các hằng số thường dùng cho toàn bộ dự án
ví dụ như hằng số có thể là url của website hoặc môi trường
 
- `playwright.config.ts`: file config cho từng môi trường
 
- `pom`: folder chứa các page object model
 
- `utils`: folder chứa các hàm utils có sẵn dùng chung cho dự án
 
- `fixtures`: folder viết sẵn cho dự án
Vd fixtures liên quan tới api, login sẵn
 
- `gitignore`: file chứa các ignore file
Vd file env
 
---
## for...in, forEach, for...of
### 1. for...in (Object - trả key)
dùng để lặp qua các key của object
 ko nên dùng cho array, vì nó sẽ lặp cả thuộc tính dc thêm thủ công vô array
**Cú pháp**
```
for (const key in object) {
    //code thực thi
}
```
- key: biến đại diện cho tên thuộc tính (property name) của objectobject
**Ví dụ:**
```
const person = {
name: "Anna", age: 22, job: "Tester"
};
for (const key in person) {
   console.log(key, person[key]);
}
//Kết quả
// name Anna
// age 22
// job Tester
```
### 2. forEach (Array - trả index, value)
dùng để: lặp qua từng element của array
ko dùng cho object
ko thể dùng break/continue trong forEach
**Cú pháp:**
```
arrayVar.forEach(function(value, index, array){
//code thực thi
});
```
**Ví dụ:**
```
const arr = [1, 2, 3, 4];
arr.forEach(function (value, index, array) {
   console.log(index, value)
});
//Kết quả
// 0 1
// 1 2
// 2 3
// 3 4
```
### 3. for...of (Array, String, Set, Map - trả value)
dùng để lặp qua từng giá trị của object có thể lặp (iterable) như array, string, map, set,...
ko dùng cho object (nếu muốn lặp qua object, dùng for...in)
**Cú pháp**
```
for (const value of iterable) {
    // code thực thi
}
```
- value: biến đại diện cho phần tử có thể lặp
- iterable: đối tượng muốn lặp (array, string,...)
**Ví dụ:**
```
const arr = ["a", "b", "c"];
for (const value of arr) {
   console.log(value);
}
//Kết quả
//a
//b
//c
```