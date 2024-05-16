type Props = {
  tasks: string[];
  deleteTask: (index: number) => void;
};

export const Tasks = ({ tasks, deleteTask }: Props) => {
  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
};
