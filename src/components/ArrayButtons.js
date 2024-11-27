import Button from './Button/Button'
import { about } from './data'
import { useState } from 'react'

export default function ArrayButtons() {
  const [content, setContent] = useState(null)
  const [nameH, setNameH] = useState(null)
  const buttonClick = (name) => {
    const result = about.find((item) => item.naming === name)

    setNameH(result.naming)
    setContent(result.info)
  }
  return (
    <div>
      <div className="flex md:flex-row flex-col items-center justify-center">
        <Button
          isActive={nameH === 'Vue'}
          classN={'text-white bg-green-600 hover:bg-green-700'}
          onClick={() => buttonClick('Vue')}
        >
          Vue
        </Button>
        <Button
          isActive={nameH === 'React'}
          classN={'text-white bg-blue-600 hover:bg-blue-700'}
          onClick={() => buttonClick('React')}
        >
          React
        </Button>
        <Button
          isActive={nameH === 'Angular'}
          classN={'text-white bg-orange-600 hover:bg-orange-700'}
          onClick={() => buttonClick('Angular')}
        >
          Angular
        </Button>
      </div>
      <div className={content ? 'mx-10 my-5 text-center' : 'hidden'}>
        <h1 className="font-bold text-2xl">{nameH}</h1>

        <p className="border text-xl rounded p-2 mt-10">{content}</p>
      </div>
    </div>
  )
}
