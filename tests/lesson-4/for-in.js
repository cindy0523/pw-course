
/*
1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng
Ví dụ: object student = {"name": "Alex", "age"= 10} thì in ra
name = Alex
age = 10
*/
 
const student = { name: "Coca", age: 26, salary: 50 };
 
for (const key in student) {
    console.log(key, "=", student[key]);
}
 
/*
2. Tính tổng các giá trị số của các thuộc tính trong 1 đối tượng
Ví dụ: object student = {"name": "Alex", "age"= 10, "salaray": 20}
thì in ra tổng 30 (10+ 20)
*/
 
let totalArr = 0
 
for (const key in student) {
    if (typeof student[key] === "number") totalArr += student[key];
};
 
console.log("tổng các giá trị số của các thuộc tính trong 1 đối tượng", totalArr);
 
/*
3. Tạo 1 mảng chứa tất cả các tên thuộc tính của một đối tượng
Ví dụ object sutdent = {"name": "Alex", "age": 10} thì sẽ tạo ra 1 mảng {"name", "age"}
*/
 
 
 