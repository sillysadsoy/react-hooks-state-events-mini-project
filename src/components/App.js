import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [selectedCategory, setCategory] = useState('All');
const [tasks, resetTasks] = useState(TASKS)


function handleCategorySelection(category) {
  setCategory(category);
};

function onTaskFormSubmit(obj) {
  const additionalTasks = [...tasks, obj];
  resetTasks(additionalTasks);
}


const newTasks = tasks.filter(task => {
  if(selectedCategory === "All") {return true}
  else {return task.category === selectedCategory}
});

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory} 
        resetCat={handleCategorySelection}
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={newTasks}/>
    </div>
  );
}

export default App;
