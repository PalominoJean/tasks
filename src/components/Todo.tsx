import { useState } from "react";
import { Tasks } from "./Tasks";

export const Todo = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (taskIndex: number) => {
    setTasks(tasks.filter((_task, index) => index !== taskIndex));
  };

  return (
    <>
      <h2>Lista de tareas</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>agregar</button>
      <Tasks tasks={tasks} deleteTask={deleteTask}></Tasks>
    </>
  );
};
