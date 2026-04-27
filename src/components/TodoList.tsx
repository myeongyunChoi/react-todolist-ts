import { useTodo } from "../context/todo/useTodo";
import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  const { todos } = useTodo();
  return (
    <>
      <ul className="todo__list">
        {todos.length === 0 && <TodoListEmpty />}
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}
