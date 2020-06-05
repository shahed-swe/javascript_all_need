// $(function() {
//     $("#deposite-btn").click(function() {
//         var get_depo = $("#depo-val").text();
//         console.log(get_depo);
//         var main_depo = $("#deposite").val();
//         var get_depo = parseFloat(get_depo);
//         var main_depo = parseFloat(main_depo);
//         if (get_depo > 0) {
//             var total_depo = get_depo + main_depo;
//             $("#deposite").text(total_depo);
//             alert(total_depo);
//             new_set(total_depo);
//         }
//     })
// })

// function new_set(new_balanace) {
//     var total_balance = $("#balance").val();
//     var total_balance = parseFloat(total_balance);
//     var balance = total_balance + new_balanace;
//     $("#balance").text(balance);
// }

// login button event handler
const loginbtn = document.getElementById("login");
loginbtn.addEventListener('click', function() {
    const loginsection = document.getElementById("login-section");
    const banksection = document.getElementById("bank-section");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email = "shahedtalukder51@gmail.com" && password == "32100505") {
        alert("Successfully logged in!!");
        loginsection.style.display = "none";
        banksection.style.display = "block";
    } else {
        alert("Try Again Please");
        loginsection.style.display = "block";
    }
});
// deposite button event handler
const depositebtn = document.getElementById("deposite-btn");
document.getElementById("balance").innerText = 1240;
depositebtn.addEventListener('click', function() {
    const deposite_value = parseFloat(document.getElementById("depo-val").value);
    if (deposite_value > 0) {
        const currentDepo = parseFloat(document.getElementById("deposite").innerText);
        const totalDepo = currentDepo + deposite_value;
        document.getElementById("deposite").innerText = totalDepo;
        // for balance

        const balance = parseFloat(document.getElementById("balance").innerText);
        if (currentDepo < 100000000) {
            const totalBalance = deposite_value + balance;
            document.getElementById("balance").innerText = totalBalance;
        } else {
            alert("You can't Deposite more then 1 Billion at a time");
        }
    }
    document.getElementById("depo-val").value = "";
});
// withdraw event
const withdrawbtn = document.getElementById("withdraw-btn");
withdrawbtn.addEventListener('click', function() {
    const new_balance = parseFloat(document.getElementById("balance").innerText);
    const withdraw_value = parseFloat(document.getElementById("with-val").value);
    console.log(withdraw_value);
    if (withdraw_value > 0) {
        if (new_balance > 0 && new_balance >= withdraw_value) {
            const currentWith = parseFloat(document.getElementById("withdraw").innerText);
            const totalwithdraw = currentWith + withdraw_value;
            document.getElementById("withdraw").innerText = totalwithdraw;
            const totalBalance = new_balance - withdraw_value;
            document.getElementById("balance").innerText = totalBalance;
        } else {
            // document.getElementById("balance").innerText = 00;
            alert("Don't have enough balance");
        }

    }
})