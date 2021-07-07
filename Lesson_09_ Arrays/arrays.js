let a = ["emre", "ela", "hatice"];
console.log(typeof a);
a[3] = "ege";
a[4] = { key: "new member" }; //liste icine dic tanimlama gibi
console.log(a[4].key); //new member

//--------------concat()  iki veya daha fazla arrayi birlestiriyor

const cars = ["audi", "bmv", "mercedes", 2021];
const cars2 = ["renault", "hyundai"];

console.log(cars.concat(cars2)); //type array
console.log(cars + " " + cars2); //type string

//---------------sort()   default olarak stringle yapiyor

//important note!!!!!!
// By default, the sort() function sorts values as strings. If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce incorrect result when sorting numbers.

//number degerlerini string olarak kabul ediyor
const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort()); //[1, 10, 100, 25, 40, 5]

//solution to rightly sortment
console.log(
  points.sort(function (a, b) {
    return a - b;
  })
); //[1, 5, 10, 25, 40, 100]

//------------pop() and push() ekle ve cikarma

console.log(cars.pop()); // parametre almaz her zaman en sonuncuyu siler,cikardigi elemani gösterdi!!!

cars.push("Opel");
console.log(cars);

//---------shift()  and unshift()

//shift ilk elemani cikarir unshift ilk indexe eleman ekler.

// cost da methodlarla yapilan oynama heap de yapilan oynamalar oldugundan buna izin var ama  consta verilen degeri direkt degistirmeye calisirsak  call stackdeki value yu degistirmeye kalkistigimiz icin buna izin yok!!

/* let cars = ['Audi', 'Opel','Fiat'];
// console.log(cars);
// cars.push('vW')
// console.log(cars);
// console.log(cars);

cars = ['vW']
console.log(cars); */

//------------splice  arraye yeni eleman ekleme ve cikarma icin kullanir ve geriye de silmis oldugu elemanlari döndürür.indexe git belirtilen sayi kadar bastaki indexten itibaren elemanlari cikar.

var names = ["emre", "ela", "hatice", "naciye"];
var deleted = names.splice(1, 2, "ege", "eren", "erik");
console.log("names", names);
console.log("deleted", deleted);

//slice  >>> dilimleme baslangic ve bitis indexi bitis dahil degil!!

var fruits = ["banana", "apple", "orange", "erik"];

console.log(fruits.slice(1, 3)); //apple ,orange
console.log(fruits.slice(1, -2)); //apple
console.log(fruits.reverse()); //sondan basa yazdirir orjinali bozar!!!

//--------indexOf('value', 3) icerisine yazilan ikinci deger start indexini gösterir. Arama bulunamazsa -1 döndürür.

//lastIndexOf() son indexi gösterir, ikinci bir index verilir.

// const colors=['red','yellow','green','black','green','brown']
// console.log(colors.indexOf('green',3));

// console.log(colors.indexOf('gray')); //-1

// const colors = ["Red", "Yellow", "Green", "Blue", "Green","Red","Yellow","Blue"];
// const last = colors.lastIndexOf("Blue", -2) // 6 ile de aynı sonucu verir
// const last1 = colors.lastIndexOf("Gray") //returns -1
// console.log(last1)

//primitivler değişmez
/* function test1(testData) {
  console.log(`inside function before operation ${testData}`);
  testData = 10;
  console.log(`inside function after operation ${testData}`);
}

const x = 5;
test1(x);
console.log(`outside function after operation ${x}`); */

//Arraylerde durum

// function test2(testData) {
//   console.log(`inside function before operation ${testData}`);
//   testData = [2, 4, 6, 8];
//   console.log(`inside function after operation ${testData}`);
// }

// const arr = [1, 2, 3, 4];
// test2(arr);
// console.log(`outside function after operation ${arr}`);

//-------------------------------------------------------------------
//   reference values>>> array ve object>>>> heapde depolanir
//primitive values >>> numbers, strings, bool ...>>>>> callstack de depolanir
//--------------------------------------------------------------------

// const arr = [1, 2, 3, 4,5,6,7];
// const [x, y, z] = arr;
// console.log(x, y, z);

// const [t,u,v,...others] = arr;
// console.log(t,u,v);
// console.log(others); //[4, 5, 6, 7]
// console.log(Array.isArray(others)); //true array olup olmadigini sorguluyor boolean deger  döndürüyor.

const arr = [3,4];
const [x,y,z] = arr;
console.log(x,y,z); // z undefined
// undefined i engellemek icin....
const [e=1,f=2,g=5] = arr; //soldaki deger override edilir arr in icindeki baskindir.
console.log(e,f,g);

//-----------------
let j=5;
let ö=10;
[j,ö]=[ö,j] // ters atama
console.log(j,ö);  //10, 5


const colors = ["Red", "Yellow",, "Green", "Blue", "Pink", "Purple", "Gray", "lime"];
for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

// for(i of colors) console.log(i);

// for(let i in colors) console.log(colors[i]);

    // colors.forEach(i>=console.log(i)); //empty eleman varsa pas gecer.icerisine call back function alir

    // for each ve for in bos elemanlari atlar for of  ve for atlamaz. 