import { TodoType } from "../TodoList";

type todoProp = {
    todo: TodoType;
}

export default function TodoItem({todo}:todoProp){


    const handleDone = () => {
        console.log("DONE CHCK");
    };
    const handleDel = () => {
        console.log("DONE DEL");
    };


    return(

        <li key={todo.id}>
            <button onClick={()=>handleDone()} className="done-btn"></button>
            <p className="content">{todo.content}</p>
            <button onClick={()=>handleDel()} className="del-btn"></button>
        </li>

    )


}