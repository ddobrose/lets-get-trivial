
turns = 11
points = 0
const questions= [
    "Which company did Valve cooperate with in the creation of the Vive?",
    "What geometric shape is generally used for stop signs?",
    "What is the nickname of the US state of California?",
    "What was the first ever London Underground line to be built?",
    "What machine element is located in the center of fidget spinners?",
    "In which fast food chain can you order a Jamocha Shake?",
    "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
    "Who is the youngest person to recieve a Nobel Prize?",
    "What is the famous Papa John&#039;s last name?",
    "What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?",
    ]
    
    const AnswerList = {
        one: ["Oculus","Google","Razer","HTC"],
        two:["Hexagon","Circle","Triangle","Octagon"],
        three:["Sunshine State","Bay State","Treasure State","Golden State"],
        four:["Circle Line","Bakerloo Line","Victoria Line","Metropolitan Line"],
        five:["Axles","Gears","Belts","Bearings"],
        six:["McDonald's","Burger King","Wendy's","Arby's"],
        seven:["Apple","Peach","Pear","Plum"],
        eight:["Lawrence Bragg","Werner Heisenberg","Yasser Arafat","Malala Yousafzai"],
        nine:["Chowder","Williams","ANDERSON","Schnatter"],
        ten:["Air France","British Airways","TWA","Swiss Air"]
    }
    
    const correctAnswerList = ["HTC", "Octagon","Golden State","Metropolitan Line","Bearings","Arby's","Plum","Malala Yousafzai","Schnatter","Swiss Air"]
    
    questionsAndAnswers = [
        {
            question:"Which company did Valve cooperate with in the creation of the Vive?",
            answers: [
                {choice:"Oculus", correct:false},
                {choice:"Google", correct:false},
                {choice:"Razer", correct:false},
                {choice:"HTC", correct:true}
            ]
        },
        {
            question:"What geometric shape is generally used for stop signs?",
            answers: [
                {choice:"Hexagon", correct:false},
                {choice:"Circle", correct:false},
                {choice:"Triangle", correct:false},
                {choice:"Octagon", correct:true}
            ]
        },
        {
            question:"3",
            answers: [
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"c", correct:true}
            ]
        },
        {
            question:"4",
            answers: [
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"c", correct:true}
            ]
        },
        {
            question:"5",
            answers: [
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"c", correct:true}
            ]
        },
        {
            question:"6",
            answers: [
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"c", correct:true}
            ]
            
        },{
        
            question:"7",
            answers: [
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"c", correct:true}
            ]
        },
        {
            question:"8",
            answers: [
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"c", correct:true}
            ]
        },
        {
            question:"9",
            answers: [
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"c", correct:true}
            ]
        },
        {
            question:"10",
            answers: [
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"i", correct:false},
                {choice:"c", correct:true}
            ]
        }
    ]

let shuffledAnswers
let shuffleQuestions 
function initialize() {
    turns = 10
    points = 0
    
    //start game button and restart button
    // switch hidden Off
    // var.document.style.margintop = 0vh
    // shuffle questions
    // nextQuestion()
}



let aButton = document.querySelector('#a')
let bButton = document.querySelector('#b')
let cButton = document.querySelector('#c')
let dButton = document.querySelector('#d')
let nextButton = document.querySelector(".next")
nextButton.addEventListener("click", nextQuestion)
let questionDisplay = document.querySelector(".question")
let turnsDisplay = document.querySelector(".turns")
function nextQuestion() {
        if (turns > 1) {
        turns --
        nextButton.disabled = true
        turnsDisplay.innerText= `Turns Left: ${turns}`
        console.log(questionsAndAnswers[turns-1].question)
        questionDisplay.innerText= `${questionsAndAnswers[turns-1].question}`
        shuffledAnswers = questionsAndAnswers[turns-1].answers.sort(() => Math.random() - .5)
        aButton.innerText = `${questionsAndAnswers[turns-1].answers[0].choice}`
        bButton.innerText = `${questionsAndAnswers[turns-1].answers[1].choice}`
        cButton.innerText = `${questionsAndAnswers[turns-1].answers[2].choice}`
        dButton.innerText = `${questionsAndAnswers[turns-1].answers[3].choice}`

        } else {
            nextButton.classList.add("hidden")
        }
    }
    
    
    // change answer display
    // turns --
    // points ++ if correct



let answerButtons = document.querySelectorAll('.answer')
function addSelectAnswerListener(element) {
    element.addEventListener("click", selectAnswer)
}
function changeAnswerColorGreen(element){
    element.style.backgroundColor= "green"
}
function changeAnswerColorRed(element){
    element.style.backgroundColor= "red"
}
answerButtons.forEach(addSelectAnswerListener)
function selectAnswer() {
    //add score if correct
    //add text of correct or incorrect
    answerButtons.forEach(changeAnswerColorGreen)
    // answerButtons.forEach(changeAnswerColorRed)
    nextButton.disabled = false
    console.log("working")
}

let startGameButton = document.querySelector(".startGame")
    let gameItems = document.querySelectorAll(".game")
function showGame() {
    startGameButton.classList.add("hidden")
    gameItems.forEach(removeHidden)
    document.querySelector('.gameTitle').style.marginTop="0vh"
    shuffledQuestions = questionsAndAnswers.sort(() => Math.random() - .5)
    nextQuestion()
}

function removeHidden(element){
    element.classList.remove("hidden")
    // element.style.marginTop = "0vh"
    }

    startGameButton.addEventListener("click", showGame)