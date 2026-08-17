
// =====================================================
// TASKFLOW | SMART TASK MANAGER
// FIXED JAVASCRIPT SECTION
// =====================================================


// ===============================
// Select Elements
// ===============================

const taskTitle = document.getElementById("task-title");
const taskDescription = document.getElementById("task-description");
const taskCategory = document.getElementById("task-category");
const taskPriority = document.getElementById("task-priority");
const taskDate = document.getElementById("task-date");

const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const searchInput = document.getElementById("search-input");

const voiceSearchBtn =
    document.getElementById("voice-search-btn");


// =====================================================
// VOICE SEARCH | FIXED VERSION
// =====================================================

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

const voiceSearchModal =
    document.getElementById("voice-search-modal");

const closeVoiceSearch =
    document.getElementById("close-voice-search");

const voiceStatus =
    document.getElementById("voice-status");

const voiceText =
    document.getElementById("voice-text");


// =====================================================
// CHECK BROWSER SUPPORT
// =====================================================

if (
    SpeechRecognition &&
    voiceSearchBtn &&
    voiceSearchModal &&
    closeVoiceSearch &&
    voiceStatus &&
    voiceText
) {

    const recognition =
        new SpeechRecognition();


    // =================================================
    // RECOGNITION SETTINGS
    // =================================================

    recognition.continuous = false;

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;

    // English + Indian pronunciation
    recognition.lang = "en-IN";


    let isListening = false;


    // =================================================
    // OPEN VOICE SEARCH
    // =================================================

    voiceSearchBtn.addEventListener(
        "click",
        function () {

            // Prevent multiple starts
            if (isListening) {
                return;
            }


            voiceSearchModal.classList.add(
                "active"
            );


            voiceStatus.textContent =
                "Listening...";


            voiceText.textContent =
                "Speak now 🎙️";


            voiceSearchBtn.classList.add(
                "listening"
            );


            try {

                recognition.start();

            }

            catch (error) {

                console.log(
                    "Recognition start error:",
                    error
                );

            }

        }
    );


    // =================================================
    // RECOGNITION START
    // =================================================

    recognition.onstart =
        function () {

            isListening = true;


            voiceStatus.textContent =
                "Listening...";


            voiceText.textContent =
                "Speak now 🎙️";


            voiceSearchBtn.classList.add(
                "listening"
            );

        };


    // =================================================
    // AUDIO START
    // =================================================

    recognition.onaudiostart =
        function () {

            voiceStatus.textContent =
                "Microphone active...";


            voiceText.textContent =
                "I'm listening 👂";

        };


    // =================================================
    // SPEECH START
    // =================================================

    recognition.onspeechstart =
        function () {

            voiceStatus.textContent =
                "Hearing you...";


            voiceText.textContent =
                "Keep speaking...";

        };


    // =================================================
    // VOICE RESULT
    // =================================================

    recognition.onresult =
        function (event) {

            if (
                !event.results ||
                !event.results.length
            ) {

                return;

            }

    const voiceResult =
    event.results[0][0].transcript
        .toLowerCase()
        .trim()
        .replace(/[.,!?;:]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
            


            console.log(
                "Voice result:",
                voiceResult
            );


            if (!voiceResult) {

                voiceStatus.textContent =
                    "No speech detected";

                voiceText.textContent =
                    "Please try again.";

                return;

            }


            // Show recognized text
            voiceText.textContent =
                `"${voiceResult}"`;


            let smartCommandHandled =
                false;


            // =================================================
            // ALL TASKS
            // =================================================

            if (
                voiceResult === "all" ||
                voiceResult.includes("all tasks") ||
                voiceResult.includes("show all")
            ) {

                currentFilter = "all";


                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );


                        if (
                            btn.dataset.filter ===
                            "all"
                        ) {

                            btn.classList.add(
                                "active"
                            );

                        }

                    }
                );


                searchInput.value = "";

                smartCommandHandled = true;

            }


            // =================================================
            // PENDING TASKS
            // =================================================

            else if (
                voiceResult.includes("pending")
            ) {

                currentFilter =
                    "pending";


                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );


                        if (
                            btn.dataset.filter ===
                            "pending"
                        ) {

                            btn.classList.add(
                                "active"
                            );

                        }

                    }
                );


                searchInput.value = "";

                smartCommandHandled = true;

            }


            // =================================================
            // COMPLETED TASKS
            // =================================================

            else if (
                voiceResult.includes("completed")
            ) {

                currentFilter =
                    "completed";


                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );


                        if (
                            btn.dataset.filter ===
                            "completed"
                        ) {

                            btn.classList.add(
                                "active"
                            );

                        }

                    }
                );


                searchInput.value = "";

                smartCommandHandled = true;

            }


            // =================================================
            // IMPORTANT TASKS
            // =================================================

            else if (
                voiceResult.includes("important")
            ) {

                currentFilter =
                    "important";


                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );


                        if (
                            btn.dataset.filter ===
                            "important"
                        ) {

                            btn.classList.add(
                                "active"
                            );

                        }

                    }
                );


                searchInput.value = "";

                smartCommandHandled = true;

            }


            // =================================================
            // TODAY TASKS
            // =================================================

            else if (
                voiceResult.includes("today")
            ) {

                currentFilter =
                    "today";


                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );


                        if (
                            btn.dataset.filter ===
                            "today"
                        ) {

                            btn.classList.add(
                                "active"
                            );

                        }

                    }
                );


                searchInput.value = "";

                smartCommandHandled = true;

            }


            // =================================================
            // TOMORROW TASKS
            // =================================================

            else if (
                voiceResult.includes("tomorrow")
            ) {

                currentFilter =
                    "tomorrow";


                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );


                        if (
                            btn.dataset.filter ===
                            "tomorrow"
                        ) {

                            btn.classList.add(
                                "active"
                            );

                        }

                    }
                );


                searchInput.value = "";

                smartCommandHandled = true;

            }


            // =================================================
            // OVERDUE TASKS
            // =================================================

            else if (
                voiceResult.includes("overdue")
            ) {

                currentFilter =
                    "overdue";


                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );


                        if (
                            btn.dataset.filter ===
                            "overdue"
                        ) {

                            btn.classList.add(
                                "active"
                            );

                        }

                    }
                );


                searchInput.value = "";

                smartCommandHandled = true;

            }


            // =================================================
            // CATEGORY SEARCH
            // =================================================

            else if (
                voiceResult.includes("study")
            ) {

                searchInput.value =
                    "study";

            }


            else if (
                voiceResult.includes("work")
            ) {

                searchInput.value =
                    "work";

            }


            else if (
                voiceResult.includes("personal")
            ) {

                searchInput.value =
                    "personal";

            }


            else if (
                voiceResult.includes("shopping")
            ) {

                searchInput.value =
                    "shopping";

            }


            // =================================================
            // NORMAL SEARCH
            // =================================================

            else {

                searchInput.value =
                    voiceResult;

            }


            // =================================================
            // DISPLAY RESULTS
            // =================================================

            if (smartCommandHandled) {

                displayTasks();

            }

            else {

                searchInput.dispatchEvent(
                    new Event("input")
                );

            }


            // =================================================
            // SUCCESS
            // =================================================

            voiceStatus.textContent =
                "Search complete ✓";

              setTimeout(() => {

    voiceSearchModal.classList.remove("active");

    voiceSearchBtn.classList.remove("listening");

}, 1000);  

        };





    // =================================================
    // NO MATCH
    // =================================================

    recognition.onnomatch =
        function () {

            voiceStatus.textContent =
                "I couldn't understand that";

            voiceText.textContent =
                "Please speak clearly and try again.";

        };


    // =================================================
    // RECOGNITION END
    // =================================================

    recognition.onend =
        function () {

            isListening = false;


            voiceSearchBtn.classList.remove(
                "listening"
            );

        };


    // =================================================
    // ERROR
    // =================================================

    recognition.onerror =
        function (event) {

            console.log(
                "Speech recognition error:",
                event.error
            );


            isListening = false;


            voiceSearchBtn.classList.remove(
                "listening"
            );


            if (
                event.error ===
                "not-allowed"
            ) {

                voiceStatus.textContent =
                    "Microphone access denied";

                voiceText.textContent =
                    "Allow microphone permission in Chrome.";

            }


            else if (
                event.error ===
                "no-speech"
            ) {

                voiceStatus.textContent =
                    "No speech detected";

                voiceText.textContent =
                    "Speak a little louder and try again.";

            }


            else if (
                event.error ===
                "audio-capture"
            ) {

                voiceStatus.textContent =
                    "Microphone unavailable";

                voiceText.textContent =
                    "Check your microphone connection.";

            }


            else if (
                event.error ===
                "network"
            ) {

                voiceStatus.textContent =
                    "Network error";

                voiceText.textContent =
                    "Check your internet connection.";

            }


            else {

                voiceStatus.textContent =
                    "Something went wrong";

                voiceText.textContent =
                    "Please try again.";

            }

        };


    // =================================================
    // CLOSE VOICE SEARCH
    // =================================================

    function closeVoiceModal() {

        try {

            recognition.stop();

        }

        catch (error) {

            console.log(error);

        }


        isListening = false;


        voiceSearchModal.classList.remove(
            "active"
        );


        voiceSearchBtn.classList.remove(
            "listening"
        );

    }


    // =================================================
    // CLOSE BUTTON
    // =================================================

    closeVoiceSearch.addEventListener(
        "click",
        closeVoiceModal
    );


    // =================================================
    // CLICK OUTSIDE
    // =================================================

    voiceSearchModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                voiceSearchModal
            ) {

                closeVoiceModal();

            }

        }
    );


    // =================================================
    // ESCAPE
    // =================================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                voiceSearchModal.classList.contains(
                    "active"
                )
            ) {

                closeVoiceModal();

            }

        }
    );

}


