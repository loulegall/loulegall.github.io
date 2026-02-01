// Quiz sur Lou Le Gall
// siteData sera chargé depuis content-loader.js
let quizQuestions = [];

document.addEventListener('DOMContentLoaded', async () => {
    // Attendre que siteData soit chargé depuis content-loader.js
    const waitForSiteData = () => {
        return new Promise((resolve) => {
            const checkData = () => {
                if (window.siteData && window.siteData.quiz) {
                    quizQuestions = window.siteData.quiz.questions;
                    resolve();
                } else {
                    setTimeout(checkData, 100);
                }
            };
            checkData();
        });
    };
    
    await waitForSiteData();
    
    // Créer le HTML du quiz directement (pour éviter les problèmes CORS en local)
    const quizHTML = `
        <dialog id="quizDialog" class="quiz-dialog">
            <div class="quiz-container">
                <div class="quiz-header">
                    <h2 id="quizTitle">Quiz sur Lou Le Gall</h2>
                    <button class="close-quiz" id="closeQuiz">&times;</button>
                </div>
                <div class="quiz-content">
                    <div id="quizQuestion" class="quiz-question"></div>
                    <div id="quizAnswers" class="quiz-answers"></div>
                    <div id="quizResult" class="quiz-result"></div>
                    <div class="quiz-progress">
                        <div class="progress-bar">
                            <div id="progressFill" class="progress-fill"></div>
                        </div>
                        <span id="questionCounter">Question 1/5</span>
                    </div>
                </div>
                <div class="quiz-footer">
                    <button id="nextQuestion" class="quiz-nav-button" style="display: none;">Question suivante</button>
                    <button id="restartQuiz" class="quiz-nav-button" style="display: none;">Recommencer</button>
                </div>
            </div>
        </dialog>
    `;
    
    // Insérer le HTML du quiz
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        quizContainer.innerHTML = quizHTML;
        
        // Mettre à jour le titre du quiz et initialiser la logique
        setTimeout(() => {
            const currentSiteData = window.siteData || {};
            const quizTitle = document.getElementById('quizTitle');
            if (quizTitle && currentSiteData?.quiz?.title) {
                quizTitle.textContent = currentSiteData.quiz.title;
            }
            initQuizLogic();
        }, 100);
    }
});

