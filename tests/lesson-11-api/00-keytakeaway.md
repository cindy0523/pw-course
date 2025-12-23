### API with Playwright
- Gọi API bằng cách sử dụng fixture "request" 
- Gọi API không cần thông qua mở browser
- Thực hiện các thao tác gọi API trực tiếp trong code
- Đối với UI thì dùng fixture "page", còn API thì dùng fixture "request"

**Cách lấy response:**
response.json(): trả về dạng object
response.text(): trả về dạng string