// =====================================================
// BROWSER NOT SUPPORTED
// =====================================================

else if (voiceSearchBtn) {

    voiceSearchBtn.addEventListener(
        "click",
        function () {

            showMessage(
                "Voice search is not supported in this browser.",
                "error"
            );

        }
    );

}

// ===============================
// Dashboard Elements
// ===============================

const totalTasks =
    document.getElementById("total-tasks");

const completedTasks =
    document.getElementById("completed-tasks");

const pendingTasks =
    document.getElementById("pending-tasks");

const importantTasks =
    document.getElementById("important-tasks");

const currentDate =
    document.getElementById("current-date");

const themeBtn =
    document.getElementById("theme-btn");

const progressPercent =
    document.getElementById("progress-percent");

const progressFill =
    document.getElementById("progress-fill");

const progressText =
    document.getElementById("progress-text");

const filterButtons =
    document.querySelectorAll(".filter-btn");


// ===============================
// Productivity Insights
// ===============================

const todayCompleted =
    document.getElementById("today-completed");

const completionRate =
    document.getElementById("completion-rate");

const highPriorityPending =
    document.getElementById("high-priority-pending");

const overdueCount =
    document.getElementById("overdue-count");


   // ===============================
// Smart Productivity Score
// ===============================

const productivityScore =
    document.getElementById("productivity-score");

const productivityScoreMessage =
    document.getElementById(
        "productivity-score-message"
    ); 


// ===============================
// Current Date
// ===============================

const today =
    new Date();

const dateOptions = {

    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"

};

currentDate.textContent =
    today.toLocaleDateString(
        "en-US",
        dateOptions
    );


// ===============================
// Dynamic Greeting
// ===============================

function updateGreeting() {

    const hour =
        new Date().getHours();

    let greeting;


    if (
        hour >= 5 &&
        hour < 12
    ) {

        greeting =
            "Good Morning";

    }

    else if (
        hour >= 12 &&
        hour < 17
    ) {

        greeting =
            "Good Afternoon";

    }

    else {

        greeting =
            "Good Evening";

    }


    document.getElementById(
        "greeting-text"
    ).textContent =
        `${greeting}, Nikita`;

}

updateGreeting();


// ===============================
// Local Storage
// ===============================

let tasks =
    JSON.parse(
        localStorage.getItem("tasks")
    ) || [];


// ===============================
// Make Old Tasks Compatible
// ===============================

tasks =
    tasks.map(task => ({

        ...task,

        title:
            task.title || "",

        description:
            task.description || "",

        category:
            task.category || "Study",

        priority:
            task.priority || "Medium",

        date:
            task.date || "",

        completed:
            Boolean(task.completed),

        completedAt:
            task.completedAt || null,

        pinned:
            Boolean(task.pinned)

    }));


// ===============================
// State
// ===============================

let editingTaskId =
    null;

let currentFilter =
    "all";

let draggedTaskId =
    null;


// ===============================
// Save Tasks
// ===============================

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}


// ===============================
// Theme
// ===============================

const savedTheme =
    localStorage.getItem("theme");


if (
    savedTheme === "light"
) {

    document.body.classList.add(
        "light-theme"
    );

    themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}



// ===============================
// Theme Button
// ===============================

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    const isLight =
        document.body.classList.contains("light-theme");

    if (isLight) {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});


// ===============================
// Add Task Button
// ===============================

