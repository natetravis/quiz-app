const questions = [
    {
        question: "In physics, what is the SI unit of force?",
        options: ["Watt", "Newton", "Joule", "Pascal"],
        correctAnswer: 1, // Index of correct answer (Newton)
        field: "Physics"
    },
    {
        question: "Which organelle is known as the 'powerhouse' of the cell?",
        options: ["Nucleus", "Mitochondria", "Golgi Body", "Endoplasmic Reticulum"],
        correctAnswer: 1,
        field: "Biology"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Fe", "Au", "Cu"],
        correctAnswer: 2,
        field: "Chemistry"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: 1,
        field: "Literature"
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        correctAnswer: 1,
        field: "Mathematics"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Saturn"],
        correctAnswer: 2,
        field: "Astronomy"
    },
    {
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correctAnswer: 2,
        field: "History"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        correctAnswer: 2,
        field: "Geography"
    },
    {
        question: "Which programming language is known as the 'mother of all languages'?",
        options: ["Python", "Java", "C", "Assembly"],
        correctAnswer: 2,
        field: "Computer Science"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        correctAnswer: 1,
        field: "Art"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let totalPoints = 0;
let timeLeft = 10;
let timerInterval;
let selectedTopic = null;
let currentQuestions = []; // Add this to store current topic questions

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizContainer = document.getElementById('quiz-container');
const resultsScreen = document.getElementById('results-screen');
const quizContent = document.getElementById('quiz-content');
const nextButton = document.getElementById('next-question-btn');
const startButton = document.getElementById('start-quiz-btn');
const restartButton = document.getElementById('restart-quiz-btn');
const timeLeftSpan = document.getElementById('time-left');
const timerBarInner = document.querySelector('.timer-bar-inner');
const scoreDisplay = document.getElementById('score-display');

// Additional DOM Elements
const topicSelection = document.getElementById('topic-selection');
const topicsGrid = document.getElementById('topics-grid');

// Event Listeners
startButton.addEventListener('click', showTopicSelection);
nextButton.addEventListener('click', showNextQuestion);
restartButton.addEventListener('click', restartQuiz);

function showTopicSelection() {
    welcomeScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden'); // Hide results screen if coming from results
    topicSelection.classList.remove('hidden');
    
    // Generate topic cards
    topicsGrid.innerHTML = Object.entries(questionsDatabase)
        .map(([key, topic]) => `
            <div class="topic-card" onclick="selectTopic('${key}')">
                <div class="topic-icon">${topic.icon}</div>
                <div class="topic-name">${topic.name}</div>
                <div class="topic-questions-count">
                    ${topic.questions.length} Questions
                </div>
            </div>
        `).join('');
}

// Add this helper function for shuffling arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Modify selectTopic function to get random questions
window.selectTopic = function(topicKey) {
    selectedTopic = topicKey;
    // Get all questions for this topic and shuffle them
    const allTopicQuestions = [...questionsDatabase[topicKey].questions];
    // Take only 10 questions randomly (or less if there aren't 10 questions)
    const questionCount = Math.min(10, allTopicQuestions.length);
    currentQuestions = shuffleArray(allTopicQuestions).slice(0, questionCount);
    topicSelection.classList.add('hidden');
    startQuiz();
}

function startQuiz() {
    quizContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    totalPoints = 0;
    showQuestion();
}

// Modify restartQuiz to get new random questions
function restartQuiz() {
    resultsScreen.classList.add('hidden');
    // Get fresh set of random questions
    const allTopicQuestions = [...questionsDatabase[selectedTopic].questions];
    const questionCount = Math.min(10, allTopicQuestions.length);
    currentQuestions = shuffleArray(allTopicQuestions).slice(0, questionCount);
    currentQuestionIndex = 0;
    score = 0;
    totalPoints = 0;
    startQuiz();
}

// Also shuffle the options for each question when showing it
function showQuestion() {
    resetTimer();
    const question = currentQuestions[currentQuestionIndex];
    const topicName = questionsDatabase[selectedTopic].name;
    
    // Create a copy of options and shuffle them
    const shuffledOptions = [...question.options];
    const correctOption = question.options[question.correctAnswer];
    shuffleArray(shuffledOptions);
    // Find new index of correct answer after shuffling
    const newCorrectIndex = shuffledOptions.indexOf(correctOption);
    
    // Update quiz title with topic and question number
    document.getElementById('quiz-title').textContent = 
        `${topicName} - Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    
    const questionHTML = `
        <div class="question">
            <h3>${question.question}</h3>
            <div class="options">
                ${shuffledOptions.map((option, index) => `
                    <button class="option-btn" onclick="checkAnswer(${index}, ${newCorrectIndex})">
                        ${option}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    quizContent.innerHTML = questionHTML;
    nextButton.classList.add('hidden');
    startTimer();
}

// Update checkAnswer to work with shuffled options
window.checkAnswer = function(selectedIndex, correctIndex) {
    if (document.querySelector('.option-btn.correct')) return; // Prevent multiple answers
    
    clearInterval(timerInterval);
    const optionButtons = document.querySelectorAll('.option-btn');
    
    // Disable all options after answer is selected
    optionButtons.forEach(button => {
        button.disabled = true;
    });
    
    // Highlight correct and wrong answers
    optionButtons[correctIndex].classList.add('correct');
    if (selectedIndex !== correctIndex) {
        if (selectedIndex >= 0) { // Only add wrong class if an option was selected
            optionButtons[selectedIndex].classList.add('wrong');
        }
        showPointsEarned(0);
    } else {
        score++;
        totalPoints++;
        showPointsEarned(1);
    }
    
    nextButton.classList.remove('hidden');
}

function showPointsEarned(points) {
    const pointsDisplay = document.createElement('div');
    pointsDisplay.className = 'points-earned';
    pointsDisplay.textContent = points ? '+1 point!' : '+0 points';
    pointsDisplay.style.color = points ? '#41B853' : '#F40058';
    
    quizContent.appendChild(pointsDisplay);
    
    // Animate the points display
    setTimeout(() => {
        pointsDisplay.classList.add('fade-out');
        setTimeout(() => pointsDisplay.remove(), 500);
    }, 1000);
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    const topicName = questionsDatabase[selectedTopic].name;
    
    const resultsHTML = `
        <h2>Quiz Complete!</h2>
        <div class="results-details">
            <p class="topic-name">${topicName}</p>
            <p class="final-score">Final Score: ${score}/${currentQuestions.length}</p>
            <p class="points-total">Total Points Earned: ${totalPoints}</p>
            <p class="performance-text">${getPerformanceMessage(score)}</p>
        </div>
        <div class="result-actions">
            <button onclick="showTopicSelection()" class="secondary-btn">Try Another Topic</button>
            <button onclick="restartQuiz()" class="primary-btn">Retry This Topic</button>
        </div>
    `;
    
    resultsScreen.innerHTML = resultsHTML;
}

function getPerformanceMessage(score) {
    if (score === currentQuestions.length) return "Perfect! You're a genius! 🌟";
    if (score >= currentQuestions.length * 0.8) return "Excellent work! 🌟";
    if (score >= currentQuestions.length * 0.6) return "Good job! 💪";
    if (score >= currentQuestions.length * 0.4) return "Not bad, keep practicing! 💪";
    return "Keep learning, you'll do better next time! 📚";
}

function startTimer() {
    timeLeft = 10;
    timeLeftSpan.textContent = timeLeft;
    timerBarInner.style.animation = 'countdown 10s linear';
    
    // Add countdown animation class
    timeLeftSpan.classList.add('countdown-animation');
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftSpan.textContent = timeLeft;
        
        // Add urgent class when time is running low (less than 4 seconds)
        if (timeLeft <= 3) {
            timeLeftSpan.classList.add('urgent');
            document.getElementById('timer').classList.add('pulse');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeLeftSpan.classList.remove('countdown-animation', 'urgent');
            document.getElementById('timer').classList.remove('pulse');
            checkAnswer(-1, -1);
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerBarInner.style.animation = 'none';
    timeLeftSpan.classList.remove('countdown-animation', 'urgent');
    document.getElementById('timer').classList.remove('pulse');
    // Trigger reflow
    void timerBarInner.offsetWidth;
    timerBarInner.style.animation = null;
} 