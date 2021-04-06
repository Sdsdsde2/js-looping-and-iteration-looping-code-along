// Code your solutions in this file
let messages = []
function writeCards(names, gift) {
    for(let i = 0; i < names.length; i++) {
        messages.push("Thank you, " + names[i] + ", for the wonderful " + gift + " gift!")
    }
    return messages
}

function countDown(number) {
    for(let i = 0; i <= number; i++){
        console.log(i)
    }
}