addTaskBtn.addEventListener(
    "click",
    handleTaskButton
);


// ===============================
// Search
// ===============================

searchInput.addEventListener(
    "input",
    function () {

        displayTasks();

    }
);



// ===============================
// Filter Buttons
// ===============================

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            currentFilter =
                button.dataset.filter;

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            displayTasks();

        }
    );

});


// ===============================
// Add / Update Task
// ===============================

function handleTaskButton() {

    const title =
        taskTitle.value.trim();

    const description =
        taskDescription.value.trim();

    const category =
        taskCategory.value;

    const priority =
        taskPriority.value;

    const date =
        taskDate.value;


    // Validation
    if (title === "") {

        showMessage(
            "Please enter a task title!",
            "error"
        );

        taskTitle.focus();

        return;

    }


    // ===========================
    // UPDATE TASK
    // ===========================

    if (editingTaskId !== null) {

        const task =
            tasks.find(
                task => task.id === editingTaskId
            );

        if (task) {

            task.title = title;

            task.description =
                description;

            task.category =
                category;

            task.priority =
                priority;

            task.date =
                date;

            saveTasks();

            displayTasks();

            updateDashboard();

            cancelEdit();

            showMessage(
                "Task updated successfully! ✨"
            );

        }

        return;
    }


    // ===========================
    // CREATE NEW TASK
    // ===========================

    const newTask = {

        id: Date.now(),

        title: title,

        description: description,

        category: category,

        priority: priority,

        date: date,

        completed: false,

        completedAt: null,
        pinned: false

    };


    tasks.push(newTask);

    saveTasks();

    displayTasks();

    updateDashboard();

    clearInputs();

    showMessage(
        "Task added successfully! ✅"
    );

}


// ===============================
// Due Date Status
// ===============================

function getDueDateStatus(date) {

    if (!date) {

        return {
            text: "No Date",
            className: "no-date"
        };

    }


    const todayDate = new Date();

    todayDate.setHours(0, 0, 0, 0);


    const dueDate = new Date(date);

    dueDate.setHours(0, 0, 0, 0);


    const difference =
        dueDate - todayDate;


    const daysLeft =
        Math.ceil(
            difference /
            (1000 * 60 * 60 * 24)
        );


    if (daysLeft < 0) {

        return {
            text: "Overdue",
            className: "overdue"
        };

    }


    if (daysLeft === 0) {

        return {
            text: "Due Today",
            className: "today"
        };

    }


    if (daysLeft === 1) {

        return {
            text: "Tomorrow",
            className: "tomorrow"
        };

    }


    return {

        text: `${daysLeft} days left`,

        className: "upcoming"

    };

}


// ===============================
// Display Tasks
// ===============================

function displayTasks() {

    taskList.innerHTML = "";


    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    const filteredTasks =
        tasks.filter(task => {

            // Search
            const matchesSearch =

                task.title
                    .toLowerCase()
                    .includes(searchText)

                ||

                task.description
                    .toLowerCase()
                    .includes(searchText)

                ||

                task.category
                    .toLowerCase()
                    .includes(searchText)

                ||

                task.priority
                    .toLowerCase()
                    .includes(searchText);


            // Filter
            let matchesFilter = true;


            if (currentFilter === "pending") {

                matchesFilter =
                    !task.completed;

            }


            else if (
                currentFilter === "completed"
            ) {

                matchesFilter =
                    task.completed;

            }


            else if (
                currentFilter === "important"
            ) {

                matchesFilter =
                    task.priority === "High";

            }


            else if (
                currentFilter === "today"
            ) {

                const status =
                    getDueDateStatus(task.date);

                matchesFilter =
                    status.className === "today";

            }


            else if (
                currentFilter === "tomorrow"
            ) {

                const status =
                    getDueDateStatus(task.date);

                matchesFilter =
                    status.className === "tomorrow";

            }


            else if (
                currentFilter === "overdue"
            ) {

                const status =
                    getDueDateStatus(task.date);

                matchesFilter =
                    status.className === "overdue";

            }


            return (
                matchesSearch &&
                matchesFilter
            );

        });
   
// ===============================
// SMART TASK SORTING
// ===============================

filteredTasks.sort((a, b) => {

    // 1️⃣ Pinned tasks first
    if (a.pinned !== b.pinned) {

        return Number(b.pinned) -
               Number(a.pinned);

    }


    // 2️⃣ Overdue tasks first
    const aStatus =
        getDueDateStatus(a.date);

    const bStatus =
        getDueDateStatus(b.date);


    const aOverdue =
        aStatus.className === "overdue";

    const bOverdue =
        bStatus.className === "overdue";


    if (aOverdue !== bOverdue) {

        return Number(bOverdue) -
               Number(aOverdue);

    }


    // 3️⃣ High priority first
    const priorityValue = {

        High: 3,
        Medium: 2,
        Low: 1

    };


    const priorityDifference =
        (priorityValue[b.priority] || 0) -
        (priorityValue[a.priority] || 0);


    if (priorityDifference !== 0) {

        return priorityDifference;

    }


    // 4️⃣ Earlier due date first
    if (a.date && b.date) {

        return new Date(a.date) -
               new Date(b.date);

    }


    if (a.date) return -1;

    if (b.date) return 1;


    // 5️⃣ Keep original order
    return 0;

});


    // ===========================
    // Empty State
    // ===========================

    if (filteredTasks.length === 0) {

        const emptyMessage =
            document.createElement("div");

        emptyMessage.className =
            "empty-state";

        emptyMessage.innerHTML = `

            <i class="fa-solid fa-clipboard-list"></i>

            <h3>No tasks found</h3>

            <p>
                ${
                    currentFilter === "all"
                        ? "Add a new task to get started."
                        : "No tasks match this filter."
                }
            </p>

        `;

        taskList.appendChild(emptyMessage);

        return;
    }


    // ===========================
    // Create Task Cards
    // ===========================

    filteredTasks.forEach(task => {

        const dueStatus =
            getDueDateStatus(task.date);


        const taskCard =
            document.createElement("div");


        taskCard.className =
            task.completed
                ? "task-item completed"
                : "task-item";


        taskCard.setAttribute(
            "draggable",
            "true"
        );


        taskCard.dataset.id =
            task.id;

taskCard.innerHTML = `

    <h3>
        ${escapeHTML(task.title)}
    </h3>

    <div class="task-description">

    <p class="description-text">
        ${
            task.description
                ? escapeHTML(task.description)
                : "No description"
        }
    </p>

    ${
        task.description &&
        task.description.length > 100
            ? `
                <button
                    class="read-more-btn"
                    onclick="openTaskDetails(${task.id})"
                >
                    Read more <i class="fa-solid fa-arrow-right"></i>
                </button>
              `
            : ""
    }

</div>
        
        



            <div class="task-footer">

                <span class="badge">
                    ${escapeHTML(task.category)}
                </span>

                 <span class="badge priority ${task.priority.toLowerCase()}">
               ${escapeHTML(task.priority)}
                  </span>



                <span class="due-date ${dueStatus.className}">
                    <i class="fa-regular fa-calendar"></i>
                    ${dueStatus.text}
                </span>

                <div class="task-actions">
                    <button
                          class="details-btn"
                       onclick="openTaskDetails(${task.id})"
                       title="View task details"
                           >
                          <i class="fa-solid fa-eye"></i>
                  </button>


                    <button
                        class="complete-btn"
                        onclick="toggleComplete(${task.id})"
                        title="${
                            task.completed
                                ? "Mark as pending"
                                : "Complete task"
                        }"
                    >
                        <i class="fa-solid fa-check"></i>
                    </button>

                    <!-- Pin -->

                        <button
                          class="pin-btn"
                           onclick="togglePin(${task.id})"
                                 title="${task.pinned ? "Unpin task" : "Pin task"}"
                                      >
                                     <i class="fa-solid fa-thumbtack"></i>
                       </button>


                    <button
                        class="edit-btn"
                        onclick="editTask(${task.id})"
                        title="Edit task"
                    >
                        <i class="fa-solid fa-pen"></i>
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteTask(${task.id})"
                        title="Delete task"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

            </div>

        `;


        taskList.appendChild(taskCard);


        // Drag Events
        addDragEvents(taskCard);

    });

}


