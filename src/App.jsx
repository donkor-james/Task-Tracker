import Tasks from "./Components/Tasks"
import Navbar from "./Components/Navbar";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([])

  const AddTask = (task) => {
    setTasks([...tasks, task])
  }

  const DelectTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) =>{
    console.log(id)
    setTasks (
      tasks.map((task) => 
        task.id === id ? {...task, remainder: !task.remainder} : task
      
      )
    )

  }

  return (
    <div>
      <Navbar />
      <Tasks tasks={tasks} onDelectTask={DelectTask} onToggle={toggleTask} onAdd ={AddTask}/>
    </div>
  );
}

export default App;
