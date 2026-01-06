// Interview questions data organized by type - from startup.jobs
const interviewQuestions = {
    screening: [
        {
            question: "How do you balance product quality with speed when the company needs to move fast?",
            structure: [
                "Discuss prioritization frameworks (e.g., MoSCoW, RICE)",
                "Explain how you maintain design quality through rapid iteration",
                "Share examples of quick wins vs. long-term investments",
                "Mention collaboration strategies with engineering and product teams",
                "Describe how you make trade-offs between perfection and shipping"
            ]
        },
        {
            question: "What's your approach to understanding user needs and pain points?",
            structure: [
                "Describe your research methodology (user interviews, surveys, analytics)",
                "Explain how you synthesize qualitative and quantitative data",
                "Share how you validate assumptions before design",
                "Mention how you involve stakeholders in the discovery process",
                "Discuss tools and techniques you use for user research"
            ]
        },
        {
            question: "How do you prioritize design work when resources are tight and everything feels important?",
            structure: [
                "Reference impact vs. effort frameworks",
                "Explain user/business value considerations",
                "Discuss risk reduction strategies",
                "Share how you make trade-offs and socialize rationale",
                "Mention how you align with product and engineering priorities"
            ]
        },
        {
            question: "What design tools do you use and why?",
            structure: [
                "List primary tools (Figma, Sketch, Adobe XD, etc.)",
                "Explain why you chose these tools for your workflow",
                "Discuss how tools fit into your collaboration process",
                "Mention any custom workflows or plugins you use",
                "Share how you decide between low-fidelity and high-fidelity prototyping"
            ]
        },
        {
            question: "What metrics do you use to evaluate the success of your design work?",
            structure: [
                "Connect design changes to activation, retention, task success",
                "Mention time-on-task, conversion, or support tickets",
                "Explain how you capture baseline and set targets",
                "Share how you track and analyze design impact",
                "Discuss how you communicate results to stakeholders"
            ]
        },
        {
            question: "How do you partner with engineering to balance feasibility, quality, and speed?",
            structure: [
                "Describe rituals (design dev sync, pre-handoff review)",
                "Explain shared definitions of done",
                "Share how you surface constraints and opportunities early",
                "Mention how you align on acceptance criteria and error states",
                "Discuss how you maintain quality while shipping fast"
            ]
        },
        {
            question: "Why are you excited about this role and our startup specifically?",
            structure: [
                "Show research about the company and product",
                "Connect your skills and interests to their needs",
                "Demonstrate understanding of their challenges",
                "Express genuine enthusiasm for the opportunity",
                "Mention specific aspects that align with your career goals"
            ]
        },
        {
            question: "Tell me about a recent flagship project: the problem, constraints, your decisions, and measurable outcomes.",
            structure: [
                "Describe the problem statement and business context",
                "Explain the constraints you faced (time, resources, technical)",
                "Detail your key design decisions and rationale",
                "Share measurable outcomes and impact metrics",
                "Reflect on what worked well and what you'd do differently"
            ]
        },
        {
            question: "How do you balance user needs, business goals, and engineering constraints? Share a specific trade-off and result.",
            structure: [
                "Explain your framework for balancing competing priorities",
                "Share a specific example of a trade-off you made",
                "Describe how you evaluated the trade-off",
                "Explain the result and impact of your decision",
                "Discuss how you communicated the trade-off to stakeholders"
            ]
        },
        {
            question: "Walk me through your end-to-end process from discovery to launch, including how you adapt under tight timelines.",
            structure: [
                "Describe your discovery and research phase",
                "Explain your design and iteration process",
                "Share how you collaborate with cross-functional teams",
                "Detail how you adapt when timelines are compressed",
                "Mention how you ensure quality while moving fast"
            ]
        },
        {
            question: "Describe research that materially changed direction. What assumption was challenged, what did you do, and what shifted?",
            structure: [
                "Explain the initial assumption or hypothesis",
                "Describe the research that challenged it",
                "Detail how you processed and validated the findings",
                "Share how the direction changed as a result",
                "Discuss the impact of the pivot on the final outcome"
            ]
        },
        {
            question: "How do you define success pre- and post-launch? Which metrics did you instrument, and how did they drive iteration?",
            structure: [
                "Explain how you set success criteria before launch",
                "Describe the metrics you instrument and why",
                "Share how you capture baseline measurements",
                "Detail how post-launch metrics drove iteration",
                "Mention how you communicate metrics to stakeholders"
            ]
        },
        {
            question: "Give an example of partnering with PM and engineering to resolve ambiguity. How did you create clarity and momentum?",
            structure: [
                "Describe the ambiguous situation or problem",
                "Explain your approach to creating clarity",
                "Share how you facilitated collaboration between PM and engineering",
                "Detail the process you used to resolve ambiguity",
                "Discuss how you maintained momentum throughout"
            ]
        },
        {
            question: "Tell me about a time you improved a design system. What governance, adoption tactics, and velocity/quality impact followed?",
            structure: [
                "Describe the design system improvement you made",
                "Explain your governance approach and processes",
                "Share adoption tactics you used to drive usage",
                "Detail the impact on development velocity",
                "Discuss how quality improved as a result"
            ]
        },
        {
            question: "How do you approach accessibility and inclusive design in practice? Share a concrete decision and its user impact.",
            structure: [
                "Explain your accessibility and inclusive design process",
                "Share a specific decision you made for accessibility",
                "Describe how you validated the decision",
                "Detail the user impact and outcomes",
                "Mention tools and techniques you use"
            ]
        },
        {
            question: "Critique a product you use often: target user, core job-to-be-done, key flow issues, and a measurable improvement proposal.",
            structure: [
                "Identify the target user and their needs",
                "Explain the core job-to-be-done",
                "Describe key flow issues or pain points",
                "Propose a specific, measurable improvement",
                "Explain how you would validate the improvement"
            ]
        },
        {
            question: "Why this role and company now? Map your strengths to our product surfaces and outline your first 90-day impact focus.",
            structure: [
                "Show deep research about the company and product",
                "Map your specific strengths to their product surfaces",
                "Demonstrate understanding of their challenges and opportunities",
                "Outline a clear 90-day impact plan",
                "Express genuine alignment with their mission and values"
            ]
        }
    ],
    portfolio: [
        {
            question: "Walk me through a flagship portfolio project end-to-end and the specific impact you had.",
            structure: [
                "Start with the problem statement and business context",
                "Explain your research and discovery process",
                "Describe your design process (ideation, wireframes, prototypes)",
                "Share how you collaborated with cross-functional teams",
                "Present measurable outcomes and impact metrics",
                "Discuss what you learned and would do differently"
            ]
        },
        {
            question: "In a 0→1 ambiguous space, how would you define the problem and shape an MVP?",
            structure: [
                "Explain how you align on goals and success metrics",
                "Describe lean discovery methods (interviews, quick prototypes)",
                "Share how you define a narrow scope for MVP",
                "Mention how you validate job-to-be-done and pain points",
                "Discuss how you iterate based on early learnings"
            ]
        },
        {
            question: "Tell me about a time you did scrappy user research on a tight deadline—what did you do and what changed?",
            structure: [
                "Describe practical methods (intercepts, unmoderated tests, concierge tests)",
                "Explain how insights directed design decisions",
                "Share what you learned with limited resources",
                "Mention how you validated assumptions quickly",
                "Discuss the impact of the research on the final design"
            ]
        },
        {
            question: "How do you decide between low-fidelity and high-fidelity prototyping, and what tools do you use?",
            structure: [
                "Explain how question type influences fidelity choice",
                "Describe stakeholder needs and engineering feasibility considerations",
                "Share when you use low-fi (exploring flows, IA) vs high-fi (usability, buy-in)",
                "Mention specific tools for different fidelity levels",
                "Discuss how you balance speed and learning"
            ]
        },
        {
            question: "Describe a time you influenced product strategy, not just UI. What was your role?",
            structure: [
                "Show how you connected user insights to business opportunity",
                "Explain how you steered roadmap decisions with data",
                "Share your role in shaping product direction",
                "Mention how you influenced beyond just execution",
                "Discuss the measurable impact of your strategic input"
            ]
        },
        {
            question: "Share an example of running an experiment or A/B test when your sample size was small. How did you make decisions?",
            structure: [
                "Mention guardrails (sequential testing, non-inferiority)",
                "Explain complementary qualitative signals",
                "Describe bias to reversible decisions",
                "Share how you monitored directional lift",
                "Discuss how you paired quantitative with qualitative data"
            ]
        },
        {
            question: "If you joined tomorrow, how would you bootstrap a lightweight design system without slowing delivery?",
            structure: [
                "Describe starting with tokens and minimal component set",
                "Explain documentation and usage patterns",
                "Share how you build adoption through real projects",
                "Mention how you create leverage while moving fast",
                "Discuss how you balance system building with shipping"
            ]
        },
        {
            question: "How do you ensure accessibility and inclusivity are part of the design from day one?",
            structure: [
                "Explain your accessibility process and standards",
                "Describe how you test for accessibility",
                "Share tools and techniques you use",
                "Mention how you involve users with disabilities",
                "Discuss how you balance accessibility with other constraints"
            ]
        },
        {
            question: "Tell me about a time usability testing contradicted your intuition. What did you do next?",
            structure: [
                "Describe the initial assumption and intuition",
                "Explain what the testing revealed",
                "Share how you processed the contradiction",
                "Mention how you adjusted your approach",
                "Discuss what you learned from the experience"
            ]
        },
        {
            question: "How do you structure documentation and handoff so engineers can build accurately without overloading them?",
            structure: [
                "Explain your handoff process and tools",
                "Describe how you organize design specs",
                "Share how you communicate design intent",
                "Mention how you balance detail with clarity",
                "Discuss how you collaborate during implementation"
            ]
        }
    ],
    behavioral: [
        {
            question: "Describe a situation where you had strong disagreement with a stakeholder. How did you get alignment?",
            structure: [
                "Set the context (project, stakeholder, nature of disagreement)",
                "Explain your approach to understanding their perspective",
                "Describe how you presented data and user research",
                "Share the resolution and how you built consensus",
                "Reflect on what you learned about stakeholder management"
            ]
        },
        {
            question: "You're two weeks from launch and a critical flow is half-baked. How do you proceed?",
            structure: [
                "Explain your assessment of the situation",
                "Describe how you communicate risks and options",
                "Share your prioritization approach",
                "Mention how you collaborate with the team",
                "Discuss how you balance quality with timeline"
            ]
        },
        {
            question: "How do you handle wearing multiple hats—say, doing some UX writing or light product management—when needed?",
            structure: [
                "Share examples of taking on additional responsibilities",
                "Explain how you balance different roles",
                "Describe your learning approach for new skills",
                "Mention how you prioritize when wearing multiple hats",
                "Discuss how this flexibility benefits the team"
            ]
        },
        {
            question: "What are your go-to practices for tight-knit collaboration with PM and engineering in a small team?",
            structure: [
                "Describe your collaboration rituals and processes",
                "Explain how you maintain alignment",
                "Share communication strategies",
                "Mention how you handle conflicts or disagreements",
                "Discuss how you build trust and rapport"
            ]
        },
        {
            question: "What's your approach to design critique—both giving and receiving feedback?",
            structure: [
                "Explain your process for receiving feedback",
                "Describe how you give constructive feedback",
                "Share how you distinguish between subjective and objective feedback",
                "Mention how you advocate for design decisions with data",
                "Discuss how you create a culture of feedback"
            ]
        },
        {
            question: "How do you stay current with design trends, tools, and product thinking, and how does that show up in your work?",
            structure: [
                "Describe your learning process and resources",
                "Explain how you evaluate new trends and tools",
                "Share examples of applying new knowledge",
                "Mention how you share learnings with the team",
                "Discuss how continuous learning impacts your work"
            ]
        },
        {
            question: "Suppose growth data suggests a tactic that feels borderline manipulative. How would you approach the decision?",
            structure: [
                "Explain your ethical framework for design decisions",
                "Describe how you balance business goals with user trust",
                "Share how you discuss concerns with stakeholders",
                "Mention alternative approaches you might propose",
                "Discuss how you navigate ethical dilemmas"
            ]
        },
        {
            question: "How have you contributed to team culture and mentored others in previous roles?",
            structure: [
                "Share specific examples of mentoring or coaching",
                "Describe initiatives you started to improve team culture",
                "Explain how you share knowledge and best practices",
                "Mention feedback you've received from mentees or peers",
                "Discuss your philosophy on team growth and development"
            ]
        },
        {
            question: "When designing for a global audience with limited resources, what do you prioritize?",
            structure: [
                "Explain your approach to internationalization",
                "Describe how you prioritize features for global users",
                "Share how you handle cultural differences",
                "Mention how you test with diverse user groups",
                "Discuss trade-offs you make with limited resources"
            ]
        }
    ]
};

