interface Task {
  id: number;
  taskName: string;
  description?: string;
  priority: "low" | "medium" | "high";
  date: string;
  completed: boolean;
}

export default Task;
