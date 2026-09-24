// app.js

// Reference the master workout dictionary populated by our data files
const workoutData = window.workoutData || {};

let activeDay = 1;

// Storage helpers
function isDone(id) {
  return localStorage.getItem(`gym_exercise_${id}`) === "true";
}

function setDone(id, status) {
  localStorage.setItem(`gym_exercise_${id}`, status);
}

// Generate Exercise Card
function renderCard(item) {
  const completed = isDone(item.id);
  const notesHtml = item.notes ? `<p class="exercise-notes">${item.notes}</p>` : "";

  return `
    <article class="exercise-card ${completed ? 'completed' : ''}" id="card-${item.id}">
      <div class="card-header">
        <h4 class="exercise-name">${item.name}</h4>
        <label class="complete-toggle">
          <span>Done</span>
          <input 
            type="checkbox" 
            ${completed ? 'checked' : ''} 
            onchange="handleCheck('${item.id}')"
          />
        </label>
      </div>

      ${notesHtml}

      <div class="image-row">
        <div class="thumbnail-wrapper" onclick="openModal('${item.images[0]}', '${item.name} - Start Position')">
          <img src="${item.images[0]}" alt="${item.name} start" loading="lazy" />
          <span class="image-label">Start</span>
        </div>
        <div class="thumbnail-wrapper" onclick="openModal('${item.images[1]}', '${item.name} - Finish Position')">
          <img src="${item.images[1]}" alt="${item.name} finish" loading="lazy" />
          <span class="image-label">Finish</span>
        </div>
      </div>

      <div class="meta-info">
        <span class="badge">${item.sets} • ${item.reps}</span>
        <span>⏱ ${item.time}</span>
      </div>
    </article>
  `;
}

// Build a Section (Warm Up, Main, Stretch)
function renderSection(title, list) {
  if (!list || list.length === 0) {
    return `
      <section class="category-group">
        <div class="category-header">
          <h3 class="category-title">${title}</h3>
        </div>
        <p style="font-size:0.85rem; color:#94a3b8; margin-top:4px;">No exercises listed for this section.</p>
      </section>
    `;
  }

  return `
    <section class="category-group">
      <div class="category-header">
        <h3 class="category-title">${title}</h3>
        <span class="category-count">${list.length} exercises</span>
      </div>
      ${list.map(renderCard).join("")}
    </section>
  `;
}

// Update the Top Progress Counter (e.g., 4 / 17 done)
function updateProgressCounter() {
  const routine = workoutData[activeDay];
  if (!routine) return;

  const allItems = [
    ...(routine.warmUp || []),
    ...(routine.mainWorkout || []),
    ...(routine.stretch || [])
  ];

  const total = allItems.length;
  const completedCount = allItems.filter(item => isDone(item.id)).length;

  document.getElementById("progress-indicator").textContent = `${completedCount} / ${total} done`;
}

// Render complete day
function renderDay(dayNumber) {
  activeDay = dayNumber;
  const routine = workoutData[dayNumber];
  const container = document.getElementById("workout-container");

  if (!routine) {
    container.innerHTML = "<p>No workout data found for this day.</p>";
    return;
  }

  document.getElementById("active-day-heading").textContent = routine.day;
  document.getElementById("active-focus-sub").textContent = routine.focus;

  container.innerHTML = `
    ${renderSection("1. Warm Up", routine.warmUp)}
    ${renderSection("2. Main Workout", routine.mainWorkout)}
    ${renderSection("3. Cool Down & Stretch", routine.stretch)}
  `;

  updateProgressCounter();
}

// Checkbox handler
function handleCheck(id) {
  const card = document.getElementById(`card-${id}`);
  const checkbox = card.querySelector('input[type="checkbox"]');
  setDone(id, checkbox.checked);
  card.classList.toggle("completed", checkbox.checked);
  updateProgressCounter();
}

// Tab switcher
const tabButtons = document.querySelectorAll(".tab-btn");
function switchTab(dayNumber) {
  tabButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.day === String(dayNumber)));
  renderDay(dayNumber);
}

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => switchTab(Number(btn.dataset.day)));
});

// Reset day's checkboxes
document.getElementById("reset-btn").addEventListener("click", () => {
  const routine = workoutData[activeDay];
  if (!routine) return;

  const allItems = [
    ...(routine.warmUp || []),
    ...(routine.mainWorkout || []),
    ...(routine.stretch || [])
  ];

  allItems.forEach(item => localStorage.removeItem(`gym_exercise_${item.id}`));
  renderDay(activeDay);
});

// Fullscreen Modal Logic
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");

function openModal(src, caption) {
  modalImg.src = src;
  modalCaption.textContent = caption;
  modal.classList.remove("hidden");
}

document.getElementById("modal-close").addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

// Initialize to current day (Mon-Fri) on load
window.addEventListener("DOMContentLoaded", () => {
  const day = new Date().getDay();
  const initial = (day >= 1 && day <= 5) ? day : 1;
  switchTab(initial);
});