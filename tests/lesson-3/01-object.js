/* Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và
year=2021. Sau đó in ra năm sản xuất của xe. */

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

console.log(car.year);

/* Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc
    tính street, city, country). In ra tên đường của người này. */

let person = {
    name: "Thu",
    address: {
        street: "Phan Tay Ho",
        city: "HCMC",
        country: "Vietnam"
    }
};

console.log(person.address.street);

/* Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một
object với 2 thuộc tính kiểu number: math và english */

let student = {
    name: "Cindy",
    grades: {
        math: 10,
        english: 10
    }
};

console.log(student["grades"]["math"]);

/* Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá
của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm. */

let product = {
    dress: 200,
    skirt: 150,
    shoes: 100
};

