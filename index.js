var inputBill = document.getElementById("bill");
var cashGiven = document.getElementById("cash");
var checkBtn = document.getElementById("btn");
var errMsg = document.getElementById("error");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var notes = [2000, 500, 100, 20, 10, 5, 1];

function errorHandle(error) {
    errMsg.style.display = "block";
    errMsg.innerText = error;
}

function hideMessage() {
    errMsg.style.display = "none";
}

function clickHandler() {
    hideMessage();

    var billAmount = parseInt(inputBill.value);
    var cashAmount = parseInt(cashGiven.value);

    if (isNaN(billAmount) || isNaN(cashAmount)) {
        errorHandle("Please enter valid amounts.");
        return;
    }

    if (billAmount <= 0) {
        errorHandle("Please enter a valid bill amount greater than zero.");
    } else if (cashAmount < billAmount) {
        errorHandle("Cash given should be greater than or equal to the bill amount.");
    } else {
        var remaining = cashAmount - billAmount;
        for (var i = 0; i < notes.length; i++) {
            const paisa = Math.trunc(remaining / notes[i]);
            remaining %= notes[i];
            noOfNotes[i].innerText = paisa;
        }
    }
}

checkBtn.addEventListener("click", clickHandler);
