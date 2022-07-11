// Code your solutions in this file

function writeCards(names, eventName) {
    let returnArray = [];
    for (let i = 0; i < names.length; i++) {
        returnArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return returnArray;
}

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}