/*
Mô tả: Bạn đang xây dựng một ứng dụng quản lý thư viện. 
Hãy tạo một class để lưu trữ thông tin sách
và các phương thức để thao tác với dữ liệu này.
Yêu cầu:
- Tạo một class Library chứa các thuộc tính: name, location, books (mảng các sách).
- Tạo một phương thức addBook để thêm sách vào thư viện.
- Tạo một phương thức findBook để tìm sách theo tiêu đề.
*/

class Library {
    name: string;
    location: string;
    books: string[];

    constructor(name: string, location: string, books: string[] = []) {
        this.name = name;
        this.location = location;
        this.books = [];
    };

    //thêm sách
    addBook(newBook: string) {
        this.books.push(newBook);
    };

    //tìm sách theo title
    findBook(title: string) {
        const bookList = this.books;
        if (bookList.some(bookName => bookName === title)) {
            console.log(`Tìm thấy sách là ${title}`);
        } else {
            console.log(`Không tìm thấy sách ${title}`);
        };
    };
};

let myLibrary = new Library ("Thư viện Cute", "HCM");

myLibrary.addBook("sách toán");
myLibrary.addBook("sách văn");

myLibrary.findBook("sách ");