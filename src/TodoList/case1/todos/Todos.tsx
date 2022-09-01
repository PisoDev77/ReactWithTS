import { TodoType } from "../TodoList";

interface TodoListProps{
    todos:TodoType[]
}

export default function Todos({todos}:TodoListProps){


    return(


        <>
            <ul className="todos">
                {
                    todos.map((todo, idx)=>{
                        return(
                            <li key={idx + todo.content}>{todo.content}</li>
                        );
                    })
                }
          </ul>
        </>


    );


}