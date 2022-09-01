import { useState } from "react";

import TodoList from "./TodoList/case1/TodoList";


function App() {

  const [todocase, setTodoCase] = useState("");

  const setTodoList = (val: string) => {

    switch(val){
      case "todolist-case1":

        return <TodoList />;

      default:
        return;
    }
    
  }


  return (
    <>
      <main className="App">
        <div>
          <button type="button" onClick={()=>setTodoCase("todolist-case1")}>TodoList Case1</button>
        </div>
        {
          setTodoList(todocase)
        }
      </main>
    </>
  );
}

export default App;
