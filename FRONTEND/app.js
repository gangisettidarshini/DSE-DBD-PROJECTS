/**
 * CAPACITY CONNECT - Digital Capacity Building & Learning Portal
 * Interactive Frontend Engine (Vanilla JavaScript)
 * Supports Seamless Dual-Role Switching, Real-Time Skill Exchange & Chat,
 * Instant AI Assessment Evaluation, Interactive Calendar, & Admin Analytics.
 */

// Application State
const state = {
  currentUser: {
    id: 4,
    fullName: "Marcus Chen",
    email: "marcus.chen@student.edu",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    primaryRole: "TRAINEE",
    isTrainee: true,
    isTrainer: true, // Multi-role support
    isAdmin: false,
    activeRole: "TRAINEE",
    careerScore: 78,
    streak: 12,
    xp: 1850,
    level: 4
  },
  currentView: "landing", // 'landing', 'onboarding', 'trainee', 'trainer', 'admin'
  currentTab: "overview",
  chatActiveRequestId: 1,
  currentAssessment: null,
  assessmentTimer: null,
  assessmentTimeLeft: 600,
  
  // Data Stores
  trainers: [
    {
      id: 2,
      fullName: "Dr. Aris Vance",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      expertise: "Enterprise Java & Spring Boot",
      qualifications: "Ph.D. Computer Systems, Oracle Master",
      experience: "10+ Years",
      rating: 4.9,
      skills: ["Java Spring Boot", "Microservices", "MySQL", "Kafka"],
      wantsToLearn: "Latin / Salsa Dancing, Wellness",
      bio: "Senior backend architect specializing in high-throughput enterprise distributed applications."
    },
    {
      id: 3,
      fullName: "Elena Rostova",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      expertise: "Applied AI & LLM Systems",
      qualifications: "Ph.D. Machine Learning, MIT Fellow",
      experience: "8 Years",
      rating: 4.88,
      skills: ["Deep Learning", "PyTorch", "RAG Pipelines", "AWS"],
      wantsToLearn: "Executive Public Speaking, Product Management",
      bio: "Lead AI research scientist focusing on Retrieval-Augmented Generation and enterprise fine-tuning."
    },
    {
      id: 1,
      fullName: "Admin Gayatri Rao",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      expertise: "Enterprise Architecture & Governance",
      qualifications: "Ph.D., TOGAF Certified",
      experience: "14 Years",
      rating: 4.95,
      skills: ["System Architecture", "Kubernetes", "Cloud Strategy"],
      wantsToLearn: "Creative Writing, UI Prototyping",
      bio: "Enterprise architect and organization chief learning officer."
    }
  ],

  exchangeRequests: [
    {
      id: 1,
      traineeId: 4,
      traineeName: "Marcus Chen",
      trainerId: 2,
      trainerName: "Dr. Aris Vance",
      skillWanted: "Java Spring Boot & JPA",
      skillOffered: "Salsa Dance & Choreography",
      message: "Hi Dr. Vance, I would love to learn advanced Java Spring Boot REST APIs from you! In exchange, I am a certified Latin Dance trainer and can teach you Salsa.",
      status: "ACCEPTED",
      date: "Aug 28, 2026"
    }
  ],

  chatMessages: [
    {
      requestId: 1,
      senderId: 4,
      senderName: "Marcus Chen",
      text: "Hello Dr. Vance! Excited for our skill exchange session this Thursday.",
      time: "2:15 PM"
    },
    {
      requestId: 1,
      senderId: 2,
      senderName: "Dr. Aris Vance",
      text: "Welcome Marcus! Have you reviewed the Spring Boot REST API starter repository?",
      time: "2:30 PM"
    },
    {
      requestId: 1,
      senderId: 4,
      senderName: "Marcus Chen",
      text: "Yes! I have tested the endpoints in Postman. Ready for our live session.",
      time: "2:35 PM"
    }
  ],

  courses: [
    {
      id: 1,
      title: "Enterprise Java & Spring Boot Masterclass",
      category: "Programming",
      duration: "16 Hours",
      lessons: 10,
      completedLessons: 7,
      progress: 70,
      thumb: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
      trainer: "Dr. Aris Vance",
      enrolled: true
    },
    {
      id: 2,
      title: "Production Machine Learning & LLM Pipelines",
      category: "AI/ML",
      duration: "20 Hours",
      lessons: 12,
      completedLessons: 3,
      progress: 25,
      thumb: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500",
      trainer: "Elena Rostova",
      enrolled: true
    },
    {
      id: 3,
      title: "Cloud Infrastructure & Kubernetes Orchestration",
      category: "DevOps",
      duration: "14 Hours",
      lessons: 8,
      completedLessons: 8,
      progress: 100,
      thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
      trainer: "Admin Gayatri Rao",
      enrolled: true
    },
    {
      id: 4,
      title: "Modern Data Architecture & SQL Optimization",
      category: "Data Science",
      duration: "12 Hours",
      lessons: 6,
      completedLessons: 0,
      progress: 0,
      thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      trainer: "Dr. Aris Vance",
      enrolled: false
    }
  ],

  assessments: [
    {
      id: 1,
      title: "Java Spring Boot & JPA Certification Assessment",
      category: "Programming",
      status: "Upcoming",
      duration: 20,
      totalMarks: 100,
      passingMarks: 70,
      questions: [
        {
          id: 101,
          question: "Which annotation in Spring Boot is used to mark a class as a RESTful web service controller?",
          options: ["@Controller", "@RestController", "@Service", "@Component"],
          correct: 1,
          explanation: "@RestController combines @Controller and @ResponseBody."
        },
        {
          id: 102,
          question: "In Spring Data JPA, which interface provides built-in CRUD operations and pagination?",
          options: ["CrudRepository", "JpaRepository", "PagingAndSortingRepository", "Repository"],
          correct: 1,
          explanation: "JpaRepository extends PagingAndSortingRepository and CrudRepository."
        },
        {
          id: 103,
          question: "What is the default transactional propagation behavior in Spring (@Transactional)?",
          options: ["PROPAGATION_REQUIRES_NEW", "PROPAGATION_REQUIRED", "PROPAGATION_SUPPORTS", "PROPAGATION_NEVER"],
          correct: 1,
          explanation: "PROPAGATION_REQUIRED is the default propagation behavior."
        },
        {
          id: 104,
          question: "In MySQL InnoDB engine, what data structure is primarily used for clustered primary keys?",
          options: ["Hash Table", "B+ Tree", "LSM Tree", "Red-Black Tree"],
          correct: 1,
          explanation: "InnoDB uses clustered B+ Trees for primary key indexing."
        }
      ]
    },
    {
      id: 2,
      title: "AI Neural Networks & Optimization Quiz",
      category: "AI/ML",
      status: "Upcoming",
      duration: 25,
      totalMarks: 100,
      passingMarks: 70,
      questions: [
        {
          id: 201,
          question: "Which mechanism in Transformer models allows processing sequence tokens in parallel?",
          options: ["Recurrent hidden state", "Multi-Head Self-Attention", "Gradient Clipping", "Max Pooling"],
          correct: 1,
          explanation: "Multi-Head Self-Attention removes recurrent dependencies."
        },
        {
          id: 202,
          question: "What does RAG stand for in modern AI architectures?",
          options: ["Random Augmented Gradient", "Retrieval-Augmented Generation", "Resilient Array Graph", "Recurrent Attention Gate"],
          correct: 1,
          explanation: "Retrieval-Augmented Generation integrates external knowledge bases."
        }
      ]
    },
    {
      id: 3,
      title: "Cloud Architecture & Docker Competency Exam",
      category: "DevOps",
      status: "Completed",
      score: 90,
      totalMarks: 100,
      submittedDate: "Aug 15, 2026",
      aiSummary: "Mastery Level: Exceptional understanding of Docker container networking and Kubernetes Pod lifecycle."
    }
  ],

  certificates: [
    {
      id: 1,
      code: "CC-CERT-2026-0891",
      title: "Cloud Infrastructure & Kubernetes Certified Architect",
      issueDate: "August 15, 2026",
      grade: "Distinction",
      issuer: "CAPACITY CONNECT Enterprise Academy"
    }
  ],

  knowledgeHub: [
    {
      id: 1,
      title: "Spring Boot 3.x Production Blueprint & Checklist",
      category: "Programming",
      fileName: "spring_boot_3_blueprint.pdf",
      size: "3.8 MB",
      author: "Dr. Aris Vance",
      downloads: 128
    },
    {
      id: 2,
      title: "Transformers, RAG & Vector Embeddings Architecture Guide",
      category: "AI/ML",
      fileName: "llm_rag_architecture_guide.pdf",
      size: "6.2 MB",
      author: "Elena Rostova",
      downloads: 245
    },
    {
      id: 3,
      title: "MySQL 8.0 Query Optimization & Indexing Playbook",
      category: "Data Science",
      fileName: "mysql_query_optimization.pdf",
      size: "2.4 MB",
      author: "Admin Gayatri Rao",
      downloads: 94
    },
    {
      id: 4,
      title: "Agile Capacity Building & Knowledge Exchange Framework",
      category: "Management",
      fileName: "capacity_exchange_handbook.pdf",
      size: "5.1 MB",
      author: "Admin Gayatri Rao",
      downloads: 180
    }
  ],

  calendarEvents: [
    { date: "2026-09-02", time: "2:00 PM - 3:30 PM", title: "Spring Boot REST & JPA Deep Dive", trainer: "Dr. Aris Vance", type: "1-on-1 Session" },
    { date: "2026-09-04", time: "4:00 PM - 5:00 PM", title: "LLM Prompt Engineering & Embeddings", trainer: "Elena Rostova", type: "Mentoring" },
    { date: "2026-09-08", time: "10:00 AM - 12:00 PM", title: "Zero Trust Cloud Workshop", trainer: "Admin Gayatri Rao", type: "Workshop" }
  ]
};

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderNavigation();
  showView("landing");
  setupModalListeners();
});

// Navigation Rendering
function renderNavigation() {
  const navContainer = document.getElementById("navbar-container");
  if (!navContainer) return;

  const isAuth = state.currentView !== "landing" && state.currentView !== "onboarding";

  navContainer.innerHTML = `
    <nav class="navbar">
      <div class="logo-container" onclick="handleLogoClick()">
        <div class="logo-icon">C</div>
        <div class="logo-text">
          <span class="cap">CAPACITY</span> <span class="con">CONNECT</span>
        </div>
      </div>

      ${isAuth ? `
        <div class="role-switcher-pill">
          <button class="role-tab-btn ${state.currentUser.activeRole === 'TRAINEE' ? 'active' : ''}" onclick="switchActiveRole('TRAINEE')">
            🎓 Trainee View
          </button>
          <button class="role-tab-btn ${state.currentUser.activeRole === 'TRAINER' ? 'active' : ''}" onclick="switchActiveRole('TRAINER')">
            👨‍🏫 Trainer View
          </button>
          ${state.currentUser.isAdmin ? `
            <button class="role-tab-btn ${state.currentUser.activeRole === 'ADMIN' ? 'active' : ''}" onclick="switchActiveRole('ADMIN')">
              🛡️ Admin View
            </button>
          ` : ''}
        </div>
      ` : `
        <ul class="nav-links">
          <li class="nav-item" onclick="scrollToSection('hero')">Platform</li>
          <li class="nav-item" onclick="scrollToSection('features')">Features</li>
          <li class="nav-item" onclick="scrollToSection('skill-exchange')">Skill Exchange</li>
          <li class="nav-item" onclick="scrollToSection('knowledge')">Knowledge Hub</li>
        </ul>
      `}

      <div class="nav-actions">
        ${isAuth ? `
          <div class="user-profile-badge" onclick="openProfileModal()">
            <img src="${state.currentUser.avatarUrl}" alt="${state.currentUser.fullName}" class="user-avatar">
            <span class="user-name-small">${state.currentUser.fullName}</span>
            <span style="font-size:0.75rem; color:var(--sage-deep); font-weight:700;">▾</span>
          </div>
        ` : `
          <button class="btn-secondary" onclick="openAuthModal('signin')">Sign In</button>
          <button class="btn-primary" onclick="openAuthModal('signup')">Create Your Account</button>
        `}
      </div>
    </nav>
  `;
}

