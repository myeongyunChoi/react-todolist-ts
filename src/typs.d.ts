interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TodoEditorProps {
  addTodo: (text: string) => void;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  modifyTodo: (id: number, text:  string) => void;
}
