let from = './kjv/';
let to = './my-app/src/assets/kjv/';
let books = require(from + 'Books.json');
let result = [];
books.forEach(b => {
    let withoutSpaces = b.replace(' ', '').replace(' ', '');
    let book = require(from + withoutSpaces + '.json');
    result.push(book);
})
const fs = require('fs');
fs.writeFileSync(to + 'Bible.json', JSON.stringify(result, null , 2));