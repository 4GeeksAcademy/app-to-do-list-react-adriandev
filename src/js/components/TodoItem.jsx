import React, { useState } from 'react';

const TodoItem = ({ task, index, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <li 
      className="list-group-item d-flex justify-content-between align-items-center py-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ overflow: 'hidden' }}
    >
      <span>{task}</span>
      
      {isHovered && (
        <span 
          className="text-danger delete-icon ms-auto" 
          onClick={() => onDelete(index)} 
          style={{ cursor: 'pointer', fontSize: '1.2rem' }}
        >
          &times;
        </span>
      )}
    </li>
  );
};

export default TodoItem;