nums = [5, 12, 87, 45, 17, 5]
var count = 0;
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 != 0) {
        console.log(num * 2);
    } else {
        count++;
    }
}
console.log("\n", count);
// call back function


function setSum() {
    var sum = 0
        // console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum
}

var res = setSum(5, 12, 45, 56, 89, 35)
console.log(res)

function setSum2() {
    var sum = 0;
    // console.log(arguments[0][0])
    for (let i = 0; i < arguments[0].length; i++) {
        const number = arguments[0][i];
        sum += number;

    }

    function sumNumCheck(take) {
        if (take % 2 == 0) {
            return "Your value is odd";
        } else {
            return "Your value is even";
        }
    }
    return sumNumCheck(sum);

}

var res2 = setSum2(nums)
console.log(res2)