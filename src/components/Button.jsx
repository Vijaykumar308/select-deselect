export default function Button({ type = "button", value = "Button", onClick, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md shadow transition duration-200 ${className}`}
    >
      {value}
    </button>
  );
}