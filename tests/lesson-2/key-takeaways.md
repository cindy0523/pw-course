# Version control system 
- là hệ thống quản lí các phiên bản, mục tiêu để kiểm soát thời điểm nào ai là ng sửa, họ sửa cái j, time sửa lúc nào để cho dễ quản lí

**Gồm:**
1. Local version control system: 
Mỗi 1 lần sửa là 1 file version, chỉ trên máy của mình thôi

2. Centralize: 1 máy chủ tập trung, thay vì lưu ở máy cá nhân, thì mình có 1 máy chủ tập trung (hay còn gọi là server), mình đưa dữ liệu lên SER , nếu local mất thì SER vẫn còn sống

--> centralize là data tập trung

3. Distributed: nếu SER chết thì cx sẽ mất data lun, nên sẽ lưu ở nhiều máy tính con khác nhau, chẳng hạn bão lũ ở 1 vùng thôi, con bên Mỹ vẫn còn --> phân tán nó ra


# Git
- Git là Linus Torvalds, là cha đẻ ra hdh Linus, nó sai chính tả của Get 1 cách cố tình
- Mình dùng Git để có nhu cầu quản lí phiên bản
- Git là 1 version control system distributed
- Mình có nhiều VCS khác nhau nhưng mình chọn Git vì nó dễ dùng, có nhiều tính năng vượt trội, chia nhiều branch, tốc độ xử lí nhanh
- VCS khác như : SVN, CVS,...
Nhưng hiện tại Git chiếm phần lớn

**GIT vs GITHUB** 
1. Git là 1 phần mềm, gõ trên terminal
- Github là 1 dịch vụ web

2. Github host trên 1 website
- Git thì cài trên máy bạn

3. Github là tool có GUI
- Git là cmd tool

4. Git để quản lí phiên bản, đưa file git lên Git repo
- Github để upload Git repo

**3 trạng thái của Git**
1. Working directory: khi khởi tạo git init, nó sẽ ở vùng này , vùng kiểm tra các file mới
2. Staging area: muốn đưa file lên Stage thì gõ git add. [Tên file], vùng chuẩn bị đưua vào commit để tạo ra các phiên bản
3. Repository: dùng câu lệnh git commit -m "text”, vùng các commit

**Các câu lệnh git**
- Git config --global user.name "tên”
- Git config --global user.mail "mail”

--> bỏ --global nếu ko muốn config cho toàn bộ file

# Javascript
- Nó là 1 nn lập trình, đặt tên ăn theo Java
- Ra đời năm 1995, đang là nn đứng top1 năm 2023, và đã top1 trong 10 năm, là 1 nn hot
##Làm sao để code js chạy dc?##
- Do phần mềm trình duyệt hỗ trợ chạy js, chẳng hạn như chrome, 
- có các engine
1. Edge: Chaka
2. Firefox: SpiderMonkey
3. Chrome: V8
- Để chạy js trên máy tính cần Node.js cài vào máy, nó hỗ trợ code, hiểu code và chạy code, đó là Node.js