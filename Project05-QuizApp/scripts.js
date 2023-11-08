const questions=[
    {
        'que': 'Which of the following is Markup Language',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'C++',
        'correct':'a'
    },
    {
        'que': 'Which of the following is High Level Scripting Language',
        'a':'COBOL',
        'b':'FORTRAN',
        'c':'BASIC',
        'd':'Python',
        'correct':'d'
    },
    {
        'que': 'Which of the following is DataBase Language',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'SQL',
        'correct':'d'
    },


]
let index=0;
let total=questions.length;
let right=0;
let incorrect=0;
const ques=document.getElementById('question');
const options=document.querySelectorAll('.options');

const loadQuestion=()=>{
    if (index === total) {
        return quizEnd()
    }
    reset()
    const data = questions[index]
    ques.innerHTML=`${index+1}. ${data.que}`;
    options[0].nextElementSibling.innerHTML=data.a;
    options[1].nextElementSibling.innerHTML=data.b;
    options[2].nextElementSibling.innerHTML=data.c;
    options[3].nextElementSibling.innerHTML=data.d;
}
document.querySelector('.submit').addEventListener('click',()=>{
    let ans=getAnswer();
    const data = questions[index]
    if(ans === data.correct){
        right++;
    }
    else{
        incorrect++;
    }
    index++;
    loadQuestion(index);
    return;
})

const getAnswer = () => {
    let ans;
    options.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans=inputEl.value
            }
        }
    )
    return ans;
}
const reset = () => {
    options.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}
const quizEnd = () => {
    document.getElementsByClassName('box').innerHTML = `
        <h3>You have completed the test</h3>
    `
}
loadQuestion();