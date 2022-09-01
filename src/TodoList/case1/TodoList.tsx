import { useState } from "react";
import TodoForm from "./todoform/TodoForm";
import "./TodoList.css";
import Todos from "./todos/Todos";

export type TodoType = {
  id: number
  content: string
  isDone: boolean
}

export default function TodoList() {

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleSubmit = () => {
      setTodos([...todos,
        {
          id:Date.now(),
          content: todoInput,
          isDone: false
        }
      ]);
      setTodoInput("");
  }

  return (
    <>
      <article className="todolist-container">
        <h1 className="todolist-title"><b>{todos.length}</b>개의 할일</h1>

        <TodoForm
          setTodoInput={setTodoInput}
          onSubmit={handleSubmit}
          todoInput={todoInput}
        /> 
        
        <section className="todos-list">
          {
            todos.length < 1 ? <b>There is None of Todos</b>
            :<>
              <h2 className="todos-title">Todo List</h2>
                <div className="todos-utils">
                  <span>전체삭제</span>
                  <span>전체완료</span>
                </div>
              <Todos todos={todos}/> 
            </>
          }
          
        </section>
      </article>
    </>
  );
}
