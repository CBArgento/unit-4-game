function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function startGame() {
    var gameSettings = {
        currentSum: 0,
        targetRandNumber: getRandomNumber(19, 120)
        }
    return gameSettings;
}

function setJewelValue (item) {
    item.attr("data-crystalvalue", getRandomNumber(1,12));
}

function userTotal (stats, sum){
    stats.currentSum += sum;
    return stats.currentSum;
}

function animateImage (item, index, arr) {
    arr[0].css({"top":"12rem","left":"2rem"});
    arr[1].css({"top":"12rem","left":"15rem"});
    arr[2].css({"top":"12rem","right":"15rem"});
    arr[3].css({"top":"12rem","right":"2rem"});
    $(".crystal-image").animate({
        height: '+=300px',
        width: '+=300px'
    },"slow");
    $(".crystal-image").animate({
        height: '-=300px',
        width: '-=300px'
    },"slow");
}

function resetPosition() {
    setTimeout(function(){
        $(".crystal-image").removeClass("imgAbsolute");
    }, 5000);
}

function updateScore(item, value) {
    item.text(value);
}

function newGame (jewelsArr) {
    stats = startGame();
    $("#target-Num").text(stats.targetRandNumber);
    $("#current-Sum").text(stats.currentSum);
    jewelsArr.forEach(setJewelValue);
    return stats;
}

$(document).ready(function () {

    var wins = 0;
    var losses = 0;

    var winsItem = $("#wins").text(wins);
    var lossItem = $("#losses").text(losses); 

    var blue = $("#blue");
    var green = $("#green");
    var purple = $("#purple");
    var red = $("#red");

    var jewels = [blue,green,purple,red];
    jewels.forEach(setJewelValue);

    var gameStats = newGame(jewels);
  
    $(".crystal-image").on("click", function() {
        crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        $("#current-Sum").text(userTotal(gameStats, crystalValue));
    
        if (gameStats.currentSum === gameStats.targetRandNumber) {
            alert("You win!");
            $(".crystal-image").addClass("imgAbsolute")
            jewels.forEach(animateImage);
            resetPosition();
            wins++;
            updateScore(winsItem,wins);
            //winsItem.text(wins);
            gameStats = newGame(jewels);
        } else if (gameStats.currentSum >= gameStats.targetRandNumber) {
            alert("You lose!!");
            losses++;
            updateScore(lossItem,losses);
            //lossItem.text(losses);
            gameStats = newGame(jewels);
        }
    });
}); 