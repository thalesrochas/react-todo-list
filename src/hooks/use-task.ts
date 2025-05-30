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

  return { prepareTask };
}
