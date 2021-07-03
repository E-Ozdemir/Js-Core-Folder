
//Arrow Function Syntax--------------------
// const multi = (x,y) => x*y;
// console.log(multi(2,3));
// ------------------
//-1
// (a) => {
//     return a+100;
// }
//- 2
// const arrow = (a) => {
//     return a+100;
// }
// console.log(arrow(2));

// -3
// const arrow = a => a+100;
// console.log(arrow(2));
// -------------------------

// const sayHi = (user='New User') => `Welcome ${user}`
// console.log(sayHi())

// const user = 'Mark'
// const sayHi = (user=) => `Welcome ${user}`
// console.log(sayHi(user))

// const user = 'Mark'
// const sayHi = (userFirstName='New User') => `Welcome ${userFirstName}`
// console.log(sayHi(user))

//---------------Zero div error!!!

// const div = (num1,num2) =>{
//     if(num2 === 0){
//         return 'Zero div error';
//     }
//     return num1/num2
// } 
// console.log(div(18,0));


//ternary  yapiyla arrow functiion birlesimi
// const div = (num1,num2) => num2 === 0 ? "zero division error!" : num1/2
// console.log(div(10,0));
//-------------

// const calcArea = radius => 3.14*radius**2;
// console.log(calcArea(5));
//----------

//Arrow funsiyonlarda this kullanamiyoruz!!!
// const cat = {
//     name: 'Muezza',
//     age: 8,
//     whatName() {
//         return this.name // icerisinde bulundugu skoba referans oluyor!
//     }
// };
// console.log(cat.whatName());  // Output: Muezza

//----
// const car = () => {make: "BMW"}
// const car = () => ({make: "BMW"})
// console.log(car());

//----------------