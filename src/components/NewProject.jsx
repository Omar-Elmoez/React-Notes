import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] pt-16">
      {/* <menu>
        <li><button>Cancel</button></li>
        <li><button>Save</button></li>
      </menu> */}
      <div className="text-right space-x-4 my-4">
        <button className="text-stone-600 hover:text-stone-950">Cancel</button>
        <button className="bg-stone-800 hover:bg-stone-950 text-stone-50 px-6 py-2 rounded-md">Save</button>
      </div>
      <div>
        <Input title='Title' type='text'/>
        <Input title='Description' textarea />
        <Input title='Due Date' type='date' />
      </div>
    </div>
  );
}