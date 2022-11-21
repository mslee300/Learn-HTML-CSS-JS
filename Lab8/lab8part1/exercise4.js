// Exercise 4:
// consider the following program.
var x = 11;
var y = 5;
y = y * 3;
var z = y - x;
x = x / 3;
y = z % 3;

/*
Fill in the rest of the table to show how 
the values of the variables change over the 
course of the program. 

line of code   | x  | y  | z  |
--------------------------------
x = 11         | 11 |    |    |
y = 5          | 11 | 5  |    |   
y = y * 3      | 11 | 15 |    |
z = y - x      | 11 | 15 | 4  |
x = x / 3      |11/3| 15 | 4  |
y = z % 3      |11/3| 1  | 4  |

*/


// Consider the following program.
let a5 = 1;
let b5 = 2;
let c5;

// a) Write an assignment statement that increases 
//    the value of variable a5 by 5 units.

a5 += 5

// b) Write an assignment statement that raises
//    b5 to the a5th power and assign it to c5.

c5 = b5**5

// c) Write an assignment statement that gives b5 
//    a value that is one-third of the value of a5

b5 = a5 / 3

// d) Write an expression that tests if the value of a5 
//    equals to the value of b5.

a5 == b5

// e) Write an expression that tests if a5 is a multiple of 3.

a5 % 3 == 0

/*
Hint 1: For parts d and e provide an appropriate boolean expression. 
For example, if we asked for an expression that tests 
if a5 greater than 10, you would simply write a5 > 10
 
Hint 2 for part e: Recall that the modulus operator (%) can 
be used to find the remainder of a division. 
For example, 10 % 2 is 0 because 2 divides evenly into 10.
*/

