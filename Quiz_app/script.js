const Questions = [
    {
        question : "Can You Find a Single Person in the World who consider me as their important person ?",
        options : [
            {text : "Yes" , answer : "false"},
            {text : "No" , answer : "true"},
            
        ]
    },
    {
        question : "Can You find someone in the world who is real to me ? ",
        options : [
            {text : "Yes" , answer : "false"},
            {text : "No" , answer : "true"},
            
        ]
    }
];

let answerCount = 0;
let questionIndex = 0;
const questionText = document.querySelector('.question');
const answers = document.querySelector('.answer__btn');
// const answerBtn = document.querySelectorAll('.btn');
const nextBtn = document.querySelector('#next__btn'); 


function startQuiz() {
    answerCount = 0;
    questionIndex = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetQuestion();
    let currentQuestion = Questions[questionIndex];
    let questionNo = questionIndex+1;
    questionText.innerHTML = questionNo + '. ' + currentQuestion.question;
    
    currentQuestion.options.forEach((option)=>{

        const button = document.createElement("button");
        button.innerHTML = option.text;
        button.classList.add('btn');
        answers.appendChild(button);
        if(option.answer) {
            button.dataset.correct = option.answer;
        }
        button.addEventListener('click',function(e) {
            if(e.target.dataset.correct=='true') {
                e.target.classList.add('correct');
                e.target.style.color = "#fff";
                answerCount++;
            }else {
                e.target.classList.add('inCorrect');
                e.target.style.color = "#fff";
            }
            Array.from(answers.children).forEach((btn)=>{
                if(btn.dataset.correct=="true") {
                    btn.classList.add('correct');
                    btn.style.color = "#fff";
                }
                btn.disabled = true;
            });
            nextBtn.style.display = "block";
        });
    });

}

function resetQuestion() {
    // const nextBtn = document.querySelector('#next__btn');
    nextBtn.style.display = 'none';
    while(answers.firstChild) {
        answers.removeChild(answers.firstChild);
    }
}

nextBtn.addEventListener('click',function() {
    if(questionIndex < Questions.length) {
        questionIndex++;
        if(questionIndex < Questions.length) {
            showQuestion();
        }else {
            questionText.innerHTML = `Your Score is ${answerCount}`;
            questionText.style.textAlign = "center";
            nextBtn.style.display = "block";
            nextBtn.innerHTML = "Start Again";
            answers.style.display = "none";
            nextBtn.addEventListener('click',function() {
                answers.style.display = "block";
                showQuestion();
                // resetQuestion();
                // startQuiz();
            });
        }
        
    }else {
        startQuiz();
    }
    
});

showQuestion();