import React, { useState } from 'react';
import './styles/todo-input.css';

const TodoInput = ({todoMessages,setTodoMessages}) => {
  const [inputText,setInputText] = useState('');

  function addTodo(){

    if(inputText === ""){
      alert('You must write something!');
      return;
    }

    const newTodo = {
      name: inputText,
      id:crypto.randomUUID(),
      completed:false
    }

    const updatedTodo = [newTodo,...todoMessages];
    setTodoMessages(updatedTodo);
    setInputText('');
  }

  return (
    <div className='todoInput-container'>
        <input type="text" placeholder='Enter a task...' className='input-field' onChange={(e) => setInputText(e.target.value)}
        value={inputText} onKeyDown={(e) => {
          if(e.key === 'Enter'){
            addTodo()
          }

          if(e.key === 'Escape'){
            setInputText('')
          }
        }} />

        <button className='add-btn' onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodoInput