import React, { useState } from 'react';
import TodoForm from './TodoForm';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    value1:""
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
      value1:''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div className='vertical'>
      <div key={todo.id} onClick={() => completeTodo(todo.id)} className='tasks'>
        {todo.text1}
      </div><br></br><br></br>
      <div key={todo.id} onClick={() => completeTodo(todo.id)} className='desc'>
        {todo.text}
      </div>
      </div>
      <div className='icons'>
        <button
          onClick={() => removeTodo(todo.id)} className='clear'>Delete</button>
        <button
          onClick={() => setEdit({ id: todo.id, value: todo.text, value1:todo.text1 })} className='edit'>Edit</button>
      </div>
    </div>
  ));
};

export default Todo;