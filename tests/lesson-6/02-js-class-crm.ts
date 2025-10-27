/*
Mô tả
Bạn là một lập trình viên xây dựng hệ thống quản lý khách hàng cho một công ty. 
Hãy tạo một class để lưu trữ thông tin khách hàng và các phương thức 
để thao tác với dữ liệu này.
Yêu cầu:
- Tạo một class Customer chứa các thuộc tính: id, name, email, phone.
- Tạo một phương thức displayInfo để hiển thị thông tin khách hàng.
- Tạo một phương thức updateEmail để cập nhật email của khách hàng.
Phương thức nhận vào một tham số duy nhất là newEmail
*/

class Customer {
    id: number;
    name: string;
    email: string;
    phone: number;

    constructor(id: number, name: string, email: string, phone: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    };

    displayInfo() {
        console.log(`Thông tin KH là ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`);
    };

    updateEmail(newEmail: string) {
        this.email = newEmail;
        console.log(`Email mới là: ${newEmail}`);
    };
};

let Customer1 = new Customer(1, "Thu", "thucute@mailsac.com", 8423456789);
console.log(Customer1);

Customer1.updateEmail("thu123@mailsac.com");