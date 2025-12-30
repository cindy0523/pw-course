### Design pattern
- Design pattern = Cách giải quyết 1 vấn đề hay gặp trong code, đã được nhiều người dùng và chứng minh là hiệu quả
- Nó không phải là code, mà là các ý tưởng/ cách tổ chức code 
- Nó là concept, không phải thư viện, framework

**Vì sao cần design pattern?**
1. Không phải nghĩ lại từ đầu
2. Dễ nói chuyện trong team
3. Code dễ maintain, scale
4. Tập trung vào What, thay vì How

## Class extend
- Class extend thường dùng để nói về kế thừa (inheritance) trong lập trình hướng đối tượng. Nó cho phép 1 class con kế thừa thuộc tính và hành vi Class cha 

**1. extends (Kế thừa):**
- Tạo class con (child/ subclass) kế thừa từ class cha (parent/ superclass)
- Giúp tái sử dụng các thuộc tính từ phần tử cha, tránh viết lại code

**2. super:**
- super là constructor của class cha
- Khi kế thừa, bạn luôn cần phải gọi super() của cha

**export**
- từ khóa export giúp ta có thể cho phép xuất biến, hằng số ở file và nhập (import) file dùng ở file khác

ex:
```
class DongVat {
    ten: string;

    constructor(ten: string) {
        this.ten = ten;
    };
};

class ConCho extends DongVat {
    loai: string;

    constructor(ten: string, loai: string) {
        super(ten);
        this.loai = loai;
    }

    info() {
        console.log(this.ten, this.loai);
    };
}
```

**3. Khi nào nên dùng extends?**
- Khi có mối quan hệ "is - a"
- Khi muốn tái sử dụng code, muốn tránh lặp code

## POM - Page Object Model
- là 1 design pattern thường đc sử dụng trong automation test
- giúp tổ chức code gọn gàng hơn, dễ bảo trì

**Design pattern** là 1 cách tổ chức code trong lập trình để tránh việc lặp đi lặp lại nhiều lần
Giúp cho code chuẩn, dễ maintain, tránh việc mỗi người code 1 kiểu, hợp team work và apply đc cho nhiều dự án khác nhau

**Lưu ý:**
- không có chuẩn chung nào cho POM
- Dựa trên framework, ngôn ngữ, author và tình hình của công ty/project/product để thiết kế cái design pattern như thế nào, chỉ có cái phù hợp cho cái project đó thôi

**4. Viết POM như thế nào?**
**Core concept:**
- 1 page là 1 class
- Có property (thuộc tính) và method (phương thức) riêng
  - Property: đại diện cho các phần tử trên trang
  - Method: đại diện cho hành động của user
- Property đã xuất hiện ở POM cha rồi thì không cần định nghĩa lại ở POM con nữa

Trong POM có 2 keyword là "export" và "import"
- export mình sẽ để ở file POM
- import mình sẽ để ở những file mà sử dụng lại cái POM đó

**Assert:**
- File POM không được chứa assert, chỉ assert ở file test
- File Test không nên lộ Locator, dù là step hay assert (Best practice)

**Access modifier:**
**1. Private**
- Locator
- Helper nội bộ:
  - waitForPageLoaded
  - scrollIntoViewIfNeeded
  - retryClick

**2. Public:**
- Method (page actions)
- Getter/ state method (phục vụ cho việc assert), những method:
  - getText()
  - isVisible()
  - isDisabled()
  - getErrorMessage()

**3. Protected:**
- Common action của Base Page (khi có kế thừa)

---

## Assertion
- Assertion là kiểm tra - kiểm tra xem một giá trị có đúng với mong muốn hay không

| Async Matcher                                | Ý nghĩa                                          |
|----------------------------------------------|--------------------------------------------------|
| await expect(elem).toBeAttached();           | Kiểm tra phần tử đc gắn vào DOM                  |
| await expect(elem).toBeChecked();            | Kiểm tra phần tử đc check.                       |
| await expect(elem).toBeEditable();           | Kiểm tra phần tử có thể sửa đc (ô input)         |
| await expect(elem).toBeEmpty();              | Kiểm tra phần tử rỗng (phần tử warning, error)   |
| await expect(elem).toBeEnabled();            | Kiểm tra phần tử có enable không (button hoặc input)|
| await expect(elem).toBeFocused();            | Kiểm tra phần tử có focus hay không (input)         |
| await expect(elem).toBeHidden();             | Kiểm tra phần tử có bị ẩn khỏi web hay không     |
| await expect(elem).toBeInViewport()          | Kiểm tra phần tử có nằm trong viewport hay không |
| await expect(elem).toBeVisible();            | Kiểm tra phần tử có visible (hiển thị) hay không |
| await expect(elem).toContainText("abc");     | Kiểm tra phần tử có chứa text hay không          |
| await expect(elem).toHaveAttribute("href");  | Kiểm tra phần tử có thuộc tính hay không         |
| await expect(elem).toHaveClass("class-name");| Kiểm tra phần tử có class hay không              |
| await expect(elem).toHaveId("id")            | Kiểm tra phần tử có id hay không                 |
| await expect(elem).toHaveText('');           | Kiểm tra phần tử có text hay không               |
| await expect(elem).toHaveValue('')           | Kiểm tra input có chứa giá trị hay không         |
| await expect(elem).toHaveValues([])          | Kiểm tra select có select                        |

####  Sự khác biệt giữa Selector và Locator:
**1. Selector:**
Selector = chuỗi để chỉ điểm element trong DOM
Nó là string, mô tả cách tìm element
**Đặc điểm:**
- chỉ là text, không có hành vi (click, fill, check, ...)
- Selector = địa chỉ của element

**2. Locator:**
Locator = object mà Playwright dùng để làm việc với element
--> Locator = selector + logic xử lí của PW

Ví dụ:
```
const usernameInput = page.locator('#username');
```

**Đặc điểm:**
- Là object, có thể gọi hành động
```
await usernameInput.fill('abc');
await usernameInput.click();
await usernameInput.isVisible();
```
- Tự auto wait
- An toàn hơn khi UI thay đổi, load chậm

--> Locator = “tay nắm” để thao tác với element
