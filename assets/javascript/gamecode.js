

console.log("hello testing javascript");

var random_result;
var lost;
var win;

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 12);
    console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class", 'crystal',
            "data-random"
        });

    $(".crystals").append(crystal);
    console.log("testing var");
}

// a game with with 4 crystal and random result
// Every crystal needs to have a random number between 1-12
// A new random number should be generated every single time the user wins or losses
// when clicking any crystal, it should be adding with the previous until it hits the total score
// If it is greater that the random result, reduce the lost counter
// If it is equal, then we increment a win counter
