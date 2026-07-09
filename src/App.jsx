import React, { useEffect, useState } from 'react';
import TodoInput from './component/TodoInput';
import TodoBody from './component/TodoBody';
import './App.css'

const App = () => {
    const [todoMessages, setTodoMessages] = useState(() => {
      const savedItems = localStorage.getItem('todoMessages');
      return savedItems ? JSON.parse(savedItems) : [];
    }); 

    useEffect(() => {
      localStorage.setItem('todoMessages', JSON.stringify(todoMessages));
    },[todoMessages])

  return (
    <div className="app-container">
      <TodoInput
        todoMessages={todoMessages}
        setTodoMessages={setTodoMessages}
      />
      <TodoBody todoMessages={todoMessages} setTodoMessages={setTodoMessages} />
    </div>

    // TODO App Completed!!! Congratulation 🎉 Congratulation 🎉 Congratulation 🎉 Congratulation
    // YOU DONE TODO APP Application SUccessfully 🎉
    // GOOD JOB 🎉
    // IT IS BIG MOVE 🎉
    // KEEP GOING 🎉
    // ONE DAY YOU WILL APPRECIATE 🎉
    // YOU REPLACE ALL OF BAD HABITS 🎉
  );
}

export default App