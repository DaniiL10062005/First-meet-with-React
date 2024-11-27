import React from 'react'
import { useState } from 'react'

import Header from './components/Header'
import Li from './components/Li'
import { arr, about } from './components/data'
import Button from './components/Button'

function App() {
  const [content, setContent] = useState(null)
  const [nameH, setNameH] = useState(null)

  const buttonClick = (name) => {
    const result = about.find((item) => item.naming === name)

    setNameH(result.naming)
    setContent(result.info)
  }

  return (
    <div className=" min-w-screen min-h-screen">
      <Header />

      <h1 className="text-bold text-center font-bold text-3xl pb-5 border-b-2">Practice</h1>

      <ul>
        {arr.map((elem) => (
          <Li key={elem.title} {...elem} />
        ))}
      </ul>
      {/*Либо можно еще title = {arr[0].title} и т.д., если имена не совпадают или если мы
      прописали props*/}

      <div className="flex items-center justify-center">
        <Button
          isActive={nameH === 'Vue'}
          classN={'text-white bg-green-600 hover:bg-green-700 m-10'}
          onClick={() => buttonClick('Vue')}
        >
          Vue
        </Button>
        <Button
          isActive={nameH === 'React'}
          classN={'text-white bg-blue-600 hover:bg-blue-700 m-10'}
          onClick={() => buttonClick('React')}
        >
          React
        </Button>
        <Button
          isActive={nameH === 'Angular'}
          classN={'text-white bg-orange-600 hover:bg-orange-700 m-10'}
          onClick={() => buttonClick('Angular')}
        >
          Angular
        </Button>
      </div>

      <div className={content ? 'mx-10 my-5 text-center' : 'hidden'}>
        <h1 className="font-bold text-2xl">{nameH}</h1>

        <p className="border text-xl">{content}</p>
      </div>
    </div>
  )
}

export default App
