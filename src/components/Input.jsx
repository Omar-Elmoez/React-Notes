export default function Input({ title, type, textarea, ...props }) {
  const classes = "mt-4 p-1 rounded-sm border-b-2 border-stone-300 focus:border-stone-600 focus:outline-none bg-stone-200 text-stone-600 w-full"
  return (
    <p className="my-4">
      <label htmlFor={title} className="block text-sm text-stone-500 font-bold uppercase">{title}</label>
      {textarea ? (
        <textarea {...props} className={classes} id={title} />
      ) : (
        <input {...props} className={classes} type={type} id={title} />
      )}
    </p>
  );
}
