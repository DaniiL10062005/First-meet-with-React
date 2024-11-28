import { useEffect, useState } from 'react'

export default function Header({ children }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <header className=" sticky top-0 flex bg-slate-500 justify-between items-center border-b-2 h-16 py-10 px-5 mb-10">
      <h3 className="text-yellow-400 text-3xl text-center font-bold inline-block">React start</h3>
      <div className="flex">{children}</div>
      <span className="text-yellow-400 font-bold text-center text-lg">
        Time: {time.toLocaleTimeString()}
      </span>
    </header>
  )
}
