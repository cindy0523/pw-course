#### Build test framework
**1. Chọn framework:**
Chọn dựa trên 4 tiêu chí quan trọng:
- Server hệ thống đang support chạy gì
- Phải nhanh và dễ học, learning curve vừa phải để cả team follow được
- Cộng đồng support hoạt động năng nổ (nếu chọn FW chết rồi sẽ rất dở)
- Có chuyên gia (Dev hoặc QC giỏi) trong ngôn ngữ mình chọn: cộng đồng cũng có nhưng có người in-house sẽ support mọi người nhanh hơn

**2. Xây dựng framework:**
- Cử 1-2 bạn để viết base project, base page, utils function, giúp việc code nhanh hơn. Tránh làm đi làm lại cùng 1 việc
Vd: 
  - web của mình có nhiều site khác nhau, login vào mới có nhiều trang khác nhau
  - nếu không viết sẵn hàm login thì 3 người phải viết đi viết lại đoạn code này và gây không hiệu quả

- Xây dựng hệ thống convention, document các workflows lại (viết ở readME hoặc đâu đấy, đỡ tốn thời gian training lại cho người mới): style POM nào, dùng camelCase hay PascalCase, ...

**3. Tiến hành chạy thử trên qui mô nhỏ, và tinh chỉnh/sửa đổi framework lại sao cho thấy khá ưng ý**
- Qui mô nhỏ: 1 - 2 team, không nên chạy toàn bộ team, vì như vậy sẽ phát sinh rất nhiều issue
- Chạy trong 1 - 2 tuần, sửa đổi và khi ưng ý thì bắt đầu làm, và khi có vấn đề thì lại quay lại sửa và chạy thử tiếp
- Càng làm sẽ càng phát sinh nhiều nhu cầu và sẽ refactor nhiều

**4. Có thông tin gì thì nhắn mentor để giúp đỡ**
- Inbox riêng hoặc ntin lên group cộng đồng

#### Cấu trúc thư mục gợi ý
├── README.md
├── constants
├── fixtures
├── node_modules
├── package-lock.json
├── package.json
├── playwright.config.ts
├── pom
├── tests
├── tests-examples
└── utils

**Trong đó:**
- README.md: file tài liệu, chứa cách cài đặt, các conventions, lưu ý và các lỗi thường gặp.
- constants: folder chứa các hằng số thường dùng cho toàn bộ dự án.
- playwright.config.ts: file config theo môi trường
- pom: folder chứa các page object model
- utils: folder chứa các hàm utils dùng cho dự án.
- fixtures: folder chứa các fixture viết sẵn cho dự án.
- .gitignore: file chứa các ignore file

#### CI/CD
**Ý nghĩa:**
- **CI:** Continuous Integration - Liên tục tích hợp
- **CD:** Continuous Delivery - Liên tục triển khai

- **Ví dụ**:
  - khi code xong, muốn chắc cú thì Reviewer sẽ pull code của bạn về và chạy ở máy local của Reviewer xem các test của mn viết code có pass hay không (chứ nếu code mà ko pass thì người maintain code cũng khá vất vả)
  - Thay vì vậy, mình push code lên Github thì nó sẽ chạy luôn code của mình và biết là code pass hay failed, người Review nhìn vào sẽ biết ngay luôn

**1. Triển khai CI/CD với Github Action:**
- Tạo folder dự án auto
- Tạo 1 folder bên trong tên là ".github"
- Tạo sub folder: ".workflow"
- Trong .workflow, tạo 1 file tên là "playwright.yml"
(yml là yaml file -> trong này mình sẽ viết các cú pháp liên quan tới Github Action ở định dạng JSON)
- Viết job, ví dụ:
```
name: Playwright Tests //đặt tên cho job, j cũng đc
on: //set khi này chạy
  push:
    branches: [ main, master ] //bắt sự kiện khi push lên nhánh main/ master
  pull_request:
    branches: [ main, master ] //bắt sự kiện khi pull về nhánh main/ master
jobs:
  test: //tên job, đặt gì cũng đc
    timeout-minutes: 60 //chạy tối đa 60p
    runs-on: ubuntu-latest // chạy trên hệ điều hành Ubuntu mới nhất
    steps:
    - uses: actions/checkout@v4 //step 1: checkout code về (pull code về) (1 cái có sẵn của github action)
    - uses: actions/setup-node@v4 //step 2: setup nodejs
      with:
       node-version: lts/*
    - name: Install dependencies 
      run: npm ci
    - name: Install Playwright browser
      run: npx playwright install --with-deps
    - name: run playwright test
      run: npx playwright test
    // sau khi chạy xong sẽ có report sinh ra, mình sẽ lưu trữ nó lại (upload artifacts)
    - name: actions/upload-artifact@v4
      if: ${{ !cancel() }}
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```
