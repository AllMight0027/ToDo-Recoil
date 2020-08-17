import React, { useEffect, useState } from "react";
import { useRecoilState, atom } from "recoil";
import { allTasksState } from "../Routes";
import { Link } from "react-router-dom";
import { updateTaskList, loadOneTask, oneTask } from "./helper/taskshelper";

export const newTaskState = atom({
  key: "task",
  default: {
    task: loadOneTask() ? loadOneTask().task : "",
    priority: loadOneTask() ? loadOneTask().priority : "",
    description: loadOneTask() ? loadOneTask().description : "",
    completed: loadOneTask() ? loadOneTask().completed : ""
  }
});
const TaskDetail = () => {
  const [task, setTask] = useRecoilState(newTaskState);
  const [tasks, setTasks] = useRecoilState(allTasksState);
  const [success, setSuccess] = useState(false);

  const { priority, description } = task;

  const onSuccess = () => (
    <div className="col-md-6 offset-sm-3 text-left mt-2">
      <div
        className="alert alert-dark text-success"
        style={{ display: success ? "" : "none" }}
      >
        Updated Successfully
      </div>
    </div>
  );

  const handleChange = (name) => (event) => {
    setSuccess(false);
    return setTask({ ...task, [name]: event.target.value });
  };
  useEffect(() => {
    if (task.completed === true) {
      document.getElementById("isCompleted").checked = true;
    }
  }, []);
  const onSubmit = (event) => {
    event.preventDefault();
    if (task === "") {
      alert("Enter a task");
    } else if (priority === "" || priority === "Select Priority") {
      alert("Add Priority");
    } else {
      event.preventDefault();
      var x = [];
      tasks.map((t, i) => {
        if (t.task === task.task) {
          x.push(task);
        } else {
          x.push(t);
        }
      });

      updateTaskList(x);
      setTasks(x);
      oneTask(task);
      return setSuccess(true);
      // addItemToStorageTask({ task, priority, description, completed });
    }
  };

  function myFunction() {
    var checkBox = document.getElementById("isCompleted");
    if (checkBox.checked === true) {
      setTask({ ...task, completed: true });
    } else {
      setTask({ ...task, completed: false });
    }
  }

  if (priority === true) {
    document.getElementById("isCompleted").checked = true;
  }

  return (
    <div className="container-fluid bg-dark">
      <Link to="/">
        <button className="btn btn-warning mt-2"> Go Back </button>
      </Link>
      <div className="row bg-dark">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <label className="text-light mt-3">
              <h4>{task.task}</h4>{" "}
            </label>
            <br />

            <label className="text-light mt-3">
              <h5>
                Priority: {priority === "medium" ? "Medium" : ""}
                {priority === "high" ? "High" : ""}
                {priority === "low" ? "Low" : ""}
              </h5>{" "}
            </label>
            <div className="form-group">
              <textarea
                onChange={handleChange("description")}
                rows="5"
                className="form-control"
                type="text"
                value={description}
              />
            </div>
            <div className="row mt-3">
              <h6 className="text-danger ml-3">Uncompleted&nbsp;</h6>
              <div className="switch">
                <label>
                  <input
                    type="checkbox"
                    id="isCompleted"
                    onClick={myFunction}
                  />
                  <span class="slider round"></span>
                </label>
              </div>
              <h6 className="text-warning ">&nbsp;Completed</h6>
            </div>
            <button
              onClick={onSubmit}
              className="btn btn-success btn-block mt-2"
              type="submit"
            >
              Update
            </button>
          </form>
          {onSuccess()}
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
