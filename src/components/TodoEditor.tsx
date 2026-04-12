import { useState } from "react";
import Input from "./html/Input";

export default function TodoEditor({ addTodo }: TodoEditorProps) {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };
  return (
    <>
      <form className="todo__form" onSubmit={handleSubmit}>
        <div className="todo__editor">
          <Input
            type="text"
            className="todo__input"
            placeholder="Enter Todo List"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="todo__button" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
