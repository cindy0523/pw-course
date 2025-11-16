### Git merge:
- Merge code nghĩa là gộp code nhánh A vào nhánh B

#### Merge strategy:
**1. Fast forward merge:**
- Khi merge không tạo ra commit merge
- Xảy ra khi không có thay đổi nào ở nhánh main kể từ lúc tạo nhánh feature

**2. Three way merge:**
- Khi merge có tạo ra commit merge
- Xảy ra khi lịch sử nhánh main đã có thay đổi so với lúc tạo nhánh feature 

---

#### Git conflict:
- Xảy ra khi 2 người cùng sửa 1 file, sau đó merge vào nhau
Terminal sẽ báo Git conflict, IDE sẽ báo đỏ và hiện alert như này:

```
<<<<<<< HEAD (Current change)
lesson 09 (nội dung ở nhánh hiện tại)
=======
lesson 09 (nội dung ở nhánh sắp merge vào)
>>>>>>> feature/A
```

**Để resolve conflict:**
1. cần yếu tố con người: 2 người phải trao đổi với nhau
sau đó thống nhất cách dùng chung, nên xóa/sắp xếp như thế nào
2. Sau khi trao đổi, mình sẽ xóa các kí tự conflict đi, sửa thành cái mình thống nhất
3. Sau đó "git add" lại > rồi "git commit"
Đối với xử lí commit thì sẽ dùng message chore: resolve conflict

---

#### Git rebase:
**Mục đích:** 
- Để giữ lịch sử commit gọn, đẹp hơn, tránh các commit merge, mình sẽ dùng rebase

**Khái niệm:**
1. Checkout về nhánh feature/A, sau đó nhập "git rebase main"
2. Git sẽ di chuyển tất cả commit ở nhánh main lên đỉnh của nhánh feature/A
còn commit của feature/A sẽ là latest
3. Sau đó sẽ merge các commit của nhánh feature/A về nhánh main 
(Khá giống fast forward merge, nhưng thêm 1 bước nữa là sắp xếp commit)
4. Sau khi rebase, nó sẽ hiện message trong "Terminal" là successfully rebase and updated [branch name]

---

### Git squash
**Khái niệm:**
- Git squash là gộp nhiều commit lại thành 1 commit duy nhất
- Cũng để giữ cho lịch sự commit gọn gàng

**Lời khuyên:**
- Squash chỉ nên làm 1 lần duy nhất.
- Không rebase cùng vùng commit 2 lần liên tục.