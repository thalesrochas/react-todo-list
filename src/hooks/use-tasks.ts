import React from "react";
import useLocalStorage from "use-local-storage";

import { delay } from "../helpers/utils";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);
  }

  React.useEffect(() => {
    fetchTasks();
    console.log("useEffect");
  }, [tasksData]);

  return {
    tasks,
    tasksCount: tasks.filter(task => task.state === TaskState.Created).length,
    concludedTaskCount: tasks.filter(task => task.concluded).length,
    isLoadingTasks,
  };
}
