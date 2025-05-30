import Button from "../components/button";

import PlusIcon from "../assets/icons/plus.svg?react";
import useTask from "../hooks/use-task";
import useTasks from "../hooks/use-tasks";
import TaskItem from "./task-item";

export default function TasksList() {
  const { tasks } = useTasks();
  const { prepareTask } = useTask();

  function handleNewTask() {
    prepareTask();
  }

  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full" onClick={handleNewTask}>
          Nota tarefa
        </Button>
      </section>

      <section className="space-y-2">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}
