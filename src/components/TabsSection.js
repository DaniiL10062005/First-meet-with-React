import { useState } from 'react'
import ButtonForHeading from './Button/ButtonForHeading'

export default function TabsSection() {
  const [page, setPage] = useState('main')
  const click = (page) => {
    setPage(page)
  }
  return (
    <section>
      <ButtonForHeading
        isActive={page === 'main'}
        onClick={() => click('main')}
        classN={'bg-gray-200 h-full'}
      >
        Главная страница
      </ButtonForHeading>
      <ButtonForHeading
        isActive={page === 'contacts'}
        onClick={() => click('contacts')}
        classN={'bg-gray-200'}
      >
        Контакты
      </ButtonForHeading>
    </section>
  )
}
