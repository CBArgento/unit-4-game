var won = 0;
var lost = 0;
var randomNumber;
var counter = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var resetGame = false;

ranNumber();
$("#number").text(randomNumber);
var imageCrystal = $(".crystal");
//for loop
// for (var i = 0; i < numberOptions.length; i++) {
//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);

// }

function reset() {
    ranNumber()
    counter = 0;
    $("#number").text(randomNumber);
    $("#score").text(counter);
    resetGame = true;

}
$(".crystal").on("click", function () {
    if (resetGame) {
        $("#winLose").empty();
        resetGame = false;
    }    
    var crystalValue = $(this).attr("id");
    if (crystalValue === "blue") {
        counter = counter + crystal1
    } else if (crystalValue === "green") {
        counter = counter + crystal2
    } else if (crystalValue === "purple") {
        counter = counter + crystal3
    } else if (crystalValue === "red") {
        counter = counter + crystal4
    }


    $("#score").text(counter);

    if (counter === randomNumber) {
        reset();
        won ++;
        $("#wins").text(won);
        $("#winLose").text("You win!")
    }

    else if (counter > randomNumber) {
        reset();
        lost ++;
        $("#lost").text(lost);
        $("#winLose").text("You loose!")
    }

});
function ranNumber() {
    crystal1 = Math.floor(Math.random() * 9) + 1;
    crystal2 = Math.floor(Math.random() * 9) + 1;
    crystal3 = Math.floor(Math.random() * 9) + 1;
    crystal4 = Math.floor(Math.random() * 9) + 1;
    randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19)
}