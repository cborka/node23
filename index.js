// Подключение стандартных модулей
const os = require('os');

let res = os.platform();
console.log(res)

// Свои модули

const cbw = require('./cbw');

console.log(cbw.add(3, 4));
console.log(cbw.hi)

// Работа с файлами

console.log('Работа с файлами');

const fs = require('fs');

// Синхронно
fs.writeFileSync('some_text.txt', 'Записано функцией writeFileSync');
res = fs.readFileSync('some_text.txt', 'utf-8');
console.log(res);

// Асинхронно
fs.writeFile('some_text.txt', 'Записано функцией writeFile', (err, data) => {
  fs.readFile('some_text.txt', 'utf-8', (err, data) => {
    console.log(data);
  })
  console.log('Reading...');
})