// ===============================
// Edit Task
// ===============================

function editTask(id) {

    const task =
        tasks.find(
            task => task.id === id
        );


    if (!task) return;


    taskTitle.value =
        task.title;

    taskDescription.value =
        task.description;

    taskCategory.value =
        task.category;

    taskPriority.value =
        task.priority;

    taskDate.value =
        task.date;


    editingTaskId = id;


    addTaskBtn.innerHTML = `

        <i class="fa-solid fa-pen"></i>

        Update Task

    `;


    document
        .querySelector(".task-form")
        .scrollIntoView({

            behavior: "smooth",

            block: "center"

        });


    taskTitle.focus();

}


// ===============================
// Cancel Edit
// ===============================

function cancelEdit() {

    editingTaskId = null;


    addTaskBtn.innerHTML = `

        <i class="fa-solid fa-plus"></i>

        Add Task

    `;


    clearInputs();

}


// ===============================
// Dashboard
// ===============================

function updateDashboard() {

    // Total
    const totalCount =
        tasks.length;

    totalTasks.textContent =
        totalCount;


    // Completed
    const completedCount =
        tasks.filter(
            task => task.completed
        ).length;

    completedTasks.textContent =
        completedCount;


    // Pending
    const pendingCount =
        tasks.filter(
            task => !task.completed
        ).length;

    pendingTasks.textContent =
        pendingCount;


    // Important
    const importantCount =
        tasks.filter(
            task =>
                task.priority === "High"
        ).length;

    importantTasks.textContent =
        importantCount;


    // ==========================
    // Progress
    // ==========================

    const progressPercentage =
        totalCount === 0
            ? 0
            : Math.round(
                (completedCount / totalCount) * 100
            );


    progressPercent.textContent =
        `${progressPercentage}%`;


    progressFill.style.width =
        `${progressPercentage}%`;


    progressText.textContent =
        `${completedCount} of ${totalCount} tasks completed`;


    // ==========================
    // Completed Today
    // ==========================

    const now =
        new Date();

    const todayYear =
        now.getFullYear();

    const todayMonth =
        now.getMonth();

    const todayDay =
        now.getDate();


    const completedTodayCount =
        tasks.filter(task => {

            if (
                !task.completed ||
                !task.completedAt
            ) {

                return false;

            }


            const completedDate =
                new Date(task.completedAt);


            return (

                completedDate.getFullYear()
                    === todayYear

                &&

                completedDate.getMonth()
                    === todayMonth

                &&

                completedDate.getDate()
                    === todayDay

            );

        }).length;


    todayCompleted.textContent =
        completedTodayCount;


    // ==========================
    // Completion Rate
    // ==========================

    const completionPercentage =
        totalCount > 0

            ? Math.round(
                (completedCount / totalCount) * 100
            )

            : 0;


    completionRate.textContent =
        `${completionPercentage}%`;


    // ==========================
    // High Priority Pending
    // ==========================

    const highPending =
        tasks.filter(
            task =>
                task.priority === "High"
                &&
                !task.completed
        ).length;


    highPriorityPending.textContent =
        highPending;


    // ==========================
    // Overdue
    // ==========================

    const overdue =
        tasks.filter(task => {

            if (
                !task.date ||
                task.completed
            ) {

                return false;

            }


            const status =
                getDueDateStatus(task.date);


            return (
                status.className === "overdue"
            );

        }).length;


    overdueCount.textContent =
        overdue;

       // ==========================
    // Productivity Score
    // ==========================

    updateProductivityScore(); 

}


// =====================================================
// SMART PRODUCTIVITY SCORE
// =====================================================

