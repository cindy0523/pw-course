### Array utils:
**1. map:** tạo ra 1 mảng mới dựa trên từng phần tử của mảng gốc
```
let arr1 = [1, 2, 3, 4 ];
let newArr = arr1.map(num => num * 2);
console.log(newArr);
// Kết quả: [2, 4, 5, 8 ]
```

**2. filter():** tạo 1 mảng mới chứa các phần tử thỏa mãn điều kiện trong hàm từ mảng gốc
```
let arr1 = [1, 2, 3, 4 ];
let newArr1 = arr1.filter( num => num % 2 === 0 );
console.log(newArr1);
// kết quả: [ 2, 4 ]
```

**3. find():** trả ra giá trị của phần tử đầu tiên trong mảng thỏa mãn điều kiện trong hàm, nếu ko có cái nào thỏa thì trả ra undefined
```
let arr1 = [1, 2, 3, 4 ];
let newArr1 = arr1.filter( num => num % 2 === 0 );
console.log(newArr1);
// kết quả: [ 2 ]
```

**4. reduce():** trả về 1 giá trị duy nhất (từ trái qua phải)
```
array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
```

**5.some():** kiểm tra ít nhất 1 phần tử trong mảng thỏa điều kiện trong hàm hay không, trả về true/ false
```
let arr1 = [1, 3 ];
let testArr = arr1.some( num => num %2 !== 0 );
console.log(testArr);
// kết quả: true
```

**6. every():** trả ra true/false giống some, nhưng tất cả các phần tử phải thỏa mãn điều kiện, chỉ cần có 1 cái ko thỏa là trả false
```
let arr1 = [1, 3 ];
let testArr = arr1.some( num => num %2 !== 0 );
```

**7. push():** thêm 1 hoặc nhiều phần tử vào cuối mảng, trả về độ dài mới của mảng
```
let arr1 = [1, 2, 3];
arr1.push(4, 5);
console.log(arr1);
//kết quả: 1,2,3,4,5
```

**8. shift():** loại bỏ phần tử đầu tiên của mảng và trả về phần tử bị loại bỏ
```
let arr1 = [1, 2, 3];
let newArr = arr1.shift();
console.log(arr1); // KQ: 2,3
console.log(newArr); //KQ: 1
```

**9. sort():** sắp xếp phần tử trong mảng theo thứ tự tăng dần, giảm dần
```
sort((a, b) => a - b) //tăng dần
sort((a, b) => b -a ) // giảm dần
```

### Class: 
- 1 khái niệm trong lập trình đối tượng trong lập trình OOP, như 1 khuôn mẫu định nghĩa các thuộc tính, phương thức, hành động ... như 1 cái template để định nghĩa
Class giúp source code dễ đọc, dễ quản lí, dễ tái sử dụng và tăng tính linh hoạt cho code, giảm việc lặp code

**Convention:** dùng PascalCase
**Khai báo:**
- tên class
- constructor
- property
- methods (dùng để tránh lặp code, nó giống function nhưng ko có chữ function ở đầu)
- methods with parameter

ex: 
```
// Dùng class
class Student {
   // thuộc tính chung
   name: string;
   country: string;

   //hàm khởi tạo
   constructor(name: string, country: string) {
      this.name = name;
      this.country = country;
   };
//method
  printProductName() {
     console.log(‘Product name is ${this.name}’);
  };
//method with parameters
  getProduct(color: string) {
  console.log(‘ ${this.name} is ${color}’);
  };
};

// tạo 1 object student1 từ class Student
let student1 = new Student("Nga", "HCM");
console.log(student1);
// kết quả: Student { name: "Nga, country: "HCM" }

// sử dụng method
student1.printProductName();
// kết quả: Product name is Nga

// sử dụng method with param
student1.getColor(“pink”);
// KQ: Nga is pink
```
- để run file typescript thì gõ npx ts-node

### Lambda function (arrow function)
**Syntax:**
```
(parameters) => {
  // code here
}
```
- Dấu suy ra => : thay cho từ khoá function mà mn hay khai báo function

**Ex có param:**
```
const add = (a, b) => {
  return a + b;
}
console.log (2, 4);
//KQ: 6
```

**Ex ko có param:**
```
const greet = () => {
console.log(“hello”);
}
```
