### Test.describe() trong Plawywright
- Giống như test suite, nhiệm vụ là gom những testcase chung module vào với nhau để dễ đọc
```
test.describe ('tên suite', async() => {
    test('test1', async() => {
        //code here
    })

        test('test2', async() => {
        //code here
    })
})
```

---
### Test hooks trong Playwright
**Thời điểm chạy test**
1. Trước khi chạy
2. Trong khi chạy
3. Sau khi chạy

--> Các thời điểm này gọi là các **hooks**
**Trong PW sẽ có các hooks chính**
1. beforeAll: trước khi chạy suite
2. beforeEach: trước khi chạy mỗi test nhỏ
3. afterEach: sau khi chạy mỗi test nhỏ
4. afterAll: sau khi chạy suite

**Note:**
- Mình sẽ khai báo các hooks này trong test.describe()
- Đưa các hooks lên đầu vì lỡ như trường hợp test case có vài trăm dòng code thì mình sẽ kbiet cái afterEach, afterAll nằm đâu và phải kéo xuống dưới cùng để xem bị mất thời gian, và lỡ như test fail thì nó sẽ ko báo fail ở đâu, nên sẽ rất khó trace lỗi, nên mình sẽ đưa toàn bộ các hooks đó lên đầu để xử lý
- Thường sẽ đưa **precondition** vào **beforeEach** để tránh lặp code phải khai báo các step trong từng testcase 1, bị duplicate code thành 2-3 dòng, nên mình sẽ đưa vào step chung
- Thường sẽ dùng **beforeAll** để **khai báo data, config môi trường** hoặc có khi **khai báo lên đầu ở trong test.describe()**
- Web first assertion là kiểu tự động chờ cho tới khi nó render lên thì mới start verify
- Trong playwright khi code expect thì nếu để "await" nằm trước "expect()" thì kiểu sẽ thực hiện verify ở trên trang web, còn không có "await" thường sẽ verify data đã có rồi với nhau



