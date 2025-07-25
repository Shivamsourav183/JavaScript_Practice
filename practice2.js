let num = 101;
if(num%10===0){
    console.log("good!");
} else{
     console.log("Bad!")
}

// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// alert(`${name} is ${age} yers olds`)


let quater = 5;

switch(quater){
    case 1:
    console.log("January","February","March");
    break;
    case 2:
    console.log("april","may","june");
    break;
    case 3:
    console.log("july","august","september");
    break;
    case 4:
    console.log("october","november","december");
    break;
    default:
        console.log("no months");     
}


let str="plesdf";

if((str[0]==='A')||(str[0]==='a')&&(str.length>5)){
    console.log("golden string");
}else{
    console.log("not a golden string");
}


let num1= 32;
let num2 = 7342;
if(num1%10==num2%10){
    console.log("same digit");
}else{
    console.log("not a same digit.");
}

