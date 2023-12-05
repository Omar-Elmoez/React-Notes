import { useRef, useState } from "react";
import Input from "./Input";

export default function NewProject({ onSave }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  // const [createdProject, setCreatedProject] = useState({
  //   name: "",
  //   date: "",
  //   description: "",
  // });

  // const handleChange = (e) => {
  //   setCreatedProject({
  //     ...createdProject,
  //     [e.target.name]: e.target.value,
  //     id: Math.random(),
  //   });
  // };

  const saveHandler = () => {
    // const projectTitle = titleRef.current.value;
    // const projectDescription = descriptionRef.current.value;
    // const projectDate = dateRef.current.value;

    onSave({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
    });

    titleRef.current.value = ""
    descriptionRef.current.value = ""
    dateRef.current.value = ""

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
          // onClick={() => {
          //   onCreateProject(createdProject);
          //   setCreatedProject({
          //     name: "",
          //     date: "",
          //     description: "",
          //   });
          // }}
          onClick={saveHandler}
        >
          Save
        </button>
      </div>
      <div>
        <Input
          title="Title"
          type="text"
          ref={titleRef}
          // value={createdProject.name}
          // name="name"
          // onChange={handleChange}
        />
        <Input
          title="Description"
          textarea
          ref={descriptionRef}
          // value={createdProject.description}
          // name="description"
          // onChange={handleChange}
        />
        <Input
          title="Due Date"
          type="date"
          ref={dateRef}
          // value={createdProject.date}
          // onChange={handleChange}
          // name="date"
        />
      </div>
    </div>
  );
}
