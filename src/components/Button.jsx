export default function Button({children, ...props}) {
  return (
    <button className="mt-8 px-4 py-2 bg-stone-700 hover:bg-stone-600 text-xs md:text-base text-stone-400 hover:text-stone-100 rounded-md" {...props}>{children}</button>
  );
}