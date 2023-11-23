import React from 'react'
import reactLogo from '../../assets/imgs/react.svg'
import viteLogo from '../../assets/imgs/vite.svg'
import tailwindLogo from '../../assets/imgs/tailwind.svg'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='flex'>
          <img src={viteLogo} alt="vite logo" className='h-32 w-32 animate-pulse' />
          <img src={reactLogo} alt="react logo" className='h-32 w-32 animate-pulse' />
          <img src={tailwindLogo} alt="tailwind logo" className='h-32 w-32 animate-pulse' />
        </div>
        Vite/React + Tailwind + Heroicons
    </div>
  )
}

export default Home