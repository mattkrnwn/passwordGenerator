let allOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z","1","2","3","4","5","6","7","8","8",'9',"0","!","@","#","$","%","^","&","*",]
let box1 = document.querySelector("#box1")
let box2 = document.querySelector("#box2")
let box3 = document.querySelector("#box3")
let box4 = document.querySelector("#box4")


function createPassword() {
    for (let i = 0; i < 10; i++) {
        box1.textContent = ""
        let random = Math.floor(Math.random()*(allOptions.length))
        let characterChoice = allOptions[random]
        box1.textContent += characterChoice
    }
    for (let i = 0; i < 10; i++) {
        box2.textContent = ""
        let random = Math.floor(Math.random()*(allOptions.length))
        let characterChoice = allOptions[random]
        box2.textContent += characterChoice
    }
    for (let i = 0; i < 10; i++) {
        box3.textContent = ""
        let random = Math.floor(Math.random()*(allOptions.length))
        let characterChoice = allOptions[random]
        box3.textContent += characterChoice
    }
    for (let i = 0; i < 10; i++) {
        box4.textContent = ""
        let random = Math.floor(Math.random()*(allOptions.length))
        let characterChoice = allOptions[random]
        box4.textContent += characterChoice
    }
}