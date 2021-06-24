// var a = "10";
// console.log (a == 10);  true


// var a = "10";
// console.log (a === 10);   false
// hoisting; fonksiyon tanimlaninca onu en basa aliyor. cagirmayi fonksiyon tanimindan önce yada sonra tanimlamamaiz önemli degil ama ! var ile tanimlanan degerler kullaniliyorsa!!

//hoisting her zaman izi degil efektif kullanima cok uygun degil.

// var a;
// var aa;
// var aaa;

// function add (a,b)
// {
//     console.log(a+b);
// }

// add(3,4)


//let a; let aa; let aaa;

// let abc = function add (a,b)
// {
//     console.log(a+b);
// }


//'use strict'>>> hata alirsan devam etme demek!!!

// function stack (){
    // stack()
// }
// stack()


// let a = 5;
// console.log(a)
// {
//     let a = 8;
//     console.log(a)
// }
// console.log(a)

// var a = 6;
// var b = 3;
// a = --b //bu satirda b =2 ,b den 1 cikart bunu da a ya esitle(decrement operatörü)
//sagdan sola okumaya başladığı için ilkinde b nin degerini bir azaltiyor ve azaltılmış değerini alıyor.
// a = b--  busatirda b 3, b a ya ataniyor daha sonra azaltma yapiliyor 
// console.log({a});
// console.log({b});
//---------------------------
// var b =5;
// console.log(++b); //6
//---------------------------
// console.log(b++);//5
// console.log(b);//6
//----------------
// a = ++b b'yi 1 artir a'ya esitle.
// a = b++ a'yi b'ye esitle ve b'nin degerini 1 artir.

console.log(a < a++) // false, a a ya esit degil
console.log(a < ++a) // true,  a yi bir artiriyor, a+1 > a dir.


console.log(Boolean(0)==false);
console.log(Boolean("0") == false);
console.log(0 == false);
 console.log('0'== false); //'0' sen bunu boolean ile yazmamissin diyor ve string 0'i yani "0"  false demek oluyor.
//----------------
console.log(Boolean('0')); //true
console.log('0'); // false
console.log(typeof null); //object bu bir js bug i dir!!!
//------
console.log(null == false); //false
console.log(null == true); //false
console.log(Boolean(null)); //false

//-----------
console.log(null+3); //3
console.log(null == 0); //false
console.log(Boolean(null) == Boolean(0)); //true
//------
console.log(typeof(NaN)); // number
// isNaN fonksiyonunu kullaniyoruz nan olup olmadigini belirlemek icin.


//Kullanicidan alinan veri sayi mi degil mi kontrolü?
// var a;

//   while(isNaN(a)){
//     a = prompt("Enter a number")
//     a = Number(a)
//     console.log(a,typeof a);
// }


// null,boolean string ve 0 false verir

console.log(015+025); //34  >>>8 lik sayi sistemine göre girdigimi düsünüyor.Oktal
console.log(15+025); //36
console.log(015+25); //38 8 üzeri 0 + 8 üzeri 1+ 8 üzeri 2
console.log(15+25); //40

console.log(9 < 8 < 7); // true  false< 7, false degerini 0 olarak kabul ediyor.

console.log('Emre' > 'emre');  //false
console.log('C'.charCodeAt()); //67
console.log('c'.charCodeAt()); //99