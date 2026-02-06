// Game State
let gameState = {
    selectedPlayers: {},
    correctCount: 0,
    overallRating: 0,
    currentQuestion: null,
    answeredCorrectly: false,
    pendingTriviaResults: {}, // Store pending results for each position
    cachedQuestions: {} // Store pre-cached questions for each position
};

let currentPositionSlot = null;
const STORAGE_KEY = 'hofDraftState-v1';

// Utility helpers
function isActivationKey(event) {
    return event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar';
}

function persistGameState() {
    try {
        const payload = {
            selectedPlayers: gameState.selectedPlayers,
            correctCount: gameState.correctCount,
            pendingTriviaResults: gameState.pendingTriviaResults,
            cachedQuestions: gameState.cachedQuestions
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
        console.warn('Unable to save current lineup', error);
    }
}

function clearPersistedGame() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.warn('Unable to clear saved lineup', error);
    }
}

function loadPersistedGame() {
    let saved;
    try {
        saved = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
        console.warn('Unable to access saved lineup', error);
        return;
    }

    if (!saved) return;

    try {
        const parsed = JSON.parse(saved);
        if (!parsed) return;

        if (parsed.cachedQuestions) {
            gameState.cachedQuestions = parsed.cachedQuestions;
        }

        if (parsed.pendingTriviaResults) {
            gameState.pendingTriviaResults = parsed.pendingTriviaResults;
        }

        if (parsed.selectedPlayers) {
            Object.entries(parsed.selectedPlayers).forEach(([position, player]) => {
                const slot = document.querySelector(`.player[data-position="${position}"]`);
                if (!slot) return;
                const hydratedPlayer = { ...player };
                renderPlayerSlot(slot, hydratedPlayer);
                gameState.selectedPlayers[position] = hydratedPlayer;
            });
        }

        const restoredCorrectCount = typeof parsed.correctCount === 'number'
            ? parsed.correctCount
            : Object.keys(gameState.selectedPlayers).length;

        gameState.correctCount = restoredCorrectCount;

        updateScore();
        updateOverallRating();
    } catch (error) {
        console.warn('Failed to load saved lineup', error);
        clearPersistedGame();
    }
}

function renderPlayerSlot(slot, player) {
    if (!slot || !player) return;

    slot.classList.remove('empty');
    slot.innerHTML = '';

    const playerCard = document.createElement('div');
    playerCard.className = 'player-card-background';
    playerCard.style.width = '100%';
    playerCard.style.height = '100%';
    playerCard.style.position = 'absolute';
    playerCard.style.top = '0';
    playerCard.style.left = '0';
    playerCard.style.background = getRarityGradient(player.rarity);
    playerCard.style.borderRadius = '5px';
    playerCard.style.border = '2px solid black';
    playerCard.style.display = 'flex';
    playerCard.style.alignItems = 'center';
    playerCard.style.justifyContent = 'center';
    playerCard.style.padding = '5px';
    playerCard.style.boxSizing = 'border-box';

    const teamLogo = document.createElement('img');
    teamLogo.className = 'team-logo';
    teamLogo.src = teamLogos[player.team] || 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Major_League_Baseball_logo.svg';
    teamLogo.alt = `${player.team} logo`;
    teamLogo.style.width = '80%';
    teamLogo.style.height = '80%';
    teamLogo.style.objectFit = 'contain';
    playerCard.appendChild(teamLogo);

    const ratingBadge = document.createElement('div');
    ratingBadge.className = 'player-rating-badge';

    const ratingText = document.createElement('div');
    ratingText.className = 'player-rating-text';
    ratingText.textContent = player.rating;

    const nameLabel = document.createElement('div');
    nameLabel.className = 'player-name';
    nameLabel.textContent = player.name;

    slot.appendChild(playerCard);
    slot.appendChild(ratingBadge);
    slot.appendChild(ratingText);
    slot.appendChild(nameLabel);
}

// Utility function to get random items from array
function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Initialize the game
function init() {
    setupEventListeners();
    resetGame({ preserveStorage: true });
    loadPersistedGame();
}

