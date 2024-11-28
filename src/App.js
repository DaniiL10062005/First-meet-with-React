import React, { useState } from 'react'

import Header from './components/Header'
import ArrayButtons from './components/ArrayButtons'
import Ul from './components/Ul'
import Contacts from './components/Contacts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ButtonForHeading from './components/Button/ButtonForHeading'

function App() {
  const [isActive, setIsActive] = useState('main')

  return (
    <BrowserRouter>
      <Header>
        <ButtonForHeading
          to="/"
          classN={isActive === 'main' ? 'rounded bg-black text-white' : ' rounded-l bg-slate-200'}
          click={() => {
            setIsActive('main')
          }}
        >
          Главная
        </ButtonForHeading>
        <ButtonForHeading
          to="/Contacts"
          classN={
            isActive === 'Contacts' ? 'rounded bg-black text-white' : ' rounded-r bg-slate-200'
          }
          click={() => {
            setIsActive('Contacts')
          }}
        >
          Связь
        </ButtonForHeading>
      </Header>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <h1 className="text-bold text-center font-bold text-3xl pb-5 border-b-2">Практика</h1>
              <Ul />
              <ArrayButtons />
            </>
          }
        />
        <Route path="Contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
