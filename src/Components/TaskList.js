import React, { useState, useEffect } from "react";
import {
  loadTask,
  emptyTask,
  removeFromTask,
  oneTask
} from "./helper/taskshelper";
import { withRouter, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { allTasksState } from "../Routes";
import { newTaskState } from "./TaskDetail";

const TaskList = ({ setReload = (f) => f, reload = undefined, history }) => {
  const [task, setTask] = useRecoilState(newTaskState);
  const [tasks, setTasks] = useRecoilState(allTasksState);
  const [priority, setPriority] = useState("");

  useEffect(() => {
    setTasks(loadTask());
  }, [reload]);

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  var ch = 0;
  var cm = 0;
  var cl = 0;
  if (tasks && tasks.length !== 0) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].priority === "high") ch += 1;
      else if (tasks[i].priority === "medium") cm += 1;
      else if (tasks[i].priority === "low") cl += 1;
    }
  }
  return (
    <div>
      {tasks && tasks.length !== 0 && (
        <div>
          <div className="row text-center mt-4">
            <div className="col-4">
              <select
                onChange={handleChange}
                className="form-control mt-4"
                placeholder="Priority"
              >
                <option>All Priorities</option>
                <option value={"high"} className="text-danger bg-dark">
                  High ({ch})
                </option>
                <option value={"medium"} className="text-warning bg-dark">
                  Medium ({cm})
                </option>
                <option value={"low"} className="text-info bg-dark">
                  Low ({cl})
                </option>
                )
              </select>
            </div>
          </div>
          <div className="row text-center mt-4">
            <div className="col-4">
              <h5 className="text-white">Task Name</h5>
            </div>
            <div className="col-4">
              <h5 className="text-white">Priority</h5>
            </div>
            <div className="col-4" />
          </div>
        </div>
      )}
      {tasks &&
        tasks.length !== 0 &&
        tasks.map((task, index) => {
          return (
            <div className="row" key={`~${index}`}>
              {(priority === "high" ||
                priority === "" ||
                priority === "All Priorities") &&
                task.priority === "high" && (
                  <div className="col-12 text-danger text-center">
                    <div className="row pt-2 border-top border-bottom">
                      <div
                        className="col-4"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          oneTask(task);
                          setTask(task);
                        }}
                      >
                        <Link to="/details">
                          <h6 className="text-white">
                            {" "}
                            {task.completed && (
                              <img
                                src="https://img.icons8.com/fluent/15/000000/checkmark.png"
                                alt="completed"
                              />
                            )}{" "}
                            {task.task}
                          </h6>
                        </Link>
                      </div>
                      <div className="col-4 text-danger text-center">
                        <h6>High</h6>
                      </div>
                      <div className="col-4 text-center text-center">
                        <button
                          onClick={() => {
                            removeFromTask(task.task);
                            setReload(!reload);
                          }}
                          className="btn btn-danger btn-sm mb-2"
                          type="submit"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              {(priority === "medium" ||
                priority === "" ||
                priority === "All Priorities") &&
                task.priority === "medium" && (
                  <div className="col-12 text-danger text-center">
                    <div className="row pt-2 border-top border-bottom border-white">
                      <div
                        className="col-4"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          oneTask(task);
                          setTask(task);
                        }}
                      >
                        <Link to="/details">
                          <h6 className="text-white">
                            {" "}
                            {task.completed && (
                              <img
                                src="https://img.icons8.com/fluent/15/000000/checkmark.png"
                                alt="completed"
                              />
                            )}{" "}
                            {task.task}
                          </h6>
                        </Link>
                      </div>
                      <div className="col-4 text-warning text-center">
                        <h6>Medium</h6>
                      </div>
                      <div className="col-4 text-center text-center">
                        <button
                          onClick={() => {
                            removeFromTask(task.task);
                            setReload(!reload);
                          }}
                          className="btn btn-danger btn-sm mb-2"
                          type="submit"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              {(priority === "low" ||
                priority === "" ||
                priority === "All Priorities") &&
                task.priority === "low" && (
                  <div className="col-12 text-danger text-center">
                    <div className="row pt-2 border-top border-bottom border-white">
                      <div
                        className="col-4"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          oneTask(task);
                          setTask(task);
                        }}
                      >
                        <Link to="/details">
                          <h6 className="text-white">
                            {" "}
                            {task.completed && (
                              <img
                                src="https://img.icons8.com/fluent/15/000000/checkmark.png"
                                alt="completed"
                              />
                            )}{" "}
                            {task.task}
                          </h6>
                        </Link>
                      </div>
                      <div className="col-4 text-info text-center">
                        <h6>Low</h6>
                      </div>
                      <div className="col-4 text-center text-center">
                        <button
                          onClick={() => {
                            removeFromTask(task.task);
                            setReload(!reload);
                          }}
                          className="btn btn-danger btn-sm mb-2"
                          type="submit"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          );
        })}
      {tasks &&
        tasks.length !== 0 &&
        (priority === "" || priority === "All Priorities") && (
          <div className="row bg-dark">
            <div className="col-md-6 offset-sm-3 text-left">
              <button
                onClick={() => {
                  emptyTask();
                  setReload(!reload);
                }}
                className="btn btn-success btn-danger btn-block mt-3 mb-3"
                type="submit"
              >
                Delete All
              </button>
            </div>
          </div>
        )}
      {(!tasks || tasks.length === 0) && (
        <div className="row text-center mt-4">
          <div className="col-12">
            <h5 className="text-white">No Task To Show</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(TaskList);
