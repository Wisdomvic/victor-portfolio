document.addEventListener('DOMContentLoaded', () => {

    // DOM
    const taskInput = document.querySelector('#task');
    const submitTask = document.querySelector('#submitTask');
    const displayTask = document.querySelector('#displaytask');
    const timeDisplay = document.querySelector('#time');

    const startBtn = document.querySelector('#start');
    const remainBtn = document.querySelector('#remain');
    const pauseBtn = document.querySelector('#pause');
    const resetBtn = document.querySelector('#reset');

    // State
    let totalSeconds = 25 * 60;
    let timer = null;
    let running = false;

    // Helpers
    function updateTime() {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        timeDisplay.textContent =
            `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    }

    // Timer controls
    function startTimer() {
        if (running) return;
        running = true;

        timer = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateTime();
            } else {
                clearInterval(timer);
                running = false;
                alert('Session completed 🎉');
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timer);
        running = false;
    }

    function resetTimer() {
        clearInterval(timer);
        running = false;
        totalSeconds = 25 * 60;
        updateTime();
    }

    function remainTime() {
        alert(`Remaining time: ${timeDisplay.textContent}`);
    }

    // Task
    submitTask.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (!task) {
            alert('Please enter a task');
            return;
        }
        displayTask.textContent = `Current Task: ${task}`;
        taskInput.value = '';
    });

    // Events
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    remainBtn.addEventListener('click', remainTime);

    updateTime();
});