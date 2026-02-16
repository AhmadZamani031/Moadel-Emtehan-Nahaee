// --- DATA: ضرایب دقیق طبق درخواست ---
const COEFFICIENTS = {
    // 1. ریاضی فیزیک
    math: {
        '12': [
            { name: 'فارسی ۳', coeff: 11.09 }, { name: 'عربی ۳', coeff: 4.64 },
            { name: 'دین و زندگی ۳', coeff: 8.47 }, { name: 'زبان خارجی ۳', coeff: 6.05 },
            { name: 'سلامت و بهداشت', coeff: 1.76 }, { name: 'علوم اجتماعی', coeff: 1.31 },
            { name: 'حسابان ۲', coeff: 8.17 }, { name: 'هندسه ۳', coeff: 5.49 },
            { name: 'ریاضیات گسسته', coeff: 4.71 }, { name: 'فیزیک ۳', coeff: 9.26 },
            { name: 'شیمی ۳', coeff: 10.70 }
        ],
        '11': [
            { name: 'فارسی ۲', coeff: 5.95 }, { name: 'عربی ۲', coeff: 2.62 },
            { name: 'دین و زندگی ۲', coeff: 4.78 }, { name: 'زبان خارجی ۲', coeff: 3.32 },
            { name: 'هندسه ۲', coeff: 5.10 }, { name: 'فیزیک ۲', coeff: 6.57 }
        ]
    },
    // 2. علوم تجربی
    experimental: {
        '12': [
            { name: 'فارسی ۳', coeff: 11.09 }, { name: 'عربی ۳', coeff: 4.64 },
            { name: 'دین و زندگی ۳', coeff: 8.47 }, { name: 'زبان خارجی ۳', coeff: 6.05 },
            { name: 'سلامت و بهداشت', coeff: 1.76 }, { name: 'علوم اجتماعی', coeff: 1.31 },
            { name: 'ریاضی ۳', coeff: 10.04 }, { name: 'زیست‌شناسی ۳', coeff: 10.66 },
            { name: 'فیزیک ۳', coeff: 8.45 }, { name: 'شیمی ۳', coeff: 9.19 }
        ],
        '11': [
            { name: 'فارسی ۲', coeff: 5.95 }, { name: 'عربی ۲', coeff: 2.62 },
            { name: 'دین و زندگی ۲', coeff: 4.78 }, { name: 'زبان خارجی ۲', coeff: 3.32 },
            { name: 'زیست‌شناسی ۲', coeff: 6.39 }, { name: 'شیمی ۲', coeff: 5.27 }
        ]
    },
    // 3. علوم انسانی
    humanities: {
        '12': [
            { name: 'فارسی ۳', coeff: 11.09 }, { name: 'دین و زندگی ۳', coeff: 8.47 },
            { name: 'زبان خارجی ۳', coeff: 6.05 }, { name: 'سلامت و بهداشت', coeff: 1.76 },
            { name: 'ریاضی و آمار ۳', coeff: 7.71 }, { name: 'علوم و فنون ادبی ۳', coeff: 8.68 },
            { name: 'عربی ۳ تخصصی', coeff: 4.30 }, { name: 'تاریخ ۳', coeff: 5.38 },
            { name: 'جغرافیا ۳', coeff: 7.71 }, { name: 'جامعه‌شناسی ۳', coeff: 4.96 },
            { name: 'فلسفه ۲', coeff: 5.55 }
        ],
        '11': [
            { name: 'فارسی ۲', coeff: 5.95 }, { name: 'دین و زندگی ۲', coeff: 4.78 },
            { name: 'زبان خارجی ۲', coeff: 3.32 }, { name: 'عربی ۲ تخصصی', coeff: 4.23 },
            { name: 'تاریخ ۲', coeff: 5.24 }, { name: 'جامعه‌شناسی ۲', coeff: 4.82 }
        ]
    },
    // 4. علوم و معارف اسلامی (جدید)
    maaref: {
        '12': [
            { name: 'فارسی ۳', coeff: 11.09 }, { name: 'اصول عقاید ۳', coeff: 8.47 },
            { name: 'زبان خارجی ۳', coeff: 6.05 }, { name: 'سلامت و بهداشت', coeff: 1.76 },
            { name: 'ریاضی و آمار ۳', coeff: 7.12 }, { name: 'علوم و فنون ادبی ۳', coeff: 10.35 },
            { name: 'عربی ۳ تخصصی', coeff: 6.24 }, { name: 'تاریخ ۳ تخصصی', coeff: 4.46 },
            { name: 'احکام ۳', coeff: 4.77 }, { name: 'علوم و معارف قرآنی ۳', coeff: 4.55 },
            { name: 'فلسفه ۲', coeff: 6.80 }
        ],
        '11': [
            { name: 'فارسی ۲', coeff: 5.95 }, { name: 'اصول عقاید ۲', coeff: 4.78 },
            { name: 'زبان خارجی ۲', coeff: 3.32 }, { name: 'عربی ۲ تخصصی', coeff: 5.75 },
            { name: 'تاریخ ۲ تخصصی', coeff: 3.94 }, { name: 'علوم و معارف قرآنی ۲', coeff: 4.59 }
        ]
    },
    // 5. هنر (جدید)
    art: {
        '12': [
            { name: 'فارسی ۳', coeff: 11.55 }, { name: 'عربی ۳', coeff: 4.83 },
            { name: 'دین و زندگی ۳', coeff: 8.82 }, { name: 'زبان خارجی ۳', coeff: 6.30 },
            { name: 'سلامت و بهداشت', coeff: 1.83 }
        ],
        '11': [
            { name: 'فارسی ۲', coeff: 5.61 }, { name: 'عربی ۲', coeff: 2.94 },
            { name: 'دین و زندگی ۲', coeff: 4.29 }, { name: 'زبان خارجی ۲', coeff: 3.83 }
        ]
    },
    // 6. زبان (همانند هنر)
    language: {
        '12': [
            { name: 'فارسی ۳', coeff: 11.55 }, { name: 'عربی ۳', coeff: 4.83 },
            { name: 'دین و زندگی ۳', coeff: 8.82 }, { name: 'زبان خارجی ۳', coeff: 6.30 },
            { name: 'سلامت و بهداشت', coeff: 1.83 }
        ],
        '11': [
            { name: 'فارسی ۲', coeff: 5.61 }, { name: 'عربی ۲', coeff: 2.94 },
            { name: 'دین و زندگی ۲', coeff: 4.29 }, { name: 'زبان خارجی ۲', coeff: 3.83 }
        ]
    }
};