// Setup Event Listeners
function setupEventListeners() {
    // Add click listeners to all player slots
    const playerSlots = document.querySelectorAll('.player');
    const totalSlots = playerSlots.length;
    playerSlots.forEach((slot, index) => {
        slot.setAttribute('tabindex', '0');
        slot.setAttribute('aria-setsize', totalSlots);
        slot.setAttribute('aria-posinset', index + 1);

        slot.addEventListener('click', function() {
            if (this.classList.contains('empty')) {
                currentPositionSlot = this;
                openPlayerModal(this.getAttribute('data-position'));
            } else {
                // Show trivia result for filled slot
                showTriviaResult(this.getAttribute('data-position'));
            }
        });

        slot.addEventListener('keydown', event => {
            if (isActivationKey(event)) {
                event.preventDefault();
                slot.click();
            }
        });
    });

    // Modal close button - will be attached dynamically
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('playerModal');
        if (event.target === modal) {
            closePlayerModal();
        }
    });

    // Info and Leaders buttons
    const infoBtn = document.querySelector('.info');
    const leadersBtn = document.querySelector('.leaders');
    const resetBtn = document.getElementById('resetBtn');
    
    if (infoBtn) {
        infoBtn.addEventListener('click', showInfo);
    }
    
    if (leadersBtn) {
        leadersBtn.addEventListener('click', showLeaders);
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => resetGame());
    }
}

// Open Player Selection Modal
function openPlayerModal(position) {
    const modal = document.getElementById('playerModal');
    modal.style.display = 'block';

    // Check if there's a pending trivia result for this position
    if (gameState.pendingTriviaResults[position]) {
        // Restore the previous trivia result and show player selection
        gameState.answeredCorrectly = gameState.pendingTriviaResults[position].answeredCorrectly;
        gameState.currentQuestion = gameState.pendingTriviaResults[position].question;
        showPlayerSelection(position);
        return;
    }

    // Use the pre-cached question for this position
    gameState.currentQuestion = gameState.cachedQuestions[position];

    // Show trivia question first
    showTriviaQuestion(position);
}

// Show Trivia Question
function showTriviaQuestion(position) {
    const modalContent = document.querySelector('.modal-content');
    const question = gameState.currentQuestion;
    
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <h2>Trivia Challenge - ${position}</h2>
        <div class="trivia-container">
            <p class="trivia-question"></p>
            <div class="trivia-answers"></div>
        </div>
    `;
    
    // Safely inject the question text
    modalContent.querySelector('.trivia-question').textContent = question.question;
    
    // Safely inject answer buttons
    const answersContainer = modalContent.querySelector('.trivia-answers');
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'trivia-answer';
        button.setAttribute('data-index', index);
        button.textContent = answer;
        answersContainer.appendChild(button);
    });
    
    // Re-attach close button listener
    document.querySelector('.close').addEventListener('click', closePlayerModal);
    
    // Add answer button listeners
    const answerButtons = document.querySelectorAll('.trivia-answer');
    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            checkAnswer(parseInt(this.getAttribute('data-index')), position);
        });

        button.addEventListener('keydown', event => {
            if (isActivationKey(event)) {
                event.preventDefault();
                checkAnswer(parseInt(button.getAttribute('data-index'), 10), position);
            }
        });
    });
}

// Check Trivia Answer
function checkAnswer(selectedIndex, position) {
    const correct = selectedIndex === gameState.currentQuestion.correct;
    gameState.answeredCorrectly = correct;

    // Store the pending result for this position
    gameState.pendingTriviaResults[position] = {
        answeredCorrectly: correct,
        question: gameState.currentQuestion
    };
    persistGameState();

    // Show feedback
    const answerButtons = document.querySelectorAll('.trivia-answer');
    answerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === gameState.currentQuestion.correct) {
            button.classList.add('correct');
        } else if (index === selectedIndex && !correct) {
            button.classList.add('incorrect');
        }
    });

    // Wait a moment then show player selection
    setTimeout(() => {
        showPlayerSelection(position);
    }, 1500);
}

// Close Player Selection Modal
function closePlayerModal() {
    const modal = document.getElementById('playerModal');
    modal.style.display = 'none';
    // Don't clear currentQuestion and answeredCorrectly here anymore
    // since they're now stored in pendingTriviaResults
    currentPositionSlot = null;
}

// Show Player Selection After Trivia
function showPlayerSelection(position) {
    const modalContent = document.querySelector('.modal-content');

    // Check if we already have players stored for this pending result
    let eligiblePlayers;
    if (gameState.pendingTriviaResults[position] && gameState.pendingTriviaResults[position].players) {
        eligiblePlayers = gameState.pendingTriviaResults[position].players;
    } else {
        // Get 3 random players based on answer correctness
        if (gameState.answeredCorrectly) {
            // Correct answer: get 3 random legendary players for this position
            eligiblePlayers = getRandomItems(players2025[position].legendary, 3);
        } else {
            // Wrong answer: get 3 random common players for this position
            eligiblePlayers = getRandomItems(players2025[position].common, 3);
        }

        // Store the players for this pending result
        if (gameState.pendingTriviaResults[position]) {
            gameState.pendingTriviaResults[position].players = eligiblePlayers;
            persistGameState();
        }
    }

    const resultMessage = gameState.answeredCorrectly ?
        '✓ Correct! Choose from elite players:' :
        '✗ Incorrect. Choose from available players:';

    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <h2>Select a Player - ${position}</h2>
        <p class="result-message ${gameState.answeredCorrectly ? 'correct' : 'incorrect'}">${resultMessage}</p>
        <div id="playerList" class="player-list"></div>
    `;

    // Re-attach close button listener
    document.querySelector('.close').addEventListener('click', closePlayerModal);

    // Display the players
    displayPlayerList(eligiblePlayers, position);
}