function handleLogoClick() {
  if (state.currentView === "landing" || state.currentView === "onboarding") {
    showView("landing");
  } else {
    // Return to current dashboard
    showView(state.currentUser.activeRole.toLowerCase());
  }
}

// View Controller
function showView(viewName) {
  state.currentView = viewName;
  renderNavigation();

  const appContainer = document.getElementById("app-container");
  if (!appContainer) return;

  if (viewName === "landing") {
    renderLandingView(appContainer);
  } else if (viewName === "onboarding") {
    renderOnboardingView(appContainer);
  } else if (viewName === "trainee") {
    state.currentUser.activeRole = "TRAINEE";
    renderNavigation();
    renderTraineeDashboard(appContainer);
  } else if (viewName === "trainer") {
    state.currentUser.activeRole = "TRAINER";
    renderNavigation();
    renderTrainerDashboard(appContainer);
  } else if (viewName === "admin") {
    state.currentUser.activeRole = "ADMIN";
    renderNavigation();
    renderAdminDashboard(appContainer);
  }
}

// Role Switching Without Logging Out
function switchActiveRole(newRole) {
  state.currentUser.activeRole = newRole;
  showToast(`Switched to ${newRole} Dashboard`, "normal");
  if (newRole === "TRAINEE") {
    showView("trainee");
  } else if (newRole === "TRAINER") {
    showView("trainer");
  } else if (newRole === "ADMIN") {
    showView("admin");
  }
}

