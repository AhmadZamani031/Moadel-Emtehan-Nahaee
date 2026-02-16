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

// --- HELPERS ---
// تبدیل اعداد انگلیسی به ارقام فارسی فقط برای نمایش در رابط کاربری
function toPersianDigits(n) {
    if (n === null || n === undefined) return '';
    const str = n.toString();
    const persianMap = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return str.replace(/\d/g, d => persianMap[d]);
}

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
// ترتیب منطقی صفحات برای محاسبه قدم‌به‌قدم نوار پیشرفت
// (فلو اصلی محاسبه معدل) — صفحه contact به صورت ویژه ۱۰۰٪ در نظر گرفته می‌شود
const PAGE_ORDER = ['home', 'gpa-intro', 'major', 'grade', 'calc', 'result'];

// Flag to prevent pushing history entries during popstate handling
let isPopstateNavigation = false;

// محاسبه و به‌روزرسانی نوار پیشرفت بر اساس مرحله فعلی
function updateProgressBar(pageId) {
    if (!progressBar) return;

    let progress = 0;

    const index = PAGE_ORDER.indexOf(pageId);
    if (index !== -1 && PAGE_ORDER.length > 1) {
        progress = (index / (PAGE_ORDER.length - 1)) * 100;
    }

    // صفحه تماس همیشه به عنوان انتهای مسیر (۱۰۰٪) در نظر گرفته می‌شود
    if (pageId === 'contact') {
        progress = 100;
    }

    // اطمینان از مقادیر معتبر
    progress = Math.max(0, Math.min(progress, 100));

    // به‌روزرسانی شدت رنگ بر اساس مرحله
    progressBar.classList.remove('progress-stage-low', 'progress-stage-mid', 'progress-stage-high');
    if (progress === 0) {
        // بدون کلاس خاص در حالت ابتدایی
    } else if (progress < 34) {
        progressBar.classList.add('progress-stage-low');
    } else if (progress < 67) {
        progressBar.classList.add('progress-stage-mid');
    } else {
        progressBar.classList.add('progress-stage-high');
    }

    // ریست و اعمال کلاس Pulse برای انیمیشن ظریف هنگام تغییر
    progressBar.classList.remove('progress-pulse');
    // Force reflow to restart animation each time
    void progressBar.offsetWidth;
    progressBar.style.width = `${progress}%`;
    progressBar.classList.add('progress-pulse');
}

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

    switch(pageId) {
        case 'home':
            titleText = 'دستیار تحصیلی من';
            backBtn.style.display = 'none';
            break;
        case 'contact':
            titleText = 'تماس با ما';
            backBtn.style.display = 'block';
            break;
        case 'gpa-intro':
            titleText = 'محاسبه معدل سوابق';
            backBtn.style.display = 'block';
            break;
        case 'major':
            titleText = 'انتخاب رشته';
            backBtn.style.display = 'block';
            break;
        case 'grade':
            titleText = 'انتخاب پایه';
            backBtn.style.display = 'block';
            break;
        case 'calc':
            titleText = 'ورود نمرات';
            backBtn.style.display = 'block';
            break;
        case 'result':
            titleText = 'کارنامه نهایی';
            backBtn.style.display = 'block';
            break;
    }

    if(pageTitle) pageTitle.innerText = titleText;
    updateProgressBar(pageId);

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
    if (templateId === 'step-home') initHomeTimer();
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
window.calculateTargetPath = calculateTargetPath;
window.startStudyTimer = startStudyTimer;
window.pauseStudyTimer = pauseStudyTimer;
window.resetStudyTimer = resetStudyTimer;
// کمک برای متمایز کردن فیلدهایی که در محاسبه شرکت می‌کنند
function updateInputFilledState(el) {
    const raw = el.value;
    const val = parseFloat(raw);
    if (!isNaN(val) && raw !== '' && val >= 0 && val <= 20) {
        el.classList.add('input-filled');
    } else {
        el.classList.remove('input-filled');
    }
}

