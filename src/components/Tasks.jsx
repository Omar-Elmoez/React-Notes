import { NewTask } from "../components";

export default function Tasks({ tasks, onAdd, onDelete, selectedProjectId }) {

  return (
    <section>
      <h2 className="text-2xl text-stone-700 font-bold mb-4">Tasks</h2>
      <NewTask onAddingTask={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-700 my-4">
          This project doesn't have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-8 p-4 bg-stone-100 rounded-sm">
          {tasks.map((task, index) => {
            return (
              <li key={task.id} className="my-4 flex items-center justify-between">
                <span>{index + 1}- {task.text}</span> 
                <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}>Clear</button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
