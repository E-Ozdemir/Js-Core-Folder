var a ='5';
var b= 3;
console.log(a-b);



// And && ilk false u alir false yoksa son true yu
let x = 1 && false;
console.log(x);
let y = 0 && false;
console.log(y);
let z = 1 && 3;
console.log(z);

//Or || son false u alir , false yoksa ilk true yu alir

let c = 2 || 3; //2
console.log(c);
let d = 0 || false;
console.log(d);


//-------------------

let password = 'passw@'
let password2 = 'pass@'
console.log(password.length >= 5 && password.includes('@'));
console.log(password2.length >= 5 || password2.includes('@'));

//-------
//nullish operatörü
//null yada undefind sorgulaniyor. null ve undefined olmayinca birinci degeri döndürüyor
var g = null;
console.log(g ?? 'hello');// null vs text >>output text
var h = undefined;
console.log(h ?? 2); // undefined vs text > output text
var j = 0;
console.log(j ?? 2); //0


//Conditions*******************
let score = 50;
// if (score >= 50){
//     console.log('Congratulation!!!');
// }
//if(score >=50) console.log('Congrat!'); //Bu sekilde de yazilabilir.

// let score = 81
// if (score > 80) console.log('Tebriks!');
// else console.log('Daha cok calismalisin!');


//**************Ternary Operator**************
//condition ? expriftrue : expriffalse
// score > 80 ? console.log('Tebriks') : ( score >=50 ? console.log('fena degil') : console.log('Eccük daha calis!'));

//-------------
// let score = 50;
// let score = prompt('Type your exam note!')
// if (score > 80) console.log('Tebriks!');
// else if (score >= 50) console.log('Es geht!');
// else console.log('Work More');

// let user_name;
// let user_name = 'Emre'
// user_name ? console.log(`Hello ${user_name}!`) : console.log('Please login!'); //formatlama *user_name* ve ternary yapisi

//switch case statement

// var text;
// var fruits; // === olmali
// fruits = 'Orangea'
// fruits = fruits.toLowerCase();

// switch(fruits){
//     case 'banana':
//         text = 'Eat Banana'
//         break;
//     case 'orange': // ayni text icin birden fazla case yazabiliyoruz
//     case 'lemon':
//         text = 'Take vitamine C';
//         break;
//     case 'apple':
//         text = 'Eat Apple';
//         break;
//     default:
//         console.log(`Sory we have not ${fruits}`);
//         break;
// }
// console.log(text);

//toLowerCase()


//------challenge
var day = prompt('günü yaz');

day = day.toLowerCase();
switch(day){
    case 'pazartesi','carsamba','persembe','cumartesi':
        console.log('In class calis haftaici');
        break;
    case 'sali','cuma':
        console.log('tw var');
        break;
    case 'pazar':
        console.log('pazar tatil');
        break;
    default:
        console.log('Lütfen dogru karakter giriniz');
        break;     
}
