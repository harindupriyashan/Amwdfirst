console.log('Run ACPT..!')
const x = 30;
const y = 10;
const tot = x+y;
console.log(tot);

// document.write('chamikara Ruchiranga');
// document.write('<h1>ACPT</h1>');
// document.write('<input type="text">');
// document.write('<input type="button">');


// Number
const num = 10.55304;

// String
const string = "ACPT 50";
const string1 = 'ACPT 50';



// Boolean

const bool = false;
// const bool1 = true;

// Object
const obj = {name : 'Chamikara', Age: 40, address: 'beruwala', havefriend: true }

// Array
const Array = [45,'Acpt', true , {name: 'chamikara', address:'beruwala'},[65,34,'string']]
// console.log(Array)

// let
let a = 10;
console.log(a)
a = 20;
console.log(a);
{let ab = 30}
// console.log(ab)

let b = 100;
console.log(b)

{let ab = 30}
// console.log(ab)

{let cd = 50;
    console.log(cd)
 }



//  var
var v = 20;
var v = true;
v = 'ACpt'
{var vv = 30;}
console.log(vv)

// const
const c = 10;
// const c = 20;
// c = 20;
{const cc = 40}
// console.log(cc);


const s = 25;
const d = 10 ;


// Addition (+)
const Addition = s+d; 
console.log(Addition)

// subtraction (-)
const sub = s-d;
console.log(sub)

// multiplication (*)
const mult = s*d;
console.log(mult);

// division (/)
const div = s/d;
console.log(div);

// moduls %
const mod = s%d;
console.log(mod);

// increment (++)
let j = 50;
j++

console.log(j)

// decremnt (--)
let k = 50;
k--
console.log(k)

// Comparison Operators
const l = 13;
const m = 15;

// equal (==)
console.log (l == m);
console.log (l === m);
// not equal (!==)
console.log (l !== m);

// Grater than (>)
console.log (l > m);

// Less than (<)
console.log (l < m);

// Grater than or equal (>=)
console.log (l >= m);

// Less than or equal (<=)
console.log (l <= m);

console.log (l >=m);

// Logical Operators
const q = false;
const t = true

// const o = false;
// const i = false

// AND (&&)
console.log(q && t);

// console.log(o && i)

// or (||)
console.log(q || t);

// not (!)
console.log(!q)

// flow Controllers

//If
const stu1 = 300;
const stu2 = 100;

if (stu1 == stu2){
    console.log('running if ..!')
    
} else if ( stu1 < stu2) {
    console.log('print stuent..!')
} else {
    console.log('error msg..!')
    
}

//If test
const mark = 80

if (mark >= 75 && mark < 100) {
    console.log('A ')
} else if ( mark >= 65 && mark < 75 ) {
    console.log('B')
} else if ( mark >= 45 && mark < 65 ) {
    console.log('C')
} else if (mark >= 35 && mark < 45 ){
     console.log('S')
} else (mark > 1 && mark < 35) 
    console.log ('Faile')




// switch
const val = 'intake 02';
switch (val){
    case 'intake 01':
        console.log('ACPT - AMWD Intake 01');
        break;
    case 'intake 02':
        console.log('Acpt - amwd intake 02');
        break;
    default:
        console.log('error....!')
    
}



// Input Marks 1 - 100
//  75 - A, 65- B, 45 -C, 35 -S ,fail

//Arrey
const ar = 56;
const arr = 43;

const array1 = [10,'chamikara',{name: 'ACPT'}, true];
console.log(array1[3]);


const fruits = ["Banana", "Mango", 'Apple' , 'Orange' ];

// pop
// const fruit = fruits.pop();
// console.log(fruits);
// console.log(fruit);


//push
// const fruit = fruits.push();
// console.log(fruits);
// console.log(fruit)

// shift
// const fruit = fruits.shift();
// console.log(fruit);
// console.log(fruits)

// unshift
// fruits.unshift('kiwi');
// console.log(fruits)


// Loop
// for loop

for(let i=0; i<10; i++){
    console.log(i)
}

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
    
}

// while
// let tt = 0;
// while(tt <fruits.length){
//     console.log(fruits[tt]);
//     tt++
// }

// do while
let ty = 0;
do{
    ty++
    console.log(fruits[ty]);
}while(ty<fruits.length)

