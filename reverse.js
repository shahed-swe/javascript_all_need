var string = "New elements comes with new possibilities";
var rev_str = "";
// for (var i = string.length; i > 0; i--) {
//     rev_str += string[i];
// }

for (let i = 0; i < string.length; i++) {
    var char = string[i];
    rev_str = char + rev_str;

}
console.log(rev_str);