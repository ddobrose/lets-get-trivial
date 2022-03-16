
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

let restartButton = document.querySelector('.restart')
restartButton.addEventListener('click', initialize)
function initialize() {
    turns = 11
    points = 0
    scoreDisplay.innerText= `Player Score : 0`
    shuffledQuestions = questionsAndAnswers.sort(() => Math.random() - .5)
    nextButton.classList.remove("hidden")
    nextQuestion()

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
let scoreDisplay = document.querySelector(".player")
function nextQuestion() {
        if (turns > 1 ) {
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
        aButton.dataset.correct = `${questionsAndAnswers[turns-1].answers[0].correct}`
        bButton.dataset.correct = `${questionsAndAnswers[turns-1].answers[1].correct}`
        cButton.dataset.correct = `${questionsAndAnswers[turns-1].answers[2].correct}`
        dButton.dataset.correct = `${questionsAndAnswers[turns-1].answers[3].correct}`

        } else {
            nextButton.classList.add("hidden")
        }
        answerButtons.forEach(changeAnswerColorBack)
    }
    
    
    // change answer display
    // turns --
    // points ++ if correct



let answerButtons = document.querySelectorAll('.answer')
function addSelectAnswerListener(element) {
    element.addEventListener("click", selectAnswer)
}

function displayCorrect(element){
    if (element.dataset.correct === "true") {
        element.style.backgroundColor = "green"
    }
}
function changeAnswerColorGreen(element){
    element.style.backgroundColor= "green"
}
function changeAnswerColorRed(element){
    element.style.backgroundColor= "red"
}
function changeAnswerColorBack(element){
    element.style.backgroundColor= "white"
}
answerButtons.forEach(addSelectAnswerListener)
function selectAnswer(event) {
    let answerLetter= event.target.id
    if (aButton.dataset.correct === "true" && answerLetter === "a"){
        changeAnswerColorGreen(aButton)
        points ++
        scoreDisplay.innerText = `Player Score : ${points}`
        questionDisplay.innerText= "Correct!"
        console.log(event.target)
    }
    else if (aButton.dataset.correct === "false" && answerLetter === "a") {
        changeAnswerColorRed(aButton)
        questionDisplay.innerText = "Incorrect!"
    }else if (bButton.dataset.correct === "true" && answerLetter === "b"){
        changeAnswerColorGreen(bButton)
        points ++
        scoreDisplay.innerText = `Player Score : ${points}`
        questionDisplay.innerText= "Correct!"
        console.log(event.target)
    }
    else if (bButton.dataset.correct === "false" && answerLetter === "b") {
        changeAnswerColorRed(bButton)
        questionDisplay.innerText = "Incorrect!"
    }else if (cButton.dataset.correct === "true" && answerLetter === "c"){
        changeAnswerColorGreen(cButton)
        points ++
        scoreDisplay.innerText = `Player Score : ${points}`
        questionDisplay.innerText= "Correct!"
        console.log(event.target)
    }
    else if (cButton.dataset.correct === "false" && answerLetter === "c") {
        changeAnswerColorRed(cButton)
        questionDisplay.innerText = "Incorrect!"
    }else if (dButton.dataset.correct === "true" && answerLetter === "d"){
        changeAnswerColorGreen(dButton)
        points ++
        scoreDisplay.innerText = `Player Score : ${points}`
        questionDisplay.innerText= "Correct!"
        console.log(event.target)
    }
    else if (dButton.dataset.correct === "false" && answerLetter === "d") {
        changeAnswerColorRed(dButton)
        questionDisplay.innerText = "Incorrect!"}
        answerButtons.forEach(displayCorrect)
        
    
    // if (aButton.dataset.correct === "true"){
    //     changeAnswerColorGreen(aButton)
    //     // changeAnswerColorRed()

    //     if (answerLetter === "a") {points ++}
    //     console.log(points, answerLetter, event.target)
    //     scoreDisplay.innerText = `Player Score : ${points}`
    //     console.log(aButton)
    // }
    // else if (aButton.dataset.correct === "false") {
    //     changeAnswerColorRed(aButton)
    //     scoreDisplay.innerText = `Player Score : ${points}`
    //     console.log(aButton)}
    // }
    // if (bButton.dataset.correct === "true"){
    //     changeAnswerColorGreen(bButton)
    //     points ++
    //     scoreDisplay.innerText = `Player Score : ${points}`
    // }
    // else if (bButton.dataset.correct === "false") {
    //     changeAnswerColorRed(bButton)
        
    //     scoreDisplay.innerText = `Player Score : ${points}`
    // }
    // if (cButton.dataset.correct === "true"){
    //     changeAnswerColorGreen(cButton)
    //     points ++
    //     scoreDisplay.innerText = `Player Score : ${points}`
    // }
    // else if (cButton.dataset.correct === "false") {
    //     changeAnswerColorRed(cButton)
    //     scoreDisplay.innerText = `Player Score : ${points}`
    // }
    // if (dButton.dataset.correct === "true"){
    //     changeAnswerColorGreen(dButton)
    //     points ++
    //     scoreDisplay.innerText = `Player Score : ${points}`
        
    // }
    // else if (dButton.dataset.correct === "false") {
    //     changeAnswerColorRed(dButton)
    //     scoreDisplay.innerText = `Player Score : ${points}`
    // }
    nextButton.disabled = false
    console.log("working")
}

function selectAnswerMod(element) {
    
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