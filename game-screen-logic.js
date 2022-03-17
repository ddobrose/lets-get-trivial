
turns = 11
points = 0
let questionsResponse
let questionsAndAnswers = []
const url = `https://opentdb.com/api.php?amount=10&category=9&type=multiple`
// let questionsResponse
console.log(questionsResponse)
function fetchQuestions() {
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log(`success!`, res)
        questionsResponse = res.results
        questionsAndAnswers = [
            {
                question:questionsResponse[0].question,
                answers: [
                    {choice:questionsResponse[0].incorrect_answers[0], correct:false},
                    {choice:questionsResponse[0].incorrect_answers[1], correct:false},
                    {choice:questionsResponse[0].incorrect_answers[2], correct:false},
                    {choice:questionsResponse[0].correct_answer, correct:true}
                ]
            },
            {
                question:questionsResponse[1].question,
                answers: [
                    {choice:questionsResponse[1].incorrect_answers[0], correct:false},
                    {choice:questionsResponse[1].incorrect_answers[1], correct:false},
                    {choice:questionsResponse[1].incorrect_answers[2], correct:false},
                    {choice:questionsResponse[1].correct_answer, correct:true}
                ]
            },
            {
                question:questionsResponse[2].question,
                answers: [
                    {choice:questionsResponse[2].incorrect_answers[0], correct:false},
                    {choice:questionsResponse[2].incorrect_answers[1], correct:false},
                    {choice:questionsResponse[2].incorrect_answers[2], correct:false},
                    {choice:questionsResponse[2].correct_answer, correct:true}
                ]
            },
            {
                question:questionsResponse[3].question,
                answers: [
                    {choice:questionsResponse[3].incorrect_answers[0], correct:false},
                    {choice:questionsResponse[3].incorrect_answers[1], correct:false},
                    {choice:questionsResponse[3].incorrect_answers[2], correct:false},
                    {choice:questionsResponse[3].correct_answer, correct:true}
                ]
            },
            {
                question:questionsResponse[4].question,
                answers: [
                    {choice:questionsResponse[4].incorrect_answers[0], correct:false},
                    {choice:questionsResponse[4].incorrect_answers[1], correct:false},
                    {choice:questionsResponse[4].incorrect_answers[2], correct:false},
                    {choice:questionsResponse[4].correct_answer, correct:true}
                ]
            },
            {
                question:questionsResponse[5].question,
                answers: [
                    {choice:questionsResponse[5].incorrect_answers[0], correct:false},
                    {choice:questionsResponse[5].incorrect_answers[1], correct:false},
                    {choice:questionsResponse[5].incorrect_answers[2], correct:false},
                    {choice:questionsResponse[5].correct_answer, correct:true}
                ]
                
            },{
            
                question:questionsResponse[6].question,
                answers: [
                    {choice:questionsResponse[6].incorrect_answers[0], correct:false},
                    {choice:questionsResponse[6].incorrect_answers[1], correct:false},
                    {choice:questionsResponse[6].incorrect_answers[2], correct:false},
                    {choice:questionsResponse[6].correct_answer, correct:true}
                ]
            },
            {
                question:questionsResponse[7].question,
                answers: [
                    {choice:questionsResponse[7].incorrect_answers[0], correct:false},
                    {choice:questionsResponse[7].incorrect_answers[1], correct:false},
                    {choice:questionsResponse[7].incorrect_answers[2], correct:false},
                    {choice:questionsResponse[7].correct_answer, correct:true}
                ]
            },
            {
                question:questionsResponse[8].question,
                answers: [
                    {choice:questionsResponse[8].incorrect_answers[0], correct:false},
                    {choice:questionsResponse[8].incorrect_answers[1], correct:false},
                    {choice:questionsResponse[8].incorrect_answers[2], correct:false},
                    {choice:questionsResponse[8].correct_answer, correct:true}
                ]
            },
            {
                question:questionsResponse[9].question,
                answers: [
                    {choice:questionsResponse[9].incorrect_answers[0], correct:false},
                    {choice:questionsResponse[9].incorrect_answers[1], correct:false},
                    {choice:questionsResponse[9].incorrect_answers[2], correct:false},
                    {choice:questionsResponse[9].correct_answer, correct:true}
                ]
            }
        ]
        console.log(questionsResponse)
    })
    .catch(err=> {
        console.log('something went wrong...')
    })
}