// Application state
let currentInterviewType = 'screening';
let currentCardIndex = 0;
let timerInterval = null;
let timerSeconds = 0;
let isTimerRunning = false;

// View elements (will be set in init)
let homeView, questionsView, interviewView;

// Initialize the application
function init() {
    // Get view elements
    homeView = document.getElementById('homeView');
    questionsView = document.getElementById('questionsView');
    interviewView = document.getElementById('interviewView');
    
    showHomeView();
    setupEventListeners();
}

// Show home view
function showHomeView() {
    if (homeView) homeView.style.display = 'block';
    if (questionsView) questionsView.style.display = 'none';
    if (interviewView) interviewView.style.display = 'none';
    updateHeaderBackButton('home');
}

// Show questions view
function showQuestionsView(type) {
    currentInterviewType = type;
    if (homeView) homeView.style.display = 'none';
    if (questionsView) questionsView.style.display = 'block';
    if (interviewView) interviewView.style.display = 'none';
    loadInterviewType(type);
    updateHeaderBackButton('questions');
}

// Show interview view
function showInterviewView() {
    if (homeView) homeView.style.display = 'none';
    if (questionsView) questionsView.style.display = 'none';
    if (interviewView) interviewView.style.display = 'block';
    startInterview();
    updateHeaderBackButton('interview');
}

