//Team one//

let shotOne = document.querySelector("#teamone-numshots")
let goalOne = document.querySelector("#teamone-numgoals")
let teamOneShootButton = document.querySelector("#teamone-shoot-button")

//Team two//

let shotsTwo = document.querySelector("#teamtwo-numshots")
let goalsTwo = document.querySelector("#teamtwo-numgoals")
let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button")

//Team one shots and goals//

teamOneShootButton.addEventListener("click", function () {

    console.log("teamOneShootButton button clicked");
    let teamOneNumShots = Number(shotOne.innerHTML) + 1;
    shotOne.innerHTML = teamOneNumShots

    teamOneNumGoals = Number(goalOne.innerHTML) + 1;

    if (Math.random() >= 0.5) {
        goalOne.innerHTML = teamOneNumGoals;
    }

    else {
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

    else {
        goalsTwo.innerHTML = teamTwoNumGoals;

    }

})

resetButton.addEventListener("click", function () {


    console.log("Reset button clicked");
    let resetFunction = Number(resetButton.innerHTML) + 1;

})