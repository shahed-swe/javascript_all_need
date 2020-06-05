function call_back(name, age, funk) {
    console.log(name, age);
    // console.log(funk);
    funk();
}

function washHand() {
    console.log("Wash your hand please");
}

function takeShower() {
    console.log("Take a shower right now");
}

call_back("Shahed", 21, washHand);
call_back("Ashik", 22, takeShower);