// --- STATE ---
let state = {
    page: 'home', // home, contact, gpa-intro, major, grade, calc, result
    major: null,
    grade: null,
    scores: {}
};

// --- DOM ELEMENTS ---
const app = document.getElementById('app');
const backBtn = document.getElementById('back-btn');
const pageTitle = document.getElementById('page-title');
const progressBar = document.getElementById('progress-bar');
const themeToggle = document.getElementById('theme-toggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

// --- INITIALIZATION ---
function init() {
    // 1. Theme
    const storedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = storedTheme === 'dark' || (!storedTheme && systemDark);
    applyTheme(isDark);

    // 2. Load State (Optional persistence)
    const savedState = localStorage.getItem('gpaState');
    if (savedState) {
        try {
            state = JSON.parse(savedState);
        } catch (e) {
            localStorage.removeItem('gpaState');
            state.page = 'home';
        }
    }

    // 3. Determine start page: prefer hash in URL, then saved state, then home
    let startPage = state.page || 'home';
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'contact', 'gpa-intro', 'major', 'grade', 'calc', 'result'].includes(hash)) {
        startPage = hash;
    }

    // 4. Replace initial history entry so popstate has valid state
    const initialHistoryState = { page: startPage, major: state.major, grade: state.grade };
    window.history.replaceState(initialHistoryState, '', `#${startPage}`);

    // 5. Navigate without pushing a new history entry
    isPopstateNavigation = true;
    goToPage(startPage);
    isPopstateNavigation = false;

    // 6. Listeners
    if(themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if(backBtn) backBtn.addEventListener('click', goBack);
}

// --- THEME LOGIC ---
function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(!isDark);
}

function applyTheme(isDark) {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if(moonIcon) { moonIcon.style.opacity = '0'; moonIcon.style.transform = 'rotate(-90deg)'; }
        if(sunIcon) { sunIcon.style.opacity = '1'; sunIcon.style.transform = 'rotate(0deg)'; }
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if(sunIcon) { sunIcon.style.opacity = '0'; sunIcon.style.transform = 'rotate(90deg)'; }
        if(moonIcon) { moonIcon.style.opacity = '1'; moonIcon.style.transform = 'rotate(0deg)'; }
    }
}

// --- MENU & SIDEBAR ---
function toggleMenu() {
    const isOpen = !sidebar.classList.contains('translate-x-full');
    
    if (isOpen) {
        // Close
        sidebar.classList.add('translate-x-full');
        sidebarOverlay.classList.remove('opacity-100');
        sidebarOverlay.classList.add('opacity-0');
        setTimeout(() => sidebarOverlay.classList.add('hidden'), 300);
    } else {
        // Open
        sidebarOverlay.classList.remove('hidden');
        // small delay to allow transition
        setTimeout(() => {
            sidebarOverlay.classList.remove('opacity-0');
            sidebarOverlay.classList.add('opacity-100');
            sidebar.classList.remove('translate-x-full');
        }, 10);
    }
}

