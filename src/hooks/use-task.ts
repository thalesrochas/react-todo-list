import React from "react";
import useLocalStorage from "use-local-storage";

import { delay } from "../helpers/utils";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);
  const [isDeletingTask, setIsDeletingTask] = React.useState(false);

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

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdatingTask(true);

    await delay(1000);
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task,
      ),
    );

    setIsUpdatingTask(false);
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map(task => (task.id === id ? { ...task, concluded } : task)),
    );
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true);

    await delay(1000);
    setTasks(tasks.filter(task => task.id !== id));

    setIsDeletingTask(false);
  }

  return {
    deleteTask,
    prepareTask,
    updateTask,
    updateTaskStatus,
    isUpdatingTask,
    isDeletingTask,
  };
}