// ============================================================================
// 1. LANDING & HERO VIEW
// ============================================================================
function renderLandingView(container) {
  container.innerHTML = `
    <div class="hero-section" id="hero">
      <div class="hero-glow-1"></div>
      <div class="hero-glow-2"></div>

      <div class="hero-badge">
        ✦ Enterprise Capacity Building & Mentorship
      </div>

      <h1 class="hero-title">
        CAPACITY CONNECT<br>
        <span class="highlight-ai">“AI-Powered</span> Organizational Capacity Building & Learning Platform”
      </h1>

      <p class="hero-subtitle">
        Bridging organizational skill gaps with reciprocal peer mentorship, instant AI-evaluated assessments, verified certifications, and interactive real-time learning exchanges.
      </p>

      <div class="hero-cta-group">
        <button class="btn-primary" onclick="openAuthModal('signup')">
          Create Your Account ➔
        </button>
        <button class="btn-secondary" onclick="openAuthModal('signin')">
          Explore Platform
        </button>
      </div>

      <div class="hero-stats-strip">
        <div class="hero-stat-card">
          <div class="stat-num">1,248+</div>
          <div class="stat-label">Active Users</div>
        </div>
        <div class="hero-stat-card">
          <div class="stat-num">98.4%</div>
          <div class="stat-label">Assessment Accuracy</div>
        </div>
        <div class="hero-stat-card">
          <div class="stat-num">350+</div>
          <div class="stat-label">Verified Trainers</div>
        </div>
        <div class="hero-stat-card">
          <div class="stat-num">620+</div>
          <div class="stat-label">Certificates Issued</div>
        </div>
      </div>
    </div>

    <!-- Feature Highlights -->
    <div style="max-width:1100px; margin:2rem auto 4rem auto; padding:0 2rem;" id="features">
      <div class="two-column-equal">
        <div class="section-card">
          <div style="width:44px; height:44px; background:var(--sage-pale); border-radius:10px; display:flex; align-items:center; justify-content:center; color:var(--forest-green); font-size:1.3rem; margin-bottom:1rem;">⚡</div>
          <h3 style="margin-bottom:0.5rem;">Reciprocal Skill Exchange</h3>
          <p>Trainees offer skills they excel at (e.g. Dance, Design) in exchange for high-demand technical knowledge (Java Spring Boot, AI, Cloud), fostering true collaborative capacity building.</p>
        </div>

        <div class="section-card">
          <div style="width:44px; height:44px; background:var(--sage-pale); border-radius:10px; display:flex; align-items:center; justify-content:center; color:var(--forest-green); font-size:1.3rem; margin-bottom:1rem;">🧠</div>
          <h3 style="margin-bottom:0.5rem;">Instant AI Assessment Evaluation</h3>
          <p>Trainers upload assessments with hidden answer keys. Upon submission, our AI instantly grades the exam, calculates percentages, and delivers customized growth insights.</p>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// 2. ONBOARDING & ROLE SELECTION SCREEN (Exact match to image + Admin addition)
// ============================================================================
function renderOnboardingView(container) {
  container.innerHTML = `
    <div class="onboarding-screen">
      <div class="onboarding-badge">
        ✦ One last step
      </div>

      <h1 class="onboarding-heading">How would you like to begin?</h1>
      <p class="onboarding-sub">
        You can be both a trainer and a trainee — and switch between them anytime without logging out. Pick a starting role below.
      </p>

      <div class="role-cards-container">
        <!-- Sign up as Trainee -->
        <div class="role-choice-card" onclick="selectInitialRole('TRAINEE')">
          <div class="role-card-icon">🎓</div>
          <h3 class="role-card-title">Sign up as a Trainee</h3>
          <p class="role-card-desc">
            Learn skills, take assessments, earn certifications, and exchange skills with trainers.
          </p>
          <div class="role-card-cta">
            Continue ➔
          </div>
        </div>

        <!-- Sign up as Trainer -->
        <div class="role-choice-card" onclick="selectInitialRole('TRAINER')">
          <div class="role-card-icon">👥</div>
          <h3 class="role-card-title">Sign up as a Trainer</h3>
          <p class="role-card-desc">
            Create courses, manage trainees, build assessments, and schedule training sessions.
          </p>
          <div class="role-card-cta">
            Continue ➔
          </div>
        </div>
      </div>

      <!-- Administrator Link -->
      <div class="admin-onboard-link" onclick="selectInitialRole('ADMIN')">
        <span>🛡️</span> Are you an administrator? <strong>Sign up here</strong>
      </div>
    </div>
  `;
}

function selectInitialRole(role) {
  if (role === "ADMIN") {
    state.currentUser.isAdmin = true;
    state.currentUser.activeRole = "ADMIN";
    showToast("Signed in as Platform Administrator", "success");
    showView("admin");
  } else if (role === "TRAINER") {
    state.currentUser.isTrainer = true;
    state.currentUser.activeRole = "TRAINER";
    showToast("Welcome to your Trainer Dashboard", "success");
    showView("trainer");
  } else {
    state.currentUser.isTrainee = true;
    state.currentUser.activeRole = "TRAINEE";
    showToast("Welcome to your Trainee Dashboard", "success");
    showView("trainee");
  }
}

// ============================================================================
// 3. TRAINEE DASHBOARD
// ============================================================================
function renderTraineeDashboard(container) {
  container.innerHTML = `
    <div class="dashboard-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-heading">Learning Hub</div>
        <div class="sidebar-item ${state.currentTab === 'overview' ? 'active' : ''}" onclick="setTraineeTab('overview')">
          <span class="side-icon">📊</span> Overview & My Learning
        </div>
        <div class="sidebar-item ${state.currentTab === 'skill-gap' ? 'active' : ''}" onclick="setTraineeTab('skill-gap')">
          <span class="side-icon">⚡</span> AI Skill-Gap Detection
        </div>
        <div class="sidebar-item ${state.currentTab === 'trainers' ? 'active' : ''}" onclick="setTraineeTab('trainers')">
          <span class="side-icon">👥</span> Trainer Matching & Exchange
        </div>
        <div class="sidebar-item ${state.currentTab === 'chat' ? 'active' : ''}" onclick="setTraineeTab('chat')">
          <span class="side-icon">💬</span> Real-Time Messages
        </div>
        <div class="sidebar-item ${state.currentTab === 'assessments' ? 'active' : ''}" onclick="setTraineeTab('assessments')">
          <span class="side-icon">📝</span> Assessments
        </div>
        <div class="sidebar-item ${state.currentTab === 'schedule' ? 'active' : ''}" onclick="setTraineeTab('schedule')">
          <span class="side-icon">📅</span> Schedule Calendar
        </div>
        <div class="sidebar-item ${state.currentTab === 'certificates' ? 'active' : ''}" onclick="setTraineeTab('certificates')">
          <span class="side-icon">🏆</span> Certifications
        </div>
        <div class="sidebar-item ${state.currentTab === 'knowledge' ? 'active' : ''}" onclick="setTraineeTab('knowledge')">
          <span class="side-icon">📚</span> Knowledge Hub
        </div>
        <div class="sidebar-item ${state.currentTab === 'ai-assistant' ? 'active' : ''}" onclick="setTraineeTab('ai-assistant')">
          <span class="side-icon">🤖</span> AI Learning Assistant
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content" id="trainee-main-area">
        ${renderTraineeTabContent()}
      </main>
    </div>
  `;
}

function setTraineeTab(tabName) {
  state.currentTab = tabName;
  const mainArea = document.getElementById("trainee-main-area");
  if (mainArea) {
    mainArea.innerHTML = renderTraineeTabContent();
    // Re-highlight sidebar
    document.querySelectorAll(".sidebar-item").forEach(el => el.classList.remove("active"));
    const activeEl = document.querySelector(`.sidebar-item[onclick="setTraineeTab('${tabName}')"]`);
    if (activeEl) activeEl.classList.add("active");
  }
}

function renderTraineeTabContent() {
  switch (state.currentTab) {
    case "overview":
      return renderTraineeOverview();
    case "skill-gap":
      return renderTraineeSkillGap();
    case "trainers":
      return renderTraineeTrainers();
    case "chat":
      return renderRealTimeChatView();
    case "assessments":
      return renderTraineeAssessments();
    case "schedule":
      return renderInteractiveCalendar();
    case "certificates":
      return renderCertificatesView();
    case "knowledge":
      return renderKnowledgeHubView();
    case "ai-assistant":
      return renderAiAssistantView();
    default:
      return renderTraineeOverview();
  }
}

function renderTraineeOverview() {
  return `
    <!-- Welcome & Career Readiness Banner -->
    <div class="welcome-readiness-banner">
      <div>
        <h2 style="font-size:1.6rem; margin-bottom:0.3rem;">Welcome back, ${state.currentUser.fullName}!</h2>
        <p>You're on a <strong>${state.currentUser.streak}-day learning streak</strong>. Keep progressing toward Level ${state.currentUser.level + 1}!</p>
      </div>

      <div class="circular-score-wrap">
        <div class="circular-progress">
          <svg width="84" height="84">
            <circle class="circle-bg" cx="42" cy="42" r="35"></circle>
            <circle class="circle-fill" cx="42" cy="42" r="35"></circle>
          </svg>
          <div class="circle-val">${state.currentUser.careerScore}%</div>
        </div>
        <div>
          <div style="font-weight:800; font-size:1.05rem; color:var(--forest-green);">Career Readiness</div>
          <div style="font-size:0.82rem; color:var(--text-muted);">Industry Benchmark Ready</div>
        </div>
      </div>
    </div>

    <!-- AI Skill Gap Quick Highlight -->
    <div class="ai-skill-gap-panel">
      <div class="ai-header">
        <div class="ai-header-title">
          <span>⚡</span> AI Skill-Gap Analysis Detected
        </div>
        <button class="btn-sage" onclick="setTraineeTab('skill-gap')">View Full Matrix</button>
      </div>

      <div class="skill-gap-grid">
        <div class="gap-card">
          <div>
            <span class="gap-severity-badge high">High Priority Gap</span>
            <h4 style="font-size:1rem; margin-bottom:0.3rem;">Distributed Systems & JPA</h4>
            <p style="font-size:0.85rem;">Target Proficiency: Expert. Current: Intermediate.</p>
          </div>
          <button class="btn-primary" style="margin-top:1rem; font-size:0.8rem; padding:0.45rem 0.85rem;" onclick="openSkillExchangeModal(2)">
            Match with Dr. Aris Vance
          </button>
        </div>

        <div class="gap-card">
          <div>
            <span class="gap-severity-badge medium">Medium Priority</span>
            <h4 style="font-size:1rem; margin-bottom:0.3rem;">LLM RAG Orchestration</h4>
            <p style="font-size:0.85rem;">Target Proficiency: Advanced. Current: Beginner.</p>
          </div>
          <button class="btn-secondary" style="margin-top:1rem; font-size:0.8rem; padding:0.45rem 0.85rem;" onclick="openSkillExchangeModal(3)">
            Match with Elena Rostova
          </button>
        </div>

        <div class="gap-card">
          <div>
            <span class="gap-severity-badge low">Low Priority</span>
            <h4 style="font-size:1rem; margin-bottom:0.3rem;">Docker Containerization</h4>
            <p style="font-size:0.85rem;">Target Proficiency: Advanced. Verified: 90% in exam.</p>
          </div>
          <button class="btn-secondary" style="margin-top:1rem; font-size:0.8rem; padding:0.45rem 0.85rem;" onclick="setTraineeTab('certificates')">
            View Certificate
          </button>
        </div>
      </div>
    </div>

    <!-- Courses & My Learning Side-by-Side In The Same Dashboard -->
    <div class="two-column-equal">
      <!-- Section 1: My Learning & Progress -->
      <div class="section-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.2rem;">
          <h3 style="font-size:1.15rem;">My Active Learning</h3>
          <span style="font-size:0.82rem; font-weight:700; color:var(--forest-green);">Completion Rate: 72%</span>
        </div>

        ${state.courses.filter(c => c.enrolled).map(course => `
          <div class="course-item-card">
            <img src="${course.thumb}" alt="${course.title}" class="course-thumb">
            <div class="course-info">
              <span class="course-tag">${course.category}</span>
              <h4 style="font-size:0.95rem; margin-bottom:0.2rem;">${course.title}</h4>
              <div style="font-size:0.8rem; color:var(--text-muted);">
                ${course.completedLessons} of ${course.lessons} Lessons Completed (${course.progress}%)
              </div>
              <div class="progress-bar-container">
                <div class="progress-fill" style="width:${course.progress}%;"></div>
              </div>
              <div style="margin-top:0.75rem;">
                <button class="btn-sage" style="font-size:0.8rem; padding:0.4rem 0.9rem;" onclick="openCoursePlayer(${course.id})">
                  Continue Learning ➔
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Section 2: Recommended Public Courses -->
      <div class="section-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.2rem;">
          <h3 style="font-size:1.15rem;">Explore Catalog</h3>
          <span style="font-size:0.82rem; color:var(--text-muted);">Public Courses</span>
        </div>

        ${state.courses.map(course => `
          <div class="course-item-card">
            <img src="${course.thumb}" alt="${course.title}" class="course-thumb">
            <div class="course-info">
              <span class="course-tag">${course.category}</span>
              <h4 style="font-size:0.95rem; margin-bottom:0.2rem;">${course.title}</h4>
              <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.5rem;">
                Instructor: <strong>${course.trainer}</strong> • ${course.duration}
              </div>
              ${course.enrolled ? `
                <span style="font-size:0.8rem; font-weight:700; color:var(--forest-green);">✓ Enrolled</span>
              ` : `
                <button class="btn-primary" style="font-size:0.8rem; padding:0.4rem 0.9rem;" onclick="enrollInCourse(${course.id})">
                  Enroll Free ➔
                </button>
              `}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Trainee Skill-Gap Page
function renderTraineeSkillGap() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">AI Skill-Gap Detection Matrix</h2>
        <p class="dashboard-subtitle">Real-time organizational alignment analysis based on role expectations & assessment history.</p>
      </div>
    </div>

    <div class="skill-gap-grid" style="margin-bottom:2rem;">
      <div class="gap-card">
        <span class="gap-severity-badge high">High Severity Gap</span>
        <h3>Java Microservices & Spring Cloud</h3>
        <p>Required: Level 3 (Advanced). Current Assessment Score: 55%. High impact on enterprise architectural projects.</p>
        <div style="margin-top:1.2rem;">
          <button class="btn-primary" style="width:100%;" onclick="openSkillExchangeModal(2)">
            Request Skill Exchange with Dr. Aris Vance
          </button>
        </div>
      </div>

      <div class="gap-card">
        <span class="gap-severity-badge medium">Medium Severity</span>
        <h3>Prompt Engineering & Vector Search</h3>
        <p>Required: Level 2 (Intermediate). Current: Level 1. Critical for next quarter's AI integration roadmap.</p>
        <div style="margin-top:1.2rem;">
          <button class="btn-secondary" style="width:100%;" onclick="openSkillExchangeModal(3)">
            Request Skill Exchange with Elena Rostova
          </button>
        </div>
      </div>

      <div class="gap-card">
        <span class="gap-severity-badge low">Low Severity</span>
        <h3>Continuous Integration & Kubernetes</h3>
        <p>Required: Level 2. Current: Level 3 (Exam Passed with 90%). Milestone completed.</p>
        <div style="margin-top:1.2rem;">
          <button class="btn-secondary" style="width:100%;" onclick="setTraineeTab('certificates')">
            View Verified Credential
          </button>
        </div>
      </div>
    </div>
  `;
}

// Public Trainer Directory & Exchange
function renderTraineeTrainers() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Verified Public Trainers & Skill Exchange</h2>
        <p class="dashboard-subtitle">Browse trainer profiles, view qualifications, and propose reciprocal skill exchanges.</p>
      </div>
    </div>

    <div class="trainer-grid">
      ${state.trainers.map(t => `
        <div class="trainer-card">
          <img src="${t.avatarUrl}" alt="${t.fullName}" class="trainer-avatar">
          <h3 style="font-size:1.15rem; margin-bottom:0.2rem;">${t.fullName}</h3>
          <div style="font-size:0.85rem; font-weight:700; color:var(--sage-deep); margin-bottom:0.4rem;">${t.expertise}</div>
          <div style="font-size:0.82rem; color:var(--gold-muted); font-weight:700; margin-bottom:0.8rem;">★ ${t.rating} / 5.0 Rating • ${t.experience}</div>
          <p style="font-size:0.85rem; line-height:1.4; margin-bottom:0.8rem;">${t.bio}</p>

          <div style="text-align:left; background:var(--sage-pale); padding:0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem;">
            <div style="font-size:0.75rem; font-weight:700; color:var(--forest-green);">WANTS TO LEARN:</div>
            <div style="font-size:0.82rem; color:var(--text-charcoal); font-weight:600;">${t.wantsToLearn}</div>
          </div>

          <div class="trainer-skills-wrap">
            ${t.skills.map(s => `<span class="trainer-skill-tag">${s}</span>`).join('')}
          </div>

          <button class="btn-primary" style="width:100%;" onclick="openSkillExchangeModal(${t.id})">
            Request Skill Exchange
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

// Assessments Tab
function renderTraineeAssessments() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Assessments & Certification Exams</h2>
        <p class="dashboard-subtitle">Take trainer-uploaded MCQ exams. Instant AI evaluation and scoring upon submission.</p>
      </div>
    </div>

    <div class="section-card">
      <h3 style="margin-bottom:1rem;">Available & Completed Assessments</h3>
      ${state.assessments.map(a => `
        <div class="assessment-card">
          <div>
            <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.4rem;">
              <span class="badge-status ${a.status === 'Completed' ? 'gold' : 'upcoming'}">${a.status}</span>
              <span class="course-tag">${a.category}</span>
            </div>
            <h4 style="font-size:1.05rem; margin-bottom:0.2rem;">${a.title}</h4>
            <p style="font-size:0.85rem;">
              ${a.status === 'Completed' 
                ? `Scored <strong>${a.score}/${a.totalMarks}</strong> on ${a.submittedDate}. ${a.aiSummary}`
                : `Duration: ${a.duration} Minutes • Passing Score: ${a.passingMarks}% • ${a.questions ? a.questions.length : 4} Questions`
              }
            </p>
          </div>

          <div>
            ${a.status === 'Completed' ? `
              <button class="btn-secondary" onclick="viewAssessmentReport(${a.id})">View Analysis</button>
            ` : `
              <button class="btn-primary" onclick="startAssessmentModal(${a.id})">Take Exam ➔</button>
            `}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Interactive Schedule Calendar
function renderInteractiveCalendar() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Schedule Calendar</h2>
        <p class="dashboard-subtitle">Interactive schedule of your 1-on-1 mentorship sessions and live workshops.</p>
      </div>
      <button class="btn-primary" onclick="openBookSessionModal()">+ Book Mentorship Session</button>
    </div>

    <div class="calendar-wrap">
      <div class="calendar-header">
        <h3 style="font-size:1.2rem;">September 2026</h3>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn-secondary" style="padding:0.4rem 0.8rem;">‹ Prev</button>
          <button class="btn-secondary" style="padding:0.4rem 0.8rem;">Next ›</button>
        </div>
      </div>

      <div class="calendar-grid">
        <div class="calendar-day-head">Sun</div>
        <div class="calendar-day-head">Mon</div>
        <div class="calendar-day-head">Tue</div>
        <div class="calendar-day-head">Wed</div>
        <div class="calendar-day-head">Thu</div>
        <div class="calendar-day-head">Fri</div>
        <div class="calendar-day-head">Sat</div>

        <!-- Days simulation -->
        ${[...Array(30).keys()].map(i => {
          const day = i + 1;
          const dateStr = `2026-09-${day < 10 ? '0' + day : day}`;
          const event = state.calendarEvents.find(e => e.date === dateStr);
          return `
            <div class="calendar-day-cell ${day === 2 ? 'current' : ''}" onclick="selectCalendarDay('${dateStr}')">
              <div style="font-weight:700; font-size:0.85rem;">${day}</div>
              ${event ? `
                <div class="cal-event-pill" title="${event.title}">
                  ${event.title}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function selectCalendarDay(dateStr) {
  const event = state.calendarEvents.find(e => e.date === dateStr);
  if (event) {
    showToast(`Selected: ${event.title} (${event.time}) with ${event.trainer}`, "normal");
  } else {
    showToast(`No training sessions on ${dateStr}. Click "Book Mentorship Session" to schedule.`, "normal");
  }
}

// Certifications View
function renderCertificatesView() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Official Certifications & Milestones</h2>
        <p class="dashboard-subtitle">Digitally verified credentials awarded upon passing technical assessments.</p>
      </div>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(360px, 1fr)); gap:1.5rem;">
      ${state.certificates.map(cert => `
        <div class="cert-card">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
            <span style="font-size:0.75rem; font-weight:800; color:var(--gold-muted);">${cert.code}</span>
            <span class="badge-status gold">Verified Credential</span>
          </div>

          <h3 style="font-size:1.15rem; margin-bottom:0.4rem; color:var(--forest-green);">${cert.title}</h3>
          <p style="font-size:0.85rem; margin-bottom:1rem;">Grade: <strong>${cert.grade}</strong> • Issued on ${cert.issueDate}</p>

          <div style="display:flex; gap:0.75rem;">
            <button class="btn-primary" style="font-size:0.85rem; padding:0.5rem 1rem;" onclick="viewCertificateModal('${cert.code}')">
              View Certificate
            </button>
            <button class="btn-secondary" style="font-size:0.85rem; padding:0.5rem 1rem;" onclick="showToast('Certificate verification link copied to clipboard!', 'success')">
              Share Link
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Knowledge Hub View
function renderKnowledgeHubView() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Organizational Knowledge Hub</h2>
        <p class="dashboard-subtitle">Curated guides, architectural blueprints, and books uploaded by verified trainers.</p>
      </div>
    </div>

    <div class="ai-chip-group">
      <span class="ai-query-chip" style="background:var(--sage-deep); color:#fff;">All Skills</span>
      <span class="ai-query-chip">AI/ML</span>
      <span class="ai-query-chip">Programming</span>
      <span class="ai-query-chip">Data Science</span>
      <span class="ai-query-chip">Management</span>
    </div>

    <div class="section-card">
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:1.25rem;">
        ${state.knowledgeHub.map(item => `
          <div style="border:1px solid var(--border-soft); border-radius:var(--radius-md); padding:1.25rem; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <span class="course-tag">${item.category}</span>
              <h4 style="font-size:1rem; margin:0.4rem 0 0.2rem 0;">${item.title}</h4>
              <p style="font-size:0.82rem; color:var(--text-muted);">Uploaded by <strong>${item.author}</strong> • ${item.size}</p>
            </div>

            <div style="margin-top:1.2rem; display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:0.8rem; color:var(--forest-green); font-weight:700;">${item.downloads} Downloads</span>
              <button class="btn-primary" style="font-size:0.8rem; padding:0.4rem 0.9rem;" onclick="downloadResource('${item.fileName}')">
                Download Resource ⬇
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function downloadResource(fileName) {
  showToast(`Downloading "${fileName}"...`, "success");
}

// AI Assistant View
function renderAiAssistantView() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">AI Learning Assistant</h2>
        <p class="dashboard-subtitle">Personalized learning guidance, skill gap analysis, and tailored curriculum paths.</p>
      </div>
    </div>

    <div class="ai-assistant-card">
      <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:1rem;">
        <span style="font-size:1.4rem;">🤖</span>
        <h3 style="color:var(--forest-green);">How can I assist your learning today?</h3>
      </div>

      <div class="ai-chip-group">
        <span class="ai-query-chip" onclick="askAiPrompt('What are my primary skill gaps?')">Ask about skill gaps</span>
        <span class="ai-query-chip" onclick="askAiPrompt('Recommend top resources for Spring Boot')">Get resource recommendations</span>
        <span class="ai-query-chip" onclick="askAiPrompt('How do I reach 90% career readiness?')">Career readiness guidance</span>
        <span class="ai-query-chip" onclick="askAiPrompt('When is my next training session?')">Check my schedule</span>
      </div>

      <div class="section-card" id="ai-chat-response-box" style="min-height:220px; max-height:350px; overflow-y:auto; margin-bottom:1rem; background:#fff;">
        <div class="chat-msg theirs">
          Hello ${state.currentUser.fullName}! I am your CAPACITY CONNECT AI Learning Assistant. You can ask me to analyze your skill gaps, recommend tailored learning paths, or suggest top peer trainers for skill exchange.
        </div>
      </div>

      <div style="display:flex; gap:0.75rem;">
        <input type="text" id="ai-custom-input" placeholder="Type your learning question..." style="flex-grow:1; padding:0.75rem 1.1rem; border:1px solid var(--border-soft); border-radius:var(--radius-md); font-family:var(--font-main); outline:none;" onkeypress="if(event.key==='Enter') sendCustomAiQuery()">
        <button class="btn-primary" onclick="sendCustomAiQuery()">Ask AI ➔</button>
      </div>
    </div>
  `;
}

function askAiPrompt(queryText) {
  const box = document.getElementById("ai-chat-response-box");
  if (!box) return;

  // Add user prompt
  box.innerHTML += `<div class="chat-msg mine">${queryText}</div>`;

  // Simulate AI Thinking & Reply
  setTimeout(() => {
    let reply = "";
    if (queryText.includes("skill gap")) {
      reply = "Based on your latest assessment, your primary identified skill gap is <strong>Distributed Systems & Event-Driven Architecture (High Severity)</strong>. I recommend completing the 'Enterprise Java & Spring Boot Masterclass' Module 4 and requesting a peer exchange with Dr. Aris Vance.";
    } else if (queryText.includes("resource") || queryText.includes("Spring Boot")) {
      reply = "I recommend downloading: <br>1. <strong>Spring Boot 3.x Production Blueprint</strong><br>2. <strong>MySQL 8.0 Optimization Playbook</strong> from our Knowledge Hub.";
    } else if (queryText.includes("readiness")) {
      reply = "Your current <strong>Career Readiness Score is 78%</strong>. To achieve 90%+ readiness, complete 1 more certified assessment and 2 peer skill exchanges.";
    } else if (queryText.includes("schedule")) {
      reply = "You have an upcoming 1-on-1 session with <strong>Dr. Aris Vance</strong> on 'Spring Boot REST & JPA Deep Dive' scheduled for Thursday at 2:00 PM.";
    } else {
      reply = `I have analyzed your query "${queryText}". For the best capacity growth, follow your structured learning path and participate in active peer mentoring.`;
    }

    box.innerHTML += `<div class="chat-msg theirs">${reply}</div>`;
    box.scrollTop = box.scrollHeight;
  }, 400);
}

function sendCustomAiQuery() {
  const input = document.getElementById("ai-custom-input");
  if (!input || !input.value.trim()) return;
  const val = input.value.trim();
  input.value = "";
  askAiPrompt(val);
}

// ============================================================================
// 4. REAL-TIME CHAT & SKILL EXCHANGE ENGINE
// ============================================================================
function renderRealTimeChatView() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Real-Time Skill Exchange Messaging</h2>
        <p class="dashboard-subtitle">Collaborate directly with your accepted peer trainers & trainees.</p>
      </div>
      <button class="btn-sage" onclick="openFeedbackModal()">Leave Session Feedback ★</button>
    </div>

    <div class="chat-container">
      <!-- Conversation Sidebar -->
      <div class="chat-convo-list">
        <div class="chat-convo-item active">
          <div style="position:relative;">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" style="width:40px; height:40px; border-radius:50%;">
            <div class="online-dot"></div>
          </div>
          <div>
            <div style="font-weight:700; font-size:0.9rem;">Dr. Aris Vance</div>
            <div style="font-size:0.75rem; color:var(--forest-green); font-weight:600;">Java ↔ Salsa Dance</div>
          </div>
        </div>
      </div>

      <!-- Chat Messages Area -->
      <div class="chat-main-area">
        <div class="chat-messages-box" id="chat-messages-scroll">
          ${state.chatMessages.map(msg => `
            <div class="chat-msg ${msg.senderId === state.currentUser.id ? 'mine' : 'theirs'}">
              <div>${msg.text}</div>
              <div style="font-size:0.68rem; opacity:0.75; text-align:right; margin-top:2px;">${msg.time}</div>
            </div>
          `).join('')}
        </div>

        <div class="chat-input-bar">
          <input type="text" id="live-chat-input" placeholder="Type a live message to your trainer..." onkeypress="if(event.key==='Enter') sendLiveChatMessage()">
          <button class="btn-primary" onclick="sendLiveChatMessage()">Send ➔</button>
        </div>
      </div>
    </div>
  `;
}

function sendLiveChatMessage() {
  const input = document.getElementById("live-chat-input");
  if (!input || !input.value.trim()) return;

  const text = input.value.trim();
  input.value = "";

  const newMsg = {
    requestId: 1,
    senderId: state.currentUser.id,
    senderName: state.currentUser.fullName,
    text: text,
    time: "Just now"
  };

  state.chatMessages.push(newMsg);
  
  const scrollBox = document.getElementById("chat-messages-scroll");
  if (scrollBox) {
    scrollBox.innerHTML += `
      <div class="chat-msg mine">
        <div>${text}</div>
        <div style="font-size:0.68rem; opacity:0.75; text-align:right; margin-top:2px;">Just now</div>
      </div>
    `;
    scrollBox.scrollTop = scrollBox.scrollHeight;
  }

  // Simulate real-time trainer reply after 1.2s
  setTimeout(() => {
    const replyMsg = {
      requestId: 1,
      senderId: 2,
      senderName: "Dr. Aris Vance",
      text: "Got it! Looking forward to reviewing this during our live coding session.",
      time: "Just now"
    };
    state.chatMessages.push(replyMsg);
    if (scrollBox) {
      scrollBox.innerHTML += `
        <div class="chat-msg theirs">
          <div>${replyMsg.text}</div>
          <div style="font-size:0.68rem; opacity:0.75; text-align:right; margin-top:2px;">Just now</div>
        </div>
      `;
      scrollBox.scrollTop = scrollBox.scrollHeight;
      showToast("Dr. Aris Vance sent a message", "normal");
    }
  }, 1200);
}

// ============================================================================
// 5. TRAINER DASHBOARD (Note: Removed AI assessment generator as requested!)
// ============================================================================
function renderTrainerDashboard(container) {
  container.innerHTML = `
    <div class="dashboard-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-heading">Trainer Console</div>
        <div class="sidebar-item ${state.currentTab === 'trainer-home' ? 'active' : ''}" onclick="setTrainerTab('trainer-home')">
          <span class="side-icon">📊</span> Dashboard Home
        </div>
        <div class="sidebar-item ${state.currentTab === 'trainer-profile' ? 'active' : ''}" onclick="setTrainerTab('trainer-profile')">
          <span class="side-icon">👤</span> Trainer Profile
        </div>
        <div class="sidebar-item ${state.currentTab === 'trainer-trainees' ? 'active' : ''}" onclick="setTrainerTab('trainer-trainees')">
          <span class="side-icon">👥</span> My Trainees & Progress
        </div>
        <div class="sidebar-item ${state.currentTab === 'trainer-assessments' ? 'active' : ''}" onclick="setTrainerTab('trainer-assessments')">
          <span class="side-icon">📝</span> Assessment Management
        </div>
        <div class="sidebar-item ${state.currentTab === 'trainer-courses' ? 'active' : ''}" onclick="setTrainerTab('trainer-courses')">
          <span class="side-icon">🎓</span> Upload Courses
        </div>
        <div class="sidebar-item ${state.currentTab === 'trainer-schedule' ? 'active' : ''}" onclick="setTrainerTab('trainer-schedule')">
          <span class="side-icon">📅</span> Training Sessions
        </div>
        <div class="sidebar-item ${state.currentTab === 'trainer-exchanges' ? 'active' : ''}" onclick="setTrainerTab('trainer-exchanges')">
          <span class="side-icon">⚡</span> Skill Exchange Requests
        </div>
        <div class="sidebar-item ${state.currentTab === 'trainer-knowledge' ? 'active' : ''}" onclick="setTrainerTab('trainer-knowledge')">
          <span class="side-icon">📚</span> Knowledge Hub Uploader
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content" id="trainer-main-area">
        ${renderTrainerTabContent()}
      </main>
    </div>
  `;
}

function setTrainerTab(tab) {
  state.currentTab = tab;
  const main = document.getElementById("trainer-main-area");
  if (main) {
    main.innerHTML = renderTrainerTabContent();
    document.querySelectorAll(".sidebar-item").forEach(el => el.classList.remove("active"));
    const activeEl = document.querySelector(`.sidebar-item[onclick="setTrainerTab('${tab}')"]`);
    if (activeEl) activeEl.classList.add("active");
  }
}

function renderTrainerTabContent() {
  switch (state.currentTab) {
    case "trainer-home":
      return renderTrainerHome();
    case "trainer-profile":
      return renderTrainerProfileEditor();
    case "trainer-trainees":
      return renderTrainerTrainees();
    case "trainer-assessments":
      return renderTrainerAssessmentManagement();
    case "trainer-courses":
      return renderTrainerCourseManagement();
    case "trainer-schedule":
      return renderInteractiveCalendar();
    case "trainer-exchanges":
      return renderTrainerExchanges();
    case "trainer-knowledge":
      return renderTrainerKnowledgeUploader();
    default:
      return renderTrainerHome();
  }
}

function renderTrainerHome() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Trainer Performance Console</h2>
        <p class="dashboard-subtitle">Monitor assigned trainees, session completion, and pending assessments.</p>
      </div>
      <button class="btn-primary" onclick="openCreateAssessmentModal()">+ Create New Assessment</button>
    </div>

    <!-- Statistics Grid -->
    <div class="stats-grid-4">
      <div class="stat-box">
        <div class="stat-box-icon">👥</div>
        <div>
          <div class="stat-box-val">24</div>
          <div class="stat-box-lbl">Total Trainees</div>
        </div>
      </div>
      <div class="stat-box">
        <div class="stat-box-icon">🟢</div>
        <div>
          <div class="stat-box-val">18</div>
          <div class="stat-box-lbl">Active Trainees</div>
        </div>
      </div>
      <div class="stat-box">
        <div class="stat-box-icon">📅</div>
        <div>
          <div class="stat-box-val">14</div>
          <div class="stat-box-lbl">Training Sessions</div>
        </div>
      </div>
      <div class="stat-box">
        <div class="stat-box-icon gold">★</div>
        <div>
          <div class="stat-box-val">4.9 / 5.0</div>
          <div class="stat-box-lbl">Average Rating</div>
        </div>
      </div>
    </div>

    <!-- Trainee Progress Summary & Live Submissions -->
    <div class="two-column-equal">
      <div class="section-card">
        <h3 style="font-size:1.15rem; margin-bottom:1rem;">Assigned Trainee Learning Progress</h3>
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <div style="display:flex; align-items:center; justify-content:space-between;">
            <div>
              <strong>Marcus Chen</strong>
              <div style="font-size:0.8rem; color:var(--text-muted);">Course: Java Spring Boot Masterclass</div>
            </div>
            <div style="text-align:right;">
              <span style="font-weight:700; color:var(--forest-green);">75%</span>
            </div>
          </div>
          <div class="progress-bar-container"><div class="progress-fill" style="width:75%;"></div></div>

          <div style="display:flex; align-items:center; justify-content:space-between;">
            <div>
              <strong>Sophia Patel</strong>
              <div style="font-size:0.8rem; color:var(--text-muted);">Course: Modern Data Architecture</div>
            </div>
            <div style="text-align:right;">
              <span style="font-weight:700; color:var(--forest-green);">40%</span>
            </div>
          </div>
          <div class="progress-bar-container"><div class="progress-fill" style="width:40%;"></div></div>
        </div>
      </div>

      <div class="section-card">
        <h3 style="font-size:1.15rem; margin-bottom:1rem;">Recent Trainee Feedback</h3>
        <div style="background:var(--sage-pale); padding:1rem; border-radius:var(--radius-md); margin-bottom:0.75rem;">
          <div style="font-size:0.85rem; font-weight:700; color:var(--forest-green);">★ 5.0 from Marcus Chen</div>
          <p style="font-size:0.85rem; margin-top:0.3rem;">"Outstanding knowledge exchange! Dr. Vance explained Spring Data JPA and transactions with exceptional clarity."</p>
        </div>
      </div>
    </div>
  `;
}

// Trainer Assessment Management (AI Box REMOVED as requested!)
function renderTrainerAssessmentManagement() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Assessment Management</h2>
        <p class="dashboard-subtitle">Create MCQ assessments, upload secret answer keys for AI auto-evaluation, and view live results.</p>
      </div>
      <button class="btn-primary" onclick="openCreateAssessmentModal()">+ Create / Upload MCQ</button>
    </div>

    <!-- Active Assessments Created by Trainer -->
    <div class="section-card" style="margin-bottom:2rem;">
      <h3 style="margin-bottom:1rem;">My Published Assessments</h3>
      ${state.assessments.map(a => `
        <div class="assessment-card">
          <div>
            <span class="course-tag">${a.category}</span>
            <h4 style="font-size:1.05rem; margin:0.2rem 0;">${a.title}</h4>
            <p style="font-size:0.85rem;">Passing Threshold: <strong>${a.passingMarks || 70}%</strong> • Questions: ${a.questions ? a.questions.length : 4}</p>
          </div>
          <div>
            <button class="btn-secondary" onclick="showToast('Assessment details and secret answer keys verified.', 'normal')">View Question Keys</button>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Live Trainee Results -->
    <div class="section-card">
      <h3 style="margin-bottom:1rem;">Live Trainee Submissions (Instant AI Evaluated)</h3>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <thead>
          <tr style="border-bottom:2px solid var(--border-soft); text-align:left;">
            <th style="padding:0.75rem;">Trainee</th>
            <th style="padding:0.75rem;">Assessment</th>
            <th style="padding:0.75rem;">Score</th>
            <th style="padding:0.75rem;">Status</th>
            <th style="padding:0.75rem;">AI Evaluation Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--border-soft);">
            <td style="padding:0.75rem; font-weight:700;">Marcus Chen</td>
            <td style="padding:0.75rem;">Cloud Infrastructure & Docker</td>
            <td style="padding:0.75rem; font-weight:700; color:var(--forest-green);">90 / 100</td>
            <td style="padding:0.75rem;"><span class="badge-status in-progress">PASSED</span></td>
            <td style="padding:0.75rem; font-size:0.82rem;">Mastery Level: Exceptional understanding of container networking.</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// Trainer Profile Editor
function renderTrainerProfileEditor() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Trainer Profile & Expertise Management</h2>
        <p class="dashboard-subtitle">Manage your public trainer profile, teaching subjects, and certifications.</p>
      </div>
      <button class="btn-primary" onclick="showToast('Trainer profile updated successfully!', 'success')">Save Changes</button>
    </div>

    <div class="section-card">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem;">
        <div>
          <label style="font-weight:700; font-size:0.85rem;">Expertise Title</label>
          <input type="text" value="Enterprise Java & Distributed Systems" style="width:100%; padding:0.7rem; border:1px solid var(--border-soft); border-radius:var(--radius-sm); margin-top:0.3rem;">
        </div>
        <div>
          <label style="font-weight:700; font-size:0.85rem;">Qualifications</label>
          <input type="text" value="Ph.D. Computer Systems, Oracle Master" style="width:100%; padding:0.7rem; border:1px solid var(--border-soft); border-radius:var(--radius-sm); margin-top:0.3rem;">
        </div>
        <div style="grid-column:span 2;">
          <label style="font-weight:700; font-size:0.85rem;">Professional Bio</label>
          <textarea style="width:100%; height:90px; padding:0.7rem; border:1px solid var(--border-soft); border-radius:var(--radius-sm); margin-top:0.3rem;">Senior backend architect specializing in high-throughput enterprise distributed applications and Spring Boot microservices.</textarea>
        </div>
        <div style="grid-column:span 2;">
          <label style="font-weight:700; font-size:0.85rem;">Teaching Subjects / Topics (Addable)</label>
          <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
            <input type="text" id="new-trainer-topic" placeholder="e.g. Apache Kafka, Spring Cloud" style="flex-grow:1; padding:0.65rem; border:1px solid var(--border-soft); border-radius:var(--radius-sm);">
            <button class="btn-sage" onclick="addTrainerTopic()">+ Add Topic</button>
          </div>
          <div id="trainer-topics-list" style="margin-top:0.8rem; display:flex; gap:0.4rem; flex-wrap:wrap;">
            <span class="trainer-skill-tag">Java Spring Boot</span>
            <span class="trainer-skill-tag">Microservices</span>
            <span class="trainer-skill-tag">MySQL Optimization</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function addTrainerTopic() {
  const input = document.getElementById("new-trainer-topic");
  const list = document.getElementById("trainer-topics-list");
  if (!input || !list || !input.value.trim()) return;

  const tag = document.createElement("span");
  tag.className = "trainer-skill-tag";
  tag.innerText = input.value.trim();
  list.appendChild(tag);
  showToast(`Added topic: "${input.value.trim()}"`, "success");
  input.value = "";
}

// Trainer Trainees Tab
function renderTrainerTrainees() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">My Assigned Trainees</h2>
        <p class="dashboard-subtitle">Individual competency tracking, learning progress, and assessment performance.</p>
      </div>
    </div>

    <div class="section-card">
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:1.5rem;">
        <div style="border:1px solid var(--border-soft); border-radius:var(--radius-md); padding:1.5rem;">
          <div style="display:flex; gap:0.85rem; align-items:center; margin-bottom:1rem;">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" style="width:48px; height:48px; border-radius:50%;">
            <div>
              <h4 style="font-size:1.05rem;">Marcus Chen</h4>
              <div style="font-size:0.8rem; color:var(--text-muted);">Competency Level: Intermediate</div>
            </div>
          </div>

          <div style="font-size:0.82rem; margin-bottom:0.4rem;">Learning Progress: <strong>75%</strong></div>
          <div class="progress-bar-container"><div class="progress-fill" style="width:75%;"></div></div>

          <div style="margin-top:1.2rem; display:flex; gap:0.5rem;">
            <button class="btn-primary" style="font-size:0.8rem; padding:0.4rem 0.8rem;" onclick="setTrainerTab('trainer-schedule')">Schedule 1-on-1</button>
            <button class="btn-secondary" style="font-size:0.8rem; padding:0.4rem 0.8rem;" onclick="setTrainerTab('trainer-home')">View Assessments</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Trainer Exchanges
function renderTrainerExchanges() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Skill Exchange Inbox</h2>
        <p class="dashboard-subtitle">Review trainee requests to exchange technical skills for personal/creative competencies.</p>
      </div>
    </div>

    <div class="section-card">
      ${state.exchangeRequests.map(req => `
        <div class="exchange-request-card">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <h4 style="font-size:1.1rem;">Request from ${req.traineeName}</h4>
              <div style="font-size:0.82rem; color:var(--text-muted);">${req.date}</div>
            </div>
            <span class="badge-status ${req.status === 'ACCEPTED' ? 'upcoming' : 'in-progress'}">${req.status}</span>
          </div>

          <div class="exchange-pills-row">
            <span class="exchange-pill-learn">Wants to Learn: ${req.skillWanted}</span>
            <span class="exchange-pill-teach">Offers to Teach: ${req.skillOffered}</span>
          </div>

          <p style="font-size:0.88rem; margin-bottom:1rem;">"${req.message}"</p>

          <div style="display:flex; gap:0.75rem;">
            ${req.status === 'ACCEPTED' ? `
              <button class="btn-primary" onclick="setTraineeTab('chat')">Open Live Chat 💬</button>
            ` : `
              <button class="btn-primary" onclick="acceptExchange(${req.id})">Accept Request</button>
              <button class="btn-danger-subtle" onclick="declineExchange(${req.id})">Decline</button>
            `}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function acceptExchange(id) {
  const r = state.exchangeRequests.find(x => x.id === id);
  if (r) {
    r.status = "ACCEPTED";
    showToast("Skill exchange accepted! You can now chat in real-time.", "success");
    setTrainerTab("trainer-exchanges");
  }
}

function declineExchange(id) {
  showToast("Skill exchange request declined.", "warning");
}

// Trainer Course Management & Knowledge Uploader
function renderTrainerCourseManagement() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Publish Courses for Public View</h2>
        <p class="dashboard-subtitle">Create new courses visible to all trainees across the organization.</p>
      </div>
      <button class="btn-primary" onclick="openCreateCourseModal()">+ Create New Course</button>
    </div>

    <div class="section-card">
      <h3 style="margin-bottom:1rem;">My Courses Visible to All Trainees</h3>
      <div class="two-column-equal">
        ${state.courses.map(c => `
          <div class="course-item-card">
            <img src="${c.thumb}" class="course-thumb">
            <div class="course-info">
              <span class="course-tag">${c.category}</span>
              <h4 style="font-size:0.95rem;">${c.title}</h4>
              <p style="font-size:0.8rem;">${c.duration} • ${c.lessons} Lessons</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTrainerKnowledgeUploader() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Upload Public Resources to Knowledge Hub</h2>
        <p class="dashboard-subtitle">Share reference blueprints, guides, and documentation with all platform trainees.</p>
      </div>
    </div>

    <div class="section-card">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.2rem;">
        <div>
          <label style="font-weight:700; font-size:0.85rem;">Document Title</label>
          <input type="text" id="doc-title" placeholder="e.g. Distributed Caching Guide" style="width:100%; padding:0.7rem; border:1px solid var(--border-soft); border-radius:var(--radius-sm); margin-top:0.3rem;">
        </div>
        <div>
          <label style="font-weight:700; font-size:0.85rem;">Category</label>
          <select id="doc-cat" style="width:100%; padding:0.7rem; border:1px solid var(--border-soft); border-radius:var(--radius-sm); margin-top:0.3rem;">
            <option>Programming</option>
            <option>AI/ML</option>
            <option>Data Science</option>
            <option>Management</option>
          </select>
        </div>
        <div style="grid-column:span 2;">
          <label style="font-weight:700; font-size:0.85rem;">File Upload (PDF / Doc)</label>
          <input type="file" style="width:100%; padding:0.7rem; border:1px dashed var(--border-soft); border-radius:var(--radius-sm); margin-top:0.3rem; background:var(--sage-pale);">
        </div>
      </div>
      <div style="margin-top:1.5rem;">
        <button class="btn-primary" onclick="uploadDocResource()">Publish to Knowledge Hub</button>
      </div>
    </div>
  `;
}

function uploadDocResource() {
  const title = document.getElementById("doc-title");
  const cat = document.getElementById("doc-cat");
  if (!title || !title.value.trim()) {
    showToast("Please enter a document title", "warning");
    return;
  }

  state.knowledgeHub.push({
    id: Date.now(),
    title: title.value.trim(),
    category: cat.value,
    fileName: `${title.value.trim().toLowerCase().replace(/\s+/g, '_')}.pdf`,
    size: "3.2 MB",
    author: state.currentUser.fullName,
    downloads: 1
  });

  showToast(`Published "${title.value.trim()}" for all trainees!`, "success");
  title.value = "";
}

// ============================================================================
// 6. ADMIN DASHBOARD
// ============================================================================
function renderAdminDashboard(container) {
  container.innerHTML = `
    <div class="dashboard-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-heading">Admin Operations</div>
        <div class="sidebar-item ${state.currentTab === 'admin-overview' ? 'active' : ''}" onclick="setAdminTab('admin-overview')">
          <span class="side-icon">📊</span> Overview & Analytics
        </div>
        <div class="sidebar-item ${state.currentTab === 'admin-users' ? 'active' : ''}" onclick="setAdminTab('admin-users')">
          <span class="side-icon">👥</span> User Management & Approvals
        </div>
        <div class="sidebar-item ${state.currentTab === 'admin-competency' ? 'active' : ''}" onclick="setAdminTab('admin-competency')">
          <span class="side-icon">⚡</span> Competency Framework
        </div>
        <div class="sidebar-item ${state.currentTab === 'admin-courses' ? 'active' : ''}" onclick="setAdminTab('admin-courses')">
          <span class="side-icon">🎓</span> Course Management
        </div>
        <div class="sidebar-item ${state.currentTab === 'admin-trainers' ? 'active' : ''}" onclick="setAdminTab('admin-trainers')">
          <span class="side-icon">👨‍🏫</span> Trainer Approvals
        </div>
        <div class="sidebar-item ${state.currentTab === 'admin-knowledge' ? 'active' : ''}" onclick="setAdminTab('admin-knowledge')">
          <span class="side-icon">📚</span> Knowledge Hub Approvals
        </div>
        <div class="sidebar-item ${state.currentTab === 'admin-ai-insights' ? 'active' : ''}" onclick="setAdminTab('admin-ai-insights')">
          <span class="side-icon">🧠</span> Organizational AI Insights
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content" id="admin-main-area">
        ${renderAdminTabContent()}
      </main>
    </div>
  `;
}

function setAdminTab(tab) {
  state.currentTab = tab;
  const main = document.getElementById("admin-main-area");
  if (main) {
    main.innerHTML = renderAdminTabContent();
    document.querySelectorAll(".sidebar-item").forEach(el => el.classList.remove("active"));
    const activeEl = document.querySelector(`.sidebar-item[onclick="setAdminTab('${tab}')"]`);
    if (activeEl) activeEl.classList.add("active");
  }
}

function renderAdminTabContent() {
  switch (state.currentTab) {
    case "admin-overview":
      return renderAdminOverview();
    case "admin-users":
      return renderAdminUsers();
    case "admin-competency":
      return renderAdminCompetency();
    case "admin-courses":
      return renderAdminCourses();
    case "admin-trainers":
      return renderAdminTrainers();
    case "admin-knowledge":
      return renderAdminKnowledge();
    case "admin-ai-insights":
      return renderAdminAiInsights();
    default:
      return renderAdminOverview();
  }
}

function renderAdminOverview() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Organization Overview & Executive Metrics</h2>
        <p class="dashboard-subtitle">High-level capacity growth, assessment throughput, and competency planning.</p>
      </div>
    </div>

    <!-- Statistics Grid (Strict Sage Palette) -->
    <div class="stats-grid-4">
      <div class="stat-box">
        <div class="stat-box-icon">👥</div>
        <div>
          <div class="stat-box-val">1,248</div>
          <div class="stat-box-lbl">Total Platform Users</div>
        </div>
      </div>
      <div class="stat-box">
        <div class="stat-box-icon">🎓</div>
        <div>
          <div class="stat-box-val">890</div>
          <div class="stat-box-lbl">Active Trainees</div>
        </div>
      </div>
      <div class="stat-box">
        <div class="stat-box-icon">👨‍🏫</div>
        <div>
          <div class="stat-box-val">358</div>
          <div class="stat-box-lbl">Certified Trainers</div>
        </div>
      </div>
      <div class="stat-box">
        <div class="stat-box-icon gold">🏆</div>
        <div>
          <div class="stat-box-val">620</div>
          <div class="stat-box-lbl">Certifications Issued</div>
        </div>
      </div>
    </div>

    <!-- Analytics Charts & Department Breakdown -->
    <div class="two-column-equal">
      <div class="section-card">
        <h3 style="font-size:1.15rem; margin-bottom:1rem;">Department-wise Competency Growth</h3>
        <div style="display:flex; flex-direction:column; gap:0.9rem;">
          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:700; margin-bottom:3px;">
              <span>Engineering & Cloud</span>
              <span style="color:var(--forest-green);">+28% Growth</span>
            </div>
            <div class="progress-bar-container"><div class="progress-fill" style="width:85%;"></div></div>
          </div>

          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:700; margin-bottom:3px;">
              <span>AI & Machine Learning</span>
              <span style="color:var(--forest-green);">+34% Growth</span>
            </div>
            <div class="progress-bar-container"><div class="progress-fill" style="width:72%;"></div></div>
          </div>

          <div>
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:700; margin-bottom:3px;">
              <span>Data Architecture</span>
              <span style="color:var(--forest-green);">+19% Growth</span>
            </div>
            <div class="progress-bar-container"><div class="progress-fill" style="width:64%;"></div></div>
          </div>
        </div>
      </div>

      <div class="section-card">
        <h3 style="font-size:1.15rem; margin-bottom:1rem;">Assessment Performance Velocity</h3>
        <div style="background:var(--sage-pale); padding:1.25rem; border-radius:var(--radius-md);">
          <div style="font-size:1.4rem; font-weight:800; color:var(--forest-green);">94.2%</div>
          <div style="font-size:0.85rem; color:var(--text-charcoal); font-weight:600; margin-top:2px;">First-Time Exam Pass Rate</div>
          <p style="font-size:0.82rem; margin-top:0.5rem;">AI evaluation latency averages 0.28 seconds across all MCQ submissions.</p>
        </div>
      </div>
    </div>
  `;
}

// Admin User Management & Approvals
function renderAdminUsers() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">User Management & Approvals</h2>
        <p class="dashboard-subtitle">Manage trainee, trainer, and administrator accounts, roles, and status.</p>
      </div>
    </div>

    <div class="section-card">
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <thead>
          <tr style="border-bottom:2px solid var(--border-soft); text-align:left;">
            <th style="padding:0.75rem;">User</th>
            <th style="padding:0.75rem;">Email</th>
            <th style="padding:0.75rem;">Primary Role</th>
            <th style="padding:0.75rem;">Status</th>
            <th style="padding:0.75rem;">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--border-soft);">
            <td style="padding:0.75rem; font-weight:700;">Admin Gayatri Rao</td>
            <td style="padding:0.75rem;">admin@capacityconnect.org</td>
            <td style="padding:0.75rem;"><span class="course-tag">ADMIN</span></td>
            <td style="padding:0.75rem;"><span class="badge-status upcoming">ACTIVE</span></td>
            <td style="padding:0.75rem;"><button class="btn-secondary" style="font-size:0.75rem; padding:0.3rem 0.6rem;">Edit Roles</button></td>
          </tr>
          <tr style="border-bottom:1px solid var(--border-soft);">
            <td style="padding:0.75rem; font-weight:700;">Dr. Aris Vance</td>
            <td style="padding:0.75rem;">aris.vance@techcorp.io</td>
            <td style="padding:0.75rem;"><span class="course-tag">TRAINER</span></td>
            <td style="padding:0.75rem;"><span class="badge-status upcoming">ACTIVE</span></td>
            <td style="padding:0.75rem;"><button class="btn-secondary" style="font-size:0.75rem; padding:0.3rem 0.6rem;">Verify Credentials</button></td>
          </tr>
          <tr style="border-bottom:1px solid var(--border-soft);">
            <td style="padding:0.75rem; font-weight:700;">Marcus Chen</td>
            <td style="padding:0.75rem;">marcus.chen@student.edu</td>
            <td style="padding:0.75rem;"><span class="course-tag">TRAINEE & TRAINER</span></td>
            <td style="padding:0.75rem;"><span class="badge-status upcoming">ACTIVE</span></td>
            <td style="padding:0.75rem;"><button class="btn-secondary" style="font-size:0.75rem; padding:0.3rem 0.6rem;">View Matrix</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// Admin Competency Framework
function renderAdminCompetency() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Competency Framework & Mappings</h2>
        <p class="dashboard-subtitle">Define required competency levels and map them directly to roles and courses.</p>
      </div>
      <button class="btn-primary" onclick="showToast('Competency creation modal opened', 'normal')">+ Add Competency</button>
    </div>

    <div class="section-card">
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:1.25rem;">
        <div style="border:1px solid var(--border-soft); border-radius:var(--radius-md); padding:1.25rem;">
          <span class="gap-severity-badge medium">Org Gap: Medium</span>
          <h4 style="font-size:1.05rem; margin:0.3rem 0;">Cloud-Native Microservices</h4>
          <p style="font-size:0.85rem;">Mapped Role: <strong>Senior Software Engineer</strong> • Target: Level 3 Advanced</p>
        </div>

        <div style="border:1px solid var(--border-soft); border-radius:var(--radius-md); padding:1.25rem;">
          <span class="gap-severity-badge high">Org Gap: High</span>
          <h4 style="font-size:1.05rem; margin:0.3rem 0;">Generative AI & LLM Systems</h4>
          <p style="font-size:0.85rem;">Mapped Role: <strong>AI Application Engineer</strong> • Target: Level 3 Advanced</p>
        </div>
      </div>
    </div>
  `;
}

// Admin Courses Management
function renderAdminCourses() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Course Approvals & Catalog Management</h2>
        <p class="dashboard-subtitle">Approve, edit, or delete public courses visible across all trainees.</p>
      </div>
      <button class="btn-primary" onclick="openCreateCourseModal()">+ Add New Public Course</button>
    </div>

    <div class="section-card">
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <thead>
          <tr style="border-bottom:2px solid var(--border-soft); text-align:left;">
            <th style="padding:0.75rem;">Course Title</th>
            <th style="padding:0.75rem;">Category</th>
            <th style="padding:0.75rem;">Trainer</th>
            <th style="padding:0.75rem;">Visibility</th>
            <th style="padding:0.75rem;">Action</th>
          </tr>
        </thead>
        <tbody>
          ${state.courses.map(c => `
            <tr style="border-bottom:1px solid var(--border-soft);">
              <td style="padding:0.75rem; font-weight:700;">${c.title}</td>
              <td style="padding:0.75rem;"><span class="course-tag">${c.category}</span></td>
              <td style="padding:0.75rem;">${c.trainer}</td>
              <td style="padding:0.75rem;"><span class="badge-status upcoming">Public & Approved</span></td>
              <td style="padding:0.75rem;">
                <button class="btn-danger-subtle" style="font-size:0.75rem; padding:0.25rem 0.6rem;" onclick="deleteCourseAdmin(${c.id})">Delete</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function deleteCourseAdmin(courseId) {
  state.courses = state.courses.filter(c => c.id !== courseId);
  showToast("Course removed from catalog", "warning");
  setAdminTab("admin-courses");
}

// Admin Trainer Approvals & Knowledge Approvals
function renderAdminTrainers() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Trainer Verification & Allocation</h2>
        <p class="dashboard-subtitle">Verify qualifications, expertise certifications, and trainee allocations.</p>
      </div>
    </div>

    <div class="section-card">
      <p style="margin-bottom:1rem;">All 3 active organization trainers have been verified with complete credential records.</p>
      ${state.trainers.map(t => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:1rem; border:1px solid var(--border-soft); border-radius:var(--radius-md); margin-bottom:0.75rem;">
          <div>
            <h4 style="font-size:1rem;">${t.fullName}</h4>
            <div style="font-size:0.82rem; color:var(--text-muted);">${t.expertise} • ${t.qualifications}</div>
          </div>
          <span class="badge-status upcoming">Verified ✓</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderAdminKnowledge() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Knowledge Hub Resource Moderation</h2>
        <p class="dashboard-subtitle">Verify uploaded documents and remove outdated materials.</p>
      </div>
    </div>

    <div class="section-card">
      ${state.knowledgeHub.map(k => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:1rem; border:1px solid var(--border-soft); border-radius:var(--radius-md); margin-bottom:0.75rem;">
          <div>
            <h4 style="font-size:1rem;">${k.title}</h4>
            <div style="font-size:0.82rem; color:var(--text-muted);">${k.category} • Uploaded by ${k.author}</div>
          </div>
          <span class="badge-status upcoming">Approved & Public</span>
        </div>
      `).join('')}
    </div>
  `;
}

// Admin AI Insights
function renderAdminAiInsights() {
  return `
    <div class="dashboard-header">
      <div>
        <h2 class="dashboard-title">Organizational AI Predictive Insights</h2>
        <p class="dashboard-subtitle">Enterprise-wide skill gap forecasting and resource optimization.</p>
      </div>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(340px, 1fr)); gap:1.5rem;">
      <div class="ai-assistant-card" style="background:#fff; border:1px solid var(--sage-light);">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
          <span style="font-size:1.2rem;">🧠</span>
          <h4 style="font-size:1.05rem; color:var(--forest-green);">Cloud & AI Skill Gap Index</h4>
        </div>
        <div style="font-size:1.5rem; font-weight:800; color:var(--alert-red); margin:0.3rem 0;">34% Gap Identified</div>
        <p style="font-size:0.85rem; line-height:1.45; margin-bottom:1rem;">
          Expand peer-to-peer exchanges and enroll 40 more engineers in Spring Boot + LLM cohorts to reduce delivery risks.
        </p>
        <div style="background:var(--sage-pale); padding:0.75rem; border-radius:var(--radius-sm); font-size:0.8rem; font-weight:700; color:var(--forest-green);">
          Prediction: +22% faster velocity once Level 3 certifications are completed.
        </div>
      </div>

      <div class="ai-assistant-card" style="background:#fff; border:1px solid var(--sage-light);">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
          <span style="font-size:1.2rem;">📊</span>
          <h4 style="font-size:1.05rem; color:var(--forest-green);">Trainer Utilization & Capacity Health</h4>
        </div>
        <div style="font-size:1.5rem; font-weight:800; color:var(--forest-green); margin:0.3rem 0;">84% Optimal</div>
        <p style="font-size:0.85rem; line-height:1.45; margin-bottom:1rem;">
          Trainer workloads are balanced. Optimal capacity throughput achieved for Q3 skill exchange cohorts.
        </p>
        <div style="background:var(--sage-pale); padding:0.75rem; border-radius:var(--radius-sm); font-size:0.8rem; font-weight:700; color:var(--forest-green);">
          Status: Zero trainer burnout detected.
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// 7. MODALS, ASSESSMENTS RUNNER & INTERACTION POPUPS
// ============================================================================
function setupModalListeners() {
  const modalOverlay = document.getElementById("modal-overlay");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
}

function openModal(htmlContent) {
  const modalOverlay = document.getElementById("modal-overlay");
  const modalBody = document.getElementById("modal-body");
  if (modalOverlay && modalBody) {
    modalBody.innerHTML = htmlContent;
    modalOverlay.classList.add("active");
  }
}

function closeModal() {
  const modalOverlay = document.getElementById("modal-overlay");
  if (modalOverlay) modalOverlay.classList.remove("active");
  if (state.assessmentTimer) {
    clearInterval(state.assessmentTimer);
    state.assessmentTimer = null;
  }
}

// Authentication Modal (Sign In / Sign Up)
function openAuthModal(type) {
  openModal(`
    <div style="text-align:center; margin-bottom:1.5rem;">
      <div class="logo-icon" style="margin:0 auto 0.8rem auto; width:44px; height:44px;">C</div>
      <h2 style="font-size:1.5rem;">${type === 'signup' ? 'Create Your Account' : 'Welcome Back'}</h2>
      <p style="font-size:0.88rem;">CAPACITY CONNECT Enterprise Portal</p>
    </div>

    <!-- Google One-Click Sign In -->
    <button class="btn-secondary" style="width:100%; justify-content:center; margin-bottom:1.2rem;" onclick="handleGoogleAuth()">
      <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
      Continue with Google
    </button>

    <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:1.2rem;">
      <div style="flex-grow:1; height:1px; background:var(--border-soft);"></div>
      <span style="font-size:0.75rem; color:var(--text-muted);">OR WITH EMAIL</span>
      <div style="flex-grow:1; height:1px; background:var(--border-soft);"></div>
    </div>

    <div style="display:flex; flex-direction:column; gap:0.9rem; margin-bottom:1.5rem;">
      ${type === 'signup' ? `
        <div>
          <label style="font-size:0.82rem; font-weight:700;">Full Name</label>
          <input type="text" id="auth-fullname" placeholder="Marcus Chen" value="Marcus Chen" style="width:100%; padding:0.7rem; border:1px solid var(--border-soft); border-radius:var(--radius-sm); margin-top:0.3rem;">
        </div>
      ` : ''}
      <div>
        <label style="font-size:0.82rem; font-weight:700;">Email Address</label>
        <input type="email" id="auth-email" placeholder="marcus.chen@student.edu" value="marcus.chen@student.edu" style="width:100%; padding:0.7rem; border:1px solid var(--border-soft); border-radius:var(--radius-sm); margin-top:0.3rem;">
      </div>
      <div>
        <label style="font-size:0.82rem; font-weight:700;">Password</label>
        <input type="password" placeholder="••••••••" value="password123" style="width:100%; padding:0.7rem; border:1px solid var(--border-soft); border-radius:var(--radius-sm); margin-top:0.3rem;">
      </div>
    </div>

    <button class="btn-primary" style="width:100%; justify-content:center;" onclick="submitAuthSuccess()">
      ${type === 'signup' ? 'Create Account & Continue ➔' : 'Sign In ➔'}
    </button>
  `);
}

function handleGoogleAuth() {
  showToast("Google account authenticated successfully!", "success");
  closeModal();
  showView("onboarding");
}

function submitAuthSuccess() {
  showToast("Account created successfully!", "success");
  closeModal();
  showView("onboarding");
}

// Skill Exchange Request Modal
function openSkillExchangeModal(trainerId) {
  const trainer = state.trainers.find(t => t.id === trainerId) || state.trainers[0];

  openModal(`
    <div style="margin-bottom:1.2rem;">
      <h3 style="font-size:1.3rem; margin-bottom:0.2rem;">Request Skill Exchange</h3>
      <p style="font-size:0.85rem;">Propose a reciprocal mentorship exchange with <strong>${trainer.fullName}</strong>.</p>
    </div>

    <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.5rem;">
      <div>
        <label style="font-size:0.82rem; font-weight:700; color:var(--forest-green);">Skill You Want to Learn</label>
        <input type="text" id="exchange-wanted" value="${trainer.skills[0]}" style="width:100%; padding:0.7rem; border:1px solid var(--border-soft); border-radius:var(--radius-sm); margin-top:0.3rem;">
      </div>

      <div>
        <label style="font-size:0.82rem; font-weight:700; color:var(--forest-dark);">Skill You Can Teach in Return</label>
        <input type="text" id="exchange-offered" placeholder="e.g. Salsa Dance, UX Design, Public Speaking" value="Salsa Dance & Choreography" style="width:100%; padding:0.7rem; border:1px solid var(--border-soft); border-radius:var(--radius-sm); margin-top:0.3rem;">
      </div>

      <div>
        <label style="font-size:0.82rem; font-weight:700;">Personal Note / Learning Objective</label>
        <textarea id="exchange-note" style="width:100%; height:75px; padding:0.7rem; border:1px solid var(--border-soft); border-radius:var(--radius-sm); margin-top:0.3rem;">Hi ${trainer.fullName}, looking forward to learning from your enterprise experience!</textarea>
      </div>
    </div>

    <button class="btn-primary" style="width:100%; justify-content:center;" onclick="submitSkillExchangeRequest(${trainer.id})">
      Send Exchange Request ➔
    </button>
  `);
}

function submitSkillExchangeRequest(trainerId) {
  const wanted = document.getElementById("exchange-wanted")?.value || "Java Spring Boot";
  const offered = document.getElementById("exchange-offered")?.value || "Salsa Dance";
  const note = document.getElementById("exchange-note")?.value || "";

  state.exchangeRequests.unshift({
    id: Date.now(),
    traineeId: state.currentUser.id,
    traineeName: state.currentUser.fullName,
    trainerId: trainerId,
    trainerName: state.trainers.find(t => t.id === trainerId)?.fullName || "Trainer",
    skillWanted: wanted,
    skillOffered: offered,
    message: note,
    status: "PENDING",
    date: "Just now"
  });

  closeModal();
  showToast("Skill exchange request sent! Your trainer will review it shortly.", "success");
}

// Interactive MCQ Assessment Runner Modal
function startAssessmentModal(assessmentId) {
  const a = state.assessments.find(x => x.id === assessmentId);
  if (!a || !a.questions) return;

  state.currentAssessment = a;
  state.assessmentTimeLeft = (a.duration || 20) * 60;

  openModal(`
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid var(--border-soft); padding-bottom:0.75rem;">
      <div>
        <span class="course-tag">${a.category}</span>
        <h3 style="font-size:1.15rem;">${a.title}</h3>
      </div>
      <div style="font-size:0.9rem; font-weight:800; color:var(--alert-red);" id="exam-timer-display">
        ⏳ 20:00
      </div>
    </div>

    <form id="assessment-exam-form">
      ${a.questions.map((q, idx) => `
        <div style="margin-bottom:1.4rem; padding:1rem; background:var(--sage-pale); border-radius:var(--radius-md);">
          <div style="font-weight:700; font-size:0.92rem; margin-bottom:0.6rem;">
            ${idx + 1}. ${q.question}
          </div>
          <div style="display:flex; flex-direction:column; gap:0.4rem;">
            ${q.options.map((opt, oIdx) => `
              <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem; cursor:pointer; background:#fff; padding:0.5rem 0.8rem; border-radius:var(--radius-sm); border:1px solid var(--border-soft);">
                <input type="radio" name="q_${q.id}" value="${oIdx}">
                <span>${opt}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `).join('')}

      <div style="margin-top:1.5rem;">
        <button type="button" class="btn-primary" style="width:100%; justify-content:center;" onclick="submitExamForAiGrading(${a.id})">
          Submit Assessment for Instant AI Evaluation ➔
        </button>
      </div>
    </form>
  `);

  // Start Live Timer
  if (state.assessmentTimer) clearInterval(state.assessmentTimer);
  state.assessmentTimer = setInterval(() => {
    state.assessmentTimeLeft--;
    const mins = Math.floor(state.assessmentTimeLeft / 60);
    const secs = state.assessmentTimeLeft % 60;
    const disp = document.getElementById("exam-timer-display");
    if (disp) {
      disp.innerText = `⏳ ${mins}:${secs < 10 ? '0' + secs : secs}`;
    }
    if (state.assessmentTimeLeft <= 0) {
      clearInterval(state.assessmentTimer);
      submitExamForAiGrading(a.id);
    }
  }, 1000);
}

function submitExamForAiGrading(assessmentId) {
  if (state.assessmentTimer) {
    clearInterval(state.assessmentTimer);
    state.assessmentTimer = null;
  }

  const a = state.assessments.find(x => x.id === assessmentId);
  if (!a) return;

  // Calculate score instantly
  let score = 0;
  const total = 100;
  const pointsPerQuestion = 100 / a.questions.length;

  a.questions.forEach(q => {
    const selected = document.querySelector(`input[name="q_${q.id}"]:checked`);
    if (selected && parseInt(selected.value) === q.correct) {
      score += pointsPerQuestion;
    }
  });

  const percentage = Math.round(score);
  const passed = percentage >= (a.passingMarks || 70);

  // Update status in state
  a.status = "Completed";
  a.score = percentage;
  a.submittedDate = "Just now";
  a.aiSummary = passed 
    ? `Mastery Level: Scored ${percentage}%. Exceptional comprehension of core concepts.` 
    : `Scored ${percentage}%. Below passing mark. Review recommended with your trainer.`;

  // Display Instant AI Evaluation Results
  openModal(`
    <div style="text-align:center; padding:1rem 0;">
      <div style="font-size:2.8rem; margin-bottom:0.5rem;">${passed ? '🏆' : '📝'}</div>
      <h2 style="font-size:1.6rem; color:var(--forest-green);">${passed ? 'Assessment Passed!' : 'Assessment Complete'}</h2>
      <div style="font-size:2.4rem; font-weight:800; color:var(--forest-dark); margin:0.6rem 0;">
        ${percentage}% <span style="font-size:1rem; color:var(--text-muted);">(${percentage}/100 Marks)</span>
      </div>

      <div style="background:var(--sage-pale); border-radius:var(--radius-md); padding:1.2rem; text-align:left; margin:1.2rem 0;">
        <div style="font-weight:700; font-size:0.85rem; color:var(--forest-green); margin-bottom:0.3rem;">🧠 AI EVALUATION FEEDBACK:</div>
        <p style="font-size:0.88rem; color:var(--text-charcoal); line-height:1.5;">${a.aiSummary}</p>
        <div style="font-size:0.82rem; color:var(--sage-deep); font-weight:600; margin-top:0.6rem;">
          ${passed ? '✓ Credential certificate unlocked in your Certifications tab.' : 'Suggested next step: Ask your AI Learning Assistant for targeted revision resources.'}
        </div>
      </div>

      <button class="btn-primary" style="width:100%; justify-content:center;" onclick="closeModal(); setTraineeTab('assessments');">
        Back to Assessments
      </button>
    </div>
  `);

  showToast(`Exam evaluated: ${percentage}% Score`, passed ? "success" : "warning");
}

// Certificate Viewer Modal
function viewCertificateModal(code) {
  const cert = state.certificates.find(c => c.code === code) || state.certificates[0];
  openModal(`
    <div style="border:3px double var(--gold-muted); padding:2rem; background:#fff; text-align:center; border-radius:var(--radius-md); position:relative;">
      <div style="font-size:0.8rem; letter-spacing:0.1em; color:var(--gold-muted); font-weight:800; margin-bottom:0.4rem;">CAPACITY CONNECT ENTERPRISE ACADEMY</div>
      <h2 style="font-size:1.6rem; color:var(--forest-green); margin-bottom:0.4rem;">CERTIFICATE OF COMPETENCY</h2>
      <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1.5rem;">This officially certifies that</p>
      
      <h3 style="font-size:1.8rem; font-weight:800; margin-bottom:0.5rem; text-decoration:underline; text-decoration-color:var(--gold-muted);">${state.currentUser.fullName}</h3>
      
      <p style="font-size:0.9rem; max-width:440px; margin:0 auto 1.5rem auto;">
        has successfully passed all formal assessments with <strong>${cert.grade}</strong> and demonstrated verified industry mastery in:
      </p>

      <h4 style="font-size:1.2rem; color:var(--forest-dark); margin-bottom:1.8rem;">${cert.title}</h4>

      <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-soft); padding-top:1rem; font-size:0.75rem; color:var(--text-muted);">
        <div>Issue Date: <strong>${cert.issueDate}</strong></div>
        <div>Verification ID: <strong>${cert.code}</strong></div>
      </div>
    </div>

    <div style="margin-top:1.5rem; display:flex; gap:0.75rem;">
      <button class="btn-primary" style="flex-grow:1; justify-content:center;" onclick="window.print()">Print / Download PDF 🖨️</button>
      <button class="btn-secondary" onclick="closeModal()">Close</button>
    </div>
  `);
}

// Course Player Modal
function openCoursePlayer(courseId) {
  const course = state.courses.find(c => c.id === courseId);
  if (!course) return;

  openModal(`
    <div style="margin-bottom:1rem;">
      <span class="course-tag">${course.category}</span>
      <h3 style="font-size:1.3rem;">${course.title}</h3>
      <p style="font-size:0.85rem;">Instructor: <strong>${course.trainer}</strong> • Lesson ${course.completedLessons + 1} of ${course.lessons}</p>
    </div>

    <div style="background:#252A27; border-radius:var(--radius-md); height:240px; display:flex; align-items:center; justify-content:center; color:#fff; margin-bottom:1.2rem;">
      <div style="text-align:center;">
        <div style="font-size:2.5rem; cursor:pointer;" onclick="showToast('Playing lecture video stream...', 'normal')">▶</div>
        <div style="font-size:0.85rem; opacity:0.8; margin-top:0.4rem;">Interactive Lecture Stream</div>
      </div>
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center;">
      <button class="btn-secondary" onclick="showToast('Previous lecture loaded', 'normal')">‹ Previous</button>
      <button class="btn-primary" onclick="markLessonComplete(${course.id})">Mark Complete & Next ➔</button>
    </div>
  `);
}

function markLessonComplete(courseId) {
  const c = state.courses.find(x => x.id === courseId);
  if (c && c.completedLessons < c.lessons) {
    c.completedLessons++;
    c.progress = Math.round((c.completedLessons / c.lessons) * 100);
    showToast(`Lesson completed! Progress: ${c.progress}%`, "success");
  }
  closeModal();
  setTraineeTab("overview");
}

function enrollInCourse(courseId) {
  const c = state.courses.find(x => x.id === courseId);
  if (c) {
    c.enrolled = true;
    showToast(`Enrolled in "${c.title}"!`, "success");
    setTraineeTab("overview");
  }
}

// User Profile Modal
function openProfileModal() {
  openModal(`
    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.2rem;">
      <img src="${state.currentUser.avatarUrl}" style="width:64px; height:64px; border-radius:50%; border:3px solid var(--sage-muted);">
      <div>
        <h3 style="font-size:1.25rem;">${state.currentUser.fullName}</h3>
        <div style="font-size:0.82rem; color:var(--text-muted);">${state.currentUser.email}</div>
        <span class="course-tag" style="margin-top:0.3rem;">Active Role: ${state.currentUser.activeRole}</span>
      </div>
    </div>

    <div class="section-card" style="margin-bottom:1rem;">
      <h4 style="font-size:0.95rem; margin-bottom:0.5rem;">Skills & Matrix</h4>
      <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom:1rem;">
        <span class="trainer-skill-tag">Salsa Dance (Trainer)</span>
        <span class="trainer-skill-tag">Java Spring Boot (Trainee)</span>
        <span class="trainer-skill-tag">MySQL Database (Trainee)</span>
      </div>

      <h4 style="font-size:0.95rem; margin-bottom:0.3rem;">Qualifications</h4>
      <p style="font-size:0.85rem; margin-bottom:0.8rem;">B.Tech in Computer Science • Certified Dance Instructor</p>

      <h4 style="font-size:0.95rem; margin-bottom:0.3rem;">Experience</h4>
      <p style="font-size:0.85rem;">3+ Years Software Development & Creative Mentorship</p>
    </div>

    <button class="btn-danger-subtle" style="width:100%; justify-content:center;" onclick="handleSignOut()">
      Sign Out
    </button>
  `);
}

function handleSignOut() {
  closeModal();
  showToast("Signed out successfully", "normal");
  showView("landing");
}

// Post Session Feedback Modal
function openFeedbackModal() {
  openModal(`
    <div style="margin-bottom:1.2rem;">
      <h3 style="font-size:1.3rem; margin-bottom:0.2rem;">Mentorship Session Feedback</h3>
      <p style="font-size:0.85rem;">Share your evaluation of Dr. Aris Vance's Java Spring Boot session.</p>
    </div>

    <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.5rem;">
      <div>
        <label style="font-size:0.82rem; font-weight:700;">Rating (1 to 5 Stars)</label>
        <div style="font-size:1.5rem; color:var(--gold-muted); cursor:pointer; margin-top:0.3rem;">
          ★★★★★
        </div>
      </div>

      <div>
        <label style="font-size:0.82rem; font-weight:700;">Key Takeaways & Comments</label>
        <textarea id="feedback-txt" placeholder="Explain how the session helped your understanding..." style="width:100%; height:80px; padding:0.7rem; border:1px solid var(--border-soft); border-radius:var(--radius-sm); margin-top:0.3rem;"></textarea>
      </div>
    </div>

    <button class="btn-primary" style="width:100%; justify-content:center;" onclick="submitFeedback()">
      Submit Feedback ➔
    </button>
  `);
}

function submitFeedback() {
  closeModal();
  showToast("Thank you! Feedback recorded for trainer rating calculation.", "success");
}

// Sleek Toast Popup Engine
function showToast(message, type = "normal") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : type === 'warning' ? '⚠️' : '✦'}</span>
    <div style="flex-grow:1;">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
