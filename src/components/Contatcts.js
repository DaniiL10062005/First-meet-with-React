import { useEffect, useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'

export default function Contatcts() {
  const [name, setName] = useState('')
  const [appeal, setAppeal] = useState('')
  const [reason, setReason] = useState('Другое')

  const [modalOpen, setModalOpen] = useState(false)

  const [flag, setFlag] = useState(false)

  const validation = () => {
    if (name.length === 0 || appeal.length < 5) {
      setFlag(true)
      modalFun()
    } else setFlag(false)
  }
  const modalFun = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <h1 className="text-3xl text-center font-bold">Обратная связь</h1>
      <div className="bg-slate-300 m-10 rounded shadow p-10">
        <h1 className="text-2xl font-bold mb-10 ">Ваше имя</h1>
        <input
          value={name}
          className={
            flag
              ? 'w-full h-10 rounded px-5  focus:outline-black border border-red-700'
              : 'w-full h-10 rounded px-5'
          }
          type="text"
          onChange={(event) => {
            setName(event.target.value)
            setFlag(false)
          }}
        />
        <p className={flag ? 'text-red-600' : 'hidden'}>Имя должно быть не пустым</p>
        <h1 className="text-2xl font-bold mb-10 mt-10">Обращение</h1>
        <input
          value={appeal}
          className={
            flag
              ? 'w-full h-10 rounded px-5  focus:outline-black border border-red-700'
              : 'w-full h-10 rounded px-5'
          }
          type="text"
          onChange={(event) => {
            setAppeal(event.target.value)
            setFlag(false)
          }}
        />
        <p className={flag ? 'text-red-600' : 'hidden'}>Обращение не может быть таким коротким</p>
        <h1 className="text-2xl font-bold mb-10 mt-10">Причина обращения</h1>
        <select
          value={reason}
          onChange={(event) => {
            setReason(event.target.value)
            setFlag(false)
          }}
          className="w-full h-10 rounded px-5"
        >
          <option className="font-bold">Ошибка в тексте</option>
          <option className="font-bold">Ошибка в работе сайта</option>
          <option className="font-bold">Другое</option>
        </select>
        <div className="flex item-center justify-center">
          <Button
            onClick={validation}
            classN={' mt-10 text-black bg-yellow-300 hover:bg-yellow-500 active:text-white w-auto'}
          >
            Отправить
          </Button>
        </div>
        <Modal open={modalOpen}>
          <h1>Упс...</h1>
          <p>Ты не прошел валидацию. Не пытайтесь сломать сайт пожалуйстa...</p>
          <Button
            classN={' mt-10 text-black bg-yellow-300 hover:bg-yellow-500 active:text-white w-auto'}
            onClick={modalFun}
          >
            Закрыть
          </Button>
        </Modal>
      </div>
    </>
  )
}
