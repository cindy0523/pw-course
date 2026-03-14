**1. Nhánh chính:**

**main**
- Chứa code ổn định, đã release
- QA kbh code trực tiếp vào đây

**develop**
- Chứa code tích hợp cho sprint hiện tại
- QA nên checkout nhánh này để test hệ thống chung

**2. Nhánh làm việc:**

**feature/task-name**
- Mỗi task -> 1 nhánh riêng
- Dev/QA làm việc -> commit lên nhánh này

Quy tắc:
- Tên rõ ràng:
  - feature/login-ui
  - feature/update-genealogy-api

**3. Qui trình chuẩn:**

**Từ develop → create branch**
- git checkout develop
- git pull
- git checkout -b feature/xxx

**Dev code → commit → push**
- git push -u origin feature/xxx
- Tạo Pull Request vào develop
- Code review (2 người ở công ty)
- Merge vào 'develop'
- QA test trên develop environment

**Release flow:**
Khi chuẩn bị release:
- Tạo nhánh release/v1.2.0 từ develop.
- QA test regression trên nhánh này.
- Pass → merge vào main + develop.
