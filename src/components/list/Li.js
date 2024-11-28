import React from 'react'
const Li = ({ title, discription }) => {
  return (
    <li className="p-5 border-2 border-blue-800 rounded-lg m-5">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-xl mt-10">{discription}</p>
    </li>
  )
}
export default Li
