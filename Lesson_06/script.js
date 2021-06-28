// 1.While loops
// let i = 0;
// let sum = 0;
// while (i < 6) {
//     sum = sum +i;
//     i++;
// }
// console.log('The total is:' + sum);
// console.log(`Total is : ${sum}`);


//do while ; do icerisini  önce gerceklestirip sonra sarta yani while icerisine bakiyor. 

// let i = 5, 
//     sum = 0;
// do {
//     sum += i;
// } while (i < 5);
// console.log(`${sum}`);


//for statement; sarti saglamayana kadar devam ediyor!
// for (let i = 1; i <= 8; i++) {
//     console.log('i :', i);
// }

// let i = 4;
// for(; i <8;){
//     console.log('i:',i,);
//     i++;
// }

// let counter = 0;
// for(let i = 0;i <=50 ;i += 10){
//         counter +=i;
//     }
// console.log(counter);

// let counter = 0;
// for(let i = 0;i <=50 ;i++){
//     i % 10===0 ? (counter +=i) : null;
// }
// console.log(counter);

//else condition

// let brand ='Clarusway'
// for (let i=0; i<brand.length; i++){
//     console.log(i+1,':',brand[i]);
// }

// for (let i=0; i<brand.length; i++){
// console.log(i, brand[i], brand.length-1, brand[brand.length -i -1])//ilkinde undefined gelmemesi için -i -1 yazdik.
//(brand.length -1) -i ,-1 vermezsek 9 elemanlı bir elemanın 9'uncu indexi demiş oluruz. ama indexleme 0'dan başladığı için -1 dememiz gerekiyor
// }

// let bests = ['Clarusway', 'Google', 'Amazon', 'Tesla']

// for(let i = 0; i < bests.length; i++){
//     console.log(i+1,';',bests[i]);
//     document.write("<h1>", i+1, ':', bests[i],"</h1>")
// }

// let i = 0;
// while (i<10) {
//     if (i ===0){
//         console.log(i);
//     }
//     i++;
//     if(i % 3 ===0){
//         continue;
//     }
//     console.log(i);
// }


// 2 ve 4 ü yazdirmamamiz isteniyor
// let i = 0;
// for(i = 0; i<7; i++){
//     if (i==2 || i==4){
//         continue;
//     } 
//         console.log(i);
//     }
//continue kendinden sonraki kod logunu pass gecirir for döngüsüne geri döndürür.

// let namee = "Clarusway";
// for (let i = namee.length; i>0 ;i--){
//     console.log(namee[i-1]);
// }

// let namee = "Clarusway";
// let newtext ="";

// for (i = 0; i<namee.length ;i++){
//     console.log(namee[namee.length - (i+1)]);
//     newtext = newtext+namee[namee.length - (i+1)]
// }
// console.log(newtext);
// document.write(newtext);


//multiply
// for(i = 1; i<=10; i++){
//     for(j =1; j<=10;j++){
//         // console.log(i+"*"+j,i*j);
//         document.write(`${i} * ${j} = ${i*j}` ,"<br/>")
//     }
// }

//sayilarin toplami
// const number = [13,34,24,67,23,90];
// let sum = 0;
// for(i=0;i<number.length;i++){
//     sum += number[i];
    
// }
// console.log(sum);
//---------------
//faktoriyel
// let num = prompt("Type a number!");
// result = 1;
// for (i =1; i<=num; i++){
//     result = result * i;
// }
// console.log(result);

//---------------
//Challange
// 5 buzz 5 e bölünüyor 
// 6 fizz  3 e bölünüyor
// 15 fizz+buzz