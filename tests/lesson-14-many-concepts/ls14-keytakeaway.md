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

sau đó ở terminal, click vào show report rồi xem video
#### Emulation
- Emulation giúp giả lập các thông tin như: locale (địa phương), timezoneId (múi giờ), permission (các quyền)...
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