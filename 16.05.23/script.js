// const products = [
//     {title : "Nike",
//     price : 300,
//     type : "Shoe",
// },
// {title : "Puma",
// price : 450,
// type : "Shoe",
// },
// {title : "Channel",
// price : 1200,
// type : "bag",
// },
// {title : "BMW",
// price : 7000,
// type : "car",
// },
// ];
// for( let i=0; i< products.length; i++){
//     console.log(`${products[i].title} єто ${products[i].type}, цена ${products[i].price}` );
// };
// найти сумму всех товаров
// let sum = 0;
// for( let i=0; i< products.length; i++){
//     sum += products[i].price;
// }
// console.log(sum);

// найти товарі с ценой меньше 1000
// for( let i=0; i< products.length; i++){
//     if(products[i].price< 1000){
//         console.log(products[i].title);
//     }else
//     {console.log(`${products[i].type} доргие`)};
// }
// for( let i=0; i< products.length; i++){

//    products[i].color = "red";
// // console.log(products[i]);
// }
// console.log(products);

// const obj = {};
// let key = prompt('jjj');
// for (let i=0; i<6; i++){
//     obj[key + i] = i;
// }
// console.log(obj);

// const obj2 = {};

// function tiere(name, num){
//     for (let i=0; i<num; i++){
//      obj2[name + i] = i;
//     }
//     return tiere;
// }
// tiere("cat", 3);
// console.log(obj2);

// let num = +prompt("numer");
// if(num % 2 == 0){
//     console.log("eys");
// }else{
//     console.log("no");
// };


// function createArr(string, numr){
//      let arr =[];
//     for ( let i=0; i<numr; i++){
    
//         arr.push(string);
//     }
//     return arr;
// } 
// console.log(createArr("cat", 4));


// let ul = document.querySelector('ul');
// ul.style.backgroundColor = 'red';



// let lis = document.querySelectorAll("li");
// for( let li of lis){
// li.innerText = "hallo";
// // li.style.backgroundColor = li.innerText ;
// }

// let lis = document.querySelectorAll('li');
// for( let li of lis){
//     li.style.backgroundColor = li.innerText ;
// }
const body = document.querySelector("body");

let fotoP = prompt("get foto");
let textP = prompt("text");

let foto = document.createElement('img');
foto.setAttribute("src", fotoP);

let text = document.createElement("a");
text.setAttribute("href", textP);
text.append(foto);

body.append(text);
