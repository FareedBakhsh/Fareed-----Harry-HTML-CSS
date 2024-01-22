//=--=-=-=-=-//  3- javascript variable 

//-==-------==--==-=-=//number in JavaScript

// variable  in JavaScript =container to store the data values 

var num1 = 34 ;
var num2 = 38 ;
// console.log(num1 + num2);

 //obect 

//-====-=-=-=-=--=//string  in JavaScript  

/* var  str1 = "this is a string";
var  str2 = "this is a also a string";

console.log(str1,str2); */

//------========------/* // boolen  in JavaScript
 
/* in it we see the false and true condition  */

/* var a = true 
var b =false 
console.log(a,b); */

//-------------/* // undefine in JavaScript  */

/* var  und = undefined;
console.log(und); */

//---------------/* null in JavaScript */

/* var n =null;
console.log(n); */
/* 
------------------/Array  in JavaScript 

/* in it thee is acollecrion of te data 
Example: collectionof varialble , boolen ,string, + numbner etc */
/* 
---------=----==-/* // Data Typoe  */ //in JavaScript

// At high  very level ,there are two type of data type in javascript

// 1- Primiteve dat type ; ( null, number ,boolen ,string ,symbol, undefine)

// 2- Refrencwe data type / Non Primitive data type;( Array+ Object)

var arr =[1,2,"i love the holy quran",4,5]
// console.log(arr);

//-------// operator in javascript

//------------// Arithmatic Operators in JavaScript  (+,-,*,/,%);

var a = 30;
var  b = 10;
// console.log("The value of a + b is ", a + b );
// console.log("The value of a - b is ", a - b );
// console.log("The value of a * b is ", a * b );
// console.log("The value of a / b is ", a / b );

// -----------//Assignment operator  in JavaScript =( "Those which are assign the values to other")
// var c = b
//c+=2; c =c -2
// c/=2;
// c*=2;
// console.log(c);

//_++____________[Comparision operator]( Those which are used to compare the values ti each other are called the comparision operators )
 // Example ;

 // Boolen condition  in JavaScript. is also follow up and applying at the here,

 var x = 50 
 var y = 690 
//  console.log(x == y);
//  console.log(x >= y);
//  console.log(x <= y);
//  console.log(x !== y);
//  console.log(x === y);
 
 // ==--=-=-=[Logical Operators in JavaScript ] =these are rely and working on boolen (true and fals ) condition--___ Logical Operates in Boolen values 
 //These are Boolen algabra 
//logic true or false 

//AND operator  in JavaScript   condition is apply at here 

//  console.log(true && ture);true 
//  console.log(true && false);false 
//  console.log(false && ture);false 
//  console.log(false  && false);false 

//. OR in JavaScript (if or operator get both from them false or true then it will male true ) Conditioin is apply at here 

// console.log(true || ture); true 
// console.log(true || false);true
// console.log(false ||  ture); true  
// console.log(false  ||  false); false 

//logical Not in JavaScript (These are those that will make true to false and false to true )

// console.log(!true); false 
// console.log(!false); true

// oprators and operand 

//=======--/// Function in javascript 
// DRY = Do not Repeat Yourself

function avg(a,b){
    return (a+b)/2;
}
 c1 = avg(2,4);
 c2 = avg(8,10);
// console.log(c1,c2);

function avg(a,b){
    c = (a+b)/2;
    return c
}
 c1 = avg(4, 6);
 c2 = avg(14,16);
// console.log(c1,c2);

//====----/example of Function in our daily life like below 
 //1-calculate the average of 5 studen ?
 //2- calcuate the parcentage of your marks in fsc and matric ?
 //3- calculate the youe 
//  own CGP?

 //[conditioin in   javaScript ]

var age  = 6;
  if (age >9 ){
    console.log("you are not kid");
  }
  else{  console.log("you are not kid");
}
//how to write date and time in java scriot 

let myDate = new Date();

//The above new word in date is used i making dates such as year ,month , hours
 
console.log(myDate.getTime());
console.log(myDate.getFullyYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());








