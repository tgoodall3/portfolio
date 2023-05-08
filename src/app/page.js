"use client";
import React from 'react';
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import avatar from '../../public/images/avatar.png'
import { useState } from 'react';

export default function Home() {
    const [darkMode, SetDarkMode] = useState(false);


  return (
    <div className={darkMode ? "dark" : ''}>
   <main className='bg-white dark:bg-violet-900'> 
    <section className='p-5'>
      <nav className='flex justify-between mb-20'>
        <h1 className='mt-5 text-2xl font-burtons dark:text-violet-400'>DevelopedByTyler</h1>
        <ul className='flex items-center'>
          <li><BsFillMoonStarsFill onClick={() => SetDarkMode(!darkMode)} className='cursor-pointer text-xl font-burtons  '/></li>
          <li><a className=' bg-gradient-to-r from-violet-800 to-violet-400 px-5 py-2 rounded-md ml-8 text-fuchsia-50 drop-shadow-xl' href='#'>Resume</a></li>
        </ul>
      </nav>
      <div className='text-center p-10'>
        <h2 className='text-7xl by-2 text-violet-400 font-md font-vina '>Tyler Goodall</h2>
        <h3 className='text-2xl py-2 font-heebo font-bold dark:text-white'>Developer and Designer.</h3>
        <p className='text-xl leading-8 text-violet-800 drop-shadow-2xl font-heebo dark:text-white '>A young web designer and developer looking for new opportunities to grow and improve!</p>
      </div>
      <div className=' text-5xl flex justify-center gap-16 py-3 text-violet-800 dark:text-slate-100'>
      <AiFillTwitterCircle className='cursor-pointer'/> 
      <AiFillLinkedin className='cursor-pointer'/>
      <AiFillYoutube className='cursor-pointer'/>
      </div>
      <div className='relative bg-gradient-to-b from-violet-400 to-white rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden '>
        <Image src={avatar} layout='fill' object-objectFit='cover' />
      </div>
    </section>

    <section>
      <div>
      </div>
    </section>
    </main>
    </div>
  )
}
