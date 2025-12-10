export function setupStatusFilter(statusFilter, taskListContainer) {
  statusFilter.addEventListener("change", () => {
    //jab change hoga status tab run hoga
    const filter = statusFilter.value;
    const tasks = taskListContainer.getElementsByClassName("task-item");

    Array.from(tasks).forEach((task) => {
      // foreach array pr chalti hai tu phly tasks ko array mein convert krein gy
      const isCompleted = task.classList.contains("completed");

      if (
        filter === "all" || //  task show karo
        (filter === "completed" && isCompleted) || // Agar "Completed" select hai aur task complete hai
        (filter === "active" && !isCompleted) 
      ) {
        task.style.display = ""; 
      } else {
        task.style.display = "none"; 
      }
    });
  });
}
