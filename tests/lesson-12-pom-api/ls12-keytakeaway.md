### Design pattern
- Design pattern = Cách giải quyết 1 vấn đề hay gặp trong code, đã được nhiều người dùng và chứng minh là hiệu quả
- Nó không phải là code, mà là các ý tưởng/ cách tổ chức code 
- Nó là concept, không phải thư viện, framework

**Vì sao cần design pattern?**
1. Không phải nghĩ lại từ đầu
2. Dễ nói chuyện trong team
3. Code dễ maintain, scale
4. Tập trung vào What, thay vì How

---
### POM API
**1. Mục tiêu:**
- File test gọn gàng hơn
- Ko chứa các setup (baseURL, url của các API)

**2. Cách tổ chức POM API:**
- Có fixture: request
- Có thuộc tính: baseUrl
- Define các endpoint như các XPath: tùy theo dự án lớn/ nhỏ, tùy theo convention của công ty
- POM không có 1 tiêu chuẩn nào cả, mình sẽ apply theo convention của công ty

**3. Access modifer:**
**Private:**
- API endpoint
- Header mặc định
- Request body builder
- Helper method nội bộ

**Public:**
- API action methods

**Protected:**
- Có base API class
- Nhiều API POM extends từ base

---
### Some POM styles:
#### 1. POM extends:
- POM cha chứa:
  - logic dùng chung
  - config chung
  - helper chung
- POM con:
  - chỉ viết feature riêng

#### 2. POM manager:
- POM manager = class trung gian quản lí và khởi tạo nhiều Page Object 
- Các Page Object của nó sẽ được tạo và truy cập từ 1 page duy nhất (POM Manage) thôi,
tránh new Page lung tung, đổi constructor/ logic chỉ **sửa 1 chỗ**
- Các Page Object độc lập với nhau, không bị phụ thuộc bởi class cha - class con như POM extends,
mà nó sẽ isolate với nhau
- Các Page chỉ được tạo ra khi cần thiết, đỡ tạo ra nhiều kế thừa (class con, class cháu, class chắt,...)
đỡ bị tốn resource

ex:
```
import { Page } from "@playwright/test";
import { LoginPage } from "./00-pom-login";
import { DashboardPage } from "./00-pom-dashboard";

export class PomManager {
    page: Page;

    constructor(page: Page) {
    this.page = page;
    };

    getLoginPage() {
        return new LoginPage(this.page);
    };
    getDashboardPage() {
        return new DashboardPage(this.page);
    };
};
```

**Khi nào nên dùng POM manager?**
- Project vừa/ lớn
- Nhiều page/ nhiều flow
- Team nhiều người (dễ maintain, dễ onboard, tránh new lung tung)
- Code theo kiểu "enterprise style"

**Khi nào KHÔNG cần POM Manager?**
- Project nhỏ
- 1-2 page
- Script nhanh, throw away (dùng xong vứt, ko tái sử dụng)

#### 3. Return POM from another POM:
- Các method của Page Object này trả về Page Object khác
- Thường áp dụng cho các dự án testcase thông luồng phức tạp, cần di chuyển liên tục giữa các trang
- **Ví dụ:** dự án Ecommerce
Login > đến trang Sản phẩm > select Sản Phẩm > đến trang Thanh toán > đến trang Xác nhận
- Nhược điểm: khó maintain, việc di chuyển trang viết hết trong method, khiến cho mình khó debug

ex:
```
import { Page } from '@playwright/test';
import { DashboardPage } from './00-pom-dashboard';

export class LoginReturnPage {
    page: Page;
    
    constructor(page: Page) {
        this.page = page;
    };

    login() {
        const dashboardPage =
            return new DashboardPage(page);
            return new DashboardPage(this.page);
    };
};
```

---
#### Kiến thức bổ sung:

**1. expect().toBeInstanceOf()**: 
Để kiểm tra 1 đối tượng có thuộc kiểu của một class hay không

**ex:**
```
const myPage = await basePage.gotoPage("Product page");
expect(myPage).toBeInstanceOf(ProductPage);
```

**2. Ép kiểu:**
Khi một hàm trả về nhiều kiểu giá trị, ta có thể “ép kiểu” 
(hay còn gọi là type casting) tới một kiểu giá trị mong muốn.

**Mục đích:** 
Ép kiểu giúp cụ thể kiểu giá trị của Object, giúp code dễ dàng hơn.

**Cú pháp:**
```
[object] as [Class]
```

**Ví dụ:**
```
const myPage = await basePage.gotoPage("Product page");
productPage = myPage as ProductPage;
```

**Note:**
- Đa số dự án nhỏ sẽ sử dụng POM extends
- Dự án lớn, nhiều page thì dùng POM Manager
- Dự án thiên về nhiều test flow phức tạp thì nên dùng Return POM from another POM