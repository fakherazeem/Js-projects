import { updateCurrentDate } from "./datetime.js";
import { renderTask } from "./displaydata.js";
import { setupSearch } from "./search.js";
import { setupStatusFilter } from "./filter.js";
const taskForm = document.getElementById("task-form");
const titleInput = document.getElementById("title");
const descriptionTextarea = document.getElementById("description");
const prioritySelect = document.getElementById("priority");
const dueDateInput = document.getElementById("due-date");
const searchInput = document.getElementById("search-input");
const statusFilter = document.getElementById("status-filter");
const taskListContainer = document.getElementById("task-list-container");
const currentDateElement = document.getElementById("current-date");


updateCurrentDate(currentDateElement); //date

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderTask(
    titleInput,
    descriptionTextarea,
    prioritySelect,
    dueDateInput,
    taskListContainer,
    taskForm
  );
});//display
setupSearch(searchInput, taskListContainer);//searching
setupStatusFilter(statusFilter, taskListContainer);//status