function updateProductivityScore() {

    if (
        !productivityScore ||
        !productivityScoreMessage
    ) {
        return;
    }


    const total =
        tasks.length;


    // No tasks
    if (total === 0) {

        productivityScore.textContent =
            "0/100";

        productivityScoreMessage.textContent =
            "Start completing tasks to improve your score.";

        return;
    }


    // =================================================
    // COMPLETED TASKS
    // =================================================

    const completed =
        tasks.filter(
            task => task.completed
        ).length;


    // =================================================
    // COMPLETION RATE
    // Maximum 60 points
    // =================================================

    const completionPercentage =
        (completed / total) * 100;


    const completionPoints =
        Math.round(
            completionPercentage * 0.60
        );


    // =================================================
    // COMPLETED TODAY
    // Maximum 15 points
    // =================================================

    const now =
        new Date();

    const todayYear =
        now.getFullYear();

    const todayMonth =
        now.getMonth();

    const todayDay =
        now.getDate();


    const completedToday =
        tasks.filter(task => {

            if (
                !task.completed ||
                !task.completedAt
            ) {
                return false;
            }


            const completedDate =
                new Date(
                    task.completedAt
                );


            return (
                completedDate.getFullYear()
                    === todayYear
                &&
                completedDate.getMonth()
                    === todayMonth
                &&
                completedDate.getDate()
                    === todayDay
            );

        }).length;


    const todayPoints =
        Math.min(
            completedToday * 5,
            15
        );


    // =================================================
    // OVERDUE TASKS
    // Maximum 15 points
    // =================================================

    const overdue =
        tasks.filter(task => {

            if (
                !task.date ||
                task.completed
            ) {
                return false;
            }


            return (
                getDueDateStatus(task.date)
                    .className === "overdue"
            );

        }).length;


    const overduePoints =
        overdue === 0
            ? 15
            : Math.max(
                15 - (overdue * 5),
                0
            );


    // =================================================
    // HIGH PRIORITY COMPLETION
    // Maximum 10 points
    // =================================================

    const highPriorityTasks =
        tasks.filter(
            task =>
                task.priority === "High"
        );


    let highPriorityPoints = 0;


    if (highPriorityTasks.length > 0) {

        const completedHighPriority =
            highPriorityTasks.filter(
                task => task.completed
            ).length;


        highPriorityPoints =
            Math.round(
                (
                    completedHighPriority /
                    highPriorityTasks.length
                ) * 10
            );

    }


    // =================================================
    // FINAL SCORE
    // =================================================

    let score =
        completionPoints +
        todayPoints +
        overduePoints +
        highPriorityPoints;


    score =
        Math.max(
            0,
            Math.min(
                score,
                100
            )
        );


    productivityScore.textContent =
        `${score}/100`;


    // =================================================
    // SMART MESSAGE
    // =================================================

    if (score >= 90) {

        productivityScoreMessage.textContent =
            "Outstanding! You're managing your tasks exceptionally well. 🔥";

    }

    else if (score >= 75) {

        productivityScoreMessage.textContent =
            "Excellent progress! Keep up your productive momentum. ✨";

    }

    else if (score >= 50) {

        productivityScoreMessage.textContent =
            "Good work! Complete a few more tasks to boost your score. 💪";

    }

    else if (score >= 25) {

        productivityScoreMessage.textContent =
            "You're making progress. Focus on your important tasks next. 🎯";

    }

    else {

        productivityScoreMessage.textContent =
            "Start completing tasks to improve your productivity score. 🚀";

    }

}



// ===============================
// Clear Inputs
// ===============================

function clearInputs() {

    taskTitle.value = "";

    taskDescription.value = "";

    taskCategory.selectedIndex = 0;

    taskPriority.selectedIndex = 0;

    taskDate.value = "";

}

// ===============================
// Delete Task
// ===============================

let taskToDeleteId = null;


function deleteTask(id) {

    const task =
        tasks.find(
            task => task.id === id
        );

    if (!task) return;


    // Store task ID
    taskToDeleteId = id;


    // Open custom delete modal
    const deleteModal =
        document.getElementById("delete-modal");

    deleteModal.classList.add("active");

}


// ===============================
// Confirm Delete
// ===============================

function confirmDeleteTask() {

    if (taskToDeleteId === null) {
        return;
    }


    const task =
        tasks.find(
            task => task.id === taskToDeleteId
        );


    if (!task) {
        closeDeleteModal();
        return;
    }


    // Delete task
    tasks =
        tasks.filter(
            task => task.id !== taskToDeleteId
        );


    // If editing this task
    if (editingTaskId === taskToDeleteId) {

        cancelEdit();

    }


    // Save changes
    saveTasks();


    // Refresh UI
    displayTasks();

    updateDashboard();


    // Close modal
    closeDeleteModal();


    // Reset ID
    taskToDeleteId = null;


    // Success message
    showMessage(
        "Task deleted successfully 🗑️"
    );

}


// ===============================
// Close Delete Modal
// ===============================

function closeDeleteModal() {

    const deleteModal =
        document.getElementById("delete-modal");

    deleteModal.classList.remove("active");

    taskToDeleteId = null;

}


// ===============================
// Complete / Undo
// ===============================

function toggleComplete(id) {

    const task =
        tasks.find(
            task => task.id === id
        );


    if (!task) return;


    task.completed =
        !task.completed;


    if (task.completed) {

        task.completedAt =
            new Date().toISOString();

    } else {

        task.completedAt =
            null;

    }


    saveTasks();

    displayTasks();

    updateDashboard();


    if (task.completed) {

        showMessage(
            "Task completed! 🎉"
        );

    } else {

        showMessage(
            "Task marked as pending."
        );

    }

}

// ===============================
// Pin / Unpin Task
// ===============================

function togglePin(id) {

    const task =
        tasks.find(
            task => task.id === id
        );

    if (!task) return;

    task.pinned =
        !task.pinned;

    saveTasks();

    displayTasks();

    updateDashboard();

    if (task.pinned) {

        showMessage(
            "Task pinned! 📌"
        );

    } else {

        showMessage(
            "Task unpinned."
        );

    }

}

// ===============================
// Professional Toast Notification
// ===============================

function showMessage(
    message,
    type = "success"
) {

    const toast =
        document.createElement("div");


    toast.className =
        `toast ${type}`;


    // ===========================
    // Select Icon
    // ===========================

    let icon =
        "fa-circle-check";


    if (type === "error") {

        icon = "fa-circle-exclamation";

    }

    else if (type === "warning") {

        icon = "fa-triangle-exclamation";

    }

    else if (type === "info") {

        icon = "fa-circle-info";

    }

    else if (type === "pin") {

        icon = "fa-thumbtack";

    }


    // ===========================
    // Toast Content
    // ===========================

    toast.innerHTML = `

        <i class="fa-solid ${icon}"></i>

        <span>
            ${escapeHTML(message)}
        </span>

    `;


    document.body.appendChild(toast);


    // ===========================
    // Show
    // ===========================

    setTimeout(() => {

        toast.classList.add("show");

    }, 10);


    // ===========================
    // Hide
    // ===========================

    setTimeout(() => {

        toast.classList.remove("show");


        setTimeout(() => {

            toast.remove();

        }, 400);

    }, 2500);

}



// ===============================
// Escape HTML
// ===============================

