import React, { useState } from 'react';
import TodoForm from './TodoForm.jsx';
import TodoItem from './TodoItem.jsx';

const Home = () => {
  const [todos, setTodos] = useState([]); 

  const addTask = (newTaskText) => {
    if (newTaskText.trim() === "") return;
    setTodos(prevTodos => [newTaskText, ...prevTodos]);
  };

  const deleteTask = (indexToDelete) => {
    setTodos(prevTodos => {
      return prevTodos.filter((_, index) => index !== indexToDelete);
    });
  };
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="text-center my-4">Lista de cosas por hacer</h1>
          
          <div className="card shadow-sm">
            
            <TodoForm onAddTask={addTask} />

            <ul className="list-group list-group-flush">
              {todos.length > 0 ? (
                todos.map((task, index) => (
                  <TodoItem 
                    key={index}
                    task={task} 
                    index={index} 
                    onDelete={deleteTask} 
                  />
                ))
              ) : (
                <li className="list-group-item text-muted fst-italic py-3">
                  No hay tareas, añadir tareas
                </li>
              )}
            </ul>

            {todos.length > 0 && (
              <div className="card-footer text-muted small">
                {todos.length} item añadido
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;