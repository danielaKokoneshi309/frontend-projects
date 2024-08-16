
import React from "react";
import TaskElement from "../TaskElement/TaskElement";
import Task from "../types";
import styles from './TaskList.module.css'
interface Props {
  tasks: Task[];
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
 
}



const TaskList: React.FC<Props> = ({ tasks, onDelete, onComplete}) => {
  return (
   
      <div  className={styles.tasksContainer} >
        {tasks.map((task) => (
          <TaskElement
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
        

          />
        ))}
      </div>
   
  );
};

export default TaskList;
