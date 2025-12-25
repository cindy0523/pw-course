### POM API
**1. Mục tiêu:**
- File test gọn gàng hơn
- Ko chứa các setup (baseURL, url của các API)

**2. Cách tổ chức POM API:**
- Có fixture: request
- Có thuộc tính: baseUrl
- Define các **endpoint như các XPath**: tùy theo dự án lớn/ nhỏ, tùy theo convention của công ty
- POM không có 1 tiêu chuẩn nào cả, mình sẽ apply theo convention của công ty

#### Some POM styles:
**1. POM extends:**
- POM cha chứa:
  - logic dùng chung
  - config chung
  - helper chung
- POM con:
  - chỉ viết feature riêng

**2. POM manager:**
- POM manager = Quản lí và khởi tạo nhiều Page Object 
- Các Page Object của nó sẽ được tạo và truy cập từ 1 page duy nhất (POM Manage) thôi,
giúp cho source code của mình có tổ chức hơn
- Các Page Object độc lập với nhau, không bị phụ thuộc bởi class cha như POM extends,
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

**3. Return POM from another POM:**
- Các method của page object trả về page object khác

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

Bài tập:
1. Refactor lại test ở buổi 11, sử dụng POM API.
2. Refactor các test ở buổi 10, sử dụng Pom Manager
3. Refactor các test ở buổi 11, sử dụng Pom Return Another POM.