export default function Button({ children, onClick, classN, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`px-20 py-5 lg:m-10 w-56 m-1 outline-none font-bold rounded-lg transition-all duration-500 active:bg-black shadow ${
        isActive ? 'bg-black text-white' : classN
      }`}
    >
      {children}
    </button>
  )
}
