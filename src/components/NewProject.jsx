import { useContext, useRef, useState } from "react";
import { Input, Modal } from "../components";
import { ProjectContext } from "../store/project-context";

const capitalize = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function NewProject() {

  const { addingNewProject, cancelProject } = useContext(ProjectContext)

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const modal = useRef();



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

    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;

    // Validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    addingNewProject({
      title: capitalize(enteredTitle),
      description: enteredDescription,
      date: enteredDate,
    });
  };


  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold my-4 text-stone-800">Invalid Input</h2>
        <p className="text-stone-600">Oops ... Looks like you forget to enter a value</p>
        <p className="text-stone-600 mt-2">Please, make sure you provide a valid value for every input field</p>
      </Modal>
      <div className="w-[90%] mx-auto md:mx-0 md:w-[35rem] pt-16">
        {/* <menu>
        <li><button>Cancel</button></li>
        <li><button>Save</button></li>
      </menu> */}
        <div className="text-right space-x-4 my-4">
          <button className="text-stone-600 hover:text-stone-950" onClick={cancelProject}>
            Cancel
          </button>
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
    </>
  );
}
