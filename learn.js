function alert(msg) {
  console.log(msg);
}

console.log('Learn.js!');
//alert("Alert!")

const bigInt = 1234567890123456789012345678901234567890n;
//alert(bigInt + 3n);

let isGreater = 4 > 1;
//alert( isGreater );

let user = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30        // под ключом "age" хранится значение 30
};

//alert(user.name);
//alert(user["name"]);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for(let key in salaries) {
  sum += salaries[key];
}
// alert(sum)

alert( 7.3e9 ); // Выводит 7300000000
alert( 123456..toString(36) ); // 2n9c
alert( parseInt('2n9c', 36) ); // 123456
alert( 0.1 + 0.2 ); // 0.30000000000000004



