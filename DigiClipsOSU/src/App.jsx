import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

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
    <header className='mx-20'>
      <h1 className='text-lheader font-bold'>DigiClips OSU</h1>
    </header>
  )
}

function Main() {
  return (
    <main className='bg px-20'>
      <h2>The count is:</h2>
    </main>
  )
}

function Footer() {
  return (
    <footer className='mx-20'>
    </footer>
  )
}