import Button from "./Button";

function SideBar({ onCreateProject }) {
  return (
    <aside className="w-1/3 md:w-72 py-16 px-8 bg-stone-900 text-stone-50 rounded-r-xl">
      <h2 className="text-stone-200 md:text-xl font-bold uppercase">
        Your Projects
      </h2>
      <Button onClick={() => onCreateProject()}>+ Add Project</Button>
      <ul></ul>
    </aside>
  );
}
export default SideBar;
