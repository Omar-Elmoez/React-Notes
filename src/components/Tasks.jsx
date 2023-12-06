import { useState } from "react";
import NewTask from "./NewTask";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  const addingTaskHandler = (task) => {
    setTasks(prevState => {
      return [...prevState, task]
    })
  }

  return (
    <section>
      <h2 className="text-2xl text-stone-700 font-bold mb-4">Tasks</h2>
      <NewTask onAddingTask={addingTaskHandler} />
      {tasks.length === 0 && <p className="text-stone-700 my-4">This project doesn't have any tasks yet.</p>}
      <ul className="mt-8">
        {tasks.map((task, index) => {
          return <li key={index}>{index + 1}- {task}</li>
        })}
      </ul>
    </section>
  );
}