let msg = "hello";
let new_msg = msg.trim().toUpperCase();
console.log(new_msg);




let arr = ["a","s","r"];
console.log(arr);


let months = ['january','july','march','august'];
console.log(months);

months.shift();
months.shift();
months.unshift('june');
months.unshift('july');
console.log(months);

let str = "shivam";
console.log(str.slice(-2))




let fruits = ["mango","apple","banana"];
fruits[0]="guava";
console.log(fruits);
console.log(fruits.slice())



let num = [7, 9, 0, -2];
let n = 3;

let ans = num.slice(0, n);
console.log(ans);


let array = ["shivam", 8, 0, -8, "sonu"];


if(array.indexOf(0) != -1){
    console.log("element exist");
} else {
    console.log("element not exist");
}




