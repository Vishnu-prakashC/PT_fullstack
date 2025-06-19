/*function add(a,b){
    return a+b
}
const mul=(a,b) => {
    return a*b
}
console.log(mul(5,10)); 
console.log(add(10,25));
//console.log(add(12,11) + mul(12,11));


const obj={
    name:'John',
    age:30,
    message: function(){
        let=obj.name;
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}
console.log(obj.name);
//console.log(obj);
console.log(obj.message());*/

/*

const numbers=[1,2,3,4,5,6,7,8,9,10];
const mapp=numbers.map((n) => n * 2);  {
    console.log(mapp);
}
const even=numbers.filter((n) => n % 2 === 0);
{
    console.log(even);
}
const sum=numbers.reduce((acc, n) => acc + n, 0);
{
    console.log(sum);
}
const odd=numbers.filter((n)=>n%2!== 0);
{
    console.log(odd);
}


const product=[
    {name:"tv",price:8000},
    {name:"phone",price:20000},
    {name:"laptop",price:50000},
    {name:"tablet",price:1500},
    {name:"watch",price:2500},
    {name:"headphone",price:3000},
    {name:'ac',price:9500}
]
const totalPrice=product.reduce((sum,n)=>sum+n.price,0)
console.log(totalPrice);


const price=product.filter((n)=>n.price>5000,0)
console.log(price);

const user={name:'CR7',password:'1234'}
const {name,password}=user
console.log(name);
console.log(password);

//destructuring array
const arr=[1,2,3,4,5]
const [first,second,third]=arr
console.log(first);
console.log(second);
console.log(third);

//spread operator
const arr1=[1,2,3]
const arr2=[4,5,6]
const copyArr=[...arr1,...arr2,7]
console.log(copyArr);


*/
//call back function

/*
function function1() {
    console.log("fromm inside function1");
}
function fun(name,callback) {
    callback()
    return `${name} from outside function`
}
console.log(fun("finction1",() => {console.log("from inside callback function")}));
*/

async function fetchUsers() {
    try{
        const response=await fetch(
            'https://jsonplaceholder.typicode.com/users',
        )
        const data = await response.json()

        data.map((a) => console.log(a.name));
/*
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }

*/
       // const data=await response.json();
        //console.log(data);
    }catch(error) {
        console.log(error);
    
}

}
fetchUsers();
