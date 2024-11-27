export default function Button({ children, onClick, classN, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`px-10 py-1 h-16 w-56 outline-none font-bold transition-all duration-500 active:bg-black active:text-white shadow ${
        isActive ? 'bg-black text-white rounded' : classN
      }`}
    >
      {children}
    </button>
  )
}
