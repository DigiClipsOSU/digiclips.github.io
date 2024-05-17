import { useState } from 'react'

// other components
import ContentCard from './ContentCard'

// icons
import { AiOutlineGithub as GitHubIcon } from "react-icons/ai";

export default function App() {
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


function Header() {
  return (
    <header className='mx-20'>
      <h1 className='text-lheader font-bold py-2'>DigiClips OSU</h1>
    </header>
  )
}

function Main() {
  return (
    <main className='bg px-20 py-8 flex flex-col gap-y-3'>
      <ContentCard title='Our Project Partner' className='col-span-1'>
        <p>DigiClips is our project partner who provides textual recording for public media such as broadcast TV and radio. They allow searching for specific text in their media sources as well as getting a transcript from scheduled media. For example a lawyer might want to see what opposing council says in the news, DigiClips can provide that service by providing a transcript for local news channels or other relevant media sources.</p>
      </ContentCard>
      <div className='grid grid-cols-3'>
        <ContentCard title='What Is Our Project?' className='col-span-1'>
          <p>We were tasked with helping upgrade DigiClips' administration website. Which is an internal tool that allows them to manage users, data, and company resources from a single web application.</p>
        </ContentCard>
        <ContentCard title='Project Personnel' className='col-span-2'>
          <ul>
            <li>
              <p>Grant Conklin</p>
            </li>
            <li>
              <p>Zane Cole Gant</p>
            </li>
            <li>
              <p>James Walter</p>
            </li>
          </ul>
        </ContentCard>
      </div>
      <div className='grid grid-cols-3'>
        <ContentCard title='Project Purpose' className="col-span-1">
          <p>A JavaScript library for building user interfaces</p>
        </ContentCard>
        <ContentCard title='Problems Solved' className="col-span-2">
          <p>A JavaScript library for building user interfaces</p>
        </ContentCard>
      </div>
      <ContentCard title='Our Competitors' className="col-span-2">
          <p>As this is an internal tool for DigiClips' staff we have no direct competitors to our product. The only goal with this project was to upgrade their website to something that is easier to use, more secure, and provides more functionality.</p>
        </ContentCard>
      <ContentCard title='Documentation and Extra Info' className="col-span-1">
        <p>This website isn't public but for more information about DigiClips you can check out&nbsp;
          <a href='http://www.digiclipsinc.com' target='_blank' rel='noreferrer' className='hover:text-white hover:cursor-pointer underline'>digiclipsinc.com</a>
          .
        </p>
      </ContentCard>
      <ContentCard title='Project Use'>
        <p>As this website is DigiClips' main administration tool to manage company resources this website is not available for public use. DigiClips does have a public website for potential customers and those wishing to learn more at&nbsp;
          <a href='http://www.digiclipsinc.com' target='_blank' rel='noreferrer' className='hover:text-white hover:cursor-pointer underline'>digiclipsinc.com</a>
          .
        </p>
      </ContentCard>
      <ContentCard title='Source Code'>
        <p>
          Our project partner keeps their source code private. You can learn more about our project partner and what they do on their website at&nbsp;
          <a href='http://www.digiclipsinc.com' target='_blank' rel='noreferrer' className='hover:text-white hover:cursor-pointer underline'>digiclipsinc.com</a>
          .
        </p>
      </ContentCard>
    </main>
  )
}

function Footer() {
  return (
    <footer className='mx-20 py-8'>
      <div className='mx-auto w-fit'>
        <a href='https://github.com/DigiClipsOSU/digiclipsOSU.github.io' target='_blank' rel='noreferrer' className='hover:text-white hover:cursor-pointer'>
          <div className='flex gap-3'>
            <GitHubIcon className='h-12 w-auto' />
          </div>
        </a>
      </div>
    </footer>
  )
}
