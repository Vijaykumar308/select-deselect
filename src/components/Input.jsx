export default function Input({ type, placeholder = "", func, value='', onKeyDwonfunc}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={func}
      onKeyDown={onKeyDwonfunc} 
      className="px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full transition duration-200"
    />
  );
}