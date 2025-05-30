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
import { TaskState, type Task } from "../models/task";

type TaskItemProps = {
  task: Task;
};

export default function TaskItem({ task }: TaskItemProps) {
  console.log(task);
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating,
  );

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
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
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon icon={CheckIcon} />
          </div>
        </>
      )}
    </Card>
  );
}
