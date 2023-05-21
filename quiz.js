const questions = [
    {
        question: "What is the highest grossing Bollywood studio of all time?",
        answers: [
            {text: "Dharma Productions", correct: true},
            {text: "Yash Raj Films", correct: false},
            {text: "Fox Star Studios", correct: false},
            {text: "T-Series", correct: false},
        ]
    },
    {
        question: "Who plays the female lead in the movie 'Chandni Chowk to China'?",
        answers: [
            {text: "Priyanka Chopra", correct: false},
            {text: "Deepika Padukones", correct: true},
            {text: "Aishwarya Rai Bachchan", correct: false},
            {text: "Preity Zinta", correct: false},
        ]
    },
    {
 
        question: "Who plays God in 'God Tussi Great Ho'?",
        answers: [
            {text: "Akshay Kumar", correct: false},
            {text: "Salman Khan", correct: false},
            {text: "Sohail Khan", correct: false},
            {text: "Amitabh Bachchan", correct: true},
 
        ]
    },
    {
        question: "What is the tagline of 'DDLJ'?",
        answers: [
            {text: "Come... Fall In Love", correct: true},
            {text: "Love is all around", correct: false},
            {text: "Ja Simran ja jee le apni zindagi", correct: false},
            {text: "The Greatest Love Story", correct: false},
        ]
    },
    {
        question: "'Kuch Kuch Hota Hain', 'Kabhi Khushi Kabhie Gham', 'Kal Ho Na Ho' and 'Kabhi Alvida Na Kehna' were produced by Dharma Productions. Which of the following actors or actresses appeared in all four films?",
        answers: [
            {text: "Hritik Roshan", correct: true},
            {text: "Aamir Khan", correct: false},
            {text: "Saif Ali Khan", correct: false},
            {text: "Shah Rukh Khan", correct: false},
        ]
    },
    {
        question: "Name a movie where Shahrukh Khan was the villain.",
        answers: [
            {text: "Fan", correct: false},
            {text: "Ra.one", correct: false},
            {text: "Darr", correct: true},
            {text: "Zero", correct: false},
        ]
    },
    {
        question: "Who plays the female lead in the movie 'Fashion'?",
        answers: [
            {text: "Kangana Ranaut", correct: false},
            {text: "Priyanka Chopra", correct: true},
            {text: "Manini Mishra", correct: false},
            {text: "Kareena Kapoor", correct: false},
        ]
    },
    {
        question: "'Don(2006)'' had one of the leading stars of Hindi cinema in a double role. What was his name?",
        answers: [
            {text: "Nawazuddin Siddiqui", correct: false},
            {text: "Aamir Khan",correct: false},
            {text: "Akshay Khanna", correct: false},
            {text: "Shah rukh Khan", correct: true},
        ]
    },
    {
        question: "In 'Sholay', what was the name of Basanti's horse? ",
        answers: [
            {text: "Dhanno", correct: true},
            {text: "Rani", correct: false},
            {text: "Chetan", correct: false},
            {text: "Badal", correct : false},
        ]
    },
    {
        question: "What is Hritik Roshan's debut film?",
        answers: [
            {text: "Kaho naa... Pyaar Hai", correct: true},
            {text: "Koi Mil Gya", correct: false},
            {text: "Krish", correct: false},
            {text: "Fiza", correct: false},
        ]
    }
 ];
     const questionElement = document.getElementById("question");
     const answerButtons = document.getElementById("answer-buttons");
     const nextButton = document.getElementById("next-btn");
     
     let currentQuestionIndex=0;
     let score = 0;
     
     function startQuiz()
     {
         currentQuestionIndex=0;
         score = 0;
         nextButton.innerHTML = "Next";
         showQuestion();
     }
 
     function showQuestion()
     {
         resetState();
         let currentQuestion = questions[currentQuestionIndex];
         let questionNo = currentQuestionIndex + 1;
         questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
 
         currentQuestion.answers.forEach(answer => {
             const button = document.createElement("button");
             button.innerHTML = answer.text;
             button.classList.add("btn");
             answerButtons.appendChild(button);
             if(answer.correct){
                 button.dataset.correct = answer.correct;
             }
             button.addEventListener("click",selectAnswer);
         });
     }
 
     function resetState()
     {
         nextButton.style.display = "none";
         while (answerButtons.firstChild){
         answerButtons.removeChild (answerButtons.firstChild);
     }
 }
 
 function selectAnswer(e){
     const selectedBtn = e.target;
     const isCorrect = selectedBtn.dataset.correct === "true";
     if (isCorrect){ 
         selectedBtn.classList.add("correct");
         score++;
     }else{
     selectedBtn.classList.add("incorrect");
     }
     Array.from(answerButtons.children).forEach(button => {
          if(button.dataset.correct === "true"){ 
             button.classList.add("correct"); 
         }
         button.disabled = true;
     });
     nextButton.style.display="block";
 }
     function showScore(){
     resetState();
     questionElement.innerHTML= `You scored ${score} out of of ${questions.length}!`;
     nextButton.innerHTML = "Play Again"; 
     nextButton.style.display="block";
 }
 function handleNextButton(){ 
     currentQuestionIndex++;
     if(currentQuestionIndex < questions.length) {
         showQuestion();
     }else{
     showScore();
     }
 }
     nextButton.addEventListener("click", ()=>{
     if (currentQuestionIndex < questions.length) { 
         handleNextButton();
     }else{
     startQuiz();
     }
 })
     startQuiz();
 
