import React, { useState } from 'react';

const TodoForm = ({ onAddTask }) => { 
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onAddTask(newTask); 
    setNewTask(''); 
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="form-control border-0 p-3 fs-5"
        placeholder="Qué necesitas hacer hoy?"
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;