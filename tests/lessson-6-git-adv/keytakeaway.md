#### Branch convention
**Mục đích:**
- Gọn gàng, đồng bộ
- Dễ dàng đoán đc ý đồ của PR/Commit

**Convention:**
```
< type > / < short description>
```
**type**
1. feat: tính năng mới (feature)
2. fix: sửa lỗi
3. chore: thay đổi lặt vặt, xóa file không dùng đến, đổi tên file
4. conf: thay đổi cấu hình (config)

**short description:** mục đích của branch tạo ra

**Ex:**
- feat/lesson6
- fix/fill-info
- feat/lesson6-long
---
#### Qui trình review code
1. Tạo branch
2. Tạo PR, thêm reviewer, gửi review request
3. Thực hiện review code cho người khác
4. Thực hiện fix comment khi có comment từ người khác

#### Tạo branch
Khi tạo mới branch, bạn lưu ý:
1. Luôn luôn chuyển về nhánh main và thực hiện pull code latest về
2. Tên branch cần naming convention của lớp