function escapeHTML(text) {

    return String(text)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


// =====================================================
// DRAG & DROP
// =====================================================

function addDragEvents(card) {

    card.addEventListener(
        "dragstart",
        function () {

            draggedTaskId =
                String(card.dataset.id);

            card.classList.add(
                "dragging"
            );

        }
    );


    card.addEventListener(
        "dragend",
        function () {

            card.classList.remove(
                "dragging"
            );

            draggedTaskId = null;


            document
                .querySelectorAll(".task-item")
                .forEach(item => {

                    item.classList.remove(
                        "drag-over"
                    );

                });

        }
    );


    card.addEventListener(
        "dragover",
        function (event) {

            event.preventDefault();


            if (
                String(card.dataset.id)
                ===
                String(draggedTaskId)
            ) {

                return;

            }


            document
                .querySelectorAll(".task-item")
                .forEach(item => {

                    item.classList.remove(
                        "drag-over"
                    );

                });


            card.classList.add(
                "drag-over"
            );

        }
    );


    card.addEventListener(
        "drop",
        function (event) {

            event.preventDefault();


            card.classList.remove(
                "drag-over"
            );


            if (!draggedTaskId) return;


            const targetTaskId =
                String(card.dataset.id);


            if (
                draggedTaskId ===
                targetTaskId
            ) {

                return;

            }


            const draggedIndex =
                tasks.findIndex(
                    task =>
                        String(task.id)
                        ===
                        draggedTaskId
                );


            const targetIndex =
                tasks.findIndex(
                    task =>
                        String(task.id)
                        ===
                        targetTaskId
                );


            if (
                draggedIndex === -1 ||
                targetIndex === -1
            ) {

                return;

            }


            const movedTask =
                tasks.splice(
                    draggedIndex,
                    1
                )[0];


            tasks.splice(
                targetIndex,
                0,
                movedTask
            );


            saveTasks();

            displayTasks();

            updateDashboard();

        }
    );

}


// =====================================================
// INITIAL LOAD
// =====================================================

displayTasks();

updateDashboard();

console.log("TaskFlow JavaScript loaded successfully!");

 // =====================================================
// TASK DETAILS MODAL
// =====================================================

function openTaskDetails(id) {

    const task = tasks.find(
        task => task.id === id
    );

    if (!task) return;

    const modal =
        document.getElementById("task-details-modal");


    // =================================================
    // BASIC TASK INFORMATION
    // =================================================

    document.getElementById("modal-task-title")
        .textContent = task.title;


    document.getElementById("modal-task-description")
        .textContent =
        task.description || "No description";


    document.getElementById("modal-task-category")
        .textContent = task.category;


    // =================================================
    // PRIORITY
    // =================================================

    const priorityElement =
        document.getElementById("modal-task-priority");

    priorityElement.textContent =
        task.priority;

    priorityElement.className =
        `priority-badge ${task.priority.toLowerCase()}`;


    // =================================================
    // DUE DATE
    // =================================================

    const modalDate =
        document.getElementById("modal-task-date");


    if (!task.date) {

        modalDate.textContent = "No Date";

    } else {

        const date =
            new Date(task.date + "T00:00:00");

        modalDate.textContent =
            date.toLocaleDateString(
                "en-US",
                {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            );

    }


    // =================================================
    // STATUS
    // =================================================

    const statusElement =
        document.getElementById("modal-task-status");


    statusElement.textContent =
        task.completed
            ? "Completed"
            : "Pending";


    statusElement.className =
        task.completed
            ? "status-badge completed-status"
            : "status-badge pending-status";


    // =================================================
    // PIN STATUS
    // =================================================

    const pinnedElement =
        document.getElementById("modal-task-pinned");


    pinnedElement.textContent =
        task.pinned
            ? "📌 Pinned"
            : "Not Pinned";


    pinnedElement.className =
        task.pinned
            ? "pinned-badge pinned"
            : "pinned-badge not-pinned";


    // =================================================
    // TASK PROGRESS
    // =================================================

    const modalProgressText =
        document.getElementById(
            "modal-progress-text"
        );

    const modalProgressPercent =
        document.getElementById(
            "modal-progress-percent"
        );

    const modalProgressFill =
        document.getElementById(
            "modal-progress-fill"
        );


    const progress =
        task.completed ? 100 : 0;


    modalProgressText.textContent =
        task.completed
            ? "Completed"
            : "Pending";


    modalProgressPercent.textContent =
        `${progress}%`;


    modalProgressFill.style.width =
        `${progress}%`;


    // =================================================
    // DEADLINE STATUS
    // =================================================

    const dueStatus =
        getDueDateStatus(task.date);


    const dueStatusElement =
        document.getElementById(
            "modal-task-due-status"
        );


    dueStatusElement.textContent =
        dueStatus.text;


    dueStatusElement.className =
        dueStatus.className;


    // =================================================
    // PRODUCTIVITY STATUS
    // =================================================

    document.getElementById(
        "modal-productivity-status"
    ).textContent =
        task.completed
            ? "Completed"
            : "Pending";


    // =================================================
    // PRODUCTIVITY PRIORITY
    // =================================================

    document.getElementById(
        "modal-productivity-priority"
    ).textContent =
        task.priority;


    // =================================================
    // PRODUCTIVITY DEADLINE
    // =================================================

    document.getElementById(
        "modal-productivity-deadline"
    ).textContent =
        task.date
            ? dueStatus.text
            : "—";


    // =================================================
    // COMPLETE BUTTON
    // =================================================

    const completeButton =
        document.getElementById(
            "modal-complete-btn"
        );


    if (task.completed) {

        completeButton.innerHTML = `
            <i class="fa-solid fa-rotate-left"></i>
            Mark as Pending
        `;

    } else {

        completeButton.innerHTML = `
            <i class="fa-solid fa-check"></i>
            Complete Task
        `;

    }


    completeButton.onclick = function () {

        toggleComplete(task.id);

        openTaskDetails(task.id);

    };


    // =================================================
    // EDIT BUTTON
    // =================================================

    const editButton =
        document.getElementById(
            "modal-edit-btn"
        );


    editButton.onclick = function () {

        closeTaskDetails();

        editTask(task.id);

    };


    // =================================================
    // OPEN MODAL
    // =================================================

    modal.classList.add("active");

}

// =====================================================
// CLOSE TASK DETAILS
// =====================================================

function closeTaskDetails() {

    const modal =
        document.getElementById("task-details-modal");

    modal.classList.remove("active");
}


// =====================================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// =====================================================

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("task-details-modal");

    if (event.target === modal) {

        closeTaskDetails();

    }

});


// =====================================================
// CLOSE MODAL WITH ESCAPE
// =====================================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeTaskDetails();

    }

});

// =====================================================
// SMART TASK REMINDER
// =====================================================

