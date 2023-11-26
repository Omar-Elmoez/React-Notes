function SideBar() {
  return (
    <aside className="w-1/3 md:w-72 py-16 px-8 bg-stone-900 text-stone-50 rounded-r-xl">
      <h2 className="text-stone-200 md:text-xl font-bold uppercase">Your Projects</h2>
      <button className="mt-8 px-4 py-2 bg-stone-700 hover:bg-stone-600 text-xs md:text-base text-stone-400 hover:text-stone-100 rounded-md">+ Add Project</button>
      <ul></ul>
    </aside>
  );
}
export default SideBar;