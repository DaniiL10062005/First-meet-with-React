import React, { useState } from 'react'

import Header from './components/Header'
import ArrayButtons from './components/ArrayButtons'
import Ul from './components/Ul'
import Contatcts from './components/Contatcts'
import ButtonForHeading from './components/Button/ButtonForHeading'

function App() {
  const [page, setPage] = useState('main')

  return (
    <>
      <Header>
        <ButtonForHeading
          isActive={page === 'main'}
          onClick={() => setPage('main')}
          classN={'bg-gray-200 rounded-l'}
        >
          Главная
        </ButtonForHeading>
        <ButtonForHeading
          isActive={page === 'contacts'}
          onClick={() => setPage('contacts')}
          classN={'bg-gray-200 rounded-r'}
        >
          Контакты
        </ButtonForHeading>
      </Header>

      {page === 'main' ? (
        <>
          <h1 className="text-bold text-center font-bold text-3xl pb-5 border-b-2">Практика</h1>
          <Ul />
          <ArrayButtons />
        </>
      ) : (
        <Contatcts></Contatcts>
      )}
      {/*Пока не изучу роутеры */}
    </>
  )
}

export default App
