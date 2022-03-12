function add(num1,num2){
    
    num1 =parseInt(prompt("Enter num1"));
    num2 =parseInt(prompt("enter num2"));
    sum = num1+num2;
    return sum
}
function sum(){
    document.getElementById("label").innerText = add()
}
function clearContent(){
    document.getElementById("label").innerHTML = "";
    document.getElementById("date").innerText = "";

}