fetchQuestions()
console.log(questionsResponse)

let shuffledAnswers
let shuffleQuestions 

let restartButton = document.querySelector('.restart')
restartButton.addEventListener('click', initialize)
document.querySelector(".restart-end").addEventListener("click",initialize)
function initialize() {
    gameOver=false
    fetchQuestions()
    console.log(questionsResponse)
    turns = 11
    points = 0
    scoreDisplay.innerText= `Player Score : 0`
    shuffledQuestions = questionsAndAnswers.sort(() => Math.random() - .5)
    nextButton.classList.remove("hidden")
    restartButton.innerText = "Restart"
    nextButton.innerText = "Next Question"
    endItems.forEach(addHidden)
    document.querySelector(".restart-end").classList.add("hidden")
    showGame()

    //start game button and restart button
    // switch hidden Off
    // var.document.style.margintop = 0vh
    // shuffle questions
    // nextQuestion()
}


gameStarted = false
gameOver = false
let soundsOn = true
let aButton = document.querySelector('#a')
let bButton = document.querySelector('#b')
let cButton = document.querySelector('#c')
let dButton = document.querySelector('#d')
let nextButton = document.querySelector(".next")
nextButton.addEventListener("click", nextQuestion)
let questionDisplay = document.querySelector(".question")
let turnsDisplay = document.querySelector(".turns")
let scoreDisplay = document.querySelector(".player")
let questionAudio = new Audio("64000 music.mp3")
let startAudio = new Audio("Main Theme.mp3")
let winAudio = new Audio("win.mp3")
let goodAudio = new Audio("good.mp3")
let loserAudio = new Audio("bad.mp3")
let audioButton = document.querySelector(".audio")
let endScreenAudioButton = document.querySelector('.audio-end')
function playStartMusic(){
    startAudio.play()
}
document.body.onload = playStartMusic()
// document.body.on
function soundOffOn(){
    if (soundsOn === true){
        soundsOn = false
        stopAudio(questionAudio)
        stopAudio(startAudio)
        audioButton.innerText = "Sound On"
        endScreenAudioButton.innerText = "Sound On"
        
        // if (gameStarted === false){startGameAudio.classList.add('hidden')}
        
    } else if (soundsOn === false){
        soundsOn= true
        if ( gameStarted === true && gameOver===false)questionAudio.play()
        if (gameStarted === false){playStartMusic}
        audioButton.innerText = "Sound Off"
        endScreenAudioButton.innerText = "Sound Off"
        // {startGameAudio.classList.remove('hidden')}
    }
}
function stopAudio(audio){
    audio.pause();
    audio.currentTime=0
}
function nextQuestion() {
        if (turns > 1 ) {
            if (soundsOn === true){questionAudio.play()}
        turns --
        nextButton.disabled = true
        turnsDisplay.innerText= `Turns Left: ${turns}`
        // console.log(questionsAndAnswers[turns-1].question)
        questionDisplay.innerHTML= `${questionsAndAnswers[turns-1].question}`
        shuffledAnswers = questionsAndAnswers[turns-1].answers.sort(() => Math.random() - .5)
        aButton.innerHTML = `${questionsAndAnswers[turns-1].answers[0].choice}` 
        bButton.innerHTML = `${questionsAndAnswers[turns-1].answers[1].choice}`
        cButton.innerHTML = `${questionsAndAnswers[turns-1].answers[2].choice}`
        dButton.innerHTML = `${questionsAndAnswers[turns-1].answers[3].choice}`
        aButton.dataset.correct = `${questionsAndAnswers[turns-1].answers[0].correct}`
        bButton.dataset.correct = `${questionsAndAnswers[turns-1].answers[1].correct}`
        cButton.dataset.correct = `${questionsAndAnswers[turns-1].answers[2].correct}`
        dButton.dataset.correct = `${questionsAndAnswers[turns-1].answers[3].correct}`

        } else {
            gameOver = true
            nextButton.classList.add("hidden")
            gameItems.forEach(addHidden)
            restartButton.classList.remove("hidden")
            restartButton.innerText= "New Game"
            document.querySelector(".restart-end").classList.remove("hidden")
            document.querySelector(".audio-end").classList.remove("hidden")
            restartButton.classList.add("hidden")

            if (points === 10){winEnd.classList.remove("hidden")}
            if (points === 10 && soundsOn=== true){winAudio.play()}
            if (points > 6 && points <10) {goodEnd.classList.remove("hidden")}
            if (points > 6 && points < 10 && soundsOn===true){goodAudio.play()}
            if (points < 7) {mehEnd.classList.remove("hidden")}
            if (points < 7 && soundsOn=== true){loserAudio.play()}
            stopAudio(questionAudio)
            
        }
        answerButtons.forEach(changeAnswerColorBack)
        answerButtons.forEach(enableAnswers)
    }

    function addHidden(element){
        element.classList.add("hidden")
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
function disableAnswers(element){
    element.disabled = true
}
function enableAnswers(element){
    element.disabled = false
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
    let correctAudio = new Audio('correct.mp3')
    let wrongAudio = new Audio('incorrect.mp3')
    if (aButton.dataset.correct === "true" && answerLetter === "a"){
        changeAnswerColorGreen(aButton)
        points ++
        scoreDisplay.innerText = `Player Score : ${points}`
        questionDisplay.innerText= "Correct!"
        if (soundsOn === true){correctAudio.play()}
        if (soundsOn === true){stopAudio(questionAudio)}
        console.log(event.target)

    }
    else if (aButton.dataset.correct === "false" && answerLetter === "a") {
        changeAnswerColorRed(aButton)
        questionDisplay.innerText = "Incorrect!"
        if (soundsOn === true) {wrongAudio.play()}
        if (soundsOn === true){stopAudio(questionAudio)}
    }else if (bButton.dataset.correct === "true" && answerLetter === "b"){
        changeAnswerColorGreen(bButton)
        points ++
        scoreDisplay.innerText = `Player Score : ${points}`
        questionDisplay.innerText= "Correct!"
        if (soundsOn === true){correctAudio.play()}
        if (soundsOn === true){stopAudio(questionAudio)}
        console.log(event.target)
    }
    else if (bButton.dataset.correct === "false" && answerLetter === "b") {
        changeAnswerColorRed(bButton)
        questionDisplay.innerText = "Incorrect!"
        if (soundsOn === true) {wrongAudio.play()}
        if (soundsOn === true){stopAudio(questionAudio)}
    }else if (cButton.dataset.correct === "true" && answerLetter === "c"){
        changeAnswerColorGreen(cButton)
        points ++
        scoreDisplay.innerText = `Player Score : ${points}`
        questionDisplay.innerText= "Correct!"
        if (soundsOn === true){correctAudio.play()}
        if (soundsOn === true){stopAudio(questionAudio)}
        console.log(event.target)
    }
    else if (cButton.dataset.correct === "false" && answerLetter === "c") {
        changeAnswerColorRed(cButton)
        questionDisplay.innerText = "Incorrect!"
        if (soundsOn === true) {wrongAudio.play()}
        if (soundsOn === true){stopAudio(questionAudio)}
    }else if (dButton.dataset.correct === "true" && answerLetter === "d"){
        changeAnswerColorGreen(dButton)
        points ++
        scoreDisplay.innerText = `Player Score : ${points}`
        questionDisplay.innerText= "Correct!"
        if (soundsOn === true){correctAudio.play()}
        if (soundsOn === true){stopAudio(questionAudio)}
    }
    else if (dButton.dataset.correct === "false" && answerLetter === "d") {
        changeAnswerColorRed(dButton)
        questionDisplay.innerText = "Incorrect!"
        if (soundsOn === true) {wrongAudio.play()}
        if (soundsOn === true){stopAudio(questionAudio)}
    }
        answerButtons.forEach(displayCorrect)
        answerButtons.forEach(disableAnswers)
        if (soundsOn === true){stopAudio(questionAudio)}
        if(turns === 1) { 
            nextButton.innerText = "Finish"
        }
        
    nextButton.disabled = false
    console.log("working")
}


function selectAnswerMod(element) {
    
}

let startGameButton = document.querySelector(".startGame")
let startGameAudio = document.querySelector('.startGameAudio')
    let gameItems = document.querySelectorAll(".game")
    let endItems = document.querySelectorAll(".end")
    let winEnd = document.querySelector(".endWin")
    let goodEnd = document.querySelector(".endGood")
    let mehEnd = document.querySelector(".endMeh")
function showGame() {
    console.log(questionsResponse)
    gameStarted= true
    startGameButton.classList.add("hidden")
    stopAudio(startAudio)
    // startGameAudio.classList.add('hidden')
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




