//grab the elements so we can interact with them
const dice = Array.from(document.querySelectorAll('.die'))

//swap whatever the current value is for data-active and add or remove the class based on whether it's currently on the element
function toggleDieHold(id) {
let ele = document.getElementById(String(id))
if (!ele) return
ele.classList.toggle('held')
const isHeld = ele.classList.contains('held')
ele.setAttribute('data-active', (!isHeld).toString())
}

//loop through and roll whatever dice have the held class
function rollDice(){
for (let i = 0; i < dice.length; i++){
    if (dice[i].classList.contains('held')){
        let num = Math.floor(Math.random() * 5) + 1
        dice[i].src = `images/${num}.png`
    }
}
}