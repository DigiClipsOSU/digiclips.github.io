import { useState } from 'react'

// other components
import ContentCard from './ContentCard'

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
      <ContentCard title='Project Personnel' content='A JavaScript library for building user interfaces' />
      <ContentCard title='Project Purpose' content='A JavaScript library for building user interfaces' />
      <ContentCard title='React' content='A JavaScript library for building user interfaces' />
      <ContentCard title='React' content='A JavaScript library for building user interfaces' />
      <ContentCard title='Learn More' content='A JavaScript library for building user interfaces' />
      <ContentCard title='Project Use' content='A JavaScript library for building user interfaces' />
      <ContentCard title='Source Code' content='A JavaScript library for building user interfaces' />
    </main>
  )
}

function Footer() {
  return (
    <footer className='mx-20'>
    </footer>
  )
}