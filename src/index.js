document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description").value;

    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    if (taskInput.trim() === "") {
      li.textContent = "";
    } else {
      li.textContent = taskInput;
    }

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    form.reset();
  });
});
