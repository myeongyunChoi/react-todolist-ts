import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import TotoHeader from "./TotoHeader";

export default function Todo() {
  return (
    <>
      <div className="todo">
        <TotoHeader />
        {/* <!-- 할 일 등록 --> */}
        <TodoEditor />
        {/* <!-- 할 일 목록 --> */}
        <TodoList />
      </div>
    </>
  );
}
