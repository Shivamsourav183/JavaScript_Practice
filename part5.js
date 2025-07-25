// const student = {
//     name: "shivam",
//     age: 21,
//     city: "patna"
// };



// // object of objects


// for(let i = 1; i<=10 ; i++){
//     console.log(5*i);
// }   



// function isAdult(age){
//     if(age>=18){
//         return "Adult";
//     } else {
//         return "Not adult";
//     }
// }
// console.log(isAdult(23));


// function sumN(n){
//     let sum = 0;

//     for(let i = 1; i<=n; i++){
//         sum+=i;
//     }
//         return sum;
// }
// console.log(sumN(10));



// // // function

// function rolldice(){                                // function defination
//     let rand = Math.floor(Math.random() * 6) + 1;  // logic
//     console.log(rand);                            // for printing
// }

// rolldice();                                     // function calling 


// // // function with argument 

// function printName(name){   // name -> parameter 
//     console.log(name);
// }

// printName("shivam");  // "shivam" -> argument which is passing 



// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}.`);
// }

// printInfo("Shivam", 21);
// printInfo("Lasya",20);
// printInfo("Sonu",25);
// printInfo(22);    
// printInfo(22); // 22 is assigned in the place of name because function parameters are assigned based on their position.
// //Since printInfo expects two parameters (name and age), but only one argument (22) is provided, JavaScript assigns:
// //name = 22 (first argument to the first parameter)
// //age = undefined (since no second argument is provided)


// //  // average of three number 

// function calAvg(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }

// calAvg(3,3,3);

// // // function with return type

// function sum(a, b){
//     return a + b;
// }
// console.log(sum(3,3));


// // // string concatination

// let str = ["Hii ", "Hello ","Bye ","! "];

// function concat(str){
//     let result = " ";
//     for(let i = 0; i < str.length; i++){
//         result += str[i];
//     }
//         return result;
// }

// console.log(concat(str));

// // // // higher order functiuon
// function multipleGreet(func, n){
//     for(let i = 1; i<=n; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("hello");
// }

// multipleGreet(greet,2);



// // // Return a function 

function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    } else if(request == "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }else {
    console.log("wrong request");
    }
}


let request = "odd";
