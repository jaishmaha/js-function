//1. Display a Text - Display any value in the log using function.
		
var a=prompt("Enter any string:");
var b= parseInt(prompt("Enter any Integer value:"));
disp();				//function invoking
function disp()		//function declaration
{
console.log(`${a}`+` ${b}`);
}

//2. Function with Parameters -  Using two parameter values and return value in the console.

function para(p1, p2)	//functon declared with parameters
{
	console.log(`The parameter values are:${p1} ${p2}`);
}
para(5,7);		//arguments passing to the parameter

//3. Add Two Numbers  - Using two number add and return value in the console.

var a= parseInt(prompt("Enter any Integer value for a:"));
var b= parseInt(prompt("Enter any Integer value for b:"));
var sum=0;
add();
function add()
{
	sum=a+b;
	console.log(`sum:${sum}`);
}


//4. Sum of Two Numbers -  Addition, Subtraction, Multiplication, Division.

var a= 15,b=3		//global variable
var sum=0;
add();
sub();
mul();
div();
function add()
{
	sum=a+b;
	console.log(`sum:${sum}`);
}
function sub()
{
	let ans=a-b;			//local variable
	console.log(`Ans:${ans}`);
}
function mul()
{
	let mul=a*b;
	console.log(`Ans:${mul}`);
}
function div()
{
	let div=a/b;
	console.log(`Ans:${div}`);
}


