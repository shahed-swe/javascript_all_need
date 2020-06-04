var marks = [45, 39, 46, 57, 56, 38, 25, 56, 85]
var sum = 0;
for (var i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}
console.log("Summation is: ", sum);
// using of function

function getsumres(numbers) {
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}

var res = getsumres(marks)
console.log("The result is: ", res);