// Display Player List in Modal
function displayPlayerList(players, position) {
    const playerList = document.getElementById('playerList');
    playerList.innerHTML = '';
    
    players.forEach(player => {
        const playerOption = document.createElement('div');
        playerOption.className = 'player-option';
        playerOption.setAttribute('role', 'button');
        playerOption.setAttribute('tabindex', '0');
        
        const ratingDiv = document.createElement('div');
        ratingDiv.className = 'player-rating-display';
        ratingDiv.textContent = player.rating;
        playerOption.appendChild(ratingDiv);
        
        const nameHeading = document.createElement('h3');
        nameHeading.textContent = player.name;
        playerOption.appendChild(nameHeading);
        
        const positionPara = document.createElement('p');
        positionPara.textContent = `${position} - ${player.team}`;
        playerOption.appendChild(positionPara);
        
        const rarityPara = document.createElement('p');
        rarityPara.className = 'rarity-label';
        rarityPara.textContent = player.rarity.toUpperCase();
        playerOption.appendChild(rarityPara);
        
        playerOption.addEventListener('click', function() {
            selectPlayer(player);
        });

        playerOption.addEventListener('keydown', event => {
            if (isActivationKey(event)) {
                event.preventDefault();
                selectPlayer(player);
            }
        });
        
        playerList.appendChild(playerOption);
    });
}

// Select a Player
function selectPlayer(player) {
    if (!currentPositionSlot) return;

    const position = currentPositionSlot.getAttribute('data-position');
    renderPlayerSlot(currentPositionSlot, player);

    // Update game state
    gameState.selectedPlayers[position] = {
        ...player,
        triviaResult: {
            answeredCorrectly: gameState.answeredCorrectly,
            question: gameState.currentQuestion
        }
    };
    gameState.correctCount++;

    // Clear the pending result for this position
    delete gameState.pendingTriviaResults[position];

    // Update UI
    updateScore();
    updateOverallRating();
    persistGameState();

    // Close modal
    closePlayerModal();
    currentPositionSlot = null;
}