// Update header back button visibility and text
function updateHeaderBackButton(view) {
    const headerBackBtn = document.getElementById('headerBackBtn');
    const headerTitle = document.getElementById('headerTitle');
    const headerInterviewName = document.getElementById('headerInterviewName');
    const headerInterviewTitle = document.getElementById('headerInterviewTitle');
    const headerActions = document.getElementById('headerActions');
    
    if (!headerBackBtn || !headerTitle || !headerInterviewName) return;
    
    if (view === 'home') {
        headerBackBtn.style.display = 'none';
        headerTitle.style.display = 'block';
        headerInterviewName.style.display = 'none';
        if (headerActions) headerActions.style.display = 'none';
    } else if (view === 'questions') {
        headerBackBtn.style.display = 'block';
        headerBackBtn.textContent = 'Back';
        headerBackBtn.onclick = () => showHomeView();
        headerTitle.style.display = 'none';
        headerInterviewName.style.display = 'block';
        if (headerInterviewTitle) {
            headerInterviewTitle.textContent = getInterviewTypeName(currentInterviewType);
        }
        if (headerActions) headerActions.style.display = 'block';
        createStartInterviewButton();
    } else if (view === 'interview') {
        headerBackBtn.style.display = 'block';
        headerBackBtn.textContent = 'Back';
        headerBackBtn.onclick = () => showQuestionsView(currentInterviewType);
        headerTitle.style.display = 'none';
        headerInterviewName.style.display = 'block';
        if (headerInterviewTitle) {
            headerInterviewTitle.textContent = getInterviewTypeName(currentInterviewType);
        }
        if (headerActions) headerActions.style.display = 'none';
    }
}

