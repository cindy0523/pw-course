# CI/CD and Playwright testing

## Pipeline:
Để ship 1 phần mềm tới user thật, team sử dụng 1 pipeline - một chuỗi các bước tự động để 
- Build project: ghép các file, cài thư viện, tạo ra phiên bản chạy được
- Run test: chạy test tự dộng để kiểm tra code có lỗi ko, nếu testcase fail, pipeline sẽ dừng lại (nghĩa là code có vấn đề)
- Deploy code

## Devops Princples:

**1. Collaboration(Hợp tác):**
Dev, QC, Ops làm chung 1 qui trình thay vì tách rời, mục tiêu để giảm lỗi khi release
- Ví dụ: Dev push code --> auto test chạy --> deploy

**2. Automation (Tự động hóa):**
Tự động hóa càng nhiều bước càng tốt:
- build
- test
- deploy

**3. Continuous Integration (Tích hợp liên tục):**
- Continuous Integration (CI) = Dev merge/ push code liên tục vào repository
- Mỗi lần push sẽ tự: clone code - build project - run test
- Mục tiêu: phát hiện bug sớm

**4. Continuous Delivery/ Continuous Deployment:**
Sau khi test passed, code có thể deploy tự động sang environment
- Continuous Delivery: deploy manual
- Continuous Deployment: deploy tự động.

**5. Fast feedback (Phản hồi nhanh):**
Pipeline chạy nhanh để Dev biết lỗi sớm
- Ví dụ: Dev push code --> 5 phút sau CI báo test fail --> Dev sửa ngay

**6. Monitoring (Giám sát hệ thống):**
Sau khi deploy phải monitor system:
- error
- performance
- crash

## Playwright in CI/CD pipeline
Nó sẽ nằm theo thứ tự tuần tự:
1. Build
2. Test
3. Deploy
4. **Run Playwright E2E Test**

## 2 cách chạy Playwright trên CI/CD

### Cách 1. Direct install:
```bash
npm ci
npx playwright install --with-deps
npx playwright test
```
- npm ci: cài dependency từ package.json và package-lock.json)
- npx playwright install --with-deps: tải browser cần cho PW: chromium, firefox, webkit)
- npx playwright test: run automation

**Nhược điểm:**
- Chậm, mỗi lần PW chạy lại phải download browser ~300MB
- Tốn thời gian CI

### Cách 2: Docker Image (Cách Pro hơn)
- **Docker** là 1 tool để tạo và chạy **container**
- **Container** là 1 môi trường chạy app độc lập, nhẹ và tách biệt khỏi hệ điều hành chính
- **Docker image** là file định nghĩa container (1 template environment)

Đối với cách này thì:
```bash
npm ci
npx playwright test
```

Không cần npx playwright install thì browser đã có trong Docker image

## playwright.config.ts
```ts
const baseURL = process.env.E2E_BASE_URL || 'http:localhost:8080';
```
**Giải thích:**
- Sử dụng biến môi trường "E2E_BASE_URL" đc set bởi hệ thống CICD, điều này cho phép mình ko cần phải hardcode value và có thể sử dụng những testcases giống nhau chạy đc trên nhiều môi trường (nó sẽ linh hoạt hơn)
- Nếu ko dùng biến "E2E_BASE_URL" thì mặc định sẽ dùng local host

```ts
retries: process.env.CI ? 2 : 0,
```
**Giải thích:**
- retries cho phép tự động chạy lại script nếu test run fail mà mình ko cần phải thử lại manual
- retries rất hữu ích cho việc xử lý flaky test
- Sử dụng biến môi trường CI, mình sẽ check xem test run fail ở CI hay Local env
- Dòng trên có nghĩa là trong CI/CD, mình sẽ retry 2 lần nếu fail, còn nếu pass thì 0 lần
- Rất hiệu quả vì hầu hết CI/CD provider đều tự động đặt biến env này bằng True

```ts
workers: process.env.CI ? 1 : undefined,
```
**Giải thích:**
- Config này cho Playwright biết có bao nhiêu worker để chạy parallel
- Dòng này cho thấy chỉ có 1 worker đang chạy

```ts
reporter: [
    ['list'],
    ['junit', { outputFile: 'reports-e2e/junit.xml' }],
    ['html', { outputFolder: 'report-e2e/html', open: 'never' }],
],
```
**Giải thích:**
- Về mặt trouble shoot và hiểu các test script đang hoạt động ra sao, thì report rất quan trọng
