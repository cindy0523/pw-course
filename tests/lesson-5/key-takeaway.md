### DOM
- DOM (Document Object Model): hiểu đơn giản nó là cấu trúc của cây HTML để mô hình hóa 1 trang web dưới dạng cây (tree) gồm các đối tượng (object)

### Thẻ HTML thường gặp
- thẻ div (viết tắt của divide): để chia trang web thành các khối
- thẻ h1 đến h6 (viết tắt của heading): tạo header phân cấp theo thứ tự từ lớn tới nhỏ
- thẻ form : dùng để chứa 1 form thông tin gồm nhiều field
- thẻ input (text, email, radio, checkbox, file, color)
- thẻ textarea: giống input nhưng to hơn, kéo thả đc
- thẻ button
- thẻ table > thẻ thead (table heading) > thẻ tbody (table body)
- thẻ th (data của thead), tr (row của table: dòng), thẻ td (cột của bảng)
- thẻ iframe: nhúng trang web khác vào trang web này

### Selector
- Selector là cách mình chọn các phần tử trên trang
- Có 3 kiểu phổ biển: Xpath selector, CSS selector, Playwright selector

**1. Xpath selector:**
- Xpath = XML Path
- Có 2 loại:
  - Xpath tuyệt đối: đi dọc theo cây DOM
  bắt đầu bằng 1/
  - Xpath tương đối: tìm dựa vào đặc tính
  bắt đầu bằng 2//
- Nên dùng Xpath tương đối

### Playwright Basic syntax
- **test**: đơn vị cơ bản để khai báo 1 test
Cú pháp:

```
import { test } from '@playwright/test'

test('Testcase name', async ({ }) => {
    //code here 
})
```

- **step**: đơn vị nhỏ hơn test, để khai báo từng step của 1 testcase
Cú pháp:
```
await test.step('Tên step', async () => {
  // code here
})
```
**Lưu ý:**
- Step nên được map 1-1 mới Step trong testcase để dễ maintain hơn
Để lỡ báo lỗi thì Playwright sẽ trả lỗi ở thẳng step đó

