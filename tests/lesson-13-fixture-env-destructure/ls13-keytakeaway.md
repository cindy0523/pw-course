#### Javascript: Object destructuring
- destruct = phá hủy, dỡ bỏ
- Sự cần thiết: dùng để giảm duplication

**Object destructure:** 
- truy xuất các phần tử trong Object Javascript và gán giá trị đấy vào biến dễ dàng hơn --> Cách viết ngắn gọn hơn để làm việc với Object thay vì truy cập đến từng thuộc tính riêng lẻ
- ex:
```
const myClass = {
    code: "K10",
    course: "full-stack QA",
    name: "Phuong"
};

//Cách cũ hay làm để truy xuất phần tử:
// const code = myClass.code;
// const code = myClass.course;

//Cách mới với destructuring:

const { code, course, name } = myClass;
console.log(code);    //Kết quả: "K10"
```

**Cú pháp:**
```
const {property 1, property 2, ...} = object;
```

##### Cách khác: Set giá trị mặc định (default value)
- Để lỡ khi property ko tồn tại thì biến của mình sẽ đc gán giá trị mặc định thì lấy ra khỏi bị undefined

**Cú pháp:**
```
const {property = "QE" } = object;
```

##### Đổi tên property:
- Áp dụng trong trường hợp khi khởi tạo thuộc tính nhưng ở bên ngoài có ai đó đã lấy cái tên property của mình đặt cho tên biến của họ, thì mình sẽ gán lại property bằng tên khác ở bên ngoài

**Cú pháp:**
```
const {property1: newProperty1, property 2, ... } = object

console.log(newProperty1)
```

##### Object con lồng trong Object cha
ex:
```
const person = {
    name: "Thu",
    address: {
        city: "HCM",
        country: "VN"
    }
};

const { address: {city, country} } = person;
console.log(city); //HCM
console.log(country); //VN
```

---
#### Fixture
**Khái niệm:**
Fixture là những thứ đc chuẩn bị sẵn để phục vụ cho test
- Setup trước khi test chạy
- Teardown sau khi test thực hiện xong

Nó giúp test:
- Gọn hơn, tránh lặp code, dễ maintain
- isolate giữa các test, giúp cho các test ko phụ thuộc vào nhau
- Nhóm các test dựa trên ý nghĩa, thay vì common setup

Trong testing, fixture thường là:
- User đã login sẵn
- Database có sẵn data test
- Token/ session
- Browser + page đã mở
- Mock API
- File test, file config, file env

**ex:**
```page```, ```request``` là những fixture có sẵn trong Playwright
```loginPage``` là fixture custom do mình tạo

**Ví dụ:**
Trong bộ Test Case "Login", mình sẽ có case "Login successfully" và "Login failed"
Mình sẽ có các hooks:
- beforeEach:
- - create POM
- - get method login()

- afterEach
- - clean up data

- code execute

--> Những cái này là **common setup**, chỉ dùng cho 1 file duy nhất thôi trên mỗi file và phải viết nhiều lần
--> Mình sẽ viết fixture để xử lí những cái này, fixture giúp mình tự động chạy beforeEach, afterEach

##### Trong Manual Testing cũng có khái niệm fixture:
Có, nhưng mình làm bằng tay
- Tạo user test
- Chuẩn bị data
- Clear cache

--> bản chất vẫn là fixture

##### Hàm use trong Playwright:
```use``` là hàm Playwright để 
- trả fixture cho test dùng
- đánh dấu ranh giới setup ↔ tear down 

1. Trước **use**: giống **beforeEach** (setup)
2. **use**: chạy code trong file test
3. Sau use: giống **afterEach** (teardown)

**Cú pháp trong file test:**
```
// Precondition
setup

use(page)   ← test chạy ở đây

// Post-condition
teardown
```

