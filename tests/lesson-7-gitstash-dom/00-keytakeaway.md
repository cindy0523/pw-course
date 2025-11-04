### Git stash: 
- Git stash dùng để tạm cất (stash) lại những thay đổi chưa commit — nghĩa là Git sẽ lưu tạm phần công việc m đang làm dở vào “ngăn kéo” và trả working directory về trạng thái sạch (giống lúc chưa sửa gì).
- sử dụng git stash khi đang code trên branch A nhưng có task khác priority cao hơn phải switch sang branch B, nhưng chưa commit branch A mà switch thì sẽ báo lỗi: phải commit/stash mới đc switch --> khi đó mình sẽ git stash lại để lưu lại, khi nào xong task bên branch B thì switch về branch A và unstash nó đi

### DOM: relation
**1. self:** node hiện tại
**2. parent:** cha của node hiện tại/node phía trên của node hiện tại
Cú pháp: //node hiện tại/parent::<tên thẻ>
**3. child:** con - node phía dưới trực tiếp của node hiện tại
Cú pháp: //node hiện tại/child::<tên thẻ>
**4. ancestor:** tổ tiên - là các node cha/ông nội/ông cố nội
**5. descendant:** hậu duệ - node con, node cháu, node chắt nằm bên trong của node hiện tại
**6. sibling:** anh em - là những phần tử cùng cấp và cùng cha
trong xpath ko có sibling, mà nó đi chung với following/preceding
ex: following-sibling, preceding-sibling
**7. following:** theo sau - tất cả node sau node hiện tại
**8. preceding:** phía trước - tất cả node trước node hiện tại, ngoại trừ ancestor (node cha, node ông nội,...) của node hiện tại
**9. following-sibling:** anh em phía sau
**10. preceding-sibling:** anh em phía trước

### Xpath advanced method
- **wildcard:** *
Dùng để chọn bất kì thẻ nào
- **chứa thuộc tính (@attribute)**
Dùng để gọi thuộc tính của element
- **and và or:** toán tử logic
kết hợp nhiều điều kiện
- **innerText: text()**
Dùng để lấy nội dung text bên trong element
- **Element as attribute** (@atribute từ element khác)
- **normalize-space()**
Dùng để xóa thừa khoảng trắng, trước, giữa, sau các đoạn
```
//p[normalize-space(text())='Hello World']  
```
- **contains**
Chứa 1 phần chuỗi trong @attribute hoặc text()
```
//a[contains(@href, 'login')]   → link có href chứa “login”
//button[contains(text(), 'Save')] → text chứa “Save” 
(ví dụ: “Save changes”)
```
- **starts-with**
@attribute hoặc text() chứa chuỗi bắt đầu bằng
```
//input[starts-with(@id, 'user_')] → id bắt đầu bằng “user_”
//div[starts-with(text(), 'Hi')]   → text bắt đầu bằng “Hi”
```
- **not**
Phủ định điều kiện (ngược lại).
```
//input[not(@disabled)]   → input không bị disable
//div[not(contains(@class, 'hidden'))] → div không có class “hidden”
```

Test git stash