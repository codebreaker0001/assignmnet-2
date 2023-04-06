
// question 1
console.log("question 1");
function wordCount(a){
    
    for(let i = 0;i<a.length;i++){
        var count =1;
        for(let j= i+1 ;j<a.length;j++){
            if(a[i] === a[j]){
                count++;
            }
        }
        console.log(a[i] , count);
    }
}
let a = "adarsh yadav";
wordCount(a);


// question 2
console.log("question 2");
let arr = [1,3,5,6,4,3,1,5];

function removeDuplicateElements(a){
    //  return arr.filter((elem,index)=>  arr.indexOf(elem) === index)
    let b = new Set(arr);
    return b
}
console.log(removeDuplicateElements(arr));

// question 3
console.log("question 3");
function swap(x,y){
    let c = [y,x];
    return c;
}
let x = 10;
let y = 5;
console.log(swap(x,y));


// question 4
console.log("question 4");

let d = [1,2,3,4,6];
function firstSecondLast(d){
    let e ={...d};
    let f = [  e[0] , e[1], e[d.length - 1]];
    return f;
}
console.log(firstSecondLast(d));

//  question 5
console.log("question 5");
function minMax(m){
    console.log("{ max:",Math.max(...g), "min:",Math.min(...g),"}");
}
let g = [1,6,3,8,4,9];
minMax(g);

// question 6
console.log("question 6");

function Extraction(pers){
    console.log("Name is :",person.name);
    console.log("Address is :", person.address.street);
}
const person = {
    name:"mithun",
    age: 21,
    address: {
        street: "BB, Block B, Industrial Area" ,
        city : "Sector 62 , Noide",
        state : "uttar pradesh"
    }
}

Extraction(person);