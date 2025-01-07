# Lesson 3

**Câu lệnh xem lịch sử commit:** Git log
- Trên terminal, muốn thoát khỏi nó thì bấm phím "q" rồi bấm Enter

**Câu lệnh xem trạng thái:** Git status

**Câu lệnh thay đổi message của commit gần nhất:**
git commit --amend -m "add 2 file moi"

**Câu lệnh thay đổi message của commit theo kiểu khác:** git commit --amend
Thay đổi message commit **gần nhất**
Nó sẽ vào chế độ dòng lệnh (terminal)
- bấm "i" để vào chế độ insert
- bấm esc để lưu và thoát
- bấm :wq (write and quit) để thoát

**Câu lệnh chuyển từ vùng Staging sang vùng Working dir (uncommit):**
- git restore --stage <tên file>
- git restore --stage <tên file 1> <tên file 2>

dùng dấu cách để add nhiều file
- git restore --stage .
nếu thay bằng dấu "." sẽ là toàn bộ

**Câu lệnh đưa vùng Repo sangs vùng Working dir (uncommit):**
git reset HEAD~1
- trong đó, số 1 là số lượng commit gần nhất
có thể sửa sang 2,3,4 theo ý muốn 

---
### BRANCHING MODEL 

- **git branch**: 
câu lệnh check đang ở nhánh nào
- **git branch minh_thu:** 
tạo ra 1 nhánh 'minh_thu'
- **git checkout <tên nhánh>**: 
để chuyển sang nhánh khác
- **git checkout -b <tên nhánh>**: 
vừa TẠO vừa CHUYỂN sang nhánh đã tạo luôn
> - tạo nhánh để có vùng làm việc mới, ko ảnh hưởng đến vùng làm việc đã ổn định
> - khi tạo nhánh thì mình tạo 1 bản sao và có thể backup lại việc mình đã làm

**Tips:** luôn tạo branch mới mỗi khi muốn thực hiện 1 lệnh copy từ internet, đềề phòng rủi ro mất code

---
### File gitignore

Thường khi làm việc sẽ có 1 số file chúng ta ko muốn đẩy lên git, chẳng hạn như file mật khẩu
- ex: Khi chạy automation test chúng ta sẽ phải cung cấp tài khoản, mật khẩu
có 1 folder "pass", folder này chứa nhiều file password
--> giải pháp là chúng ta sẽ tạo 1 file là '.gitignore', nó sẽ bảo với Git là bỏ qua cái file này đi

Tất cả tên file, đường dẫn tới file bỏ trong file .gitifnore thì nó sẽ "xám đi", đồng nghĩa với việc nó sẽ đc ignoreignore

---
- Trên vscode, có thể select tab Source Control để theo dõi trạng thái
- Có chữ M màu đỏ ở cạnh tên file, tức là 'Modified'
tức là file đã đc chỉnh sửa, nhưng chưa lên Stage để commitcommit

---
### JAVASCRIPT NÂNG CAO

**Convention = quy tắc**
- giúp cho code theo quy tắc để dễ nhìn
- ngkhac nhìn vào có thể hiểu được

**Một số convention:**
1. snake_case
2. kebab-case: tên file
3. camelCase: tên biến
4. PascalCase: tên class 
---
### Object = đối tượng
**Object:** dùng để lưu trữ tập hợp các giá trị vào cùng 1 biến hoặc hằng sốsố
- truy xuất vào thuộc tính của object thì . hoặc [""]
ex: 
```
console.log(student.name);
console.log(student["name"];)
```
- khai báo let/const
ex:
```
let tenbien = {
    "key":value,
    "key1":value1
}
```
- có thể khai báo object bên trong object

- const thì bản thân biến đó ko thể gán lại đc
nhưng nội dung bên trong, các value có thể thay đổi được

vì vậy  **const với object** thì có thể **thay đổi được**, gán lại dc

- hàm delete để xóa thuộc tính của object
`delete <object>.<property>`

----------------------
### Logical operator: toán tử logic
- **&&** : 2 vế điều kiện phải đúng (và)
- **||** : 1 trong 2 vế đúng (hoặc)
- **!**: phủ định/đảo ngược

---------------------
### Function: hàm
Là 1 đoạn code đc đặt tên và tái sử dụng nhiều lần, dùng để thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể

**Syntax:**
```
    function <tên hàm>(){
        //đoạn code
    }
```

*ex:*
```
function minhThu(){
    console.log('xin chào')
}
```
--> đây là **hàm ko có tham số**

- gọi hàm: tênHàm();

**Hàm có tham số (parameter)**
*ex:*
```
function minhThu(name){
    console.log('xin chao ' + name)
}
```
**Gọi hàm và truyền tham số vào:**
` minhThu("Thu");`

**Return value:**
_ex:_
```
function getMax(a,b){
    if (a > b){
        return a;
    }
    return b;
}
```

----



