#### Pipeline:
Để ship 1 phần mềm tới user thật, team sử dụng 1 pipeline - một chuỗi các bước tự động để 
- Build project: ghép các file, cài thư viện, tạo ra phiên bản chạy được
- Run test: chạy test tự dộng để kiểm tra code có lỗi ko, nếu testcase fail, pipeline sẽ dừng lại (nghĩa là code có vấn đề)
- Deploy code

#### Devops Princple:

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