function checkTaskReminders() {

    const today = new Date();

    today.setHours(0, 0, 0, 0);


    const todayTaskNames = [];
    const overdueTaskNames = [];


    tasks.forEach(task => {

        // Completed aur bina date wale task ignore
        if (!task.date || task.completed) {
            return;
        }


        const dueDate =
            new Date(task.date + "T00:00:00");

        dueDate.setHours(0, 0, 0, 0);


        const difference =
            dueDate - today;


        const daysLeft =
            Math.ceil(
                difference /
                (1000 * 60 * 60 * 24)
            );


        // ===============================
        // Due Today
        // ===============================

        if (daysLeft === 0) {

            todayTaskNames.push(task.title);

        }


        // ===============================
        // Overdue
        // ===============================

        if (daysLeft < 0) {

            overdueTaskNames.push(task.title);

        }

    });


    // ===============================
    // TODAY REMINDER
    // ===============================

    if (todayTaskNames.length > 0) {

        const taskText =
            todayTaskNames.join(", ");


        showMessage(
            `📅 Tasks due today: ${taskText}`,
            "info"
        );

    }


    // ===============================
    // OVERDUE REMINDER
    // ===============================

    if (overdueTaskNames.length > 0) {

        setTimeout(() => {

            const taskText =
                overdueTaskNames.join(", ");


            showMessage(
                `⚠️ Overdue tasks: ${taskText}`,
                "error"
            );

        }, 2800);

    }

}


// =====================================================
// START SMART REMINDER
// =====================================================

checkTaskReminders();
// =====================================================
// TASK CALENDAR
// =====================================================

const calendarBtn =
    document.getElementById("calendar-btn");

const calendarModal =
    document.getElementById("calendar-modal");

const calendarDays =
    document.getElementById("calendar-days");

const calendarMonthYear =
    document.getElementById("calendar-month-year");

const prevMonthBtn =
    document.getElementById("prev-month");

const nextMonthBtn =
    document.getElementById("next-month");

const todayBtn =
    document.getElementById("today-btn");

const calendarTaskList =
    document.getElementById("calendar-task-list");


let calendarDate = new Date();


// =====================================================
// OPEN CALENDAR
// =====================================================

calendarBtn.addEventListener("click", function () {

    calendarModal.classList.add("active");

    renderCalendar();

});


// =====================================================
// CLOSE CALENDAR
// =====================================================

function closeCalendar() {

    calendarModal.classList.remove("active");

}


// =====================================================
// PREVIOUS MONTH
// =====================================================

prevMonthBtn.addEventListener("click", function () {

    calendarDate.setMonth(
        calendarDate.getMonth() - 1
    );

    renderCalendar();

});


// =====================================================
// NEXT MONTH
// =====================================================

nextMonthBtn.addEventListener("click", function () {

    calendarDate.setMonth(
        calendarDate.getMonth() + 1
    );

    renderCalendar();

});


// =====================================================
// TODAY BUTTON
// =====================================================

todayBtn.addEventListener("click", function () {

    calendarDate = new Date();

    renderCalendar();

});


// =====================================================
// RENDER CALENDAR
// =====================================================

function renderCalendar() {

    calendarDays.innerHTML = "";

    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    const monthName =
        calendarDate.toLocaleDateString(
            "en-US",
            {
                month: "long",
                year: "numeric"
            }
        );


    calendarMonthYear.textContent =
        monthName;


    // First day of month
    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    // Number of days
    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    // Previous month's empty spaces
    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const emptyDay =
            document.createElement("div");

        emptyDay.className =
            "calendar-day empty";

        calendarDays.appendChild(
            emptyDay
        );

    }


    // Create days
    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const dayElement =
            document.createElement("div");

        dayElement.className =
            "calendar-day";


        dayElement.textContent =
            day;


        const dateString =
            `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;


        // =================================================
        // TODAY
        // =================================================

        const today =
            new Date();

        const todayString =
            `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;


        if (dateString === todayString) {

            dayElement.classList.add(
                "today"
            );

        }


        // =================================================
        // TASKS ON THIS DATE
        // =================================================

        const dayTasks =
            tasks.filter(
                task =>
                    task.date === dateString
            );


        if (dayTasks.length > 0) {

            dayElement.classList.add(
                "has-task"
            );


            const taskDot =
                document.createElement("span");

            taskDot.className =
                "task-dot";

            dayElement.appendChild(
                taskDot
            );

        }


        // =================================================
        // CLICK DATE
        // =================================================

        dayElement.addEventListener(
            "click",
            function () {

                showCalendarTasks(
                    dateString
                );

            }
        );


        calendarDays.appendChild(
            dayElement
        );

    }

}


// =====================================================
// SHOW TASKS FOR SELECTED DATE
// =====================================================

function showCalendarTasks(dateString) {

    calendarTaskList.innerHTML = "";


    const selectedTasks =
        tasks.filter(
            task =>
                task.date === dateString
        );


    if (selectedTasks.length === 0) {

        calendarTaskList.innerHTML = `

            <p class="calendar-empty">

                <i class="fa-regular fa-calendar-xmark"></i>

                No tasks for this date.

            </p>

        `;

        return;

    }


    selectedTasks.forEach(task => {

        const taskElement =
            document.createElement("div");

        taskElement.className =
            "calendar-task";


        taskElement.innerHTML = `

            <div>

                <strong>
                    ${escapeHTML(task.title)}
                </strong>

                <span>
                    ${escapeHTML(task.category)}
                </span>

            </div>

            <span class="calendar-task-priority ${task.priority.toLowerCase()}">

                ${escapeHTML(task.priority)}

            </span>

        `;


        calendarTaskList.appendChild(
            taskElement
        );

    });

}


// =====================================================
// CLOSE CALENDAR WHEN CLICKING OUTSIDE
// =====================================================

calendarModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            calendarModal
        ) {

            closeCalendar();

        }

    }
);


// =====================================================
// ESCAPE KEY
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            calendarModal.classList.contains("active")
        ) {

            closeCalendar();

        }

    }
);


// =====================================================
// TASKFLOW ANALYTICS
// =====================================================

// ===============================
// Analytics Elements
// ===============================

const analyticsBtn =
    document.getElementById("analytics-btn");

const analyticsModal =
    document.getElementById("analytics-modal");

const analyticsClose =
    document.getElementById("analytics-close");

const analyticsTotal =
    document.getElementById("analytics-total");

const analyticsCompleted =
    document.getElementById("analytics-completed");

const analyticsRate =
    document.getElementById("analytics-rate");

const analyticsOverdue =
    document.getElementById("analytics-overdue");

const completionChartPercent =
    document.getElementById("completion-chart-percent");

const categoryChart =
    document.getElementById("category-chart");

const analyticsHigh =
    document.getElementById("analytics-high");

const analyticsMedium =
    document.getElementById("analytics-medium");

const analyticsLow =
    document.getElementById("analytics-low");

const highBar =
    document.getElementById("high-bar");

const mediumBar =
    document.getElementById("medium-bar");

const lowBar =
    document.getElementById("low-bar");

