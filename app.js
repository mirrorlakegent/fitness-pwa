// ========== 训练数据 ==========
const workoutData = {
    monday: {
        type: '上肢推',
        focus: '胸/肩/三头',
        duration: '约60分钟',
        exercises: [
            { name: '哑铃平板卧推', sets: '3组 × 12次', rest: 90, tips: '💡 肩胛骨收紧下沉，核心稳定，哑铃下放至胸部两侧', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=哑铃卧推 教学' }, { name: '新手入门', url: 'https://search.bilibili.com/all?keyword=哑铃卧推 新手入门' }] },
            { name: '哑铃上斜推举', sets: '3组 × 12次', rest: 60, tips: '💡 凳子调至30-45度，控制离心（下放3秒），顶峰收缩1秒', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=哑铃上斜卧推 教学' }, { name: '上斜推胸', url: 'https://search.bilibili.com/all?keyword=上斜哑铃推胸' }] },
            { name: '哑铃肩推', sets: '3组 × 12次', rest: 60, tips: '💡 坐姿，核心收紧，不要过度后仰，哑铃下放至耳垂高度', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=坐姿哑铃肩推 教学' }, { name: '新手推举', url: 'https://search.bilibili.com/all?keyword=哑铃推举 新手' }] },
            { name: '哑铃侧平举', sets: '3组 × 15次', rest: 45, tips: '💡 微屈肘，小重量控制，不要耸肩，举至与肩同高', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=哑铃侧平举 教学' }, { name: '正确姿势', url: 'https://search.bilibili.com/all?keyword=侧平举 正确姿势' }] },
            { name: '哑铃俯身臂屈伸', sets: '3组 × 12次', rest: 45, tips: '💡 大臂固定不动，只动小臂，顶峰挤压三头', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=哑铃俯身臂屈伸 教学' }, { name: '三头训练', url: 'https://search.bilibili.com/all?keyword=三头肌 哑铃训练' }] }
        ]
    },
    tuesday: {
        type: '下肢+核心',
        focus: '腿/臀/腹',
        duration: '约70分钟',
        exercises: [
            { name: '哑铃高脚杯深蹲', sets: '3组 × 12次', rest: 90, tips: '💡 双手托住哑铃一端，膝盖追脚尖方向，蹲至大腿平行', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=高脚杯深蹲 教学' }, { name: 'Goblet Squat', url: 'https://search.bilibili.com/all?keyword=goblet squat 教程' }] },
            { name: '哑铃罗马尼亚硬拉', sets: '3组 × 12次（每侧）', rest: 60, tips: '💡 后脚放在凳子上，前脚踩实，髋关节铰链，背部挺直', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=罗马尼亚硬拉 单腿 教学' }, { name: '保加利亚蹲', url: 'https://search.bilibili.com/all?keyword=保加利亚分腿蹲 哑铃' }] },
            { name: '哑铃箭步蹲', sets: '3组 × 10次（每侧）', rest: 60, tips: '💡 步幅适中，后膝接近地面，前膝不超过脚尖太多', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=哑铃箭步蹲 教学' }, { name: '正确姿势', url: 'https://search.bilibili.com/all?keyword=箭步蹲 正确姿势' }] },
            { name: '哑铃臀桥', sets: '3组 × 15次', rest: 45, tips: '💡 哑铃放在髋部，顶峰挤压臀部2秒', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=臀桥 教学 哑铃' }, { name: 'Glute Bridge', url: 'https://search.bilibili.com/all?keyword=glute bridge 臀桥' }] },
            { name: '平板支撑', sets: '3组 × 30秒', rest: 45, tips: '💡 身体成一条直线，不要塌腰或弓背，核心收紧', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=平板支撑 正确姿势 教学' }, { name: 'Plank', url: 'https://search.bilibili.com/all?keyword=plank 平板支撑' }] },
            { name: '仰卧起坐', sets: '3组 × 15次', rest: 45, tips: '💡 双脚勾住辅助架，卷腹时呼气，下放时控制速度', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=仰卧起坐 正确姿势 教学' }, { name: '卷腹教学', url: 'https://search.bilibili.com/all?keyword=卷腹 教学 新手' }] }
        ]
    },
    thursday: {
        type: '上肢拉',
        focus: '背/二头',
        duration: '约65分钟',
        exercises: [
            { name: '哑铃单臂划船', sets: '3组 × 12次（每侧）', rest: 60, tips: '💡 一手一膝撑凳，背部平直，哑铃拉向髋部，肩胛骨后缩', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=哑铃单臂划船 教学' }, { name: '背部训练', url: 'https://search.bilibili.com/all?keyword=单臂划船 背部训练' }] },
            { name: '哑铃俯身双臂划船', sets: '3组 × 12次', rest: 60, tips: '💡 髋关节铰链，背部平直，双臂同时拉起，顶峰挤压背部', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=哑铃俯身划船 教学' }, { name: '双臂划船', url: 'https://search.bilibili.com/all?keyword=双臂划船 背部' }] },
            { name: '拉力绳高位下拉', sets: '3组 × 15次', rest: 45, tips: '💡 坐姿或跪姿，拉向锁骨，感受背阔肌收缩', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=拉力绳高位下拉 教学' }, { name: '背部训练', url: 'https://search.bilibili.com/all?keyword=弹力绳 背部训练' }] },
            { name: '拉力绳面拉', sets: '3组 × 15次', rest: 45, tips: '💡 拉向面部两侧，外旋肩关节，后束和菱形肌发力', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=面拉 face pull 教学' }, { name: '改善体态', url: 'https://search.bilibili.com/all?keyword=拉力绳面拉 改善体态' }] },
            { name: '哑铃弯举', sets: '3组 × 12次', rest: 45, tips: '💡 大臂固定，不要借力摆动，控制离心', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=哑铃弯举 教学 正确姿势' }, { name: '二头训练', url: 'https://search.bilibili.com/all?keyword=二头肌 哑铃弯举' }] },
            { name: '哑铃锤式弯举', sets: '3组 × 12次', rest: 45, tips: '💡 掌心相对，肱桡肌发力', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=锤式弯举 教学' }, { name: 'Hammer Curl', url: 'https://search.bilibili.com/all?keyword=hammer curl 锤式弯举' }] }
        ]
    },
    friday: {
        type: '下肢+核心',
        focus: '腿/臀/腹',
        duration: '约70分钟',
        exercises: [
            { name: '哑铃深蹲（肩部负重）', sets: '3组 × 12次', rest: 90, tips: '💡 哑铃架在肩上，膝盖追脚尖，蹲至大腿平行，核心收紧', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=哑铃深蹲 肩部负重 教学' }, { name: '居家训练', url: 'https://search.bilibili.com/all?keyword=哑铃深蹲 居家训练' }] },
            { name: '哑铃直腿硬拉', sets: '3组 × 12次', rest: 60, tips: '💡 微屈膝，髋关节铰链，哑铃贴腿下放，感受腘绳肌拉伸', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=哑铃直腿硬拉 教学' }, { name: '罗马尼亚硬拉', url: 'https://search.bilibili.com/all?keyword=罗马尼亚硬拉 哑铃 教学' }] },
            { name: '保加利亚分腿蹲', sets: '3组 × 8次（每侧）', rest: 60, tips: '💡 前脚踩实，后脚勾住凳子，下蹲至前膝90度，核心稳定', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=保加利亚分腿蹲 教学' }, { name: 'Split Squat', url: 'https://search.bilibili.com/all?keyword=bulgarian split squat 教学' }] },
            { name: '哑铃提踵', sets: '3组 × 20次', rest: 45, tips: '💡 手持哑铃，脚尖踩实地面，顶峰收缩2秒', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=站姿提踵 哑铃 教学' }, { name: '小腿训练', url: 'https://search.bilibili.com/all?keyword=小腿训练 提踵' }] },
            { name: '死虫式', sets: '3组 × 10次（每侧）', rest: 45, tips: '💡 仰卧，双臂伸直，双腿抬起90度，对侧手脚交替伸展，腰部贴地', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=死虫式 dead bug 教学' }, { name: '核心训练', url: 'https://search.bilibili.com/all?keyword=死虫式 核心训练' }] },
            { name: '俄罗斯转体', sets: '3组 × 20次（每侧）', rest: 45, tips: '💡 坐姿，双腿抬起或脚跟触地，转体时哑铃跟随视线', videos: [{ name: 'B站教学', url: 'https://search.bilibili.com/all?keyword=俄罗斯转体 教学' }, { name: 'Russian Twist', url: 'https://search.bilibili.com/all?keyword=russian twist 俄罗斯转体' }] }
        ]
    }
};

// ========== 数据存储 ==========
function getTodayKey() {
    return new Date().toISOString().slice(0, 10);
}

function getDayKey() {
    const dayOfWeek = new Date().getDay();
    const map = { 1: 'monday', 2: 'tuesday', 4: 'thursday', 5: 'friday' };
    return map[dayOfWeek] || null;
}

function getWorkoutRecord(dateKey) {
    const records = JSON.parse(localStorage.getItem('workoutRecords') || '{}');
    return records[dateKey] || null;
}

function saveWorkoutRecord(dateKey, record) {
    const records = JSON.parse(localStorage.getItem('workoutRecords') || '{}');
    records[dateKey] = record;
    localStorage.setItem('workoutRecords', JSON.stringify(records));
}

function getAllRecords() {
    return JSON.parse(localStorage.getItem('workoutRecords') || '{}');
}

// ========== 训练状态 ==========
let currentWorkoutState = null; // { exerciseStatus: [true/false/...], skipped: [...], notes: '' }

function loadTodayState() {
    const record = getWorkoutRecord(getTodayKey());
    if (record) {
        currentWorkoutState = {
            exerciseStatus: record.exerciseStatus || [],
            skipped: record.skipped || [],
            notes: record.notes || '',
            completed: record.completed || false,
            completedAt: record.completedAt || null
        };
    } else {
        const dayKey = getDayKey();
        const workout = dayKey ? workoutData[dayKey] : null;
        if (workout) {
            currentWorkoutState = {
                exerciseStatus: new Array(workout.exercises.length).fill(false),
                skipped: [],
                notes: '',
                completed: false,
                completedAt: null
            };
        } else {
            currentWorkoutState = null;
        }
    }
}

function persistState() {
    if (!currentWorkoutState) return;
    const dayKey = getDayKey();
    const workout = dayKey ? workoutData[dayKey] : null;
    if (!workout) return;
    
    const record = {
        date: getTodayKey(),
        dayKey: dayKey,
        type: workout.type,
        focus: workout.focus,
        exerciseStatus: currentWorkoutState.exerciseStatus,
        skipped: currentWorkoutState.skipped,
        notes: currentWorkoutState.notes,
        completed: currentWorkoutState.completed,
        completedAt: currentWorkoutState.completedAt,
        totalExercises: workout.exercises.length,
        completedExercises: currentWorkoutState.exerciseStatus.filter(Boolean).length
    };
    saveWorkoutRecord(getTodayKey(), record);
}

// ========== 页面更新 ==========
function getTodayWorkout() {
    const dayKey = getDayKey();
    return dayKey ? workoutData[dayKey] : null;
}

function updateTodayWorkout() {
    loadTodayState();
    const workout = getTodayWorkout();
    const todayTitle = document.getElementById('today-title');
    const todayBadge = document.getElementById('today-badge');
    const todayFocus = document.getElementById('today-focus');
    const todayDuration = document.getElementById('today-duration');
    const todayExercises = document.getElementById('today-exercises');
    const startBtn = document.getElementById('start-workout-btn');

    if (workout) {
        todayTitle.textContent = currentWorkoutState && currentWorkoutState.completed ? '✅ 今日已完成' : '今日训练';
        todayBadge.textContent = workout.type;
        todayFocus.textContent = workout.focus;
        todayDuration.textContent = workout.duration;

        if (currentWorkoutState && !currentWorkoutState.completed) {
            const done = currentWorkoutState.exerciseStatus.filter(Boolean).length;
            const total = workout.exercises.length;
            todayExercises.textContent = `${done}/${total} 已完成`;
            startBtn.textContent = done > 0 ? '继续训练' : '开始训练';
            startBtn.className = 'btn-primary';
        } else if (currentWorkoutState && currentWorkoutState.completed) {
            todayExercises.textContent = `${workout.exercises.length}/${workout.exercises.length} 全部完成`;
            startBtn.textContent = '查看详情';
            startBtn.className = 'btn-primary btn-done';
        } else {
            todayExercises.textContent = `${workout.exercises.length}个动作`;
            startBtn.textContent = '开始训练';
            startBtn.className = 'btn-primary';
        }
    } else {
        todayTitle.textContent = '今日休息';
        todayBadge.textContent = '休息日';
        todayBadge.className = 'badge badge-rest';
        todayFocus.textContent = '恢复放松';
        todayDuration.textContent = '-';
        todayExercises.textContent = '无训练';
        startBtn.textContent = '查看明日计划';
        startBtn.className = 'btn-primary btn-rest';
    }
    updateProgressStats();
}

function updateCurrentDate() {
    const now = new Date();
    const options = { month: 'long', day: 'numeric', weekday: 'long' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('zh-CN', options);
    
    // 计算当前周数
    const startDate = localStorage.getItem('planStartDate');
    if (!startDate) {
        localStorage.setItem('planStartDate', getTodayKey());
        document.getElementById('current-week').textContent = '第1周';
    } else {
        const start = new Date(startDate);
        const diff = Math.floor((new Date() - start) / (7 * 24 * 60 * 60 * 1000)) + 1;
        document.getElementById('current-week').textContent = `第${Math.min(diff, 12)}周`;
    }
}

function updateWeekPlan() {
    const dayOfWeek = new Date().getDay();
    const weekDays = document.getElementById('week-days');
    const records = getAllRecords();
    
    const schedule = [
        { day: 1, name: '周一', type: '上肢推', dayKey: 'monday' },
        { day: 2, name: '周二', type: '下肢+核心', dayKey: 'tuesday' },
        { day: 3, name: '周三', type: '休息', dayKey: 'rest' },
        { day: 4, name: '周四', type: '上肢拉', dayKey: 'thursday' },
        { day: 5, name: '周五', type: '下肢+核心', dayKey: 'friday' },
        { day: 6, name: '周末', type: '休息', dayKey: 'rest' }
    ];

    // 获取本周一的日期
    const today = new Date();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(today);
    monday.setDate(today.getDate() + mondayOffset);

    let html = '';
    schedule.forEach((item, idx) => {
        const date = new Date(monday);
        date.setDate(monday.getDate() + idx);
        const dateKey = date.toISOString().slice(0, 10);
        const record = records[dateKey];
        
        let statusText = '';
        let statusClass = '';

        if (item.day === dayOfWeek) {
            statusClass = 'today';
            if (record && record.completed) {
                statusText = '✅ 已完成';
            } else if (record && record.completedExercises > 0) {
                statusText = `${record.completedExercises}/${record.totalExercises}`;
            } else {
                statusText = '今天';
            }
        } else if (date < new Date(today.toISOString().slice(0, 10))) {
            if (item.dayKey === 'rest') {
                statusText = '休息';
                statusClass = 'rest';
            } else if (record && record.completed) {
                statusText = '✅ 完成';
                statusClass = 'completed';
            } else if (record && record.completedExercises > 0) {
                statusText = `部分 ${record.completedExercises}/${record.totalExercises}`;
                statusClass = 'partial';
            } else {
                statusText = '❌ 未完成';
                statusClass = 'missed';
            }
        } else {
            if (item.dayKey === 'rest') {
                statusText = '休息';
                statusClass = 'rest';
            } else {
                statusText = '待完成';
            }
        }

        html += `
            <div class="day-item ${statusClass}" data-day="${item.day}">
                <span class="day-name">${item.name}</span>
                <span class="day-type">${item.type}</span>
                <span class="day-status">${statusText}</span>
            </div>
        `;
    });

    weekDays.innerHTML = html;
}

function updateProgressStats() {
    const records = getAllRecords();
    const allDates = Object.keys(records).sort();
    
    let totalCompleted = 0;
    let totalPartial = 0;
    let streak = 0;
    let maxStreak = 0;
    let tempStreak = 0;

    // 计算完成数和连续天数
    const today = new Date();
    const startDate = new Date(localStorage.getItem('planStartDate') || getTodayKey());
    const totalDays = Math.max(1, Math.floor((today - startDate) / (24 * 60 * 60 * 1000)) + 1);
    
    // 遍历所有日期计算
    allDates.forEach(dateKey => {
        const r = records[dateKey];
        if (r.completed) {
            totalCompleted++;
        } else if (r.completedExercises > 0) {
            totalPartial++;
        }
    });

    // 计算连续天数（从最近往回数）
    for (let i = 0; i < 30; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dk = d.toISOString().slice(0, 10);
        const r = records[dk];
        if (r && (r.completed || r.completedExercises > 0)) {
            tempStreak++;
            maxStreak = Math.max(maxStreak, tempStreak);
        } else {
            if (i > 0) break; // 今天还没练不算断
            tempStreak = 0;
        }
    }
    streak = tempStreak;

    // 12周共48次训练
    const totalExpected = 48;
    const completionRate = Math.min(100, Math.round(((totalCompleted + totalPartial * 0.5) / totalExpected) * 100));

    document.getElementById('total-workouts').textContent = totalCompleted;
    document.getElementById('current-streak').textContent = streak;
    document.getElementById('completion-rate').textContent = completionRate + '%';
    document.getElementById('progress-fill').style.width = completionRate + '%';
    document.getElementById('progress-percent').textContent = completionRate;
}

// ========== 训练模式 ==========
function startWorkout() {
    const workout = getTodayWorkout();
    if (!workout) {
        // 休息日，显示明日计划
        showNextDayPlan();
        return;
    }

    loadTodayState();
    renderWorkoutModal();
}

function renderWorkoutModal() {
    const workout = getTodayWorkout();
    if (!workout) return;

    const modal = document.getElementById('workout-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = `${workout.type} - ${workout.focus}`;

    const done = currentWorkoutState.exerciseStatus.filter(Boolean).length;
    const total = workout.exercises.length;
    const percent = Math.round((done / total) * 100);

    let html = `
        <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-size: 14px; color: var(--text-secondary);">完成进度</span>
                <span style="font-size: 14px; color: var(--secondary-color); font-weight: bold;">${done}/${total} (${percent}%)</span>
            </div>
            <div class="progress-bar" style="height: 6px;">
                <div class="progress-fill" style="width: ${percent}%"></div>
            </div>
        </div>
    `;

    workout.exercises.forEach((exercise, index) => {
        const isChecked = currentWorkoutState.exerciseStatus[index];
        const isSkipped = currentWorkoutState.skipped.includes(index);
        
        html += `
            <div class="exercise-item ${isChecked ? 'exercise-done' : ''} ${isSkipped ? 'exercise-skipped' : ''}" id="exercise-${index}">
                <div class="exercise-header">
                    <label style="display: flex; align-items: center; gap: 10px; flex: 1; cursor: pointer;">
                        <input type="checkbox" ${isChecked ? 'checked' : ''} 
                               onchange="toggleExercise(${index})" 
                               style="width: 22px; height: 22px; accent-color: var(--secondary-color); cursor: pointer;">
                        <span class="exercise-name" style="${isChecked ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${index + 1}. ${exercise.name}</span>
                    </label>
                    <span class="exercise-sets">${exercise.sets}</span>
                </div>
                <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">
                    ⏱ ${exercise.rest}秒休息
                </div>
                <div class="exercise-tips">${exercise.tips}</div>
                <div class="exercise-video">
                    ${exercise.videos.map(v => `<a href="${v.url}" target="_blank" class="video-link">📺 ${v.name}</a>`).join('')}
                    <button onclick="skipExercise(${index})" class="video-link" style="background: ${isSkipped ? 'var(--success-color)' : 'rgba(255,255,255,0.1)'}; margin-left: 5px;">
                        ${isSkipped ? '✓ 已跳过' : '跳过'}
                    </button>
                </div>
            </div>
        `;
    });

    // 底部操作区
    html += `
        <div style="margin-top: 20px;">
            <label style="display: block; margin-bottom: 8px; font-size: 14px; color: var(--text-secondary);">📝 今日备注（可选）</label>
            <textarea id="workout-notes" placeholder="记录感受、重量、调整等..." 
                style="width: 100%; padding: 12px; background: rgba(255,255,255,0.08); border: 1px solid var(--border-color); border-radius: 10px; color: white; font-size: 14px; min-height: 80px; resize: vertical;">${currentWorkoutState.notes}</textarea>
        </div>
        <div style="margin-top: 15px; display: flex; gap: 10px;">
            <button onclick="saveCurrentProgress()" class="btn-primary" style="flex: 1; background: rgba(255,255,255,0.1);">💾 暂存进度</button>
            <button onclick="completeWorkout()" class="btn-primary" style="flex: 2;">✅ 完成训练打卡</button>
        </div>
        <div style="margin-top: 10px;">
            <button onclick="showAdjustPlan()" class="btn-primary" style="width: 100%; background: rgba(255,255,255,0.05); font-size: 14px;">⚙️ 调整今日计划</button>
        </div>
    `;

    modalBody.innerHTML = html;
    modal.classList.remove('hidden');
}

function toggleExercise(index) {
    currentWorkoutState.exerciseStatus[index] = !currentWorkoutState.exerciseStatus[index];
    // 如果勾选了，从跳过列表移除
    if (currentWorkoutState.exerciseStatus[index]) {
        currentWorkoutState.skipped = currentWorkoutState.skipped.filter(i => i !== index);
    }
    persistState();
    renderWorkoutModal();
}

function skipExercise(index) {
    if (currentWorkoutState.skipped.includes(index)) {
        currentWorkoutState.skipped = currentWorkoutState.skipped.filter(i => i !== index);
    } else {
        currentWorkoutState.skipped.push(index);
        currentWorkoutState.exerciseStatus[index] = false;
    }
    persistState();
    renderWorkoutModal();
}

function saveCurrentProgress() {
    const notesEl = document.getElementById('workout-notes');
    if (notesEl) currentWorkoutState.notes = notesEl.value;
    persistState();
    alert('✅ 进度已保存！下次打开会继续。');
}

function completeWorkout() {
    const notesEl = document.getElementById('workout-notes');
    if (notesEl) currentWorkoutState.notes = notesEl.value;
    
    const done = currentWorkoutState.exerciseStatus.filter(Boolean).length;
    const total = getTodayWorkout().exercises.length;
    
    if (done === 0) {
        if (!confirm('你还没有完成任何动作，确定要打卡吗？')) return;
    }
    
    currentWorkoutState.completed = true;
    currentWorkoutState.completedAt = new Date().toISOString();
    persistState();
    
    const percent = Math.round((done / total) * 100);
    let msg = `🎉 训练打卡成功！\n\n完成：${done}/${total} (${percent}%)\n`;
    if (currentWorkoutState.skipped.length > 0) {
        msg += `跳过：${currentWorkoutState.skipped.length}个动作\n`;
    }
    if (percent < 100) {
        msg += `\n💪 没关系，下次继续努力！`;
    } else {
        msg += `\n🔥 完美完成！太棒了！`;
    }
    alert(msg);
    
    closeWorkoutModal();
    updateTodayWorkout();
    updateWeekPlan();
}

function showAdjustPlan() {
    const workout = getTodayWorkout();
    if (!workout) return;
    
    const modalBody = document.getElementById('modal-body');
    const modalTitle = document.getElementById('modal-title');
    
    modalTitle.textContent = '⚙️ 调整今日计划';
    
    let html = `
        <div class="exercise-item">
            <h3 style="color: var(--secondary-color); margin-bottom: 15px;">调整选项</h3>
            
            <div style="margin-bottom: 20px;">
                <h4 style="margin-bottom: 10px; color: var(--text-primary);">🏋️ 减少训练量</h4>
                <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 10px;">感觉太累？可以减少组数或跳过部分动作</p>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <button onclick="adjustReduceSets()" class="video-link">每组减1组</button>
                    <button onclick="adjustRemoveLast()" class="video-link">去掉最后一个动作</button>
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h4 style="margin-bottom: 10px; color: var(--text-primary);">🔄 替换动作</h4>
                <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 10px;">某个动作不舒服？换成替代动作</p>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <button onclick="showReplaceOptions()" class="video-link">选择替换</button>
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h4 style="margin-bottom: 10px; color: var(--text-primary);">⏱️ 缩短时间</h4>
                <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 10px;">没时间？精简版训练</p>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <button onclick="adjustQuickWorkout()" class="video-link">30分钟精简版</button>
                    <button onclick="adjustSkipCardio()" class="video-link">只练主动作</button>
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h4 style="margin-bottom: 10px; color: var(--text-primary);">📅 调整到明天</h4>
                <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 10px;">今天不想练？把计划移到明天</p>
                <button onclick="moveToTomorrow()" class="video-link" style="background: var(--warning-color);">移到明天</button>
            </div>
        </div>
        <button onclick="renderWorkoutModal()" class="btn-primary" style="margin-top: 15px;">← 返回训练</button>
    `;
    
    modalBody.innerHTML = html;
}

function adjustReduceSets() {
    alert('💡 建议：每个动作减少1组，从3组改为2组。\n\n训练时手动少做一组即可，进度会正常记录。');
}

function adjustRemoveLast() {
    const workout = getTodayWorkout();
    if (!workout) return;
    const lastIdx = workout.exercises.length - 1;
    if (!currentWorkoutState.skipped.includes(lastIdx)) {
        currentWorkoutState.skipped.push(lastIdx);
        persistState();
    }
    alert(`✅ 已跳过：${workout.exercises[lastIdx].name}\n\n返回训练页面继续。`);
    renderWorkoutModal();
}

function showReplaceOptions() {
    const workout = getTodayWorkout();
    if (!workout) return;
    
    const replacements = {
        '哑铃平板卧推': '俯卧撑',
        '哑铃上斜推举': '哑铃飞鸟',
        '哑铃肩推': '阿诺德推举',
        '哑铃侧平举': '拉力绳侧平举',
        '哑铃俯身臂屈伸': '拉力绳下压',
        '哑铃高脚杯深蹲': '徒手深蹲',
        '哑铃罗马尼亚硬拉': '哑铃箭步蹲',
        '哑铃箭步蹲': '靠墙静蹲',
        '哑铃臀桥': '徒手臀桥',
        '平板支撑': '死虫式',
        '仰卧起坐': '卷腹',
        '哑铃单臂划船': '哑铃俯身划船',
        '哑铃俯身双臂划船': '拉力绳划船',
        '拉力绳高位下拉': '哑铃单臂划船',
        '拉力绳面拉': '哑铃俯身飞鸟',
        '哑铃弯举': '拉力绳弯举',
        '哑铃锤式弯举': '哑铃弯举',
        '哑铃深蹲（肩部负重）': '哑铃高脚杯深蹲',
        '哑铃直腿硬拉': '哑铃臀桥',
        '保加利亚分腿蹲': '哑铃箭步蹲',
        '哑铃提踵': '徒手提踵',
        '死虫式': '平板支撑',
        '俄罗斯转体': '仰卧起坐'
    };
    
    const modalBody = document.getElementById('modal-body');
    let html = '<h3 style="color: var(--secondary-color); margin-bottom: 15px;">选择要替换的动作</h3>';
    
    workout.exercises.forEach((ex, idx) => {
        const alt = replacements[ex.name] || '替代动作';
        html += `
            <div class="exercise-item" style="cursor: pointer;" onclick="replaceExercise(${idx}, '${ex.name}', '${alt}')">
                <div class="exercise-header">
                    <span class="exercise-name">${ex.name}</span>
                    <span style="color: var(--secondary-color);">→ ${alt}</span>
                </div>
            </div>
        `;
    });
    
    html += '<button onclick="renderWorkoutModal()" class="btn-primary" style="margin-top: 15px;">← 返回</button>';
    modalBody.innerHTML = html;
}

function replaceExercise(idx, oldName, newName) {
    alert(`✅ 已将「${oldName}」替换为「${newName}」\n\n训练时按新动作执行即可。`);
    renderWorkoutModal();
}

function adjustQuickWorkout() {
    const workout = getTodayWorkout();
    if (!workout) return;
    // 跳过最后两个动作
    for (let i = workout.exercises.length - 2; i < workout.exercises.length; i++) {
        if (!currentWorkoutState.skipped.includes(i)) {
            currentWorkoutState.skipped.push(i);
        }
    }
    persistState();
    alert(`✅ 已精简为${workout.exercises.length - 2}个主动作\n约30分钟可完成。`);
    renderWorkoutModal();
}

function adjustSkipCardio() {
    const workout = getTodayWorkout();
    if (!workout) return;
    // 只保留前3个主动作
    for (let i = 3; i < workout.exercises.length; i++) {
        if (!currentWorkoutState.skipped.includes(i)) {
            currentWorkoutState.skipped.push(i);
        }
    }
    persistState();
    alert(`✅ 已精简为前3个主动作\n快速完成训练！`);
    renderWorkoutModal();
}

function moveToTomorrow() {
    if (!confirm('确定把今天的训练移到明天吗？\n今天会标记为休息。')) return;
    
    // 标记今天为跳过
    currentWorkoutState.completed = true;
    currentWorkoutState.notes = (currentWorkoutState.notes || '') + ' [已移到明天]';
    currentWorkoutState.completedAt = new Date().toISOString();
    persistState();
    
    alert('✅ 已移到明天！明天记得练哦 💪');
    closeWorkoutModal();
    updateTodayWorkout();
    updateWeekPlan();
}

function showNextDayPlan() {
    const dayOfWeek = new Date().getDay();
    const nextMap = { 0: 'monday', 3: 'thursday', 5: 'monday', 6: 'monday' };
    const nextKey = nextMap[dayOfWeek];
    
    if (!nextKey || !workoutData[nextKey]) {
        alert('明天是休息日，好好恢复！');
        return;
    }
    
    const workout = workoutData[nextKey];
    const modal = document.getElementById('workout-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = `明日计划 - ${workout.type}`;
    
    let html = `
        <div class="exercise-item">
            <div style="margin-bottom: 10px;">
                <span style="color: var(--secondary-color); font-weight: bold;">${workout.focus}</span>
                <span style="color: var(--text-secondary); margin-left: 10px;">${workout.duration}</span>
            </div>
        </div>
    `;
    
    workout.exercises.forEach((ex, idx) => {
        html += `
            <div class="exercise-item">
                <div class="exercise-header">
                    <span class="exercise-name">${idx + 1}. ${ex.name}</span>
                    <span class="exercise-sets">${ex.sets}</span>
                </div>
                <div class="exercise-tips">${ex.tips}</div>
                <div class="exercise-video">
                    ${ex.videos.map(v => `<a href="${v.url}" target="_blank" class="video-link">📺 ${v.name}</a>`).join('')}
                </div>
            </div>
        `;
    });
    
    modalBody.innerHTML = html;
    modal.classList.remove('hidden');
}

function closeWorkoutModal() {
    // 保存备注
    const notesEl = document.getElementById('workout-notes');
    if (notesEl && currentWorkoutState) {
        currentWorkoutState.notes = notesEl.value;
        persistState();
    }
    document.getElementById('workout-modal').classList.add('hidden');
}

// ========== 计时器 ==========
let timerInterval = null;
let timerSeconds = 0;
let timerTarget = 0;

function showTimer() {
    document.getElementById('timer-modal').classList.remove('hidden');
}

function closeTimerModal() {
    document.getElementById('timer-modal').classList.add('hidden');
    pauseTimer();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const el = document.getElementById('timer-time');
    el.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (timerTarget > 0 && timerSeconds >= timerTarget) {
        pauseTimer();
        el.style.color = 'var(--danger-color)';
        // 震动提醒
        if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 200]);
        alert('⏰ 时间到！');
    }
}

function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        timerSeconds++;
        updateTimerDisplay();
    }, 1000);
}

function pauseTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer() {
    pauseTimer();
    timerSeconds = 0;
    document.getElementById('timer-time').style.color = 'var(--secondary-color)';
    updateTimerDisplay();
}

function setTimer(seconds) {
    resetTimer();
    timerTarget = seconds;
    timerSeconds = seconds;
    updateTimerDisplay();
    startTimer();
    // 倒计时模式
    timerInterval = setInterval(() => {
        timerSeconds--;
        if (timerSeconds < 0) timerSeconds = 0;
        const minutes = Math.floor(timerSeconds / 60);
        const s = timerSeconds % 60;
        document.getElementById('timer-time').textContent = `${String(minutes).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        if (timerSeconds <= 0) {
            pauseTimer();
            document.getElementById('timer-time').style.color = 'var(--danger-color)';
            if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 200]);
            alert('⏰ 休息时间到！');
        }
    }, 1000);
}

// ========== 动作库 ==========
function showExerciseLibrary() {
    const modal = document.getElementById('workout-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = '📚 动作库';
    
    const categories = {
        '胸部': [
            { name: '哑铃平板卧推', tips: '肩胛骨收紧，哑铃下放至胸部两侧', keyword: '哑铃卧推 教学' },
            { name: '哑铃上斜推举', tips: '凳子30-45度，控制离心', keyword: '哑铃上斜卧推 教学' }
        ],
        '背部': [
            { name: '哑铃单臂划船', tips: '一手一膝撑凳，拉向髋部', keyword: '哑铃单臂划船 教学' },
            { name: '哑铃俯身双臂划船', tips: '髋关节铰链，背部平直', keyword: '哑铃俯身划船 教学' }
        ],
        '肩部': [
            { name: '哑铃肩推', tips: '坐姿，不要过度后仰', keyword: '坐姿哑铃肩推 教学' },
            { name: '哑铃侧平举', tips: '微屈肘，小重量控制', keyword: '哑铃侧平举 教学' }
        ],
        '腿部': [
            { name: '哑铃高脚杯深蹲', tips: '膝盖追脚尖，蹲至大腿平行', keyword: '高脚杯深蹲 教学' },
            { name: '哑铃箭步蹲', tips: '步幅适中，后膝接近地面', keyword: '哑铃箭步蹲 教学' },
            { name: '保加利亚分腿蹲', tips: '后脚放凳子上，前膝90度', keyword: '保加利亚分腿蹲 教学' }
        ],
        '手臂': [
            { name: '哑铃弯举', tips: '大臂固定，控制离心', keyword: '哑铃弯举 教学' },
            { name: '哑铃俯身臂屈伸', tips: '大臂固定，只动小臂', keyword: '哑铃俯身臂屈伸 教学' }
        ],
        '核心': [
            { name: '平板支撑', tips: '身体成一条直线', keyword: '平板支撑 正确姿势' },
            { name: '死虫式', tips: '腰部贴地，对侧交替', keyword: '死虫式 dead bug 教学' },
            { name: '俄罗斯转体', tips: '转体时哑铃跟随视线', keyword: '俄罗斯转体 教学' }
        ]
    };
    
    let html = '';
    for (const [cat, exercises] of Object.entries(categories)) {
        html += `<h3 style="color: var(--secondary-color); margin: 15px 0 10px;">${cat}</h3>`;
        exercises.forEach(ex => {
            html += `
                <div class="exercise-item">
                    <div class="exercise-header">
                        <span class="exercise-name">${ex.name}</span>
                    </div>
                    <div class="exercise-tips">💡 ${ex.tips}</div>
                    <div class="exercise-video">
                        <a href="https://search.bilibili.com/all?keyword=${encodeURIComponent(ex.keyword)}" target="_blank" class="video-link">📺 观看教学</a>
                    </div>
                </div>
            `;
        });
    }
    
    modalBody.innerHTML = html;
    modal.classList.remove('hidden');
}

// ========== 训练日志 ==========
function showLog() {
    const records = getAllRecords();
    const modal = document.getElementById('workout-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = '📝 训练日志';
    
    const dates = Object.keys(records).sort().reverse();
    
    if (dates.length === 0) {
        modalBody.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 20px;">还没有训练记录，开始你的第一次训练吧！</p>';
    } else {
        let html = '';
        dates.forEach(dateKey => {
            const r = records[dateKey];
            const percent = r.totalExercises > 0 ? Math.round((r.completedExercises / r.totalExercises) * 100) : 0;
            const statusIcon = r.completed ? '✅' : (r.completedExercises > 0 ? '🔶' : '❌');
            
            html += `
                <div class="exercise-item">
                    <div class="exercise-header">
                        <span class="exercise-name">${statusIcon} ${r.date}</span>
                        <span class="exercise-sets">${r.type}</span>
                    </div>
                    <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 5px;">
                        完成 ${r.completedExercises}/${r.totalExercises} 个动作 (${percent}%)
                    </div>
                    ${r.skipped && r.skipped.length > 0 ? `<div style="font-size: 12px; color: var(--warning-color);">跳过 ${r.skipped.length} 个动作</div>` : ''}
                    ${r.notes ? `<div class="exercise-tips">💡 ${r.notes}</div>` : ''}
                </div>
            `;
        });
        modalBody.innerHTML = html;
    }
    
    modal.classList.remove('hidden');
}

// ========== 设置 ==========
function showSettings() {
    const settings = JSON.parse(localStorage.getItem('userSettings') || '{}');
    const modal = document.getElementById('workout-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = '⚙️ 设置';
    
    modalBody.innerHTML = `
        <div class="exercise-item">
            <h3 style="color: var(--secondary-color); margin-bottom: 15px;">个人信息</h3>
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px; font-size: 14px;">年龄</label>
                <input type="number" id="setting-age" value="${settings.age || 33}" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.1); border: 1px solid var(--border-color); border-radius: 8px; color: white;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px; font-size: 14px;">身高 (cm)</label>
                <input type="number" id="setting-height" value="${settings.height || 175}" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.1); border: 1px solid var(--border-color); border-radius: 8px; color: white;">
            </div>
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px; font-size: 14px;">体重 (kg)</label>
                <input type="number" id="setting-weight" value="${settings.weight || 100}" style="width: 100%; padding: 10px; background: rgba(255,255,255,0.1); border: 1px solid var(--border-color); border-radius: 8px; color: white;">
            </div>
            <button onclick="saveSettings()" class="btn-primary">保存设置</button>
        </div>
        <div class="exercise-item" style="margin-top: 15px;">
            <h3 style="color: var(--danger-color); margin-bottom: 15px;">数据管理</h3>
            <button onclick="exportData()" class="btn-primary" style="background: rgba(255,255,255,0.1); margin-bottom: 10px;">📤 导出训练数据</button>
            <button onclick="resetData()" class="btn-primary" style="background: var(--danger-color);">🗑️ 清除所有数据</button>
        </div>
        <div class="exercise-item" style="margin-top: 15px;">
            <h3 style="color: var(--secondary-color); margin-bottom: 10px;">关于</h3>
            <p style="color: var(--text-secondary); font-size: 14px;">
                12周居家增肌减脂计划 v2.0<br>
                新增：训练打卡、完成度追踪、计划调整
            </p>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function saveSettings() {
    const settings = {
        age: document.getElementById('setting-age').value,
        height: document.getElementById('setting-height').value,
        weight: document.getElementById('setting-weight').value
    };
    localStorage.setItem('userSettings', JSON.stringify(settings));
    alert('✅ 设置已保存！');
    closeWorkoutModal();
}

function exportData() {
    const data = {
        records: getAllRecords(),
        settings: JSON.parse(localStorage.getItem('userSettings') || '{}'),
        startDate: localStorage.getItem('planStartDate'),
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fitness-data-${getTodayKey()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function resetData() {
    if (!confirm('⚠️ 确定要清除所有训练数据吗？\n\n这个操作不可恢复！')) return;
    if (!confirm('再次确认：所有训练记录、打卡数据都会被删除！')) return;
    localStorage.removeItem('workoutRecords');
    localStorage.removeItem('planStartDate');
    alert('✅ 数据已清除');
    location.reload();
}

// ========== 底部导航 ==========
function showHome() {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.nav-btn')[0].classList.add('active');
    updateTodayWorkout();
    updateWeekPlan();
}

function showPlan() {
    const modal = document.getElementById('workout-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = '📋 12周训练计划';
    
    let html = `
        <div class="exercise-item">
            <h3 style="color: var(--secondary-color); margin-bottom: 10px;">阶段一：适应期（第1-2周）</h3>
            <p style="color: var(--text-secondary); font-size: 14px;">• 中等重量，12-15次/组<br>• 重点学习动作模式<br>• 建立训练习惯</p>
        </div>
        <div class="exercise-item">
            <h3 style="color: var(--secondary-color); margin-bottom: 10px;">阶段二：积累期（第3-6周）</h3>
            <p style="color: var(--text-secondary); font-size: 14px;">• 8-12次/组<br>• 逐步增加重量<br>• 每肌群每周10-16组</p>
        </div>
        <div class="exercise-item">
            <h3 style="color: var(--secondary-color); margin-bottom: 10px;">阶段三：强化期（第7-10周）</h3>
            <p style="color: var(--text-secondary); font-size: 14px;">• 6-10次/组<br>• 较重重量<br>• 引入递减组、超级组</p>
        </div>
        <div class="exercise-item">
            <h3 style="color: var(--secondary-color); margin-bottom: 10px;">阶段四：峰值/减载（第11-12周）</h3>
            <p style="color: var(--text-secondary); font-size: 14px;">• 第11周：测试极限<br>• 第12周：减载恢复</p>
        </div>
        <h3 style="color: var(--secondary-color); margin: 15px 0 10px;">每周安排</h3>
        <div class="exercise-item"><span style="color: var(--secondary-color);">周一</span> 上肢推（胸/肩/三头）5个动作</div>
        <div class="exercise-item"><span style="color: var(--secondary-color);">周二</span> 下肢+核心（腿/臀/腹）6个动作</div>
        <div class="exercise-item"><span style="color: var(--text-secondary);">周三</span> 休息</div>
        <div class="exercise-item"><span style="color: var(--secondary-color);">周四</span> 上肢拉（背/二头）6个动作</div>
        <div class="exercise-item"><span style="color: var(--secondary-color);">周五</span> 下肢+核心（腿/臀/腹）6个动作</div>
        <div class="exercise-item"><span style="color: var(--text-secondary);">周末</span> 休息</div>
    `;
    
    modalBody.innerHTML = html;
    modal.classList.remove('hidden');
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.nav-btn')[1].classList.add('active');
}

function showProgress() {
    const records = getAllRecords();
    const modal = document.getElementById('workout-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = '📊 训练进度';
    
    const dates = Object.keys(records).sort();
    let totalCompleted = 0;
    let totalPartial = 0;
    
    dates.forEach(dk => {
        const r = records[dk];
        if (r.completed) totalCompleted++;
        else if (r.completedExercises > 0) totalPartial++;
    });
    
    const currentWeek = parseInt(document.getElementById('current-week').textContent.replace('第', '').replace('周', '')) || 1;
    const completionRate = Math.min(100, Math.round(((totalCompleted + totalPartial * 0.5) / 48) * 100));
    
    // 本周完成统计
    const today = new Date();
    const dayOfWeek = today.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(today);
    monday.setDate(today.getDate() + mondayOffset);
    
    let weekCompleted = 0;
    let weekTotal = 0;
    for (let i = 0; i < 7; i++) {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        const dk = d.toISOString().slice(0, 10);
        const r = records[dk];
        if (r) {
            weekTotal++;
            if (r.completed) weekCompleted++;
        }
    }
    
    let html = `
        <div class="exercise-item">
            <h3 style="color: var(--secondary-color); margin-bottom: 15px;">总体进度</h3>
            <div style="display: flex; justify-content: space-around; margin-bottom: 20px;">
                <div style="text-align: center;">
                    <div style="font-size: 28px; font-weight: bold; color: var(--secondary-color);">${currentWeek}/12</div>
                    <div style="font-size: 12px; color: var(--text-secondary);">当前周</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 28px; font-weight: bold; color: var(--secondary-color);">${totalCompleted}</div>
                    <div style="font-size: 12px; color: var(--text-secondary);">完全完成</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 28px; font-weight: bold; color: var(--secondary-color);">${completionRate}%</div>
                    <div style="font-size: 12px; color: var(--text-secondary);">完成率</div>
                </div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${completionRate}%"></div>
            </div>
        </div>
        <div class="exercise-item">
            <h3 style="color: var(--secondary-color); margin-bottom: 15px;">本周统计</h3>
            <p style="color: var(--text-secondary); font-size: 14px;">
                已完成 ${weekCompleted} 次训练<br>
                ${weekCompleted >= 4 ? '🎉 本周目标达成！' : `还需完成 ${4 - weekCompleted} 次训练`}
            </p>
        </div>
        <div class="exercise-item">
            <h3 style="color: var(--secondary-color); margin-bottom: 15px;">最近记录</h3>
            ${dates.length === 0 ? '<p style="color: var(--text-secondary); text-align: center;">暂无记录</p>' :
              dates.slice(-7).reverse().map(dk => {
                const r = records[dk];
                const icon = r.completed ? '✅' : (r.completedExercises > 0 ? '🔶' : '❌');
                const pct = r.totalExercises > 0 ? Math.round((r.completedExercises / r.totalExercises) * 100) : 0;
                return `
                    <div style="padding: 8px 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;">
                        <span>${icon} ${r.date}</span>
                        <span style="color: var(--text-secondary);">${r.type} ${pct}%</span>
                    </div>
                `;
              }).join('')
            }
        </div>
    `;
    
    modalBody.innerHTML = html;
    modal.classList.remove('hidden');
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.nav-btn')[2].classList.add('active');
}

function showProfile() {
    const settings = JSON.parse(localStorage.getItem('userSettings') || '{}');
    const modal = document.getElementById('workout-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = '👤 我的';
    
    modalBody.innerHTML = `
        <div class="exercise-item">
            <h3 style="color: var(--secondary-color); margin-bottom: 15px;">个人信息</h3>
            <div style="margin-bottom: 10px;"><span style="color: var(--text-secondary);">年龄：</span><span>${settings.age || 33}岁</span></div>
            <div style="margin-bottom: 10px;"><span style="color: var(--text-secondary);">身高：</span><span>${settings.height || 175}cm</span></div>
            <div style="margin-bottom: 10px;"><span style="color: var(--text-secondary);">体重：</span><span>${settings.weight || 100}kg</span></div>
            <div style="margin-bottom: 10px;"><span style="color: var(--text-secondary);">目标：</span><span>增肌 + 减脂</span></div>
        </div>
        <div class="exercise-item">
            <h3 style="color: var(--secondary-color); margin-bottom: 15px;">训练器材</h3>
            <p style="color: var(--text-secondary); font-size: 14px;">• 可调节哑铃<br>• 哑铃凳<br>• 拉力绳<br>• 配重片<br>• 仰卧起坐架</p>
        </div>
        <div class="exercise-item">
            <h3 style="color: var(--secondary-color); margin-bottom: 15px;">营养建议</h3>
            <p style="color: var(--text-secondary); font-size: 14px;">• 蛋白质：180-220g/天<br>• 碳水：300-400g/天<br>• 脂肪：80-100g/天<br>• 多喝水：2-3L/天</p>
        </div>
    `;
    
    modal.classList.remove('hidden');
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.nav-btn')[3].classList.add('active');
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    updateTodayWorkout();
    updateCurrentDate();
    updateWeekPlan();
    
    document.getElementById('start-workout-btn').addEventListener('click', startWorkout);
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('SW registered'))
            .catch(err => console.log('SW failed', err));
    }
});
