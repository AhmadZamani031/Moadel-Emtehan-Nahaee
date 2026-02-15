// --- DATA ---
const COEFFICIENTS = {
    math: {
        '12': [
            { name: 'فارسی ۳', coeff: 11.09 }, { name: 'عربی ۳', coeff: 4.64 },
            { name: 'دین و زندگی ۳', coeff: 8.47 }, { name: 'زبان انگلیسی ۳', coeff: 6.05 },
            { name: 'سلامت و بهداشت', coeff: 1.76 }, { name: 'علوم اجتماعی', coeff: 1.31 },
            { name: 'حسابان ۲', coeff: 8.17 }, { name: 'هندسه ۳', coeff: 5.49 },
            { name: 'ریاضیات گسسته', coeff: 4.71 }, { name: 'فیزیک ۳', coeff: 9.26 },
            { name: 'شیمی ۳', coeff: 10.70 }
        ],
        '11': [
            // لیست اصلاح شده طبق کد اولیه شما
            { name: 'فارسی ۲', coeff: 5.95 }, 
            { name: 'عربی ۲', coeff: 2.62 }, 
            { name: 'دین و زندگی ۲', coeff: 4.78 },
            { name: 'زبان انگلیسی ۲', coeff: 3.32 }, 
            { name: 'هندسه ۲', coeff: 5.10 }, 
            { name: 'فیزیک ۲', coeff: 6.57 },
            { name: 'حسابان ۱', coeff: 5.20 },
            { name: 'شیمی ۲', coeff: 5.27 }
        ]
    },
    experimental: {
        '12': [
            { name: 'فارسی ۳', coeff: 11.09 }, { name: 'عربی ۳', coeff: 4.64 },
            { name: 'دین و زندگی ۳', coeff: 8.47 }, { name: 'زبان انگلیسی ۳', coeff: 6.05 },
            { name: 'سلامت و بهداشت', coeff: 1.76 }, { name: 'علوم اجتماعی', coeff: 1.31 },
            { name: 'ریاضی ۳', coeff: 10.04 }, { name: 'زیست شناسی ۳', coeff: 10.66 },
            { name: 'فیزیک ۳', coeff: 8.45 }, { name: 'شیمی ۳', coeff: 9.19 }
        ],
        '11': [
            // لیست اصلاح شده طبق کد اولیه شما
            { name: 'فارسی ۲', coeff: 5.95 }, 
            { name: 'عربی ۲', coeff: 2.62 }, 
            { name: 'دین و زندگی ۲', coeff: 4.78 },
            { name: 'زبان انگلیسی ۲', coeff: 3.32 }, 
            { name: 'زیست شناسی ۲', coeff: 6.39 }, 
            { name: 'شیمی ۲', coeff: 5.27 },
            { name: 'ریاضی ۲', coeff: 5.00 }, 
            { name: 'فیزیک ۲', coeff: 5.00 }
        ]
    },
    humanities: {
        '12': [
            { name: 'فارسی ۳', coeff: 11.09 }, { name: 'دین و زندگی ۳', coeff: 8.47 },
            { name: 'زبان انگلیسی ۳', coeff: 6.05 }, { name: 'سلامت و بهداشت', coeff: 1.76 },
            { name: 'ریاضی و آمار ۳', coeff: 7.71 }, { name: 'علوم و فنون ادبی ۳', coeff: 8.68 },
            { name: 'عربی ۳', coeff: 4.30 }, { name: 'تاریخ ۳', coeff: 5.38 },
            { name: 'جغرافیا ۳', coeff: 7.71 }, { name: 'جامعه شناسی ۳', coeff: 4.96 },
            { name: 'فلسفه ۲', coeff: 5.55 }
        ],
        '11': [
            // لیست اصلاح شده طبق کد اولیه شما
            { name: 'فارسی ۲', coeff: 5.95 }, 
            { name: 'دین و زندگی ۲', coeff: 4.78 }, 
            { name: 'زبان انگلیسی ۲', coeff: 3.32 },
            { name: 'عربی ۲', coeff: 4.23 }, 
            { name: 'تاریخ ۲', coeff: 5.24 }, 
            { name: 'جامعه شناسی ۲', coeff: 4.82 },
            { name: 'ریاضی و آمار ۲', coeff: 4.00 },
            { name: 'علوم و فنون ادبی ۲', coeff: 4.50 }
        ]
    }
};

const WEIGHTS = { '11': 0.17, '12': 0.63 };

// --- STATE ---
let state = {
    step: 0,
    major: null,
    grade: null,
    scores: {}
};