const analyticsInsightTitle =
    document.getElementById("analytics-insight-title");

const analyticsInsightText =
    document.getElementById("analytics-insight-text");


// =====================================================
// OPEN ANALYTICS
// =====================================================

analyticsBtn.addEventListener("click", function () {

    renderAnalytics();

    analyticsModal.classList.add("active");

});


// =====================================================
// CLOSE ANALYTICS
// =====================================================

analyticsClose.addEventListener("click", function () {

    closeAnalytics();

});


function closeAnalytics() {

    analyticsModal.classList.remove("active");

}


// =====================================================
// CLOSE WHEN CLICKING OUTSIDE
// =====================================================

analyticsModal.addEventListener(
    "click",
    function (event) {

        if (event.target === analyticsModal) {

            closeAnalytics();

        }

    }
);


// =====================================================
// ESCAPE KEY
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            analyticsModal.classList.contains("active")
        ) {

            closeAnalytics();

        }

    }
);


// =====================================================
// RENDER ANALYTICS
// =====================================================

function renderAnalytics() {

    const total =
        tasks.length;


    const completed =
        tasks.filter(
            task => task.completed
        ).length;


    const pending =
        tasks.filter(
            task => !task.completed
        ).length;


    // =================================================
    // COMPLETION RATE
    // =================================================

    const rate =
        total > 0
            ? Math.round(
                (completed / total) * 100
            )
            : 0;


    // =================================================
    // OVERDUE
    // =================================================

    const overdue =
        tasks.filter(task => {

            if (
                !task.date ||
                task.completed
            ) {

                return false;

            }

            return (
                getDueDateStatus(task.date)
                    .className === "overdue"
            );

        }).length;


    // =================================================
    // UPDATE SUMMARY
    // =================================================

    analyticsTotal.textContent =
        total;

    analyticsCompleted.textContent =
        completed;

    analyticsRate.textContent =
        `${rate}%`;

    analyticsOverdue.textContent =
        overdue;


    // =================================================
    // COMPLETION RING
    // =================================================

    completionChartPercent.textContent =
        `${rate}%`;


    const completedAngle =
        rate * 3.6;


    const remainingAngle =
        360 - completedAngle;


    document
        .querySelector(".completion-ring")
        .style.background =
        `conic-gradient(
            #8b5cf6 0deg,
            #ec4899 ${completedAngle}deg,
            #e2e8f0 ${completedAngle}deg,
            #e2e8f0 360deg
        )`;


    // =================================================
    // CATEGORY ANALYTICS
    // =================================================

    renderCategoryChart();


    // =================================================
    // PRIORITY ANALYTICS
    // =================================================

    renderPriorityChart();


    // =================================================
    // PRODUCTIVITY INSIGHT
    // =================================================

    renderAnalyticsInsight(
        total,
        completed,
        pending,
        overdue,
        rate
    );

}


// =====================================================
// CATEGORY CHART
// =====================================================

function renderCategoryChart() {

    categoryChart.innerHTML = "";


    const categories = {

        Study: 0,
        Work: 0,
        Personal: 0,
        Shopping: 0

    };


    // Count tasks
    tasks.forEach(task => {

        if (
            categories.hasOwnProperty(
                task.category
            )
        ) {

            categories[task.category]++;

        }

    });


    const total =
        tasks.length;


    Object.entries(categories)
        .forEach(
            ([category, count]) => {

                const percentage =
                    total > 0
                        ? Math.round(
                            (count / total) * 100
                        )
                        : 0;


                const row =
                    document.createElement("div");

                row.className =
                    "category-row";


                row.innerHTML = `

                    <div class="category-label">

                        <span>
                            ${escapeHTML(category)}
                        </span>

                        <strong>
                            ${count}
                        </strong>

                    </div>

                    <div class="category-track">

                        <div
                            class="category-fill"
                            style="width: ${percentage}%"
                        ></div>

                    </div>

                `;


                categoryChart.appendChild(row);

            }
        );

}


// =====================================================
// PRIORITY CHART
// =====================================================

function renderPriorityChart() {

    const high =
        tasks.filter(
            task => task.priority === "High"
        ).length;


    const medium =
        tasks.filter(
            task => task.priority === "Medium"
        ).length;


    const low =
        tasks.filter(
            task => task.priority === "Low"
        ).length;


    const total =
        tasks.length;


    // Numbers
    analyticsHigh.textContent =
        high;

    analyticsMedium.textContent =
        medium;

    analyticsLow.textContent =
        low;


    // Percentages
    const highPercent =
        total > 0
            ? (high / total) * 100
            : 0;


    const mediumPercent =
        total > 0
            ? (medium / total) * 100
            : 0;


    const lowPercent =
        total > 0
            ? (low / total) * 100
            : 0;


    // Bars
    highBar.style.width =
        `${highPercent}%`;

    mediumBar.style.width =
        `${mediumPercent}%`;

    lowBar.style.width =
        `${lowPercent}%`;

}


// =====================================================
// PRODUCTIVITY INSIGHT
// =====================================================

function renderAnalyticsInsight(
    total,
    completed,
    pending,
    overdue,
    rate
) {

    // No tasks
    if (total === 0) {

        analyticsInsightTitle.textContent =
            "Let's get started! 🚀";

        analyticsInsightText.textContent =
            "Add your first task and start tracking your productivity.";

        return;

    }


    // 100% completed
    if (rate === 100) {

        analyticsInsightTitle.textContent =
            "Amazing work! 🎉";

        analyticsInsightText.textContent =
            "You've completed every task. Your productivity is at its best!";

        return;

    }


    // Overdue tasks
    if (overdue > 0) {

        analyticsInsightTitle.textContent =
            "Focus on overdue tasks ⚡";

        analyticsInsightText.textContent =
            `You have ${overdue} overdue ${
                overdue === 1
                    ? "task"
                    : "tasks"
            }. Completing them can improve your productivity.`;

        return;

    }


    // Good progress
    if (rate >= 70) {

        analyticsInsightTitle.textContent =
            "You're doing great! ✨";

        analyticsInsightText.textContent =
            `You've completed ${rate}% of your tasks. Keep maintaining this momentum!`;

        return;

    }


    // Medium progress
    if (rate >= 40) {

        analyticsInsightTitle.textContent =
            "Good progress! 💪";

        analyticsInsightText.textContent =
            `${completed} tasks completed and ${pending} still pending. Keep going!`;

        return;

    }


    // Low progress
    analyticsInsightTitle.textContent =
        "Keep going! 🌱";

    analyticsInsightText.textContent =
        "Complete a few more tasks to improve your productivity score.";

}