// { } sagala warahan bawitha karana ewa Scope lesa hadunwai

// global Scope
const globle = true;

// function Scope
function getname() {
    const fun = false;
}

// block scope
{

}

// opject
// Opject = property + Behaviour

const car = {
    colour:'red',
    wheelcount: 4,
    name: 'BMW',
    year: '2017', 
    drive: function(){
        console.log('drive........!');
    },
    break: function(){
        console.log('break........!');
    },

    jumpe: function(){
        console.log('jumpe........!');

    }
    // behaviour ekk iwra kraddi (,) kamawak aniwryen dnna


}
 console.log(car.name);
 car.break();
 car.drive();
 car.jumpe();

//  function

// name function
function setname(){
    console.log("print Name Function")
}
setname();

// anonymouse function
const getaddress = function(){
    console.log("print anonymouse function...")
}
getaddress();

// arrow function
var setaddress = () => {
    console.log('print arrow function')
}
setaddress()

let setaddress1 = () => {
    console.log('print arrow function2')
}
setaddress1()

function printname (name, lastname){
    console.log("print: ",name,"" ,lastname)
}
printname("chamikara","acpt")
printname("yasindu","acpt")

// function equalnumber (num1, num2){
//     console.log("total : ",num1+num2)
// }

const equalnumber = (num1, num2) => " total : " +(num1+num2)

const num1 = equalnumber(30,70);
console.log(num1)
const num2 = equalnumber(45.7,90.5);
console.log(num2)

const getdetails = (name1) => "My Name Is "+name1

const data1 = getdetails ('kasun');
console.log(data1)
const data2 = getdetails ('Dasun')
console.log(data2)


// Input Student name and Marks
// Marks > 60
// Print => ' Eshan is Passed / Eshan is Fail'

// const result =  result ( 'eshan',70);
//  console.log(result)
 
const pritnDetails = (name, marks) => {
    let resu = ''
    if (marks > 60) {
        resu = name + " is Passed.."
    } else {
        resu = name + " is Fail.."
    }
    return resu;
}

const result = pritnDetails('Kamal', 45);
console.log(result)



function handover (){
    console.log(handover);
}

function showMe (){
    document.getElementById('display1').innerText = 'ACPT'
    
}

// onchenge
function onChange () {
    const data = document.getElementById('input1').value 
    console.log(data)
}

// MouseOver

function onMouseOver (){
    console.log('on Hover event')
}

// MouseOut

function OnMouseOut() {
    console.log('ON mouse OUT event')  

}

function onKeyUp() {
    const val = document.getElementById('input2').value
    console.log(val)
    
}

function onKeyDown() {
    const val = document.getElementById('input2').value
    // console.log(val)
}
function onKeyPress() {
    const val = document.getElementById('input2').value
    // console.log(val)
}

// Input Student name and Marks -text feald 2k
// Submit button ekak thiyenna ona 
// Marks > 60
// Print => ' Eshan is Passed / Eshan is Fail'
// h1 ekk dla pass print krnna


// const mar = "80"


// function ris (name, mar){

//     if (mar > 60) {
        
//         console.log ('pass');
//     } else  {
//         console.log ('Fail')
//     }
   
    
// }



function ris() {
    let name = document.getElementById("STname").value
    let mark = document.getElementById("STmark").value
    let re55 = ''
    if (mark > 60) {
         
        re55 = name +  " Passed...!" ; 
            //   document.getElementById("jstx").style.color = 'green'
    } else {
        re55  = name +  " Feil..";
        // document.getElementById("jstx").style.color = 'blue'
    }
    // return re55
   let gta = document.getElementById('jstx').innerText = re55;
   console.log(gta)
   
}


function onChangetexterror(params) {
    const val = document.getElementById('form-input').value;
    const reg = /^(0|[1-9]\d*)(\.\d+)?$/
    if (reg.test(val)) {
        document.getElementById("error").innerText = 'valid number'
        document.getElementById("error").style.color = 'green'
    }else {
        document.getElementById("error").innerText = 'invalid number'
        document.getElementById("error").style.color = 'red'
    }
    
}


function OnMouseover () {
    document.getElementById('ph2').style.display = "none"
    document.getElementById('ph1').style.display = "block" 
}

function OnMouseOut () {
    document.getElementById('ph1').style.display = "none"
    document.getElementById('ph2').style.display = "block"
}


