/*
Mô tả:
Bạn đang làm việc cho một cửa hàng trực tuyến và cần tạo một hệ thống quản lý đơn
hàng. Hãy tạo một class để lưu trữ thông tin đơn hàng và các phương thức để thao tác
với dữ liệu này.
Yêu cầu:
- Tạo một class Order chứa các thuộc tính: orderId, customerName, items
(mảng các sản phẩm), totalAmount.
- Sản phẩm bao gồm các thuộc tính: name, price, amount, discount
- Tạo một phương thức addItem để thêm sản phẩm vào đơn hàng.
- Tạo một phương thức calculateTotal để tính tổng số tiền của đơn hàng.
*/

class Product {
    name: string;
    price: number;
    amount: number;
    discount: number;

    constructor(name: string, price: number, amount: number, discount: number= 0) {
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.discount = discount; //phần trăm giảm giá
    };
};

class Order {
    orderId: number;
    customerName: string;
    items: Product[];
    totalAmount: number;

    constructor(orderId: number, customerName: string) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
    };

    // phương thức addItem để thêm sản phẩm vào đơn hàng.
    addItem(newItem: Product) {
        this.items.push(newItem);
    };
    // phương thức calculateTotal để tính tổng số tiền của đơn hàng.
    calculateTotal() {
        return 
    };
};

let order1 = new Order(1, "Andy");

order1.addItem(new Product("notebook", 100, 2, 0));
order1.addItem(new Product("dress", 200, 1, 0));