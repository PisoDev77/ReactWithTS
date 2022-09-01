import "./TodoForm.css";

export default function TodoForm() {

  return (
    <>
      <section className="todolist-form">
        <form action="" className="todo-form">
          <label htmlFor="todo">
            Your Todo
          </label>
          <input type="text" id="todo" />
          <button type="submit">
            +
          </button>
        </form>
      </section>
    </>
  );
}
