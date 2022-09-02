import { ChangeEvent, FormEvent } from "react";
import "./TodoForm.css";

interface TodoInputProps{
  todoInput: string
  setTodoInput: (todoInput: string) => void
  onSubmit:()=>void
}

export default function TodoForm({todoInput,setTodoInput,onSubmit}:TodoInputProps) {

  const handleTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  }
  
  const handleSubmit = (e:FormEvent) =>{
    e.preventDefault();

    if(todoInput.trim() !== ""){
      onSubmit();
    }
  }

  return (
    <>
      <section className="todolist-form">
        <form action="" className="todo-form" onSubmit={(e)=>handleSubmit(e)}>
          <label htmlFor="todo">
            Your Todo
          </label>
          <input type="text" id="todo" value={todoInput} onChange={(e)=>handleTodoInput(e)} required/>
          <button type="submit">
            +
          </button>
        </form>
      </section>
    </>
  );
}