window.handleInput = function(el, subjectName) {
    state.scores[subjectName] = el.value;
    updateInputFilledState(el);
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
    updateInputFilledState(el);
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
                    <span class="text-[10px] text-gray-500 bg-gray-100 dark:bg-gray-700 w-fit px-1.5 rounded mt-1">ضریب: ${toPersianDigits(sub.coeff)}</span>
                </div>
                <input 
                    type="number" 
                    inputmode="decimal" 
                    placeholder="--" 
                    value="${score}"
                    class="w-20 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-center font-bold text-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all dir-ltr persian-number-input"
                    oninput="window.handleInput(this, '${sub.name}')"
                    onblur="window.validateInput(this, '${sub.name}')"
                >
            `;
            container.appendChild(div);

            const input = div.querySelector('input');
            if (input) {
                updateInputFilledState(input);
            }
        });
    }
    calculateLive();
}

function calculateLive() {
    const subjects = COEFFICIENTS[state.major][state.grade];
    let totalWeightedScore = 0;
    let totalCoeffs = 0;

    subjects.forEach(sub => {
        const raw = state.scores[sub.name];
        let score = parseFloat(raw);
        // فقط دروسی که مقدار معتبر بین ۰ تا ۲۰ دارند در محاسبه شرکت می‌کنند
        if (!isNaN(score) && raw !== '' && score >= 0 && score <= 20) {
            totalWeightedScore += score * sub.coeff;
            totalCoeffs += sub.coeff;
        }
    });

    const liveScoreEl = document.getElementById('live-score');
    if (totalCoeffs === 0) {
        if (liveScoreEl) liveScoreEl.innerText = '--';
        return;
    }

    const average = totalWeightedScore / totalCoeffs;
    if(liveScoreEl) liveScoreEl.innerText = toPersianDigits(average.toFixed(2));
}

// --- STUDY TIMER LOGIC ---
let timerMode = 'study';
let timerIntervalId = null;
let timerTotalSeconds = 0;
let timerRemainingSeconds = 0;

function getTimerDurationsFromInputs() {
    const studyInput = document.getElementById('study-duration-input');
    const breakInput = document.getElementById('break-duration-input');

    let studyMinutes = studyInput ? parseInt(studyInput.value, 10) : NaN;
    let breakMinutes = breakInput ? parseInt(breakInput.value, 10) : NaN;

    if (isNaN(studyMinutes) || studyMinutes <= 0) studyMinutes = 25;
    if (isNaN(breakMinutes) || breakMinutes <= 0) breakMinutes = 5;

    if (studyInput) studyInput.value = studyMinutes;
    if (breakInput) breakInput.value = breakMinutes;

    return { studyMinutes, breakMinutes };
}

function setTimerForCurrentMode(resetRemaining = true) {
    const { studyMinutes, breakMinutes } = getTimerDurationsFromInputs();
    const minutes = timerMode === 'break' ? breakMinutes : studyMinutes;
    timerTotalSeconds = Math.max(1, minutes * 60);

    if (resetRemaining || timerRemainingSeconds <= 0 || timerRemainingSeconds > timerTotalSeconds) {
        timerRemainingSeconds = timerTotalSeconds;
    }
}

function updateTimerUI() {
    const displayEl = document.getElementById('study-timer-display');
    const modeEl = document.getElementById('study-timer-mode');
    const progressEl = document.getElementById('study-timer-progress');

    if (!displayEl || !modeEl || !progressEl) {
        if (timerIntervalId) {
            clearInterval(timerIntervalId);
            timerIntervalId = null;
        }
        return;
    }

    const remaining = Math.max(0, timerRemainingSeconds);
    const total = Math.max(1, timerTotalSeconds);

    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    const timeStr = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    displayEl.textContent = toPersianDigits(timeStr);

    modeEl.textContent = timerMode === 'break' ? 'استراحت' : 'مطالعه';
    modeEl.classList.remove('text-primary', 'text-green-500');
    modeEl.classList.add(timerMode === 'break' ? 'text-green-500' : 'text-primary');

    const percent = Math.max(0, Math.min(100, (remaining / total) * 100));
    progressEl.style.width = `${percent}%`;
    progressEl.classList.remove('bg-primary', 'bg-green-500');
    progressEl.classList.add(timerMode === 'break' ? 'bg-green-500' : 'bg-primary');
}

function playTimerBeep() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 880;
        gain.gain.value = 0.15;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        setTimeout(() => {
            osc.stop();
            ctx.close();
        }, 300);
    } catch (e) {
        // ignore audio errors
    }
}

function switchTimerMode() {
    const { studyMinutes, breakMinutes } = getTimerDurationsFromInputs();
    timerMode = (timerMode === 'study') ? 'break' : 'study';
    const minutes = timerMode === 'break' ? breakMinutes : studyMinutes;
    timerTotalSeconds = Math.max(1, minutes * 60);
    timerRemainingSeconds = timerTotalSeconds;
}

function startStudyTimer() {
    const displayEl = document.getElementById('study-timer-display');
    if (!displayEl) return;

    if (!timerMode) timerMode = 'study';
    setTimerForCurrentMode(timerRemainingSeconds <= 0);
    updateTimerUI();

    if (timerIntervalId) return;

    timerIntervalId = setInterval(() => {
        timerRemainingSeconds -= 1;
        if (timerRemainingSeconds <= 0) {
            playTimerBeep();
            switchTimerMode();
        }
        updateTimerUI();
    }, 1000);
}

function pauseStudyTimer() {
    if (timerIntervalId) {
        clearInterval(timerIntervalId);
        timerIntervalId = null;
    }
}

function resetStudyTimer() {
    pauseStudyTimer();
    timerMode = 'study';
    setTimerForCurrentMode(true);
    updateTimerUI();
}

function initHomeTimer() {
    const displayEl = document.getElementById('study-timer-display');
    if (!displayEl) return;
    timerMode = 'study';
    setTimerForCurrentMode(true);
    updateTimerUI();
}

// --- SMART TARGETING LOGIC ---
function calculateTargetPath() {
    const inputEl = document.getElementById('target-gpa-input');
    const msgEl = document.getElementById('target-gpa-message');
    if (!inputEl || !msgEl) return;

    let rawTarget = inputEl.value;
    let target = parseFloat(rawTarget);

    msgEl.classList.remove('text-red-500', 'text-green-600', 'text-accent');

    if (isNaN(target)) {
        msgEl.textContent = 'لطفاً معدل هدف خود را به صورت عددی بین ۰ تا ۲۰ وارد کنید.';
        msgEl.classList.add('text-red-500');
        return;
    }

    if (target < 0) target = 0;
    if (target > 20) target = 20;

    if (!state.major || !state.grade) {
        msgEl.textContent = 'لطفاً ابتدا رشته و پایه تحصیلی خود را انتخاب کنید.';
        msgEl.classList.add('text-red-500');
        return;
    }

    const subjects = COEFFICIENTS[state.major] && COEFFICIENTS[state.major][state.grade];
    if (!subjects) {
        msgEl.textContent = 'اطلاعات ضرایب برای این رشته/پایه در دسترس نیست.';
        msgEl.classList.add('text-red-500');
        return;
    }

    let totalCoeffsAll = 0;
    let totalWeightedFilled = 0;
    let totalCoeffsFilled = 0;

    subjects.forEach(sub => {
        const coeff = sub.coeff;
        totalCoeffsAll += coeff;

        const raw = state.scores[sub.name];
        const score = parseFloat(raw);
        if (!isNaN(score) && raw !== '' && score >= 0 && score <= 20) {
            totalWeightedFilled += score * coeff;
            totalCoeffsFilled += coeff;
        }
    });

    if (totalCoeffsAll === 0) {
        msgEl.textContent = 'ضرایب این رشته/پایه به درستی تنظیم نشده‌اند.';
        msgEl.classList.add('text-red-500');
        return;
    }

    const remainingCoeffs = totalCoeffsAll - totalCoeffsFilled;
    const targetStr = toPersianDigits(target.toFixed(2));

    // اگر هیچ درس باقیمانده‌ای برای بهبود نمانده باشد
    if (remainingCoeffs <= 0) {
        const currentAvg = totalWeightedFilled / totalCoeffsAll;
        const currentStr = toPersianDigits(currentAvg.toFixed(2));

        if (currentAvg + 1e-6 >= target) {
            msgEl.textContent = `شما هم‌اکنون به معدل هدف ${targetStr} رسیده‌اید. معدل فعلی شما: ${currentStr} است.`;
            msgEl.classList.add('text-green-600');
        } else {
            msgEl.textContent = `همه نمرات وارد شده‌اند و امکان تغییر معدل وجود ندارد. معدل فعلی شما: ${currentStr} است.`;
            msgEl.classList.add('text-red-500');
        }
        return;
    }

    // فرمول اصلی هدف‌گذاری:
    // (معدل هدف × مجموع کل ضرایب) - (مجموع نمره*ضریب دروس وارد شده) تقسیم بر (مجموع ضرایب دروس باقی‌مانده)
    const requiredAvg = (target * totalCoeffsAll - totalWeightedFilled) / remainingCoeffs;

    // حداکثر معدل ممکن با فرض گرفتن ۲۰ در دروس باقیمانده
    const maxPossibleAvg = (totalWeightedFilled + remainingCoeffs * 20) / totalCoeffsAll;

    if (requiredAvg > 20 + 1e-6) {
        const maxStr = toPersianDigits(maxPossibleAvg.toFixed(2));
        msgEl.textContent = `متأسفانه با نمرات فعلی، رسیدن به این هدف ممکن نیست. حداکثر معدل ممکن برای شما: ${maxStr} است.`;
        msgEl.classList.add('text-red-500');
        return;
    }

    if (requiredAvg < 0 - 1e-6) {
        msgEl.textContent = 'هدف شما در دسترس است! حتی با نمره صفر در دروس باقی‌مانده هم به این معدل می‌رسید.';
        msgEl.classList.add('text-green-600');
        return;
    }

    const clampedRequired = Math.max(0, Math.min(20, requiredAvg));
    const requiredStr = toPersianDigits(clampedRequired.toFixed(2));
    msgEl.textContent = `شما برای رسیدن به معدل ${targetStr}، در دروس باقی‌مانده به میانگین نمره ${requiredStr} نیاز دارید.`;
    msgEl.classList.add('text-accent');
}

function calculateFinal() {
    // هشدار ملایم در صورت وجود فیلد خالی
    if (state.major && state.grade) {
        const subjects = COEFFICIENTS[state.major][state.grade];
        let hasEmpty = false;
        subjects.forEach(sub => {
            const raw = state.scores[sub.name];
            const score = parseFloat(raw);
            if (raw === undefined || raw === '' || isNaN(score)) {
                hasEmpty = true;
            }
        });
        if (hasEmpty) {
            showToast('محاسبه بر اساس دروس وارد شده انجام شد. برای دقت کامل، همه نمرات را وارد کنید.');
        }
    }

    goToPage('result');
}

// نمایش Toast ساده و ملایم در پایین صفحه
function showToast(message) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'app-toast';
        toast.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-4 py-2 rounded-full text-xs shadow-lg z-50 opacity-0 transition-opacity duration-300';
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.remove('opacity-0');

    clearTimeout(showToast._timeoutId);
    showToast._timeoutId = setTimeout(() => {
        toast.classList.add('opacity-0');
    }, 3500);
}

// --- RESULT LOGIC ---
function initResult() {
    const subjects = COEFFICIENTS[state.major][state.grade];
    let totalWeightedScore = 0;
    let totalCoeffs = 0;

    subjects.forEach(sub => {
        const raw = state.scores[sub.name];
        let score = parseFloat(raw);
        // فقط دروسی که مقدار معتبر بین ۰ تا ۲۰ دارند در محاسبه شرکت می‌کنند
        if (!isNaN(score) && raw !== '' && score >= 0 && score <= 20) {
            totalWeightedScore += score * sub.coeff;
            totalCoeffs += sub.coeff;
        }
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
            displayEl.innerText = toPersianDigits(currentVal.toFixed(2));

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
    const text = toPersianDigits(`معدل کتبی نهایی من: ${score}\nرشته: ${getMajorName(state.major)}\nمحاسبه شده با دستیار تحصیلی من`);
    
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
