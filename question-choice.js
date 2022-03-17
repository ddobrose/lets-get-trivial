// question choice page
//on this page I would like each button to bring you another
// page that generates a question and 4 answers based on difficulty
const url = `https://opentdb.com/api.php?amount=10&category=9`
let myGlobal
function fetchQuestions() {
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log(`success!`, res)
        myGlobal = res.results
    })
    .catch(err=> {
        console.log('something went wrong...')
    })
    
}
fetchQuestions()
console.log(myGlobal)

