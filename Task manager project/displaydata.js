export function renderTask(
  titleInput,
  descriptionTextarea,
  prioritySelect,
  dueDateInput,
  taskListContainer,
  taskForm 
) 
 {
  const taskItem = document.createElement("div");
  taskItem.className = "task-item";

  taskItem.innerHTML = `
    <div class="task-content">
      <div class="task-title">${titleInput.value}</div>
      <div class="task-description">${descriptionTextarea.value}</div>
      <div class="task-meta">Priority: ${prioritySelect.value} | Due: ${
    dueDateInput.value || "Not set"
  }</div>
    </div>
    <div class="task-actions">
      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Delete</button>
      <button class="edit-btn">Edit</button>
    </div>
  `;
  taskListContainer.appendChild(taskItem); // parent container mein data show hoga

  // localStorage.setItem(titleInput.value,descriptionTextarea.value);
  
  taskForm.reset(); //after showing data clear hoga
  taskItem.querySelector(".complete-btn").addEventListener("click", () => {
    taskItem.classList.toggle("completed"); //class activate hogi
  });
  taskItem.querySelector(".delete-btn").addEventListener("click", () => {
    taskItem.remove(); // list sy data remove hoga
  });
  taskItem.querySelector(".edit-btn").addEventListener("click", (event) => {
    const titleEl = taskItem.querySelector(".task-title");
    const descEl = taskItem.querySelector(".task-description");
    const priorityEl=taskItem.querySelector(".task-meta");
    const editBtn = event.target; // click krein gy edit ki jagah save likha jaye ga

    if (editBtn.textContent === "Edit") {
      titleEl.contentEditable = "true";
      descEl.contentEditable = "true";
      priorityEl.contentEditable="true";
      titleEl.focus(); //automatically current edit pr ajaye ga
      editBtn.textContent = "Save";
    } else {
      titleEl.contentEditable = "false";
      descEl.contentEditable = "false";
      priorityEl.contentEditable="false";
      editBtn.textContent = "Edit";
    }
  });
}
