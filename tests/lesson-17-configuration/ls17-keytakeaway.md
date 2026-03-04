### Một vài advanced concepts + configuration:

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

#### browser() và browser.newContext():
**1. browser:**
```
const browser = await chromium.launch();
```
- browser = cái Chrome thật
  - Cookie sẽ bị dính nhau
  - Test này ảnh hưởng test kia
  - Không đảm bảo test isolation (tính độc lập)

**2. browser context:**
```
const context = await browser.newContext();
```
- browser.newContext() tạo 1 Browser Context mới - tức là 1 môi trường trình duyệt độc lập, giống như mở 1 cửa sổ ẩn danh
- Mỗi browser sẽ có nhiều Context
- Mỗi Context sẽ có:
  - cookie riêng
  - localStorage riêng
  - session riêng
  **--> không ảnh hưởng tới nhau**, vậy nên 2 user login cùng 1 lúc vẫn được

**Browser Context được sử dụng khi:**
- Cần nhiều user trong cùng 1 test
- Custom config khác với mặc định (ví dụ: viewport, locale):
```
test("Login trên mobile viewport", async ({ browser }) => {
    // Create Mobile browser context
    const mobileContext = await browser.newContext({
        viewport: { width: 400, height: 800 },
        locale: 'en-GB',
    });

    const page = await mobileContext.newPage();
    await page.goto("https://www.google.com");
})
```

#### configure test device
**Device config thực chất gồm những gì?**
Ví dụ: iPhone 13 profile gồm:
- viewport
- userAgent
- deviceScaleFactor
- isMobile
- hasTouch

--> Nó không chỉ mỗi viewport

```
export default defineConfig({
  projects: [
    {
      name: 'iPhone 13',
      use: { ...devices['iPhone 13'] },
    }
  ]
})
```

#### projects trong configuration

**Usage:**
- trong file playwright.config.ts, thì phần projects sẽ ở dạng array, mình sẽ add nhiều object bên trong
- project cho phép chạy cùng 1 bộ test nhưng nhiều env khác nhau
- 1 project = 1 cấu hình riêng biệt

Ví dụ:
  - test trên Chrome 
  - test trên firefox
  - test trên staging, dev, prod env

**Cách worker phân phối theo số projects:**
Giả sử có:
- 10 tests
- 2 project: Chromium, Firefox
- 4 workers

Vì có 2 projects:
- Chromium: 10 test
- Firefox: 10 test

--> Tổng = 20 executions

4 workers sẽ là tổng số ng chạy hết 20 executions
Playwright sẽ chia:
- test 1 chrome : worker 1
- test 2 firefox: worker 2
- tiếp tục cho tới khi đủ 4 workers
- worker nào xong trước thì nhận test tiếp (bất kể project nào)

```
projects: [
  {
    name: 'staging-chrome',
    use: {
      browserName: 'chromium',
      baseURL: 'https://staging.app.com'
    }
  }
]
```

#### Mock API

- Playwright cung cấp API để mock và modify network traffic (cả HTTP và HTTPS)
- Bằng cách sử dụng event listener (request) dể lấy api trước

**1. Mock API request:**
- Mock API = tự tạo response API giả để trả về thay vì server thật bằng cách intercept API call
- PW dùng page.route() để intercept

**Khi nào nên mock data?**
- Khi chưa có API
- Khi data khó setup, env không ổn định, thay vì đợi BE tạo data mất thời gian/ data dễ bị thay đổi
- Khi test edge case khó tái hiện
