import React from 'react'
import GlobalStyles from '../styles/global'
import Header from '../components/Header'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Welcome to Beer Shop!🍻</h1>
        <input placeholder="digite o endereço de entrega" />
      </Header>
      <main>
        <h2>Produtos</h2>
      </main>
      <footer>Made with love by Josélia Costa 💛</footer>
    </>
  )
}

export default App
