import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  modifyTodo,
}: TodoListProps) {
  return (
    <>
      <ul className="todo__list">
        {todos.length === 0 && <TodoListEmpty />}
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            modifyTodo={modifyTodo}
          />
        ))}
      </ul>
    </>
  );
}
