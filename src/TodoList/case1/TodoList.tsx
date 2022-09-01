import { useState } from "react";
import TodoForm from "./todoform/TodoForm";
import "./TodoList.css";

export default function TodoList() {

  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = () => {

  }

  return (
    <>
      <article className="todolist-container">
        <h1 className="todolist-title">개의 할일</h1>

        <TodoForm
          setTodoInput={setTodoInput}
          onSubmit={handleSubmit}
          todoInput={todoInput}
        />
        
        <section className="todos-list">
          <h2 className="todos-title">Todo List</h2>
          <div className="todos-utils">
            <span>전체삭제</span>
            <span>전체완료</span>
          </div>
          <ul className="todos">
            <li>1Todo Item1</li>
            <li>1Todo Item2</li>
            <li>1Todo Item3</li>
          </ul>
        </section>
      </article>
    </>
  );
}
