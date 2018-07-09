function testTruthy(val){
    return val ? console.log('truthy') : console.log('falsy');
}
testTruthy(true);
testTruthy(false);
testTruthy(new Boolean(false));

function sayHello(){
    console.log('Hello!');
}
sayHello();

// Arguments And Function
function output(text){
    console.log(text);
}
output('Hello!');

output('Hello!', 'Other Text');

function sum(num1, num2) {
    return num1 + num2;
}
let result = sum(1 ,2);
output(result);

// Orientado a Objeto, programacao em javascript.
var obj = new Object();

obj = {
    name: {
        first: 'Hamilton',
        last: 'Gabriel'
    },
    address: 'Mato Grosso Do Sul'
}

// Classe construtor
function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}
var book = new Book('Title', 'pag', 'isbn');
console.log(book.title);

// Adicionando uma funcao a Classe.
Book.prototype.printTitle = function(){
    console.log(`biel`, this.title);
};
book.printTitle();

