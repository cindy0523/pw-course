### Một vài advanced concepts:

#### Test annotations/ tag
- Test annotations là việc bạn "gắn nhãn" hoặc bổ sung meta data vô trong testcase.
  - Đánh dấu test là skip/ only/ fail
  - Phân loại testcase (smoke/ regression/ ...)
  - Add Bug ID, TC TD, ticket ID

**1. Các annotation cơ bản:**

**test.fail:**
- Đánh dấu TC này expect sẽ failed (vì đang có bug)
- Lúc này TC run fail thì Terminal cũng sẽ không báo lỗi
- Cái này senior hay dùng để track bug

**test.skip:**
- Skip test
- Dùng khi: feature chưa ready, đang có bug, env chưa ok

**test.fixme:**
- Skip test, giống như test.skip
- Nhưng nó mang nghĩa: "cần refactor sau"

**test.only:**
- Chỉ chạy 1 test này, pipeline sẽ run only test này thôi, dùng khi debug

**2. Annotation để phân loại testcase (tag: []):**
- Thêm tag kiểu này để đánh dấu
```
test("Login successfully", {
    tag: '@smoke'
} async ({ page }) => {

})
```
- sau đó chạy:
```
npx playwright test --grep @smoke
```
- trong đó: **--grep** hoạt động theo duyệt test theo pattern (mẫu chữ): duyệt qua title, annotation/tag (khớp thì chạy/ ko khớp thì skip) - khá giống Ctrl + F
- Sau khi run xong, xem html report, testcase sẽ có 1 card tương ứng để view trực quan (ví dụ như card: smoke)

