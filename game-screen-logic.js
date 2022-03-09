let score = 0
let turns = 10

let question = document.querySelector(".question")
let answers = document.querySelectorAll(".answer")
let scoreBoard= document.querySelector(".player")
let turnBoard = document.querySelector(".turns")

const questionList= {
one: "Which company did Valve cooperate with in the creation of the Vive?",
two:"What geometric shape is generally used for stop signs?",
three:"What is the nickname of the US state of California?",
four:"What was the first ever London Underground line to be built?",
five:"What machine element is located in the center of fidget spinners?",
six:"In which fast food chain can you order a Jamocha Shake?",
seven:"According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
eight:"Who is the youngest person to recieve a Nobel Prize?",
nine:"What is the famous Papa John&#039;s last name?",
ten:"What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?",
}

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