let bio = document.querySelector('#bioText')
let jimage = document.querySelector("#jesuspic")
let greeting = document.querySelector("#greeting")
let myName = document.querySelector('#myName')




function greetingUser(){
    greeting.textContent = "Hello!"
}
function introduction(){
    myName.textContent="My name is Jesus Oyervides Jr"
}

// jimage.addEventListener('click', displayBio)
function displayBio(){
    bio.textContent = 'I am a student in the UT full stack part-time coding bootcamp. I am originally from West Texas, where the only thing you see is pump jacks and cotton fields for miles. I love creating and building things, whether it be model kits, legos, trading card game decks, or websites. My passion to create has no bounds! I would say my goal is to become the very best software engineer like no one ever was! To learn all the programming languages is my real test! To utilize them is my cause!'
}


window.setTimeout(greetingUser,3000)
window.setTimeout(introduction,5000)
window.setTimeout(displayBio,7000)