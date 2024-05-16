import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text bg-black min-h-screen w-full">
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App


function Header() {
  return (
    <header>
      <h1>Hello Vite + React!</h1>
    </header>
  )
}

function Main() {
  return (
    <main>
      <h2>The count is:</h2>
    </main>
  )
}

function Footer() {
  return (
    <footer>
    </footer>
  )
}