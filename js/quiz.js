/* ================================================
   LinkedIn AEO Strategy Generator - Quiz Logic
   ================================================ */

// Global state management
const quizState = {
    currentStep: 0,
    answers: {
        niche: '',
        networkSize: '',
        engagementRate: 0,
        goal: [], // Changed to array for multiple selection
        challenge: [], // Changed to array for multiple selection
        postTopic: ''
    },
    userData: {
        email: '',
        name: ''
    }
};

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load saved state from localStorage
    loadSavedState();
    
    // Show welcome screen
    showScreen('welcomeScreen');
    updateProgressBar(0);
});

// Start quiz
function startQuiz() {
    goToStep(1);
}

// Navigate to specific step
function goToStep(step) {
    quizState.currentStep = step;
    
    const screens = {
        0: 'welcomeScreen',
        1: 'question1',
        2: 'question2',
        3: 'question3',
        4: 'question4',
        5: 'question5'
    };
    
    showScreen(screens[step]);
    updateProgressBar(step);
    saveState();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show specific screen
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// Update progress bar
function updateProgressBar(step) {
    const progress = (step / 5) * 100;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
}

// Select option (for card-based questions)
function selectOption(questionType, value, element) {
    // Save answer
    quizState.answers[questionType] = value;
    
    // Update UI - remove selected class from all options in this question
    const parentContainer = element.parentElement;
    parentContainer.querySelectorAll('.option-card, .option-card-horizontal').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    element.classList.add('selected');
    
    // Auto-advance for certain questions
    setTimeout(() => {
        if (questionType === 'niche') {
            goToStep(2);
        } else if (questionType === 'goal') {
            goToStep(4);
        } else if (questionType === 'challenge') {
            goToStep(5);
        }
    }, 300);
    
    saveState();
}

// Select multiple options (for questions 3 and 4)
function selectMultipleOption(questionType, value, element, maxSelections) {
    // Initialize array if not exists
    if (!Array.isArray(quizState.answers[questionType])) {
        quizState.answers[questionType] = [];
    }
    
    const currentSelections = quizState.answers[questionType];
    const index = currentSelections.indexOf(value);
    
    if (index > -1) {
        // Deselect if already selected
        currentSelections.splice(index, 1);
        element.classList.remove('multiple-selected');
    } else {
        // Check if max selections reached
        if (currentSelections.length >= maxSelections) {
            alert(`You can select up to ${maxSelections} options only.`);
            return;
        }
        // Add selection
        currentSelections.push(value);
        element.classList.add('multiple-selected');
    }
    
    // Update counter
    updateSelectionCounter(questionType, currentSelections.length, maxSelections);
    
    saveState();
}

// Update selection counter
function updateSelectionCounter(questionType, count, max) {
    const counterId = questionType + 'Count';
    const counterElement = document.getElementById(counterId);
    if (counterElement) {
        counterElement.textContent = count;
        
        // Change color based on selections
        const counterContainer = counterElement.parentElement;
        if (count === 0) {
            counterContainer.style.color = 'var(--text-secondary)';
        } else if (count >= max) {
            counterContainer.style.color = 'var(--success-green)';
        } else {
            counterContainer.style.color = 'var(--linkedin-blue)';
        }
    }
}

// Validate multiple selections and proceed
function validateMultipleAndNext(currentQuestion, questionType, minSelections) {
    const selections = quizState.answers[questionType];
    
    if (!Array.isArray(selections) || selections.length < minSelections) {
        alert(`Please select at least ${minSelections} option(s).`);
        return;
    }
    
    saveState();
    goToStep(currentQuestion + 1);
}

// Validate and proceed to next step (for question 2)
function validateAndNext(currentQuestion) {
    if (currentQuestion === 2) {
        const engagementRate = document.getElementById('engagementRate').value;
        
        if (!quizState.answers.networkSize) {
            alert('Please select your network size first.');
            return;
        }
        
        if (!engagementRate || engagementRate < 0 || engagementRate > 100) {
            alert('Please enter a valid engagement rate between 0 and 100.');
            return;
        }
        
        quizState.answers.engagementRate = parseFloat(engagementRate);
        saveState();
        goToStep(3);
    }
}

// Go to email capture screen
function goToEmailCapture() {
    const postTopic = document.getElementById('postTopic').value.trim();
    
    if (!postTopic || postTopic.length < 10) {
        alert('Please provide more details about your post topic (at least 10 characters).');
        return;
    }
    
    quizState.answers.postTopic = postTopic;
    saveState();
    
    showScreen('emailScreen');
    updateProgressBar(5);
}

// Submit email form
function submitEmail(event) {
    event.preventDefault();
    
    const email = document.getElementById('userEmail').value.trim();
    const name = document.getElementById('userName').value.trim();
    const consent = document.getElementById('consent').checked;
    
    if (!email || !name) {
        alert('Please fill in all required fields.');
        return;
    }
    
    if (!consent) {
        alert('Please agree to receive your personalized strategy.');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Save user data
    quizState.userData.email = email;
    quizState.userData.name = name;
    
    // Show loading state
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<span class="loading"></span> Generating Your Strategy...';
    submitButton.disabled = true;
    
    // Save to localStorage (in real app, send to backend)
    saveUserData();
    
    // Generate results after short delay
    setTimeout(() => {
        generateResults();
        showScreen('resultsScreen');
        updateProgressBar(5);
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 2000);
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('quizState', JSON.stringify(quizState));
}

// Load saved state from localStorage
function loadSavedState() {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            Object.assign(quizState, parsed);
            
            // Restore UI state for saved answers
            restoreUIState();
        } catch (e) {
            console.error('Error loading saved state:', e);
        }
    }
}

// Restore UI state based on saved answers
function restoreUIState() {
    // Restore engagement rate input
    const engagementInput = document.getElementById('engagementRate');
    if (engagementInput && quizState.answers.engagementRate) {
        engagementInput.value = quizState.answers.engagementRate;
    }
    
    // Restore post topic textarea
    const postTopicInput = document.getElementById('postTopic');
    if (postTopicInput && quizState.answers.postTopic) {
        postTopicInput.value = quizState.answers.postTopic;
    }
    
    // Restore user data
    const emailInput = document.getElementById('userEmail');
    const nameInput = document.getElementById('userName');
    if (emailInput && quizState.userData.email) {
        emailInput.value = quizState.userData.email;
    }
    if (nameInput && quizState.userData.name) {
        nameInput.value = quizState.userData.name;
    }
}

// Save user data (in real app, send to backend API)
function saveUserData() {
    const userData = {
        ...quizState.userData,
        answers: quizState.answers,
        timestamp: new Date().toISOString(),
        segmentation: {
            niche: quizState.answers.niche,
            goal: quizState.answers.goal,
            challenge: quizState.answers.challenge,
            networkSize: quizState.answers.networkSize,
            engagementLevel: quizState.answers.engagementRate < 2 ? 'low' : 
                            quizState.answers.engagementRate < 4 ? 'medium' : 'high'
        }
    };
    
    // Save to localStorage for demo
    localStorage.setItem('userData', JSON.stringify(userData));
    
    console.log('User data saved:', userData);
    
    // In production, send to backend:
    // fetch('/api/save-user', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(userData)
    // });
}

// Download results as PDF (using print)
function downloadResults() {
    // Trigger browser print dialog which allows saving as PDF
    window.print();
}

// Share on LinkedIn
function shareOnLinkedIn() {
    const text = encodeURIComponent('I just got my personalized LinkedIn AEO Strategy! 🚀 Get yours too and optimize your content for maximum engagement.');
    const url = encodeURIComponent(window.location.href);
    
    window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`,
        '_blank',
        'width=600,height=600'
    );
}

// Restart quiz
function restartQuiz() {
    if (confirm('Are you sure you want to start a new assessment? Your current results will be cleared.')) {
        // Clear state
        quizState.currentStep = 0;
        quizState.answers = {
            niche: '',
            networkSize: '',
            engagementRate: 0,
            goal: [],
            challenge: [],
            postTopic: ''
        };
        
        // Clear localStorage
        localStorage.removeItem('quizState');
        
        // Reset UI
        document.querySelectorAll('.option-card, .option-card-horizontal').forEach(card => {
            card.classList.remove('selected');
        });
        
        document.getElementById('engagementRate').value = '';
        document.getElementById('postTopic').value = '';
        
        // Go to welcome screen
        showScreen('welcomeScreen');
        updateProgressBar(0);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Print results
function printResults() {
    window.print();
}
