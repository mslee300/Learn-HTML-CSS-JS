//Exercise 2: 

/* 
Order of Computations
   Order matters in Javascript. We can tell Javascript
   to do something first by placing parentheses around
   some code. Use parentheses and the appropriate math
   operators to make the output of the following code print
       
                        The value is: 42
*/

let a3 = 4;
let b3 = 1;
let c3 = 4;
let d3 = 22;

console.log("The value is: " + (a3 * (b3 + c3) + d3));


/*
if statements... 
   complete the following lines so that all of them 
   print the value 42. You should end up with three 42s.
   You'll need math operators.
   You need to un-comment the code first.
*/



let a4 = 6;
let b4 = 7;
let c4 = 20;

if (c4 == 20) { 
	console.log(42); 
	}
if (a4 + c4 == 42) { 
	console.log(21); 
	}
else { 
	console.log(42); 
	}
if (a4 * b4 == 42) { console.log(a4 * b4); }