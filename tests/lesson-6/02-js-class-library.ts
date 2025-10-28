/*
Mô tả: Bạn đang xây dựng một ứng dụng quản lý thư viện. 
Hãy tạo một class để lưu trữ thông tin sách
và các phương thức để thao tác với dữ liệu này.
Yêu cầu:
- Tạo một class Library chứa các thuộc tính: name, location, books (mảng các sách).
- Tạo một phương thức addBook để thêm sách vào thư viện.
- Tạo một phương thức findBook để tìm sách theo tiêu đề.
*/

class Book {
    bookId: number;
    bookName: string;

    constructor(bookId: number, bookName: string) {
        this.bookId = bookId;
        this.bookName = bookName;
    };
};

class Library {
    name: string;
    location: string;
    books: Book[];

    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
        this.books = [];
    };

    //thêm sách
    addBook(newBook: Book) {
        this.books.push(newBook);
    };

    //tìm sách thep title
    findBook(bookName: string): Book | undefined {
        return this.books.find(book => book.bookName.toLowerCase() === bookName.toLowerCase());
    };
};

let myLibrary = new Library ("Thư viện Cute", "HCM");

myLibrary.addBook(new Book(2, "Sách toán"));
myLibrary.addBook(new Book(3, "Sách văn"));

console.log(myLibrary.findBook("Sách toán"));