export function setupSearch(searchInput, taskListContainer) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const tasks = taskListContainer.getElementsByClassName("task-item");

    Array.from(tasks).forEach((task) => {
      const title = task.querySelector(".task-title").textContent.toLowerCase();
      const description = task.querySelector(".task-description").textContent.toLowerCase();

      if (title.includes(query) || description.includes(query)) {
        task.style.display = "";
      } else {
        task.style.display = "none";
      }
    });
  });
}
