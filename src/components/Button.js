export default function Button({ children, onClick, classN, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`px-20 py-5 outline-none font-bold rounded-lg transition-all duration-500 active:bg-black shadow ${
        isActive ? 'bg-black text-white m-10' : classN
      }`}
    >
      {children}
    </button>
  )
}
