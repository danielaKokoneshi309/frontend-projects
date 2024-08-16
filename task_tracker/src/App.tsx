
import React, { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskItem from "./components/TaskItem/TaskItem"; 

import Task from "./components/types";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTaskAdd = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleTaskComplete = (id: number) => {

    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>Add New Task</h2>
          <TaskItem onTaskAdd={handleTaskAdd} />
        </div>
        <div className="col-md-6">
          <h2>Task List</h2>
          <TaskList
            tasks={tasks}
            onDelete={handleTaskDelete}
            onComplete={handleTaskComplete}   
          />
        </div>
      </div>
    </div>
  );
};

export default App;