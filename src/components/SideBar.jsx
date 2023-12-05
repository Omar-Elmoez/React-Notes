import Button from "./Button";

function SideBar({ onCreateProject, projects }) {
  return (
    <aside className="w-1/3 md:w-72 py-16 px-8 bg-stone-900 text-stone-50 rounded-r-xl">
      <h2 className="text-stone-200 md:text-xl font-bold uppercase">
        Your Projects
      </h2>
      <Button onClick={onCreateProject}>+ Add Project</Button>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className="mt-4 flex items-center justify-between"
          >
            <span>{project.name}</span>
            <span>{project.id}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default SideBar;
