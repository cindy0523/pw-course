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
#### Test

