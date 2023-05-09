"use client";
import React from 'react';
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import avatar from '../../public/images/avatar.png'
import { useState } from 'react';
import { VscVm } from "react-icons/vsc";
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiAdobelightroom } from "react-icons/si";
import { SlMouse } from "react-icons/sl";
import Modal from '../../components/modal';
import Resume from '../../public/images/resume.jpg'

export default function Home() {
    const [darkMode, SetDarkMode] = useState(false);


  return (
    <div className={darkMode ? "dark" : ''}>
   <main className='bg-white dark:bg-violet-900'> 
    <section className='p-5'>
      <nav className='flex justify-between mb-20'>
        <h1 className='mt-5 text-2xl font-burtons text-violet-800 dark:text-violet-400'>DevelopedByTyler</h1>
        <ul className='flex items-center'>
          <li><BsFillMoonStarsFill onClick={() => SetDarkMode(!darkMode)} className='cursor-pointer text-xl font-burtons dark:text-white  '/></li>
          <Modal trigger={<li><a className=' bg-gradient-to-r from-violet-800 to-violet-400 px-5 py-2 rounded-md ml-8 text-fuchsia-50 drop-shadow-xl' href='#'>Resume</a></li>}>
          {/* <Image src={Resume} layout='fill' object-objectFit='cover' className=' flex w-80 h-80'/> */}
          </Modal>
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
      <div className='relative bg-gradient-to-b from-violet-400 to-white rounded-full w-80 h-80 mt-10 mb-10 mx-auto overflow-hidden '>
        <Image src={avatar} layout='fill' object-objectFit='cover' />
      </div>
    </section>

    <section className='p-5 px-20 bg-violet-400 dark:bg-violet-800'>
      <div className=''>
        <h3 className='font-vina text-white text-3xl font-md mt-20 tracking-wide '>What I specialize in!</h3>
        <p className='font-semibold text-lg dark:text-violet-200'>During my time in college, I've spent most my time learning html, css, and js. I've also worked with Firebase and SQL. Ive more recently dived into React and working making CRUD applications. My passion has continued to grow and I use my free time perfecting my craft.</p>
        <div className='flex justify-center ' >
        <VscVm className='h-20 w-20 text-white'/>
        <SlMouse className='h-20 w-20 text-white'/>
        </div>
      </div>
      <div className=''>
        <h3 className='font-vina text-white text-3xl font-md mt-20 tracking-wide '>Also..</h3>
        <p className='font-semibold text-lg dark:text-violet-200'>I also have experience using PS, Illustrator, Lightroom, and XD. I have a good understanding of design principles and how to create breath taking designs!</p>
       <div className='flex justify-evenly flex-wrap'>
       <SiAdobeillustrator className='h-20 w-20 text-white'/>
        <SiAdobephotoshop className='h-20 w-20 text-white'/>
        <SiAdobelightroom className='h-20 w-20 text-white'/>
        <SiAdobexd className='h-20 w-20 text-white'/>
       </div>
      </div>
    </section>
    </main>
    </div>
  )
}
