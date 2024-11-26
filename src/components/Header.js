const time = new Date()

export default function Header() {
  return (
    <header className="flex bg-slate-500 justify-between items-center border-b-2 h-16 py-10 px-5 mb-10">
      <h3 className="text-yellow-400 text-3xl font-bold inline-block">React start</h3>
      <span className="text-yellow-400 font-bold text-lg">Time: {time.toLocaleTimeString()}</span>
    </header>
  )
}