// Create Start Interviewing button in header
function createStartInterviewButton() {
    const headerActions = document.getElementById('headerActions');
    if (!headerActions) return;
    
    // Clear existing button if any
    headerActions.innerHTML = '';
    
    const startBtn = document.createElement('button');
    startBtn.id = 'startInterview';
    startBtn.className = 'btn btn-primary btn-large';
    startBtn.textContent = 'Start Interviewing';
    startBtn.addEventListener('click', () => {
        showInterviewView();
    });
    headerActions.appendChild(startBtn);
}

// Load questions for selected interview type
function loadInterviewType(type) {
    currentInterviewType = type;
    currentCardIndex = 0;
    showQuestionsList();
}


// Show questions list view
function showQuestionsList() {
    const questionsListContainer = document.getElementById('questionsListContainer');
    const flashcardContainer = document.getElementById('flashcardContainer');
    const navigation = document.getElementById('navigation');
    const questions = interviewQuestions[currentInterviewType];
    
    // Hide flashcard view
    flashcardContainer.style.display = 'none';
    navigation.style.display = 'none';
    
    // Show questions list
    questionsListContainer.innerHTML = '';
    
    if (questions.length === 0) {
        questionsListContainer.innerHTML = '<p>No questions available for this interview type.</p>';
        return;
    }
    
    // Create questions list
    const questionsList = document.createElement('div');
    questionsList.className = 'questions-list';
    
    questions.forEach((q, index) => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        questionItem.innerHTML = `
            <div class="question-number">${index + 1}</div>
            <div class="question-content">
                <div class="question-text-small">${q.question}</div>
            </div>
        `;
        questionsList.appendChild(questionItem);
    });
    
    questionsListContainer.appendChild(questionsList);
    
    questionsListContainer.style.display = 'block';
}

