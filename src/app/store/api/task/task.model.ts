export interface UnsafeTask {
  title: string;
  description?: string;
}

export interface Task extends UnsafeTask {
  id: string;
  completed: boolean;
}

export type TaskList = Task[];

export const createTask = (task: UnsafeTask): Task => ({
  id: `${Date.now()}`,
  title: task.title,
  description: task.description,
  completed: false
});
