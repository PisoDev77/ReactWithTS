import { TodoType } from "../TodoList";

type todoProp = {
    todo: TodoType;
    onDoneToggle: (id:number) => void;
    onDelClicked: (id:number) => void;
}

export default function TodoItem({todo,onDoneToggle,onDelClicked}:todoProp){


    const handleDone = () => {
        onDoneToggle(todo.id);
    };
    const handleDel = () => {
        onDelClicked(todo.id);
    };

    const doneClassName = () => {
        const done = todo.isDone ? "DONE" : "";
        return "done-btn " + done;
    }


    return(

        <li>
            <button onClick={()=>handleDone()} 
            className={doneClassName()}></button>
            <p className="content">{todo.content}</p>
            <button onClick={()=>handleDel()} className="del-btn"></button>
        </li>

    )


}