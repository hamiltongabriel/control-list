let msg = "Hello World!";
// Verificando se String inicia com.
console.log(msg.startsWith("Hello"));
// ... se termina com.
console.log(msg.endsWith("!"));
// .Se contem
console.log(msg.includes("H"))
// verificando se contem um certo caracter no posicionamento.
console.log(msg.startsWith("o", 4));
// Repetindo as mensagens
console.log('Hello '.repeat(2))

// Fazendo uma identacao.
var indent = " ".repeat(4),
    indentLevel = 0;
    var newIndent = indent.repeat(++indentLevel);