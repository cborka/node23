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
alert(sum)