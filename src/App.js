import React from 'react'
import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'

import background from './stars.gif'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Footer />
      <Main />
    </div>
  )
}

export default App
