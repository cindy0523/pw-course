#### Javascript: async & await

**async** và **await** là 1 cú pháp của Javascript giúp bạn làm việc với **bất đồng bộ** (asynchronous) dễ đọc và dễ hiểu hơn so với dùng .then() và .catch()

**1. async:** 
khai báo 1 hàm bất động bộ, khi đặt async ở trước 1 hàm thì hàm đó sẽ luôn trả ra 1 "lời hứa" (promise)

**2. await:** 
- chỉ dùng được bên trong hàm async
- dùng để chờ 1 promise resolve
- làm code trông giống code viết tuần tự

**Khi nào nên dùng async await?**
- Gọi API (đợi server xử lí và trả data)
- Đợi đọc file
- Chờ Database, Backend xử lí
- Test automation

---
#### Test generator (Code gen)
- Playwright cung cấp tool tự sinh ra code khi thao tác trên UI

**Cách 1:** Sử dụng VS Code
- Record new test
- Record at cursor

**Cách 2:** Sử dụng Terminal
- npx playwright codegen (url)

---
#### Visual comparison
- Chụp screenshot UI
- So với baseline
- Khác → fail test

**Visual test thật sự đáng dùng khi:**
1. Product/ Project chú trọng UI pixel perfect (lệch 1 chút là user/ client chửi)
2. Regression UI lớn (đổi FE frameowork, refactor CSS, ...)
3. Component test level

**Không nên dùng khi:**
- Dynamic UI:
  - Datetime
  - Random data
  - Animation
  - Ads
  - Notifications

**Cách 1:**
Mặc định, khi chụp screenshot, playwright sẽ chỉ chụp màn hình trong viewport:
```
await expect(page).toHaveScreenshot();
```

Để **chụp toàn bộ trang web**, bạn thêm option: 
fullPage: true vào trong screenShot option:
```
await expect(page).toHaveScreenshot({
    fullPage: true,
});
```

**Best practice:**
```
await expect(page).toHaveScreenshot('checkout-summary.png', {
  maxDiffPixelRatio: 0.01,
  animations: 'disabled',
});
```
👉 Phải disable animation
👉 Phải fix viewport
👉 Phải fix font

**Lưu ý:**
- Khi chạy lần đầu thì nó sẽ báo lỗi vì chưa có hình để so sánh
- Nó sẽ tự sinh ra 1 folder là visual compare để chứa hình

**Cách 2: Terminal command**
- Sử dụng câu lệnh:
```
npx playwright test -g "test title" --update-snapshots
```
**Visual compare 1 phần:**
```
test("Visual test 1p", async ({ page }) => {
    const titlePage = "//h2[text()='Tài liệu thực hành playwright']"
    await page.goto("https://material.playwrightvn.com");
    await expect(page.locator(titlePage)).toHaveScreenshot('title.png');
});
```

**Mask: ẩn đi**
```
await expect(page).toHaveScreenshot({
  mask: [page.locator('.time'), page.locator('.avatar')]
});
```

#### Video recording
- Ghi lại hành trình run test để mình theo dõi bug trong test để tái hiện lỗi dễ hơn
- Sửa file playwright.config.ts, thêm vào object use
```
 use: {
    headless: false,
    video: {
      mode: 'on',
      size: { width: 640, height: 480 },
    }}
```
- Chạy câu lệnh trong terminal
```
npx playwright test -g "title testcase"
```

#### Trace (Reporter)
- Dùng để trace lại khi debug, gõ câu lệnh
```
npx playwright test "title TC" --trace on
```
- sau đó ở terminal, click vào show report
- click "View Trace" và check
- phần Action để xem locator theo từng action

**Cách khác:**
1. Vào Playwright Extension trên VS Code
2. Ở tab bên trái, click vào checkbox "Show trace viewer" trong mục "Setting"
3. Sau đó chạy lại file test bất kì = cách nhấn nút Play

#### Emulation (Mô phỏng/ Giả lập)

- Emulation giúp giả lập các thông tin như: 
  - device
  - kích thước viewport
  - locale (địa phương) và timezoneId (múi giờ): thay đổi giờ giấc bên các quốc gia khác
  - color scheme: giả lập chế độ màu (light/ dark) của hệ điều hành trong browser
  - geolocation: giả lập vị trí để khỏi bật VPN
  - permission: giả lập user bấm "allow/deny" trên browser pop-up (bật camera/ bật notification,...)

- Để giả lập các thông tin này, bạn có thể dùng test.use để giả lập ngay trong file test như sau:

```
import { test, expect } from '@playwright/test';

test.use({
    locale: "es_ES",
    timezoneId: "Europe/Madrid",
    permissions: ["camera"]
});

test('my test with geolocation', async ({ page })
=> {
    await page.goto("link");
    await page.waitForTimeOut(60_000);
});
```

#### Drag and drop (Kéo thả)

**Cách 1: dragTo**
```
    const start = "//div[@id='piece-1']";
    const end = "//div[@data-piece='1']";

    await page.dragAndDrop(start, end);
```

**Cách 2: drag manually**
```
    await page.locator(start).hover();
    await page.mouse.down();
    await page.locator(end).hover();
    await page.mouse.up();
```

#### Global setup and teardown

**1. Global setup:** chạy trước khi tất cả các testcase chạy, chạy MỘT LẦN DUY NHẤT

**2. Global teardown:** chạy sau khi tất cả các testcase chạy, chạy MỘT LẦN DUY NHẤT

**So sánh với fixture:**
- Fixture có issue là chỉ run mấy cái test mà gọi tới cái fixture đó thôi
- Để chạy hết hook cho tất cả các test mà không cần sử dụng Fixture thì mình sẽ dùng global setup and teardown

**Project dependency:** 
- Project B chỉ chạy sau khi Project A chạy xong thành công

