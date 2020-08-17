import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import { RecoilRoot, atom } from "recoil";
import TaskDetail from "./Components/TaskDetail";

export const allTasksState = atom({
  key: "tasks",
  default: []
});

export default function Routes() {
  return (
    <RecoilRoot>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details" component={TaskDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}
