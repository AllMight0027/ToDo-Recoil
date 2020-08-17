import React, { useState, useEffect } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

const Home = () => {
  const [reload, setReload] = useState(false);
  useEffect(() => {}, [reload]);
  return (
    <div className="bg-dark container-fluid">
      <div className="row text-center">
        <div className="col-12 text-center">
          <h3 className="pt-3 pb-3 text-warning">My ToDos </h3>
        </div>
      </div>
      <Form setReload={setReload} reload={reload} />

      <TaskList setReload={setReload} reload={reload} />
    </div>
  );
};

export default Home;
