import React, { useState } from "react";

function Task({ text, category }) {
  const [isDeleted, setDelete] = useState(false);

  function handleDelete() {
    setDelete(isDeleted => !isDeleted);
  }

  return (
    !isDeleted 
    ?
     (<div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" 
              onClick={handleDelete} 
              value={isDeleted}>
              X
      </button>
    </div>) 
    :
     null
  );
}

export default Task;
