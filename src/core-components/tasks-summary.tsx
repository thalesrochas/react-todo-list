import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

export default function TasksSummary() {
  const { tasksCount, concludedTaskCount } = useTasks();
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Tarefas criadas
        </Text>
        <Badge variant="secondary">{tasksCount}</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Concluídas
        </Text>
        <Badge>
          {concludedTaskCount} de {tasksCount}
        </Badge>
      </div>
    </>
  );
}
