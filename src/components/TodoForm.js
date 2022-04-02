import React, { useState, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  const [input1, setInput1] = useState(props.edit ? props.edit.value1 : '');
  const inputRef1 = useRef(null);


  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleChange1 = e => {
    setInput1(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text1:input1,
      text: input
    });
    setInput('');
    setInput1('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
         <div className='container'>
         {/* <input
            placeholder='Task Number'
            value1={input1}
            onChange={handleChange1}
            name='text1'
            className='todo-input edit'
            ref={inputRef1}
          /> */}
          <input
            placeholder='Task Description'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
          </div>
        </>
      ) : (
        <>
        <div className='container'>
        <input
            placeholder='Task Number'
            value1={input1}
            onChange={handleChange1}
            name='text1'
            className='todo-input'
            ref={inputRef1}
          />
          <input
            placeholder='Task Description'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
          </div>
        </>
      )}
    </form>
  );
}

export default TodoForm;