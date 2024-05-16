import { useState } from 'react'

// other components
import ContentCard from './ContentCard'

// icons
import { AiOutlineGithub as GitHubIcon } from "react-icons/ai";

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
    <main className='bg px-20 py-5'>
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
    <footer className='mx-20 py-8'>
      <div className='mx-auto w-fit'>
        <a href='https://github.com/DigiClipsOSU/digiclipsOSU.github.io' target='_blank' rel='noreferrer' className='hover:text-white hover:cursor-pointer'>
          <GitHubIcon className='h-14 w-auto' />
        </a>
      </div>
    </footer>
  )
}