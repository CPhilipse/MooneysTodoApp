export type Todo = {
  id: string;
  title: string;
  description: string;
  date: string;
  note: string;
  isFinished: boolean;
  bg: string;
};

export type Category = {
  id: string;
  category: string;
  todos: Todo[];
};
