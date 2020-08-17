import React, { useState, useEffect } from "react";
import { addItemToStorageTask } from "./helper/taskshelper";

const Form = ({ setReload = (f) => f, reload = undefined }) => {
  const [values, setvalues] = useState({
    task: "",
    priority: "",
    description: "",
    completed: false
  });
  const { task, priority, description, completed } = values;

  const handleChange = (name) => (event) => {
    return setvalues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (task === "") {
      alert("Enter a task");
    } else if (priority === "" || priority === "Select Priority") {
      alert("Add Priority");
    } else {
      event.preventDefault();
      addItemToStorageTask({ task, priority, description, completed });
      setvalues({
        ...values,
        task: "",
        priority: "",
        description: "",
        completed: false
      });
      setReload(!reload);
    }
  };

  return (
    <div className="row bg-dark">
      <div className="col-md-6 offset-sm-3 text-left">
        <form>
          <div className="form-group">
            <label className="text-light">Task Name</label>
            <input
              onChange={handleChange("task")}
              className="form-control"
              type="text"
              value={task}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("priority")}
              className="form-control"
              placeholder="Gender"
              value={priority}
            >
              <option>Select Priority</option>
              <option value={"high"} className="text-danger bg-dark">
                High
              </option>
              <option value={"medium"} className="text-warning bg-dark">
                Medium
              </option>
              <option value={"low"} className="text-info bg-dark">
                Low
              </option>
            </select>
          </div>
          <button
            onClick={onSubmit}
            className="btn btn-success btn-block"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
