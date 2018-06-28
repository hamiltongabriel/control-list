let list = [
    { "descricao": "rice", "quantity": "1", "value": "5.40" },
    { "descricao": "beer", "quantity": "1", "value": "1.40" },
    { "descricao": "meat", "quantity": "1", "value": "15.00" }
];

getTotal = (list) =>{
    var total = 0;
    for (let key in list){
        total += list[key].value * list[key].quantity;
    }
    return total;
}

setList = (list) =>{
    let table = '<thead><tr><td>Description</td><td>Quantity</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for(let key in list){
        table += `<tr><td>${list[key].descricao}</td><td>${list[key].quantity}</td><td>${list[key].value}</td><td>edit | delete</td></tr>`
    }
    table += '<tbody/>';
    document.getElementById('listTable').innerHTML = table;
};
setList(list);