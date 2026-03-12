### Git FAQ:

#### 1. Tại sao checkout sang nhánh rồi vẫn phải git pull?
- Vì không phải cứ checkout là tự động có code mới nhất. Vì checkout là chuyển branch bằng **local data đang có**
- Pull = update data local từ data trên server

#### 2. git push -u nghĩa là gì?
-u = set upstream (gắn nhánh local với nhánh remote lần đầu)
```
git push -u origin main
```
Sau đó những lần sau không cần viết dài ra nữa, chỉ cần viết:
```
git push
git pull
```
- Git sẽ tự hiểu remote branch tương ứng là origin/feature/login
- Nếu không dùng -u, bạn phải push như này mỗi lần:
```
git push -u origin main
```

#### 3. Cách tạo Pull Request (PR):

Trên Github/Gitlab:
1. Push nhánh của bạn lên server
2. Vào repo -> click "Compare & Pull Request"
3. Chọn:
  - Source branch: feature/xxx
  - Target branch: develop
4. Viết mô tả:
  - What changed
  - Why
  - How to test
5. Assign reviewer
6. Create Pull Request

**PR message template chuẩn:**
```
### What’s changed
- Add validation for login form
- Fix genealogy update issue

### Why
To follow BEV rule: VIN must be valid

### How to test
1. Open login page
2. Leave password empty
3. Expect: Show 'required'

### Evidence
- Screenshot: /screenshots/login-invalid.png
- Video: /videos/login-invalid.webm

### Impact
- No breaking changes
- Improved selector stability
```

#### 4. Tại sao phải tạo release/v1.2.0 từ develop?
Đây là best practice cực quan trọng:
- Khi sắp release, dev sẽ tiếp tục làm feature mới trên nhánh develop
- QA thì cần test ổn định, không bị dev push new feature làm bể build

**Giải pháp:**
- Tạo nhánh release từ develop
- QA test ổn định trên nhánh release, dev tiếp tục làm feature trên develop, nhánh release chỉ nhận fix bug, ko thêm feature

Khi Pass:
1. Merge release -> main (deploy production)
2. Merge release -> develop (để đồng bộ bug fix)