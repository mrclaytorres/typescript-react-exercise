import React, { useRef } from 'react';
import './NewTodo.css';

type NewTodoProperties = {
  onAddTodo: (todoText: string) => void
};

const NewTodo: React.FC<NewTodoProperties> = props => {
  const textInputRef = useRef<HTMLInputElement>(null);
  
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return <form onSubmit={todoSubmitHandler}>
    <div>
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" id="todo-text" ref={textInputRef} />
      <button type="submit">ADD TODO</button>
    </div>
  </form>;
};

export default NewTodo;