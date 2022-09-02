import { TodoType } from "../TodoList";
import TodoItem from "./TodoItem";

import "./Todos.css";

export interface TodoListProps{
    todos:TodoType[]
}

export default function Todos({todos}:TodoListProps){


    return(


        <>
            <ul className="todos">
                {
                    todos.map((todo)=>{
                        return(
                            <TodoItem todo={todo}/>
                        );
                    })
                }
          </ul>
        </>


    );


}