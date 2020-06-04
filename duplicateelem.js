var array = [1, 5, 11, 2, 4, 5, 9, 13, 16, 2, 19, 5];
var unique = [];
for (var i = 0; i < array.length; i++) {
    var index = unique.indexOf(array[i]);
    if (index == -1) {
        unique.push(array[i]);
    }
}
console.log(unique);