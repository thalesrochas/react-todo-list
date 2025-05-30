import React from "react";

import ButtonIcon from "../components/buton-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Text from "../components/text";

import { cx } from "class-variance-authority";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import useTask from "../hooks/use-task";
import { TaskState, type Task } from "../models/task";

type TaskItemProps = {
  task: Task;
};

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating,
  );

  const [taskTitle, setTaskTitle] = React.useState(task.title || "");
  const { updateTask } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.concluded}
            value={task?.concluded?.toString()}
          />
          <Text className={cx("flex-1", { "line-through": task?.concluded })}>
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon type="submit" icon={CheckIcon} />
          </div>
        </form>
      )}
    </Card>
  );
}