// --- NAVIGATION & ROUTING ---
const PAGE_ORDER = ['gpa-intro', 'major', 'grade', 'calc', 'result'];

// Flag to prevent pushing history entries during popstate handling
let isPopstateNavigation = false;

function goToPage(pageId) {
    state.page = pageId;
    saveState();

    // Push browser history entry (skip during popstate or initial load)
    if (!isPopstateNavigation) {
        const historyState = { page: pageId, major: state.major, grade: state.grade };
        window.history.pushState(historyState, '', `#${pageId}`);
    }

    // Update Title & Progress
    let titleText = 'دستیار تحصیلی من';
    let progress = 0;

    switch(pageId) {
        case 'home':
            titleText = 'دستیار تحصیلی من';
            progress = 0;
            backBtn.style.display = 'none';
            break;
        case 'contact':
            titleText = 'تماس با ما';
            progress = 100;
            backBtn.style.display = 'block';
            break;
        case 'gpa-intro':
            titleText = 'محاسبه معدل سوابق';
            progress = 10;
            backBtn.style.display = 'block';
            break;
        case 'major':
            titleText = 'انتخاب رشته';
            progress = 30;
            backBtn.style.display = 'block';
            break;
        case 'grade':
            titleText = 'انتخاب پایه';
            progress = 50;
            backBtn.style.display = 'block';
            break;
        case 'calc':
            titleText = 'ورود نمرات';
            progress = 80;
            backBtn.style.display = 'block';
            break;
        case 'result':
            titleText = 'کارنامه نهایی';
            progress = 100;
            backBtn.style.display = 'block';
            break;
    }

    if(pageTitle) pageTitle.innerText = titleText;
    if(progressBar) progressBar.style.width = `${progress}%`;

    // Render Content
    renderTemplate(`step-${pageId}`);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
    if (state.page === 'home') return;

    if (state.page === 'contact' || state.page === 'gpa-intro') {
        goToPage('home');
        return;
    }

    const currentIndex = PAGE_ORDER.indexOf(state.page);
    if (currentIndex > 0) {
        goToPage(PAGE_ORDER[currentIndex - 1]);
    } else {
        goToPage('home');
    }
}

// --- BROWSER BACK/FORWARD SUPPORT ---
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        // Restore major/grade from history state so calc/result pages work
        if (event.state.major !== undefined) state.major = event.state.major;
        if (event.state.grade !== undefined) state.grade = event.state.grade;

        isPopstateNavigation = true;
        goToPage(event.state.page);
        isPopstateNavigation = false;
    } else {
        // No state (initial entry) — go home
        isPopstateNavigation = true;
        goToPage('home');
        isPopstateNavigation = false;
    }
});

function renderTemplate(templateId) {
    if(!app) return;
    app.innerHTML = '';
    const template = document.getElementById(templateId);
    if (!template) {
        console.error(`Template ${templateId} not found`);
        return;
    }
    const clone = template.content.cloneNode(true);
    app.appendChild(clone);

    // Initialize logic for specific pages
    if (templateId === 'step-calc') initCalculator();
    if (templateId === 'step-result') initResult();
}

// --- LOGIC FUNCTIONS ---
function selectMajor(major) {
    state.major = major;
    goToPage('grade');
}

function selectGrade(grade) {
    state.grade = grade;
    goToPage('calc');
}

function saveState() {
    localStorage.setItem('gpaState', JSON.stringify(state));
}

function resetInputs() {
    if(confirm('آیا مطمئن هستید که می‌خواهید تمام نمرات را پاک کنید؟')) {
        state.scores = {};
        saveState();
        initCalculator();
    }
}

// --- GLOBAL EXPORTS FOR HTML ---
window.toggleMenu = toggleMenu;
window.goToPage = goToPage;
window.selectMajor = selectMajor;
window.selectGrade = selectGrade;
window.resetInputs = resetInputs;
window.calculateFinal = calculateFinal;
window.shareResult = shareResult;
window.handleInput = function(el, subjectName) {
    state.scores[subjectName] = el.value;
    calculateLive();
}
window.validateInput = function(el, subjectName) {
    let val = parseFloat(el.value);
    if (isNaN(val) || el.value === '') return;
    if (val < 0) val = 0;
    if (val > 20) val = 20;
    val = Math.round(val * 4) / 4; // Round to nearest 0.25
    el.value = val;
    state.scores[subjectName] = val;
    saveState();
    calculateLive();
}

