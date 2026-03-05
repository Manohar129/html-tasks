
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

window.onload = refreshDashboard;

function addTask() {
    const textInput = document.getElementById('taskInput');
    const dateInput = document.getElementById('dateInput');

    if (!textInput.value || !dateInput.value) {
        alert("Please enter both a task and a date.");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: textInput.value,
        time: dateInput.value
    };

    tasks.push(newTask);
    localStorage.setItem('myTasks', JSON.stringify(tasks));
    
    textInput.value = '';
    dateInput.value = '';
    refreshDashboard();
}

function refreshDashboard() {
    renderHourly();
    renderCalendar();
}

function renderHourly() {
    const list = document.getElementById('hourlyList');
    list.innerHTML = ''; 

    tasks.sort((a, b) => new Date(a.time) - new Date(b.time));

    tasks.forEach(task => {
        const d = new Date(task.time);
        
        if (isNaN(d.getTime())) return; 

        const timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        list.innerHTML += `
            <div class="task-item" style="border-left: 4px solid #f05514; margin-bottom: 10px; padding: 10px; background: #fff7ed;">
                <strong>${timeStr}</strong> - ${task.text}
                <button onclick="deleteTask(${task.id})" style="float:right; color:red; border:none; background:none; cursor:pointer;">×</button>
            </div>
        `;
    });
}

function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    if(!grid) return;
    grid.innerHTML = '';

    for (let i = 1; i <= 31; i++) {
        const hasTask = tasks.some(t => new Date(t.time).getDate() === i);
        const style = hasTask ? 'background:#f05514; color:white;' : 'border:1px solid #ddd;';
        
        grid.innerHTML += `<div class="day-box" style="padding:10px; text-align:center; ${style}">${i}</div>`;
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    localStorage.setItem('myTasks', JSON.stringify(tasks));
    refreshDashboard();
}