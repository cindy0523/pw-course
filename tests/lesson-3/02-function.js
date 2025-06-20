/*
1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân nặng (kg)
Trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
Biết:
○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
○ Cân nặng tính theo kg
○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
○ BMI < 18.5: Thiếu cân
○ BMI < 25: Bình thường
○ BMI < 30: Thừa cân
○ BMI >= 30: Béo phì
*/

function tinhBMI(chieuCao, canNang) {
    let BMI = canNang / (chieuCao * chieuCao)

    if (BMI < 18.5) {
        return "BMI < 18.5: Thiếu cân";
    } else if (BMI < 25) {
        return "BMI < 25: Bình thường";
    } else if (BMI < 30) {
        return "BMI < 30: Thừa cân";
    } else {
        return "BMI >= 30: Béo phì";
    }
};

console.log(tinhBMI(165, 49));

/*
2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại.
Hàm sẽ nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F')
Trả về nhiệt độ đã chuyển đổi
Biết công thức chuyển đổi:
○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
○ Từ độ F sang độ C: độ C = (độ F - 32) * 5 / 9;
*/

function convertTemperature(type, value) {
    if (type === 'C') {
        return (value * (9 / 5) + 32) + " độ F";
    }
    else if (type === 'F') {
        return ((value - 32) * 5 / 9) + " độ C";
    }
    else {
        return "Nhiệt độ C hoặc F không hợp lệ. Vui lòng kiểm tra và thử lạilại"
    }
}

//testcase
console.log(convertTemperature('F', 86));

/*
3. Khai báo một mảng các phần tử bất kì.
Viết một hàm để tính tổng của các phần tử trong một mảng số.
*/

//Khai bao 1 mang cac phan tu bat ki
const arr = [1, 2, 3, 4, 5];

//Viet ham tinh
function sumArray(array) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
};

console.log("Tổng các phần tử trong mảng là:", sumArray(arr));

/*
4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
Biết:
○ Số 0, số 1 không phải số nguyên tố.
○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó
*/

function isPrime(num1) {
    if (num1 <= 1) {
        return false;
    }

    for (let i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            return false;
        }
    }
    return true;
}

function filterPrime(array1) {
    return array1.filter(isPrime);
}

const mang = [0, 1, 2, 3, 4, 5, 6];
const nguyenTo = filterPrime(mang);
console.log("Các số nguyên tố trong mảng là ", nguyenTo);

/*
5. Tạo một function để cập nhật email cho người dùng trong một danh sách,
dựa trên tên người dùng.
Đoạn code giả mã (pseudo code) như sau:
// Khai báo mảng global các object có 2 thuộc tính: name, email
// Khai báo hàm có 2 tham số: name, newEmail
// Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên
trùng với tham số name, cập nhật giá trị email về newEmail
*/

// Khai báo mảng global các object có 2 thuộc tính: name, email
const users = [
    { name: "Linh", email: "linh@mailsac.com" },
    { name: "Thu", email: "thu@mailsac.com" },
    { name: "Thinh", email: "dudu@mailsac.com" }
]
// Khai báo hàm có 2 tham số: name, newEmail
function updateMail(name, newEmail) {
    for (let user of users) {
        if (user.name === name) {
            user.email = newEmail;
            return `Email của ${name} đã được cập nhật thành ${newEmail}`
        }
    }
    return `Không tìm thấy người dùng có tên là ${name}`
}
console.log("Trước khi update",users);
updateMail("Thu","test@mailsac.com");
console.log("Sau khi update",users);

/*
6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một
mảng các object.
Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
*/
 
const studentList = [
    { name: "Alex", score: 85 },
    { name: "Thu", score: 100 },
    { name: "Dudu", score: 95 }
];
 
function tinhDiemTB(studentArray) {
    if (studentArray.length === 0) {
        return 0;
    }
 
    const tongDiem = studentArray.reduce((tong, sv) => {
        return tong + sv.score;
    }, 0);
 
    const TB = tongDiem / studentArray.length;
    return TB;
};
 
console.log("Điểm trung bình của các sinh viên là: ", tinhDiemTB(studentList));
/*
7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:
“product 1”, price: 100 }
*/
 
const cart = [
    { name: "lipstick", price: 150 },
    { name: "blush", price: 150 },
    { name: "mascara", price: 150 },
    { name: "cushion", price: 200 }
];
 
function cartCheck(cartName) {
    const priceCheck = cartName.every(product => product.price > 0)
 
    if (priceCheck) {
        return "Giỏ hàng có sản phẩm có giá > 0"
    } else {
        return "Giỏ hàng bị lỗi giá, bạn vui lòng kiểm tra lại nhé"
    }
}
 
console.log("Kiểm tra giỏ hàng: ", cartCheck(cart));
 
/*
8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không.
Biết cửa hàng mở cửa từ 9 giờ sáng đến 9 giờ tối.
*/
 
function checkOpeningHours(hours) {
    if (hours >= 9 && hours <= 21) {
        return "The store is opening"
    } else {
        return "The store is closed"
    }
}
console.log("The store opening status: ", checkOpeningHours(8));
 
/*
9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi:
trẻ em dưới 5 tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
*/
 
function checkTicketPrice(age) {
    if (age < 6) {
        return "The ticket price is free for children under 5 years old";
    } else if (age >= 6 && age <= 17) {
        return "The ticket price is 50k for children from 6 to 17 years old";
    } else if (age > 17) {
        return "The ticket price is 100k for adult fromfrom 18 years old";
    } else {
        return "The age is not valid. Please check again"
    }
}
 
console.log(checkTicketPrice(5));
 
/*
10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào.
Sử dụng câu lệnh switch...case để xử lý.
*/
 
function checkMonth(month) {
    switch (month) {
        case 1:
            return "Tháng 1";
        case 2:
            return "Tháng 2";
        case 3:
            return "Tháng 3";
        case 4:
            return "Tháng 4";
        case 5:
            return "Tháng 5";
        case 6:
            return "Tháng 6";
        case 7:
            return "Tháng 7";
        case 8:
            return "Tháng 8";
        case 9:
            return "Tháng 9";
        case 10:
            return "Tháng 10";
        case 11:
            return "Tháng 11";
        case 12:
            return "Tháng 12";
        default:
            return "Dữ liệu bị sai, vui lòng kiểm tra lại"
    }
}
 
console.log("Tên tháng là:", checkMonth(5));
 
/*
11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh:
giỏi (>= 8), khá (>=6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).
*/
 
function checkLoaiHS(diem) {
    if (diem < 5) {
        return "HS yếu"
    } else if (diem >= 5 && diem < 6.5) {
        return "HS trung bình"
    } else if (diem >= 6.5 && diem < 8) {
        return "HS khá"
    } else if (diem >= 8) {
        return "HS giỏi"
    } else {
        return "điểm số không hợp lệ, bạn vui lòng kiểm tra lại nha ~"
    }
}
console.log("Loại HS là:", checkLoaiHS(8));
/*
12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết:
nóng (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
*/
 
function checkWeatherStatus(nhiet) {
    if (nhiet >= 30) {
        return "nóng"
    } else if (nhiet < 30 && nhiet >= 20) {
        return "mát"
    } else if (nhiet < 20) {
        return "lạnh"
    } else {
        return "nhiệt độ không hợp lệ, bạn vui lòng kiểm tra lại nha~"
    }
}
 
console.log("Tình trạng thời tiết:", checkWeatherStatus(28));