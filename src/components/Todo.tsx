import { useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import TotoHeader from "./TotoHeader";

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]"),
  );
  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const modifyTodo = (id: number, text: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo)),
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="todo">
        <TotoHeader />
        {/* <!-- 할 일 등록 --> */}
        <TodoEditor addTodo={addTodo} />
        {/* <!-- 할 일 목록 --> */}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          modifyTodo={modifyTodo}
        />
      </div>
    </>
  );
}
