let list = [
    { "descricao": "rice", "quantity": "1", "value": "5.40" },
    { "descricao": "beer", "quantity": "1", "value": "1.40" },
    { "descricao": "meat", "quantity": "1", "value": "15.00" }
];

function getTotal(list){
    var total = 0;
    for (let key in list){
        total += list[key].value * list[key].quantity;
    }
    return total;
}


function setList(list){
    let table = '<thead><tr><td>Description</td><td>Quantity</td><td>Value</td><td>Action</td></tr></thead><tbody>';
    for(let key in list){
        table += `<tr><td>${ formatDescricao(list[key].descricao)}</td><td>${list[key].quantity}</td><td>${formatValue(list[key].value)}</td><td><button class="btn btn-success" onclick="setUpdate(${key});">Edit</button> | <button class="btn btn-danger">delete</button></td></tr>`
    }
    table += '<tbody/>';
    document.getElementById('listTable').innerHTML = table;
};

function formatDescricao(descricao){
    var str = descricao.toLowerCase();
    str = `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    return str;
}

function formatValue(value){
    debugger
    var str = `${parseFloat(value).toFixed(2)}`;
    str = str.replace(".",",");
    str = `$ ${str}`
    return str;
}

function addData(){
    let descricao = document.getElementById("descricao").value;
    let quantity = document.getElementById("quantity").value;
    let value = document.getElementById("value").value;

    list.unshift({"descricao": descricao, "quantity": quantity, "value": value});
    setList(list);
}

function setUpdate(id){
    var obj = list[id];
    document.getElementById("descricao").value = obj.descricao;
    document.getElementById("quantity").value = obj.quantity;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";
    document.getElementById("inputIdUpdate").innerHTML = `<input id="idUpdate" type="hidden" value="${id}"/>`
}

function cancelData(){
    document.getElementById("descricao").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";
}
setList(list);