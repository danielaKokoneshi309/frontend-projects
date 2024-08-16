import React from "react";
import Task from "../types";
import styles from "./Task.module.css";

interface TaskElementProps {
  task: Task;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskElement: React.FC<TaskElementProps> = ({
  task,
  onComplete,
  onDelete,
}) => {
  const getPriorityColor = (task: Task) => {
    switch (task.priority) {
      case "low":
        return `${styles.taskListContainer}  ${styles.lowPriority} ${
          task.completed && styles.completed
        }`;
      case "medium":
        return `${styles.taskListContainer}  ${styles.mediumPriority} ${
          task.completed && styles.completed
        }`; 
      case "high":
        return `${styles.taskListContainer}  ${styles.highPriority} ${
          task.completed && styles.completed
        }`;
      default:
        return "";
    }
  };
  return (
    <div key={task.taskName} className={getPriorityColor(task)}>
      <div style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.taskName}
      </div>
      <div className={styles.buttonContainer}>
        <button className="btn btn-primary" onClick={() => onComplete(task.id)}>
          Complete
        </button>

        <button
          className="btn btn-outline-danger"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskElement;
