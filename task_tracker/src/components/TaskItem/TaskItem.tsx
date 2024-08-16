import React from "react";
import Task from "../types";
import { useForm, FieldValues } from "react-hook-form";
import { validationScheme } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./TaskItem.module.css";

interface TaskItemFormProps {
  onTaskAdd: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemFormProps> = ({ onTaskAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Task>({
    resolver: zodResolver(validationScheme),
    defaultValues: { date: new Date().toISOString().split("T")[0] },
  });

  const onSubmit = (e: FieldValues) => {
    const newTask: Task = {
      id: Math.floor(Math.random() * 1000),
      taskName: e.taskName,
      description: e.description,
      priority: e.priority,
      date: e.date,
      completed: false,
    };
    onTaskAdd(newTask);
    reset();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="taskName" className="form-label">
          Task Name <span className="text-danger"></span>
        </label>
        <input
          {...register("taskName")}
          type="text"
          className="form-control"
          id="taskName"
        />

        {errors.taskName && <p>{errors.taskName.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="description"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="priority" className="form-label">
          Priority <span className="text-danger"></span>
        </label>
        <select
          {...register("priority")}
          className="form-select"
          id="priority"
          required
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Date
        </label>
        <input {...register("date")} type="date" className="form-control" />
      </div>
      <button type="submit" className={styles.submitButton}>
        Add Task
      </button>
    </form>
  );
};

export default TaskItem;
