let a = ['emre','ela','hatice']
console.log(typeof(a))
a[3]='ege';
a[4]= {key :'new member'};//liste icine dic tanimlama gibi
console.log(a[4].key); //new member




//--------------concat()  iki veya daha fazla arrayi birlestiriyor

const cars=['audi','bmv','mercedes',2021];
const cars2 =['renault','hyundai'];

console.log(cars.concat(cars2)); //type array
console.log(cars+' '+cars2); //type string



//---------------sort()   default olarak stringle yapiyor

//important note!!!!!!
// By default, the sort() function sorts values as strings. If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce incorrect result when sorting numbers.

//number degerlerini string olarak kabul ediyor
const points= [40,100,1,5,25,10];
// console.log(points.sort()); //[1, 10, 100, 25, 40, 5]

//solution to rightly sortment
console.log(points.sort(function(a,b){return a - b})); //[1, 5, 10, 25, 40, 100]


//------------pop() and push() ekle ve cikarma


console.log(cars.pop());// parametre almaz her zaman en sonuncuyu siler,cikardigi elemani gösterdi!!!

cars.push('Opel')
console.log(cars);

//---------shift()  and unshift()

//shift ilk elemani cikarir unshift ilk indexe eleman ekler.





