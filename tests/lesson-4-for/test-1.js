/*
KIẾN THỨC BỔ SUNG ĐỂ LÀM BÀI:
1. Chuyển đổi hệ thập phân sang hệ thập lục phân
Trong JavaScript, bạn có thể sử dụng phương thức toString(16) để chuyển đổi một số thập
phân sang hệ thập lục phân. Ví dụ:
let decimalNumber = 120;
let hexadecimalNumber = decimalNumber.toString(16);
console.log(hexadecimalNumber); // Output: 78
 
2. Hàm toLowerCase và toUpperCase trong JavaScript
toLowerCase(): Chuyển đổi chuỗi thành chữ thường.
toUpperCase(): Chuyển đổi chuỗi thành chữ hoa.
Ví dụ:
let text = "K11 Challenge";
let lowercaseText = text.toLowerCase();
let uppercaseText = text.toUpperCase();
console.log(lowercaseText); // Output: k11 challenge
console.log(uppercaseText); // Output: K11 CHALLENGE
*/
 
/*
Câu hỏi
Bạn là một lập trình viên tài năng được tuyển chọn tham gia cuộc thi lập trình quốc tế "K11".
Chuyến đi của bạn sẽ đưa bạn đến những thử thách hấp dẫn, nơi bạn sẽ phải sử dụng kiến thức về JavaScript
 để vượt qua mọi chướng ngại vật và giành chiến thắng.
Hãy bắt đầu cuộc hành trình!
Giá trị của kho báu lần này chỉ có một:
trị giá 150 000đ tiền mặt, được chuyển khoản ngay
vào đầu buổi học tới cho người đứng đầu.
 
1. Khởi động Tàu Vũ trụ K11
Để bắt đầu hành trình, bạn cần khởi động Tàu Vũ trụ K11 bằng cách tạo một chương trình
JavaScript thực hiện các yêu cầu sau:
- Hành tinh khởi đầu: Tạo một biến departurePlanet với giá trị "Trái Đất".
- Nhiệm vụ: Tạo một biến mission với giá trị "Khám phá Vũ trụ K11".
- Phi hành đoàn: Tạo một mảng crew chứa tên các thành viên phi hành đoàn: Tên các
thành viên trong lớp.
- Khởi động Tàu: Viết một hàm launchShip nhận mảng crew làm đầu vào và trả về
một thông điệp "Chuẩn bị khởi động! Phi hành đoàn gồm: <danh sách
tên thành viên phi hành đoàn> sẽ đồng hành cùng bạn trong chuyến
phiêu lưu <mission>!".
- Kết nối với Trung tâm Điều khiển: Gọi hàm launchShip và in thông điệp chào mừng ra
console.
*/
 
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K11";
 
let crew = ["Thư", "Nga", "Tú Anh", "Lợi", "Phong Đỗ"];
 
function launchShip() {
    console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`);
};
 
launchShip();
 
/*
2. Du hành đến hành tinh bí ẩn
Tàu vũ trụ K11 của bạn đã cất cánh và đang trên đường đến một hành tinh bí ẩn. Để điều
hướng chính xác, bạn cần viết một hàm calculateDistance để tính toán khoảng cách đến
hành tinh đó.
Hàm calculateDistance nhận hai tham số là speed (tốc độ tàu vũ trụ) và time (thời gian
di chuyển) và trả về khoảng cách tính toán được.
Sau đó, gọi hàm calculateDistance với tốc độ 1000km/h và thời gian 24 giờ và in kết
quả ra console
*/
 
function calculateDistance(speed, time) {
    return speed * time;
};
 
console.log(`Khoảng cách đến hành tinh nếu đi với tốc độ 1000km/h và thời gian 24 giờ là: ${calculateDistance(1000, 24)} km/h`);
 
/*
3. Hành tinh kỳ lạ
Tàu vũ trụ K11 đã đến được hành tinh bí ẩn. Hành tinh này có một đặc điểm rất thú vị: thời gian
trên hành tinh này được tính theo hệ thập lục phân (hexadecimal).
Bạn cần viết một hàm convertTimeToHex để chuyển đổi thời gian từ hệ thập phân (decimal)
sang hệ thập lục phân. Hàm này nhận một tham số là time (thời gian) và trả về giá trị thời
gian đã được chuyển đổi sang hệ thập lục phân.
Sau đó, gọi hàm convertTimeToHex với thời gian là 120 giây và in kết quả ra console.
*/
 
function covertTimeToHex(time) {
    return time.toString(16);
};
 
console.log(`Thời gian trên hành tinh tính theo hệ thập lục phân (hexadecimal), nếu ở Trái Đất là 120s thì ở đây là ${covertTimeToHex(120)}s`)
 
/*
4. Khám phá kho báu
Hành tinh bí ẩn này ẩn chứa một kho báu vô giá.
Để tìm được kho báu, bạn cần giải mã một dãy mật mã.
Mật mã được tạo thành từ các chữ cái viết thường và chữ cái viết hoa,
cách nhau bởi dấu cách.
Bạn cần viết một hàm decryptCode để giải mã mật mã.
Hàm này nhận một tham số là code (mật mã)
và trả về mật mã đã được giải mã.
Quy tắc giải mã như sau:
- Chữ cái viết thường sẽ được chuyển thành chữ cái viết hoa.
- Chữ cái viết hoa sẽ được chuyển thành chữ cái viết thường.
- Ví dụ: Decrypt Code sẽ được giải mã thành dECRYPT cODE.
Sau đó, gọi hàm decryptCode với mật mã là K11 Challenge và in kết quả ra console.
*/
 
function decryptCode(code) {
    let result = '';
    for (let i = 0; i < code.length; i++) {
        let char = code[i];
        if (char === char.toUpperCase() && char != char.toLowerCase()) {
            result += char.toLowerCase();
        } else if (char === char.toLowerCase() && char != char.toUpperCase()) {
            result += char.toUpperCase();
        } else {
            result += char;
        }
    }
    return result;
};
 
console.log(`Mật mã được giải là: ${decryptCode("K11 Challenge")}`);
 
/*
5. Trở về Trái Đất
Sau khi khám phá kho báu, bạn cần điều khiển tàu vũ trụ K11 trở về Trái Đất.
Bạn cần viết một hàm returnToEarth để thực hiện hành động này. Hàm này không nhận
tham số đầu vào và không trả về giá trị. Hàm này chỉ đơn giản in một thông điệp "Chuẩn bị
trở về Trái Đất!" ra console.
Gọi hàm returnToEarth để hoàn thành nhiệm vụ.
Lưu ý
- Hãy sử dụng kiến thức đã học về Javascript để hoàn thành các thử thách.
- Sử dụng các biến, hằng số, mảng, đối tượng và hàm để tạo ra chương trình JavaScript
hoàn chỉnh.
- Nên tự làm để biết sức mình đến đâu. Không nên dùng các công cụ hỗ trợ giải bài tập
và gian lận.
- Hãy sáng tạo và làm theo nhiều cách khác nhau. Điều này sẽ giúp bạn chiến thắng các
đối thủ khác.
Chúc bạn may mắn và giành chiến thắng trong cuộc thi "K11"! ^^
*/

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
};

returnToEarth();