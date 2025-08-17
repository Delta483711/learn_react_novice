
import './App.css';
import { useState } from "react";




function App() {
  
const [tasks, setTasks] = useState([]);
const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <div className="page">
      <header className="App-header">
        To-Do Task App
        <p className='header-line'> </p>
      </header>
      <div className='Enter-box'>
         <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add</button>

      </div>
     <div className='task-list'>
       <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      
      </div> 
    </div>
  );
}

export default App;