// --- DOM ELEMENTS ---
const app = document.getElementById('app');
const backBtn = document.getElementById('back-btn');
const progressBar = document.getElementById('progress-bar');
const themeToggle = document.getElementById('theme-toggle');

// --- INITIALIZATION ---
function init() {
    // 1. Theme Initialization
    const storedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = storedTheme === 'dark' || (!storedTheme && systemDark);
    
    applyTheme(isDark);

    // 2. Load State
    const savedState = localStorage.getItem('gpaState');
    if (savedState) {
        try {
            state = JSON.parse(savedState);
            if (state.step > 0) goToStep(state.step);
            else renderStep(0);
        } catch (e) {
            localStorage.removeItem('gpaState');
            renderStep(0);
        }
    } else {
        renderStep(0);
    }

    // 3. Listeners
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
        if(moonIcon) {
            moonIcon.style.opacity = '0';
            moonIcon.style.transform = 'rotate(-90deg)';
        }
        if(sunIcon) {
            sunIcon.style.opacity = '1';
            sunIcon.style.transform = 'rotate(0deg)';
        }
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if(sunIcon) {
            sunIcon.style.opacity = '0';
            sunIcon.style.transform = 'rotate(90deg)';
        }
        if(moonIcon) {
            moonIcon.style.opacity = '1';
            moonIcon.style.transform = 'rotate(0deg)';
        }
    }
}

// --- NAVIGATION & RENDERING ---
function goToStep(stepIndex) {
    state.step = stepIndex;
    saveState();
    renderStep(stepIndex);
    updateProgressBar(stepIndex);
    
    if(backBtn) backBtn.style.display = stepIndex === 0 ? 'none' : 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
    if (state.step > 0) {
        goToStep(state.step - 1);
    }
}

function updateProgressBar(step) {
    if(!progressBar) return;
    const width = (step / 4) * 100;
    progressBar.style.width = `${width}%`;
}

function renderStep(index) {
    if(!app) return;
    app.innerHTML = '';
    let templateId = '';
    
    switch(index) {
        case 0: templateId = 'step-intro'; break;
        case 1: templateId = 'step-major'; break;
        case 2: templateId = 'step-grade'; break;
        case 3: templateId = 'step-calc'; break;
        case 4: templateId = 'step-result'; break;
        default: templateId = 'step-intro';
    }

    const template = document.getElementById(templateId);
    if (!template) return;
    
    const clone = template.content.cloneNode(true);
    app.appendChild(clone);

    if (index === 3) initCalculator();
    if (index === 4) initResult();
}

// --- LOGIC FUNCTIONS ---
function selectMajor(major) {
    state.major = major;
    goToStep(2);
}

function selectGrade(grade) {
    state.grade = grade;
    goToStep(3);
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

// --- CALCULATOR LOGIC ---
function initCalculator() {
    const container = document.getElementById('inputs-container');
    const title = document.getElementById('calc-title');
    
    if (!state.major || !state.grade) { goToStep(0); return; }

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

// توابع گلوبال برای دسترسی از داخل HTML
window.handleInput = function(el, subjectName) {
    state.scores[subjectName] = el.value;
    calculateLive();
}

window.validateInput = function(el, subjectName) {
    let val = parseFloat(el.value);
    if (isNaN(val) || el.value === '') {
        return; 
    }

    if (val < 0) val = 0;
    if (val > 20) val = 20;

    // Round to nearest 0.25
    val = Math.round(val * 4) / 4;

    el.value = val;
    state.scores[subjectName] = val;
    saveState();
    calculateLive();
}

window.resetInputs = resetInputs;
window.calculateFinal = calculateFinal;
window.selectMajor = selectMajor;
window.selectGrade = selectGrade;
window.goToStep = goToStep;
window.shareResult = shareResult;

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
    goToStep(4);
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
    const impact = WEIGHTS[state.grade] * 100;

    const displayEl = document.getElementById('final-score-display');
    const circle = document.getElementById('score-ring');
    const gradeEl = document.getElementById('res-grade');
    const weightEl = document.getElementById('res-weight');

    if(gradeEl) gradeEl.innerText = state.grade === '12' ? 'دوازدهم' : 'یازدهم';
    if(weightEl) weightEl.innerText = `${impact}%`;
    
    // Reset ring
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
        'humanities': 'علوم انسانی'
    };
    return map[key] || '';
}

function shareResult() {
    const displayEl = document.getElementById('final-score-display');
    const score = displayEl ? displayEl.innerText : '0';
    const text = `معدل کتبی نهایی من: ${score}\nرشته: ${getMajorName(state.major)}\nمحاسبه شده با ماشین حساب معدل ۱۴۰۵`;
    
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
