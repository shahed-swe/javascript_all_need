var marks = [45, 39, 46, 57, 56, 38, 25]
var max = marks[0]

for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element
    }
}
console.log("Highest Value is:", max);
// using sorting method

for (var i = 0; i < marks.length; i++) {
    for (var j = 0; j < marks.length; j++) {
        if (marks[i] > marks[j]) {
            marks[i] = marks[i] ^ marks[j];
            marks[j] = marks[i] ^ marks[j];
            marks[i] = marks[i] ^ marks[j];
        }
    }
}
console.log("Highest Value is:", marks[0])