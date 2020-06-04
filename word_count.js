var speech = "Hi I am Shahed, I am good boy, I don't snoore at night";
// console.log(speech[0]);
// console.log(speech.length);
var count = 1;
for (var i = 0; i < speech.length; i++) {
    if (speech[i] == " " && speech[i - 1] != " ") {
        count++;
    }
}
console.log("Total words are ", count);