export const addItemToStorageTask = (item) => {
  let task = [];
  if (window !== undefined) {
    if (localStorage.getItem("task")) {
      task = JSON.parse(localStorage.getItem("task"));
    }
    task.push({
      ...item
    });
    localStorage.setItem("task", JSON.stringify(task));
  }
};

export const loadTask = () => {
  if (window !== undefined) {
    if (localStorage.getItem("task")) {
      return JSON.parse(localStorage.getItem("task"));
    }
  }
};

export const removeFromTask = (taskName) => {
  let task = [];
  if (window !== undefined) {
    if (localStorage.getItem("task")) {
      task = JSON.parse(localStorage.getItem("task"));
    }
    // eslint-disable-next-line
    task.map((t, index) => {
      if (t.task === taskName) {
        task.splice(index, 1);
      }
    });
    localStorage.setItem("task", JSON.stringify(task));
  }
};

export const updateTaskList = (task) => {
  if (window !== undefined) {
    localStorage.removeItem("task");
    localStorage.setItem("task", JSON.stringify(task));
  }
};

export const emptyTask = () => {
  if (window !== undefined) {
    localStorage.removeItem("task");
  }
};

export const oneTask = (item) => {
  if (window !== undefined) {
    localStorage.setItem("oneTask", JSON.stringify(item));
  }
};

export const loadOneTask = () => {
  if (window !== undefined) {
    if (localStorage.getItem("task")) {
      return JSON.parse(localStorage.getItem("oneTask"));
    }
  }
};
