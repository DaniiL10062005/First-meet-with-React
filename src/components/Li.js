export default function Li({ title, discription }) {
  return (
    <ul className="p-5 border rounded-lg m-5">
      <li>
        <h1 className="text-2xl font-bold">{title}</h1>
      </li>
      <li>
        <p className="text-lg">{discription}</p>
      </li>
    </ul>
  )
}
