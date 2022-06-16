export type Task = {
  task: string;
  isDone: boolean;
};

export type Tasks = Task[];

export type State = {
  newTask: string;
  todo: Tasks;
  filteredTodo: Tasks;
};