**Ví dụ:**
File fixture:
```
const test = base.extend({
    todoPage: async ({ page }, use) => {
        //Precondition
        const todoPage = new TodoPage(page);
        await todoPage.goto();
        await todoPage.addToDo('item1');
        await todoPage.addToDo('item2');

        //test chạy
        await use(todoPage); 

        //Post condition
        await todoPage.removeAll();
    },
});
```

**--> Use là ranh giới giữa "chuẩn bị" và "chạy test"**

##### Built in fixture:
Playwright cung cấp sẵn 1 số fixture để làm việc

| Fixture            | Là gì                                  | Scope      | Dùng để          |
| ------------------ | ---------------------------------------|------------|------------------|
| **browser**        | Trình duyệt thật                       | per-worker | Tạo context      |
| **browserName**    | Tên browser: chronium, firefox, webkit | constant   | Condition        |
| **BrowserContext** | Profile/ session browser               | per-test   | Auth, cookie     |
| **page**           | Tab nằm trong browser                  | per-test   | UI actions       |
| **request**        | Client để gọi API                      | per-test   | API test / setup |

##### Tạo mới 1 fixture:
**1. Sử dụng test.extend() để tạo mới 1 test object**
- Khi bạn làm 1 cái fixture ổn ổn cho team dùng, thì đảm bảo sẽ đc ngưỡng mộ luôn

**Cú pháp tạo Fixture:**
**- File fixture:**
```
import { Page, test } from "@playwright/test";

const testFixture = test.extend<{ dashboard: Page }>({
    dashboard: async ({ page }, use) => {
        //beforeEach
        console.log("login");

        //use
        await use(page);

        //afterEach
        console.log("clean data");
    }
});

export { testFixture };
```

**- File test:**
```
import { testFixture } from "../../fixture/demo-fixture";

testFixture("Dashboard", async ({ dashboard }) => {
    console.log("Click menu Post Page");
    console.log("Verify title");
});
```

**2. Cách tổ chức fixture (merge fixture)**
- Khi có nhiều fixture, thì sẽ rất rối và phải import nhiều
--> để xử lí issue này thì có tính năng merge fixture của Playwright
- Tạo 1 file index.fixture.ts
- Thuật ngữ index là kiểu mình sẽ import tất cả những gì liên quan tới file index vào, khi muốn import gì thì chỉ cần export cái file index ra thôi

---
#### Quản lí biến môi trường (Managing environment variables)

- Mỗi env có data khác nhau, và url cũng khác, thông tin DB khác nhau, để không phải code lại và tách riêng ra thì mình có cách tạo biến env để quản lý

**Ví dụ:**
- pw-practice-dev.playwrightvn.com (Dev env)
- pw-practice.playwrightvn.com (Prod env)

**Giải pháp:**
1. Cài đặt thư viện dotenv:
Sử dụng câu lệnh "npm install dotenv --save"
--> nó sẽ tạo cho mình 1 cái thư viện vào trong file playwright.config.ts

2. Vào file playwright.config.ts, mình sẽ import thêm hàm config từ thư viện dotenv mình vừa cài
```
import { config } from 'dotenv';
config();
console.log(process.env.ENV1);
```
**Mục đích:** cái hàm này sẽ giúp mình đọc cái file dotenv ở trong project của mình

3. Vào cấu trúc source code, tạo  1 file tên là ".env"
--> File .env này sẽ chứa các biến env của mình

4. Tạo file data theo biến môi trường

---
#### Kiến thức bổ sung để làm bài: 

##### Nâng cao về Object destructuring
**1. Multiple property**
Dùng trong trường hợp bạn muốn destructuring nhiều thuộc tính của object:
const { prop1, prop2, ..., propN } = object

**2. Default value**
Dùng trong trường hợp bạn muốn đặt giá trị mặc định cho một thuộc tính.
const { prop = 'Default' } = object;

**3. Alias**
Dùng trong trường hợp bạn muốn đặt một cái tên khác cho property
const { prop: myProp } = object;

**4. Deep property**
Dùng trong trường hợp bạn muốn destructuring các object nằm sâu bên trong
Một object khác

const { prop: { deepProp } } = object;
