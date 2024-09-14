import React from 'react'
import { GlobalContext, GlobalStorage } from './GlobalContext'
import Produto from './Produto'

const App = () => {
  return (
    <GlobalStorage>
      <Produto/>
    </GlobalStorage>
  )
}

export default App
