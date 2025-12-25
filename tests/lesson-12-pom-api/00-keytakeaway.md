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
**1. POM manager:**
- Quản lí nhiều Page Object 
- Các Page Object được tạo và truy cập từ 1 page duy nhất
- Các Page Object độc lập với nhau
- Các Page chỉ được tạo khi cần thiết

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

**2. Return POM from another POM:**
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