// --- CALCULATOR LOGIC ---
function initCalculator() {
    const container = document.getElementById('inputs-container');
    const title = document.getElementById('calc-title');
    
    if (!state.major || !state.grade) { goToPage('home'); return; }

    const subjects = COEFFICIENTS[state.major][state.grade];
    
    if(title) title.innerText = `نمرات پایه ${state.grade} ${getMajorName(state.major)}`;
    if(container) {
        container.innerHTML = '';
        subjects.forEach((sub, idx) => {
            const score = state.scores[sub.name] !== undefined ? state.scores[sub.name] : '';
            const div = document.createElement('div');
            div.className = "glass-panel p-3 rounded-xl flex items-center justify-between gap-3 animate-slide-in";
            div.style.animationDelay = `${idx * 0.05}s`;
            
            div.innerHTML = `
                <div class="flex flex-col flex-grow">
                    <label class="font-bold text-sm text-gray-700 dark:text-gray-200">${sub.name}</label>
                    <span class="text-[10px] text-gray-500 bg-gray-100 dark:bg-gray-700 w-fit px-1.5 rounded mt-1">ضریب: ${sub.coeff}</span>
                </div>
                <input 
                    type="number" 
                    inputmode="decimal" 
                    placeholder="--" 
                    value="${score}"
                    class="w-20 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-center font-bold text-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all dir-ltr"
                    oninput="window.handleInput(this, '${sub.name}')"
                    onblur="window.validateInput(this, '${sub.name}')"
                >
            `;
            container.appendChild(div);
        });
    }
    calculateLive();
}

function calculateLive() {
    const subjects = COEFFICIENTS[state.major][state.grade];
    let totalWeightedScore = 0;
    let totalCoeffs = 0;

    subjects.forEach(sub => {
        let score = parseFloat(state.scores[sub.name]);
        if (isNaN(score)) score = 0; 
        totalWeightedScore += score * sub.coeff;
        totalCoeffs += sub.coeff;
    });

    const average = totalCoeffs > 0 ? (totalWeightedScore / totalCoeffs) : 0;
    const liveScoreEl = document.getElementById('live-score');
    if(liveScoreEl) liveScoreEl.innerText = average.toFixed(2);
}

function calculateFinal() {
    goToPage('result');
}

// --- RESULT LOGIC ---
function initResult() {
    const subjects = COEFFICIENTS[state.major][state.grade];
    let totalWeightedScore = 0;
    let totalCoeffs = 0;

    subjects.forEach(sub => {
        let score = parseFloat(state.scores[sub.name]);
        if (isNaN(score)) score = 0;
        totalWeightedScore += score * sub.coeff;
        totalCoeffs += sub.coeff;
    });

    const average = totalCoeffs > 0 ? (totalWeightedScore / totalCoeffs) : 0;

    const displayEl = document.getElementById('final-score-display');
    const circle = document.getElementById('score-ring');
    const gradeEl = document.getElementById('res-grade');
    const majorEl = document.getElementById('res-major');

    if(gradeEl) gradeEl.innerText = state.grade === '12' ? 'دوازدهم' : 'یازدهم';
    if(majorEl) majorEl.innerText = getMajorName(state.major);
    
    // Animate Ring
    if(circle) {
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        circle.style.strokeDashoffset = circumference;
        circle.style.strokeDasharray = circumference;
        
        setTimeout(() => {
             const offset = circumference - (average / 20) * circumference;
             circle.style.strokeDashoffset = offset;
        }, 100);
    }

    // Animate Number
    if(displayEl) {
        let start = 0;
        const duration = 1500;
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            
            const currentVal = start + (average - start) * ease;
            displayEl.innerText = currentVal.toFixed(2);

            if (progress < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }
}

function getMajorName(key) {
    const map = {
        'math': 'ریاضی فیزیک',
        'experimental': 'علوم تجربی',
        'humanities': 'علوم انسانی',
        'maaref': 'علوم و معارف اسلامی',
        'art': 'هنر',
        'language': 'زبان‌های خارجی'
    };
    return map[key] || '';
}

function shareResult() {
    const displayEl = document.getElementById('final-score-display');
    const score = displayEl ? displayEl.innerText : '0';
    const text = `معدل کتبی نهایی من: ${score}\nرشته: ${getMajorName(state.major)}\nمحاسبه شده با دستیار تحصیلی من`;
    
    if (navigator.share) {
        navigator.share({
            title: 'نتیجه معدل',
            text: text,
            url: window.location.href
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(text).then(() => {
            alert('نتیجه کپی شد! می‌توانید برای دوستانتان ارسال کنید.');
        });
    }
}

// Start App
window.addEventListener('DOMContentLoaded', init);
