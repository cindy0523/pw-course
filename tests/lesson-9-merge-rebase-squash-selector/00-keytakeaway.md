## Git merge, git conflict, git rebase, git squash
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

### Git conflict:
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

### Git rebase:
**Mục đích:** 
- Để giữ lịch sử commit gọn, đẹp hơn, tránh các commit merge, mình sẽ dùng rebase

**Khái niệm:**
1. Checkout về nhánh feature/A, sau đó nhập "git rebase main"
2. Git sẽ di chuyển tất cả commit ở nhánh main lên đỉnh của nhánh feature/A
còn commit của feature/A sẽ là latest
3. Sau đó sẽ merge các commit của nhánh feature/A về nhánh main 
(Khá giống fast forward merge, nhưng thêm 1 bước nữa là sắp xếp commit)
4. Sau khi rebase, nó sẽ hiện message trong Terminal là "successfully rebase and updated [branch name]"

---

### Git squash
**Khái niệm:**
- Git squash là gộp nhiều commit lại thành 1 commit duy nhất
- Cũng để giữ cho lịch sự commit gọn gàng, dễ theo dõi

**Step:**
1. chuẩn bị sẵn 5 cái commit
2. gõ git rebase -i HEAD~3 để gộp 3 commit gần nhất
3. sau đó sẽ vào giao diện VIM, mình sẽ dùng phím mũi tên trên bàn phím để di chuyển commit
4. bấm phím i để vào chế độ insert
5. commit nào muốn squash thì sửa 'pick' thành 's'
6. gõ phím Esc rồi gõ :wq để quit
7. lúc này nó sẽ hiển thị 1 giao diện VIM nữa để mình edit commit message 
8. commit nào ko muốn nó hiện thì gõ dấu # ở đầu
9. xong thì lại Esc > :wq
10. sau khi xong nó sẽ hiện message: "successfully rebase and update ..."
11. git log ra để kiểm tra

**Lời khuyên:**
- Squash chỉ nên làm 1 lần duy nhất.
- Không rebase cùng vùng commit 2 lần liên tục.
- Git sẽ ko cho mình squash tất cả commit vì nó ảnh hưởng commit đầu tiên
---

## CSS selector
- Cú pháp đơn giản, ngắn gọn hơn Xpath
- Không dùng được với các case phức tạp: contain text

**Cú pháp**
1. id: #
2. class: .

**Lưu ý:**
- Nên dùng Xpath hơn là CSS selector. Nó chỉ đa số dùng cho trường hợp dễ tìm như class, id
- Nhưng dùng Xpath sẽ dễ custom hơn và dễ đọc hơn so với CSS
---

## Playwright Selector
- Nó là 1 tính năng built in của Playwright, PW sẽ support mình 1 số cái hàm để lấy ra được locator trên web
- Trong dự án thực tế thì cũng khá ít dùng tới Playwright selector, vì những cái đó ko thể search đc trên devtool như là Xpath hoặc CSS selector

### Playwright locator hay dùng:
1. page.getByRole() 
2. page.getByText()
3. page.getByLabel()

