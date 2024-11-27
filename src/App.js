import React from 'react'

import Header from './components/Header'
import ArrayButtons from './components/ArrayButtons'
import Ul from './components/Ul'

function App() {
  return (
    <>
      <Header />
      <h1 className="text-bold text-center font-bold text-3xl pb-5 border-b-2">Practice</h1>

      <Ul />

      <ArrayButtons />
    </>
  )
}

export default App
