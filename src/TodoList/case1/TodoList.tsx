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

  const getRemainTodos = () => {
    const remain = todos.filter((todo)=>!todo.isDone)
    return remain.length;
  };

  const handleDone = (id:number) => {
    
    const newTodos = todos.map( todo => {

      if(todo.id === id){
        return(
          {
            ...todo,
            isDone: !todo.isDone
          }
        )
      }
      return todo;
    });

    setTodos(newTodos);    
  }
  const handleDel = (id:number) => {
    const newTodos = todos.filter(todo=>todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <>
      <article className="todolist-container">
        <h1 className="todolist-title"><b>{getRemainTodos()}</b>개의 할일</h1>

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
              <Todos todos={todos} onDoneToggle={(id)=>handleDone(id)} onDelClicked={(id)=>handleDel(id)}/> 
            </>
          }
          
        </section>
      </article>
    </>
  );
}
