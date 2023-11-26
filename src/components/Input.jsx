export default function Input({ title, type, textarea = false }) {
  return (
    <p>
      <label htmlFor={title} className="block text-sm text-stone-500 font-bold uppercase">{title}</label>
      {textarea ? (
        <textarea id={title} />
      ) : (
        <input type={type} id={title} />
      )}
    </p>
  );
}
