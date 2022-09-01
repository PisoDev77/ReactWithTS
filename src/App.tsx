import { useState } from "react";

import TodoList from "./TodoList/case1/TodoList";
import Header from "./react/header/Header";


function App() {

  const [todocase, setTodoCase] = useState("");

  const setTodoList = (val: string) => {

    switch(val){
      case "todolist-case1":

        return <TodoList />;

      case "react-shop-test":
        return <Header />;
      default:
        return;
    }
    
  }


  return (
    <>
      <main className="App">
        <div>
          <button type="button" onClick={()=>setTodoCase("todolist-case1")}>TodoList Case1</button>
          <button type="button" onClick={()=>setTodoCase("react-shop-test")}>react-shop-test</button>
        </div>
        {
          setTodoList(todocase)
        }
      </main>
    </>
  );
}

export default App;
