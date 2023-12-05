import { useState } from "react";
import Input from "./Input";

export default function NewProject({ onCreateProject }) {
  const [createdProject, setCreatedProject] = useState({
    name: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setCreatedProject({
      ...createdProject,
      [e.target.name]: e.target.value,
      id: Math.random(),
    });
  };

  return (
    <div className="w-[35rem] pt-16">
      {/* <menu>
        <li><button>Cancel</button></li>
        <li><button>Save</button></li>
      </menu> */}
      <div className="text-right space-x-4 my-4">
        <button className="text-stone-600 hover:text-stone-950">Cancel</button>
        <button
          className="bg-stone-800 hover:bg-stone-950 text-stone-50 px-6 py-2 rounded-md"
          onClick={() => {
            onCreateProject(createdProject);
            setCreatedProject({
              name: "",
              date: "",
              description: "",
            });
          }}
        >
          Save
        </button>
      </div>
      <div>
        <Input
          title="Title"
          type="text"
          value={createdProject.name}
          name="name"
          onChange={handleChange}
        />
        <Input
          title="Description"
          textarea
          value={createdProject.description}
          name="description"
          onChange={handleChange}
        />
        <Input
          title="Due Date"
          type="date"
          value={createdProject.date}
          onChange={handleChange}
          name="date"
        />
      </div>
    </div>
  );
}
