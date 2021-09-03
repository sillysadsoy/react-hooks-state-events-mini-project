import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {  
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('Code')

  const newTaskCats = [...categories.slice(1)]
  const options = newTaskCats.map(cat => {
    return <option key={cat}
                   value={cat}>{cat}</option>
  })

  function handleTyping(event) {
    setInput(event.target.value)
  }

  function handleCategory(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({text: input, category: category})

  }

  // const newTask = {
  //   text: {input},
  //   category: {category}
  // }

  return (
    <form className="new-task-form"
          onSubmit={event => handleSubmit(event)}>
      <label>
        Details
        <input type="text" 
               name="text" 
               onChange={(event) => handleTyping(event)}
               value={input}
        />
      </label>
      <label>
        Category
        <select name="category" 
                value={category}
                onChange={(event) => handleCategory(event)}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
