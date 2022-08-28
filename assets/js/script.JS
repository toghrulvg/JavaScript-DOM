let number1 = document.querySelector("#number-1");

let number2 = document.querySelector("#number-2");

let result = document.querySelector("#result");

let addBtn = document.querySelector("#add");
let subBtn = document.querySelector("#sub");
let multBtn = document.querySelector("#mult");
let divBtn = document.querySelector("#div");


addBtn.onclick = function(){
    if (number1.value == "" || number2.value == "") {
        alert("Bosh xana movcuddur")
        return;
        
    }
    else{
    let equals =parseFloat(number1.value) + parseFloat(number2.value);
    result.value = equals;
    number1.value="";
    number2.value="";
    }
}
subBtn.onclick = function(){
    if (number1.value == "" || number2.value == "") {
        alert("Bosh xana movcuddur")
        return;
        
    }
    else{
    let equals =parseFloat(number1.value) - parseFloat(number2.value);
    result.value = equals;
    number1.value="";
    number2.value="";
    }
}
multBtn.onclick = function(){
    if (number1.value == "" || number2.value == "") {
        alert("Bosh xana movcuddur")
        return;
        
    }
    else{
    let equals =parseFloat(number1.value) * parseFloat(number2.value);
    result.value = equals;
    number1.value="";
    number2.value="";
    }
}
divBtn.onclick = function(){
    if (number1.value == "" || number2.value == "") {
        alert("Bosh xana movcuddur")
        return;
        
    }
    else{
    let equals =parseFloat(number1.value) / parseFloat(number2.value);
    result.value = equals;
    number1.value="";
    number2.value="";
    }
}