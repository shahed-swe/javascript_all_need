var firendsAge = [15, 17, 14, 16];
var sonaliAge = firendsAge[2];

console.log(firendsAge);
console.log(sonaliAge);

firendsAge[1] = 34;
console.log(firendsAge);
var position = firendsAge.indexOf(141)
console.log(position)
    // array advance
firendsAge.push(23)
console.log(firendsAge);
console.log(firendsAge.length)

firendsAge.push(34);
console.log(firendsAge.length);

firendsAge.pop();
console.log(firendsAge.length);
// insert in the begining
firendsAge.unshift(12);
console.log(firendsAge);
// remove from begin
firendsAge.shift();
console.log(firendsAge);

// length count
var num = 0
while (num <= 10) {
    console.log(num);
    // num = num + 1;
    num++;
}

for (var i = 0; i <= 10; i++) {
    console.log(i);
}