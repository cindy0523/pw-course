// 1. Khởi động Tàu Vũ trụ K11
 
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K11";
 
let crew = ["Thư", "Nga", "Tú Anh", "Lợi", "Phong Đỗ"];
 
function launchShip() {
    console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`);
};
 
launchShip();
 
// 2. Du hành đến hành tinh bí ẩn

function calculateDistance(speed, time) {
    return speed * time;
};
 
console.log(`Khoảng cách đến hành tinh nếu đi với tốc độ 1000km/h và thời gian 24 giờ là: ${calculateDistance(1000, 24)} km/h`);
 
// 3. Hành tinh kỳ lạ

 
function covertTimeToHex(time) {
    return time.toString(16);
};
 
console.log(`Thời gian trên hành tinh tính theo hệ thập lục phân (hexadecimal), nếu ở Trái Đất là 120s thì ở đây là ${covertTimeToHex(120)}s`)
 
// 4. Khám phá kho báu
 
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
 

// 5. Trở về Trái Đất

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
};

returnToEarth();