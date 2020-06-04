var a = 10;
var b = 5;
var temp = 0;

temp = a;
a = b;
b = temp;
console.log("Value of a:", a, "b:", b);

// java script method

var x = 12;
var y = 14;
[x, y] = [y, x];
console.log("Value of X:", x, "Y:", y);

// bitwise operation
var x = 5
var y = 10
x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log("Value of X:", x, "Y:", y);