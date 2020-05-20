//Team one//

let shotOne = document.querySelector("#teamone-numshots")
let goalOne = document.querySelector("#teamone-numgoals")
let teamOneShootButton = document.querySelector("#teamone-shoot-button")

//Team two//

let shotsTwo = document.querySelector("#teamtwo-numshots")
let goalsTwo = document.querySelector("#teamtwo-numgoals")
let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button")

let resetbutton = document.querySelector("#reset-button")
let numberreset = document.querySelector("#num-resets")

//Team one shots and goals//

teamOneShootButton.addEventListener("click", function () {

    console.log("teamOneShootButton button clicked");
    let teamOneNumShots = Number(shotOne.innerHTML) + 1;
    shotOne.innerHTML = teamOneNumShots

    teamOneNumGoals = Number(goalOne.innerHTML) + 1;

    if (Math.random() >= 0.5) {
        goalOne.innerHTML = teamOneNumGoals;

    }



})

//Team two shots and goals//

teamTwoShootButton.addEventListener("click", function () {

    console.log("teamTwoShootButton button clicked");
    let teamTwoNumShots = Number(shotsTwo.innerHTML) + 1;
    shotsTwo.innerHTML = teamTwoNumShots

    teamTwoNumGoals = Number(goalsTwo.innerHTML) + 1;

    if (Math.random() >= 0.5) {
        goalsTwo.innerHTML = teamTwoNumGoals;

    }

})

resetbutton.addEventListener("click", function () {
    shotOne.innerHTML = 0
    goalOne.innerHTML = 0
    shotsTwo.innerHTML = 0
    goalsTwo.innerHTML = 0
    let resetnum = Number(numberreset.innerHTML) + 1;
    numberreset.innerHTML = resetnum

})