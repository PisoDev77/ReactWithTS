import { TodoType } from "../TodoList";
import TodoItem from "./TodoItem";

import "./Todos.css";

export interface TodoListProps{
    todos:TodoType[]
    onDoneToggle: (id:number) => void
    onDelClicked: (id:number) => void
}

export default function Todos({todos,onDoneToggle,onDelClicked}:TodoListProps){


    return(


        <>
            <ul className="todos">
                {
                    todos.map((todo)=>{
                        return(
                            <TodoItem key={todo.id} todo={todo} onDoneToggle={()=>onDoneToggle(todo.id)} onDelClicked={()=>onDelClicked(todo.id)}/>
                        );
                    })
                }
          </ul>
        </>


    );


}