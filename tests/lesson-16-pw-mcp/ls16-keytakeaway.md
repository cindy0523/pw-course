#### Tích hợp AI vào Automation
**1. Intro:**
- AI không phải công cụ thay thế, nó là 1 **người bạn đồng hành**
- Thay vì dành thời gian viết code, bạn có thể làm công việc có giá trị cao hơn bằng cách quản lý AI và để AI thực hiện việc này cho bạn
**Lưu ý:** 
- Kết quả do AI gen ra đôi khi rất tuyệt, nhưng cũng có lúc AI sai 
- Mình cần phải biết mình đang làm gì và xem lại, check và sửa code

**2. AI Coding tools:**

**Một vài AI Coding tools:**
- IDE extension: Winsurf, Github Copilot
- VS Code forks: Cursor, Winsurf, Kiro (hàng của Amazon)
- CLI: Claude Code, Gemini (Google), Codex CLI (Open AI), QWEN (Alibaba)

**Điểm chung của các tools:**
- mode Agentic - Nó có thể truy cập vào mô hình ngôn ngữ lớn nhưng cũng có thể tương tác với file local nên có thể tạo file, chạy lệnh, gỡ bug code
- Agent như 1 developer không bao giờ ngủ và không cần nghỉ ngơi/coffee
- Có free và trả tiền, mode free thì bị hạn chế nên đa số mình dùng khi để thử trải nghiệm

**3. Install:**
- Tải extension Copilot
- Login với account Github
- Bắt đầu dùng

**4. Using Copilot:**

**Built in mode:**
- Ask:
  - Giống chatchit, trò chuyện, mình sẽ hỏi nó như lập kế hoạch, hỏi về code (nhưng ko sửa code của mình), nó giống ChatGPT với context là codebase nhưng sẽ ko action gì cả
- Agent:
  - Đc dùng nhiều nhất + thú vị nhất
  - Phản hồi yêu cầu của mình: chạy lệnh, tạo file, sửa file, debug,...
- Edit:
  - Nếu Agent sửa toàn bộ codebase thì Edit cho chúng ta sửa file mà chúng ta mún làm việc

**Copilot Model**
- Danh sách các mô hình - Theo thời gian, 1 số model sẽ biến mất, hoặc được add thêm, update, ... Nên nếu thấy mất vài cái thì bình thường, cứ ignore
- Click vào "Manage model", mình sẽ chọn đc model mình mong muốn, và nó sẽ bắt mình cung cấp API Key (phải tốn phí để xài)
- Đối với Free thì mình chỉ xài được những model có sẵn và có 50 request free/tháng
- Mỗi model có chữ "1x" - có nghĩa là 1 request đc gửi đi đc count bằng 1 request (có 1 số model đắt hơn 1 request tương ứng với 1,5 - 2x thậm chí rẻ hơn là 0.25x)