function initQuizLogic() {
    // Utiliser window.siteData pour accéder aux données
    const siteData = window.siteData;
    if (!siteData || !siteData.quiz) {
        console.error('Données du quiz non disponibles');
        return;
    }
    
    // Gestion du Quiz
    const quizDialog = document.getElementById('quizDialog');
    const openQuizBtn = document.getElementById('openQuiz');
    const closeQuizBtn = document.getElementById('closeQuiz');
    const quizQuestion = document.getElementById('quizQuestion');
    const quizAnswers = document.getElementById('quizAnswers');
    const quizResult = document.getElementById('quizResult');
    const nextQuestionBtn = document.getElementById('nextQuestion');
    const restartQuizBtn = document.getElementById('restartQuiz');
    const questionCounter = document.getElementById('questionCounter');
    const progressFill = document.getElementById('progressFill');

    let currentQuestion = 0;
    let score = 0;
    let selectedAnswer = null;

    function initQuiz() {
        currentQuestion = 0;
        score = 0;
        selectedAnswer = null;
        quizResult.textContent = '';
        quizResult.className = 'quiz-result';
        nextQuestionBtn.style.display = 'none';
        restartQuizBtn.style.display = 'none';
        showQuestion();
    }

    function showQuestion() {
        if (currentQuestion >= quizQuestions.length) {
            showFinalResult();
            return;
        }

        const question = quizQuestions[currentQuestion];
        quizQuestion.textContent = question.question;
        quizAnswers.innerHTML = '';
        selectedAnswer = null;

        question.answers.forEach((answer, index) => {
            const answerBtn = document.createElement('button');
            answerBtn.className = 'answer-button';
            answerBtn.textContent = answer;
            answerBtn.addEventListener('click', () => selectAnswer(index, answerBtn));
            quizAnswers.appendChild(answerBtn);
        });

        questionCounter.textContent = `Question ${currentQuestion + 1}/${quizQuestions.length}`;
        progressFill.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
    }

    function selectAnswer(index, button) {
        if (selectedAnswer !== null) return;

        selectedAnswer = index;
        const question = quizQuestions[currentQuestion];
        const allButtons = quizAnswers.querySelectorAll('.answer-button');

        allButtons.forEach((btn, i) => {
            btn.disabled = true;
            if (i === question.correct) {
                btn.classList.add('correct');
            } else if (i === index && i !== question.correct) {
                btn.classList.add('incorrect');
            }
        });

        const currentSiteData = window.siteData || {};
        if (index === question.correct) {
            score++;
            quizResult.textContent = currentSiteData?.quiz?.messages?.correct || '✅ Bonne réponse !';
            quizResult.className = 'quiz-result correct';
        } else {
            const incorrectMsg = currentSiteData?.quiz?.messages?.incorrect || '❌ Mauvaise réponse. La bonne réponse était : {answer}';
            quizResult.textContent = incorrectMsg.replace('{answer}', question.answers[question.correct]);
            quizResult.className = 'quiz-result incorrect';
        }

        if (currentQuestion < quizQuestions.length - 1) {
            nextQuestionBtn.style.display = 'block';
        } else {
            nextQuestionBtn.style.display = 'none';
            setTimeout(() => {
                showFinalResult();
            }, 2000);
        }
    }

    function showFinalResult() {
        const currentSiteData = window.siteData || {};
        const finalTitle = currentSiteData?.quiz?.messages?.final?.title || 'Quiz terminé !';
        quizQuestion.textContent = finalTitle;
        quizAnswers.innerHTML = '';
        const percentage = Math.round((score / quizQuestions.length) * 100);
        
        const messages = currentSiteData?.quiz?.messages?.final || {};
        let message = '';
        if (percentage === 100) {
            message = messages.perfect || '🎉 Parfait ! Vous connaissez très bien Lou !';
        } else if (percentage >= 80) {
            message = messages.excellent || '👏 Excellent ! Vous connaissez bien Lou !';
        } else if (percentage >= 60) {
            message = messages.good || '👍 Bien joué ! Vous connaissez quelques choses sur Lou.';
        } else {
            message = messages.continue || '💪 Continuez à explorer le site pour mieux connaître Lou !';
        }

        quizResult.innerHTML = `
            <div class="final-score">
                <h3>Votre score : ${score}/${quizQuestions.length}</h3>
                <p>${percentage}% de bonnes réponses</p>
                <p class="final-message">${message}</p>
            </div>
        `;
        quizResult.className = 'quiz-result final';
        restartQuizBtn.style.display = 'block';
        progressFill.style.width = '100%';
    }

    if (openQuizBtn && quizDialog) {
        openQuizBtn.addEventListener('click', () => {
            quizDialog.showModal();
            initQuiz();
        });
    }

    if (closeQuizBtn && quizDialog) {
        closeQuizBtn.addEventListener('click', () => {
            quizDialog.close();
        });
    }

    const currentSiteData = window.siteData || {};
    if (nextQuestionBtn) {
        nextQuestionBtn.textContent = currentSiteData?.quiz?.messages?.buttons?.next || 'Question suivante';
        nextQuestionBtn.addEventListener('click', () => {
            currentQuestion++;
            showQuestion();
        });
    }

    if (restartQuizBtn) {
        restartQuizBtn.textContent = currentSiteData?.quiz?.messages?.buttons?.restart || 'Recommencer';
        restartQuizBtn.addEventListener('click', () => {
            initQuiz();
        });
    }
    
    // Mettre à jour le titre du quiz
    const quizTitle = document.getElementById('quizTitle');
    if (quizTitle && currentSiteData?.quiz?.title) {
        quizTitle.textContent = currentSiteData.quiz.title;
    }

    // Fermer le dialog en cliquant à l'extérieur
    if (quizDialog) {
        quizDialog.addEventListener('click', (e) => {
            if (e.target === quizDialog) {
                quizDialog.close();
            }
        });
    }
}
