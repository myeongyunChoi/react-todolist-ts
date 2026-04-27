import { useContext } from "react";
import { TodoContext, TodoContextAction } from "./TodoContext";

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo는 TodoProvider 안에서 사용되어야 합니다.");
  }
  return context;
}

export function useTodoAction() {
  const context = useContext(TodoContextAction);
  if (!context) {
    throw new Error("useTodoAction은 TodoProvider 안에서 사용되어야 합니다.");
  }
  return context;
}