// Get interview type display name
function getInterviewTypeName(type) {
    const names = {
        screening: 'Initial Screening',
        portfolio: 'Portfolio & Challenge Review',
        behavioral: 'Behavioral Interview'
    };
    return names[type] || type;
}

// Start interview - switch to flashcard view
function startInterview() {
    const flashcardContainer = document.getElementById('flashcardContainer');
    const navigation = document.getElementById('navigation');
    
    // Show flashcard view
    renderFlashcards();
    flashcardContainer.style.display = 'flex';
    navigation.style.display = 'flex';
}

// Render flashcards for current interview type
function renderFlashcards() {
    const container = document.getElementById('flashcardContainer');
    const questions = interviewQuestions[currentInterviewType];
    
    container.innerHTML = '';
    
    if (questions.length === 0) {
        container.innerHTML = '<p>No questions available for this interview type.</p>';
        return;
    }
    
    questions.forEach((q, index) => {
        const flashcard = createFlashcard(q, index);
        container.appendChild(flashcard);
    });
    
    // Show first card
    showCard(0);
    updateCardCounter();
}

// Create a flashcard element
function createFlashcard(questionData, index) {
    const flashcard = document.createElement('div');
    flashcard.className = 'flashcard';
    flashcard.dataset.index = index;
    flashcard.style.display = index === 0 ? 'block' : 'none';
    
    flashcard.innerHTML = `
        <div class="flashcard-inner">
            <div class="flashcard-front">
                <div class="question-type">Question</div>
                <div class="question-text">${questionData.question}</div>
                <div class="flip-hint">Click to view answer structure</div>
            </div>
            <div class="flashcard-back">
                <div class="question-type">Answer Structure</div>
                <div class="hint-label">What to look for:</div>
                <div class="answer-structure">
                    <ul>
                        ${questionData.structure.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="flip-hint">Click to view question</div>
            </div>
        </div>
    `;
    
    // Add flip functionality
    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });
    
    return flashcard;
}

// Show specific card
function showCard(index) {
    const flashcards = document.querySelectorAll('.flashcard');
    const questions = interviewQuestions[currentInterviewType];
    
    if (index < 0 || index >= questions.length) return;
    
    flashcards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
        // Reset flip state when switching cards
        if (i === index) {
            card.classList.remove('flipped');
        }
    });
    
    currentCardIndex = index;
    updateCardCounter();
    updateNavigationButtons();
}

// Update card counter
function updateCardCounter() {
    const questions = interviewQuestions[currentInterviewType];
    document.getElementById('currentCard').textContent = currentCardIndex + 1;
    document.getElementById('totalCards').textContent = questions.length;
}

// Update navigation buttons
function updateNavigationButtons() {
    const questions = interviewQuestions[currentInterviewType];
    document.getElementById('prevCard').disabled = currentCardIndex === 0;
    document.getElementById('nextCard').disabled = currentCardIndex === questions.length - 1;
}

// Timer functions
function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    if (isTimerRunning) {
        isTimerRunning = false;
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    pauseTimer();
    timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    
    const formatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timer').textContent = formatted;
}

// Setup event listeners
function setupEventListeners() {
    // Step cards on home view
    document.querySelectorAll('.step-card').forEach(card => {
        card.addEventListener('click', () => {
            const type = card.dataset.type;
            showQuestionsView(type);
        });
    });
    
    // Header back button is handled in updateHeaderBackButton function
    
    // Timer buttons
    document.getElementById('startTimer').addEventListener('click', startTimer);
    document.getElementById('pauseTimer').addEventListener('click', pauseTimer);
    document.getElementById('resetTimer').addEventListener('click', resetTimer);
    
    // Navigation buttons
    document.getElementById('prevCard').addEventListener('click', () => {
        showCard(currentCardIndex - 1);
    });
    
    document.getElementById('nextCard').addEventListener('click', () => {
        showCard(currentCardIndex + 1);
    });
}


// Initialize on page load
document.addEventListener('DOMContentLoaded', init);

