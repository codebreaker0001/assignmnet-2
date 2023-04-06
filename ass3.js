function convertToNumber(str) {
    try {
      const num = Number(str);
      if (isNaN(num)) {
        throw new Error();
      }
      return num;
    } catch (error) {
      return "invalid input";
    }
  }

let a = "123a44";
// console.log(typeof(converterToNumber(a)));
console.log(convertToNumber(a));

//  question 2

function getPerson(data){
    try{
        if(data.name == undefined ){
            throw new Error();
        }
        else if (data.age == undefined){
            throw new Error();
        }
        return data.name + " , " + data.age;
        

    }catch{
        return "invalid parameters"
    }
}
const person = {
    name:"adarsh",
    age:18
}
const person2 = {
    name:"vaibhav"
}
const person3=
    ["name" ,"mithun"]

console.log(getPerson(person));
console.log(getPerson(person2));
console.log(getPerson(person3));

// question 3
class car{
    company ;
    year ;
    model;
    constructor(c,y,m){
        this.company = c;
        this.year = y;
        this.model = m;

    }


}
let m = new car("skoda", 2022, "Rapid")
console.log('This is a ', m.year, m.company, m.model);


// question 4
class employee{
    name ;
    position;
    salary;
    getSalary(n,p,s){
        this.name=n;
        this.position= p;
        this.salary = s;
        return this.salary;
    }
}
var h1 = new employee();
console.log(h1.getSalary("srikant", "HR", 100000));

// questiuon 5
class person5{
    name = "unknown";
    age = 0 ;
    constructor(n = "unknown", a= 0){
        this.name = n;
        this.age = a;
    }
    getDetails(){
        console.log("Name :" ,this.name,"Age :", this.age);
    }

}
let f = new person5();
f.getDetails();

// question 6

class Calculator{
    a;
    b;
    static add(a1,b1){
        this.a= a1;
        this.b=b1;
        return this.a + this.b ;
    }
}
let h= Calculator.add(6,3);
console.log(h);

// question 7

class User{
    username;
    password;
    constructor(u,p){
        this.username = u;
        this.password = p;
    }

    get passwords(){
        return this.password?"*".repeat(this.password.length): "";
    }
    set passwords(r){
        const pass = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        let l = pass.test(r);
        if(l==true){
            this.password= r;
        }
        else{
            console.log("Error: Password must be atleast 8 character long and contain atleast one upperCase and Digit");
        }
    }
}
let k = new User();
k.passwords= "pasord1234wrrr";
console.log(k.passwords);

// question 8

const student ={
    name:"adarsh",
    printDetails(){
        console.log(`My name is ${this.name}`);

    }
    
}
student.printDetails();

// question 9

function checkNumber(arr){
    function checkNum(num){
        if(num in arr){
            return "true";
        }
        else{
            return "false";
        }
    }
    console.log(checkNum(3));
    console.log(checkNum(8));
}
let array=[2,3,1,6,7];
checkNumber(array);


// question 10 


var products = [
    {name:"shirt" , category:"clothing"},
    {name:"pants", category:"clothing"},
    {name:"hats",category:"accessory"},
    {name:"sunglasses", category:"accessory"}]

   
var clothingProduct = products.filter(function(item){
    return item.category === "clothing";
})
console.log(clothingProduct);