// Show Trivia Result for Selected Player
function showTriviaResult(position) {
    const selectedPlayer = gameState.selectedPlayers[position];
    if (!selectedPlayer || !selectedPlayer.triviaResult) return;

    const modal = document.getElementById('playerModal');
    modal.style.display = 'block';

    const question = selectedPlayer.triviaResult.question;
    const answeredCorrectly = selectedPlayer.triviaResult.answeredCorrectly;

    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <h2>Trivia Result - ${position}</h2>
        <div class="trivia-container">
            <p class="trivia-question"></p>
            <div class="trivia-answers"></div>
            <div class="trivia-result-message ${answeredCorrectly ? 'correct' : 'incorrect'}">
                You answered: ${answeredCorrectly ? '✓ Correct' : '✗ Incorrect'}
            </div>
        </div>
        <div class="selected-player-info">
            <h3>Selected Player: </h3>
            <p>Rating: <span id="playerRating"></span> | Team: <span id="playerTeam"></span></p>
        </div>
    `;
    
    // Safely inject the question text
    modalContent.querySelector('.trivia-question').textContent = question.question;
    
    // Safely inject answer buttons
    const answersContainer = modalContent.querySelector('.trivia-answers');
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'trivia-answer';
        if (index === question.correct) {
            button.classList.add('correct');
        }
        button.disabled = true;
        button.textContent = answer;
        answersContainer.appendChild(button);
    });
    
    // Safely inject player info
    modalContent.querySelector('.selected-player-info h3').textContent = `Selected Player: ${selectedPlayer.name}`;
    modalContent.getElementById('playerRating').textContent = selectedPlayer.rating;
    modalContent.getElementById('playerTeam').textContent = selectedPlayer.team;

    // Re-attach close button listener
    document.querySelector('.close').addEventListener('click', closePlayerModal);
}

// Get Rarity Gradient
function getRarityGradient(rarity) {
    const gradients = {
        legendary: 'linear-gradient(to right bottom, #e6bc35, #fff3d4, #e6bc35)',
        epic: 'linear-gradient(to right bottom, #a335ee, #d7b3ff, #a335ee)',
        rare: 'linear-gradient(to right bottom, #0070dd, #8fc5ff, #0070dd)',
        common: 'linear-gradient(to right bottom, #9d9d9d, #e5e5e5, #9d9d9d)'
    };
    return gradients[rarity] || gradients.common;
}

// Update Score Display
function updateScore() {
    document.getElementById('correctCount').textContent = gameState.correctCount;
}

// Update Overall Rating
function updateOverallRating() {
    const players = Object.values(gameState.selectedPlayers);
    if (players.length === 0) {
        gameState.overallRating = 0;
    } else {
        const totalRating = players.reduce((sum, player) => sum + player.rating, 0);
        gameState.overallRating = Math.round(totalRating / players.length);
    }
    
    document.getElementById('overallRating').textContent = gameState.overallRating;
    
    // Animate circle
    animateCircle();
}

// Animate Overall Rating Circle
function animateCircle() {
    const circle = document.querySelector('.animated-circle');
    circle.style.animation = 'none';
    setTimeout(() => {
        circle.style.animation = 'fillCircle 2s ease-out forwards';
    }, 10);
}

// Show Info
function showInfo() {
    alert('Immaculate Draft - Daily MLB Trivia!\n\nAnswer trivia questions correctly to draft legendary players!\n\n✓ Correct Answer = Choose from 3 legendary players\n✗ Wrong Answer = Choose from 3 common players\n\nBuild your dream team and maximize your overall rating!');
}

// Show Leaders
function showLeaders() {
    alert('Leaderboard\n\nComing soon! Check back to see the top teams and compete with other players.');
}

// Reset Game
function resetGame(options = {}) {
    const preserveStorage = Boolean(options.preserveStorage);

    // Clear all selected players
    gameState.selectedPlayers = {};
    gameState.correctCount = 0;
    gameState.overallRating = 0;
    gameState.currentQuestion = null;
    gameState.answeredCorrectly = false;
    gameState.pendingTriviaResults = {}; // Clear pending results
    currentPositionSlot = null;

    // Pre-cache random questions for each position
    gameState.cachedQuestions = {};
    const positions = ['LF', 'CF', 'RF', '3B', 'SS', '2B', '1B', 'C', 'DH'];
    positions.forEach(position => {
        if (triviaQuestions[position]) {
            const questions = triviaQuestions[position];
            gameState.cachedQuestions[position] = questions[Math.floor(Math.random() * questions.length)];
        }
    });

    // Reset all player slots to empty state
    const playerSlots = document.querySelectorAll('.player');
    playerSlots.forEach(slot => {
        slot.classList.add('empty');
        slot.innerHTML = '<h3 class="empty-text">+</h3>';
    });

    // Update UI
    updateScore();
    updateOverallRating();

    // Close any open modal
    closePlayerModal();

    if (!preserveStorage) {
        clearPersistedGame();
    }
}

// Initialize game when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
