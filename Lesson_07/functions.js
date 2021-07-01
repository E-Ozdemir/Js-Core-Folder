// function hello(name){
//     console.log("Hi "+ name);
// }
// hello('Emre');

// function hello(){
//     let x = prompt('Type Name')
//     console.log(`Hello ${x}`);
// }
// hello();

// function selam (name = 'New user'){ //Bos yollarsak New user yazacak, undefined yazmayacak
//     console.log(`Hello ${name}`);
// }

// selam(); // New user yazacak
// selam('Emre')
//---------------------------------
// function sum(a,b){
//     console.log(a+b);
// }
// sum(2+3);
//--------------------
// function summ(c,d){
//     return(c+d);
// }

// let toplam = summ(3,4);
// console.log('Toplam :',toplam);

// console.log(typeof summ); //function
// console.log(typeof summ()); //number
//------------------------
// function sum(c,d){
//     // return(c+d);
//     console.log('selam');
// }
//  console.log(typeof sum()); //Undefined
//----------------------
// function addTwo(number){
//     return +number+2 ; // bastaki arti kullanici string girdiyse onu number a cevirmek icin.
//     //Number(number) string '2'  yi number türüne cevirir.Type Conversion
// }
// console.log(addTwo('2'));

//--------------
// function sayHi(name){
//     console.log(`hello ${name}`);
//     name = 'Ed'
//     console.log(`hello ${name}`);
// }
// let myName= 'Emre';
// sayHi(myName);
// console.log('Outside Function', myName);

//----------------------

// let student = {}; //Bos object
// student.name = "Mark";

// function sayHi2(student) {
//   console.log(`Hello ${student.name} entry point`);
//   student.name = "John"; // icerdeki degisim objeyi etkileyebilir.bu deger icerde degismesine ragmen disar da da degisti.
//   console.log(`Hello ${student.name} first point`);
//   student = { name: "Leon" }; // key value olarak deger girdim.
//   console.log(`Hello ${student.name} inside function`);
// }

// sayHi2(student);
// console.log(`Hello ${student.name} outside function`);

// //-------------------f
// function div(num1, num2) {
//   // console.log(num1/num2);
//   if (num2 === 0) return("Zero division error");
//   return(num1 / num2);

// }
// // div(10, 5);
// div(10, 0); //Infınıty

//-------------

// function div(num1,num2){
//     return num2 ? num1 / num2 : 'zero div error'
// }

// function div(num1, num2){
//     (num2 === 0) ? console.log ("zero division error") : console.log(num1/ num2)
// }

// console.log(div(18/0));
// div(18,0);

//--------------- fonksiyonlara sayiyi belirsiz sayida deger gönderme ...args ile yapiyoruz. 

// function sum(...args) {
//   //fonksiyon icinde sonsuz deger gönderme
//   // console.log(arguments);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(sum(1, 2, 3, 4, 5));

//-------------------

// function sum2 (a,b,...args){
//     console.log(args);// a ve b disindaki kac eleman oldugunu gösterir
//     console.log(arguments);//tümü
//     return a+b;
// }
// console.log(sum2(1,2,3,4,5));


// function expression

// function sayHi1(){
//     return 'Hello from sayHi1'
// }
// console.log(sayHi1());

// const sayHi2 = function greet(){ // isem vermesek de olur ,greet yazmasak da olur.
//     return 'Hello from sayHi2'
// }

// console.log(sayHi2());
// // console.log(greet()); is not defined yani isimle cagiramayiz


//paskal number toplama islemi
// const pascalNumber = function(n){
//     return(n*(n+1)/2)
// }
// console.log(pascalNumber(3));


//*******recursiv olarak cagirmak....
// const pascalNumber = function total(n){
//     if(n===1) return 1;
//     return n + total(n-1) //3+2+1
// }
// console.log(pascalNumber(3));

// console.log(typeof pascalNumber); //function

//Immediately invoked function expression

// let result =(function triangle(num){
//     if(num === 1) return 1;
//     return num+ triangle(num-1);
//     })(5); //aninda calistirilan fonksiyon
// console.log(result);


//-----
// (function (n){
//     var sum = 0;
//     while (n>=0){
//         sum += n;
//         n--;
//     }
//     console.log('result : ', sum);
// })(4);