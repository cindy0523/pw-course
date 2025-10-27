/*
Mô tả: Bạn đang phát triển một ứng dụng quản lý đội bóng. 
Hãy tạo một class để lưu trữ thông tin cầu thủ 
và các phương thức để thao tác với dữ liệu này.
*/

class Football {
    id: number;
    name: string;
    age: number;
    team: string;

    constructor(id: number, name: string, age: number, team: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.team = team;
    };

    getInfo() {
        console.log(`Thông tin cầu thủ: ID: ${this.id}, tên: ${this.name}, tuổi: ${this.age}, đội: ${this.team}`);
    };
};

let football1 = new Football(1, "David", 28, "Denmark");
football1.getInfo();
