import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(16).substring(2),
        state: TaskState.Creating,
        title: "",
      },
    ]);
  }

  function updateTask(id: string, payload: { title: Task["title"] }) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task,
      ),
    );
  }

  return {
    prepareTask,
    updateTask,
  };
}
