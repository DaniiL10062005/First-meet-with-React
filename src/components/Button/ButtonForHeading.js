export default function Button({ children, onClick, classN, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`md:px-10 sm:px-3 p-0 py-1 h-16 md:w-56 sm:w-24 w-20 outline-none font-bold transition-all duration-500 active:bg-black active:text-white shadow ${
        isActive ? 'bg-black text-white rounded' : classN
      }`}
    >
      {children}
    </button>
  )
}
