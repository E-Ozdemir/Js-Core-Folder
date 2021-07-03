var str1 = "Hello";
var str2 = "world";
var str3 = "Hello World";
var str4 = new String("A Stirng Object") // type Object //new yazmassan parantez icini string tipine cevirir.

console.log(str3.length);
console.log(typeof str4); //object
console.log(str4); //String {"A Stirng Object"}

console.log('Emre'.length); //4


//--------------concat() Method

var namee = 'Emre';
var surname = ' Özdemir';
var fullName = namee.concat(surname)
console.log({fullName});


//-----------charAt() method
var best = "Clarusway"
console.log(best.charAt(0));
console.log(best.charAt(6));
console.log(best.charAt(best.length-1));
//-----------------
var a = 'primitive.\nlerin properti veya metodu olmaz.'// \n i bos karakter olarak algiliyor.
console.log(a.charAt(0));
console.log(a[0]);
console.log(a);
console.log(a.charAt(a.length-1));// pythondaki gibi sadece -1 yazilamaiyor...
//-------------includes() method

var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

console.log(str.includes('simply')); //true
console.log(str.includes('Simply')); //false, büyük kücük harf duyarli.

//-------------indexOf() baslangic indexini veriyor.Ilk buldugunu gösterir. bulamazsa -1 gösterir.
var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
console.log(str.indexOf("Ipsum"));


//--------------lastIndexOff()  sonuncuyu getirir.
var str = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
console.log(str.length); //74
console.log(str.lastIndexOf('t'));

//-------------replace() ilk gördügünü degistirir, /degistirmek istedigin sey/g
var str = 'Lorem Ipsum is simply dummy text of the printing and dummy industry.'
console.log(str.replace('dummy', 'DUMMY'));//ilkini
console.log(str.replace(/dummy/g, 'DUMMY'));//hepsini

//------------------search()
var str ='Lorem Ipsum is simply dummy text of the printing and dummy industry.';
console.log(str.search(/Dummy/i)); //case sensitive i ortadan kaldirmak icin //i kullaniliyor

//-----------------slice() baslangici ve kacinciya kadar gidecegini belirtiyoruz.
var str ='Lorem Ipsum is simply dummy text of the printing and dummy industry.';
console.log(str.slice(0,5));
console.log(str.slice(6,11));
console.log(str.slice(12));
console.log(str.slice(12,-10));

//--------------split() 
var str ='Lorem Ipsum is simply dummy text of the printing and dummy industry.';

console.log(str.split('e'));// e gördügü yerde kelimeyi ayiriyor. Ve bir liste olusturuyor.

console.log(str.split(''));// harf harf ayirma yöntemi!!!!!!!!!

//---------------substr()
var str ='Lorem Ipsum is simply dummy text of the printing and dummy industry.';
console.log(str.substr(22,10));//22. indexten basla ve 10 karakter al!, elinde o kadar karakter yoksa gidebildigi yere kadar gider  onu gösterir , hata vermezzz!

//------------substring() indexlemeyle aralik giriyoruz,bunda - giremiyoruz, slice da girebiliyoruz
var str ='Lorem Ipsum is simply dummy text of the printing and dummy industry.';
console.log(str.substring(22,32));

//--------toLowerCase()
var str ='Lorem Ipsum is simply dummy text';

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase()); // büyük I yi kücülttügümüzde i yapti.'ı' olmadi yani!!!

//pangram

var pangram = "pijamalı hasta yağız şoföre çabucak güvendi";

console.log(pangram.toUpperCase());
var upperPangram = pangram.toLocaleUpperCase(); //Lokalligi browser ayarindan aliyor- yada ('tr-TR') yazmamiz gerekir.
console.log(upperPangram.toLocaleLowerCase());

//-------------trim() sagdaki ve soldaki bosluklari kesiyor.
var b = '        Emre Özdemir              ';
console.log(b.trim());








