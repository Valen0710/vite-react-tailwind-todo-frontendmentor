import { useState } from "react";

const TodoCreate = ({createTodo}) => {

  const [title, setTitle] = useState('');

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle("");
    }

    createTodo(title);
    setTitle("");
  }

    return (//onSubmit porque utilizamos el form porque al hacer enter se me va a procesar el formulario
        <form onSubmit={handleSubmitAddTodo} className="flex dark:bg-gray-800 items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 transition-all duration-1000">
          <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-200"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full outline-none text-gray-400 dark:bg-gray-800 transition-all duration-1000"
            value={title}
            onChange={(e) => setTitle(e.target.value)}//por cada click o tecleada en el input se me va a ir relacionando con el input comrrespondiente
          />
        </form>
    )
}

export default TodoCreate;