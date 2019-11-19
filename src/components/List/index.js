import React from "react";
import { TaskList, Task } from "./styles";

export default function List({ tasks, onClick }) {
  return (
    <TaskList>
      {tasks.map(task => (
        <Task key={task._id} done={task.done} onClick={() => onClick(task)}>
          {task.description}
          {task.done && <span>OK</span>}
        </Task>
      ))}
    </TaskList>
  );
}
