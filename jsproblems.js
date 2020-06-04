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

// greater the two or three value

var business = 450;
var minister = 350;
var shocib = 250;
if (business > minister && business > shocib) {
    console.log("Business is bigger");
} else if (minister > business && minister > shocib) {
    console.log("Minister is bigger");
} else {
    console.log("Shochib is bigger");
}
// max method

var max = Math.max(business, minister, shocib);
if (max == business) {
    console.log("Business is bigger");
} else if (max == minister) {
    console.log("Minister is bigger");
} else {
    console.log("Business is bigger");
}