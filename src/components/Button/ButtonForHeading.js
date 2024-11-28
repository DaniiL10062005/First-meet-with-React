import { Link } from 'react-router-dom'

export default function Button({ children, to, classN, click }) {
  return (
    <Link
      className={`flex items-center justify-center md:px-10 sm:px-3 p-0 py-1 h-16 md:w-56 sm:w-24 w-20 outline-none font-bold transition-all duration-500 active:bg-black active:text-white shadow ${classN}`}
      to={to}
      onClick={click}
    >
      {children}
    </Link>
  )
}
