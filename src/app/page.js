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
import { GiAbstract057 } from "react-icons/gi";

export default function Home() {
    const [darkMode, SetDarkMode] = useState(false);


  return (
    <div className={darkMode ? "dark" : ''}>
   <main className='bg-white dark:bg-violet-900'> 
    <section className='p-5 relative'>
      <nav className='flex justify-between mb-20'>
        <h1 className='mt-5 text-2xl font-burtons text-violet-800 dark:text-violet-400'>DevelopedByTyler</h1>
        <ul className='flex items-center'>
          <li><BsFillMoonStarsFill onClick={() => SetDarkMode(!darkMode)} className='cursor-pointer text-xl font-burtons dark:text-white  '/></li>
          <Modal className='overscroll-contain' trigger={<li><a className=' bg-gradient-to-r from-violet-800 to-violet-400 px-5 py-2 rounded-md ml-8 text-fuchsia-50 drop-shadow-xl' href='#'>Resume</a></li>}>
          <div className='w-screen overscroll-contain'>
            <div className='bg-white w-9/12 p-6'>
                <h1 className='flex justify-center text-5xl font-vina'>Tyler Goodall</h1>
                <h2 className='flex justify-center text-2xl font-heebo text-center'>Web Design and Development Major</h2>
            </div>
            <div className='flex justify-evenly flex-wrap'>
                    <span className='font-heebo font-semibold'>Indianapolis, IN</span>
                    <span className=' font-heebo font-semibold'>812-929-7256</span>
                    <span className=' font-heebo font-semibold'>Tylergoodall3@gmail.com</span>
            </div>
            <div className='bg-white w-screen flex justify center flex-col'>
                <div className='flex'>
                    <span className='flex items-center bg-gradient-to-r from-violet-800 to-violet-400 px-5 py-2 rounded-md text-fuchsia-50 drop-shadow-xl '>Objectives</span>
                    <span className='flex ml-8 font-heebo font-semibold'>Hardworking Junior in College with a passion for Web Design and Development. Ready to begin a career that will utilize my computer skills, technology experience and motivation to continue to learn new programs. </span>
                </div>
                <div className='flex'>
                    <span className='flex items-center bg-gradient-to-r from-violet-800 to-violet-400 px-5 py-2 rounded-md text-fuchsia-50 drop-shadow-xl '>Certificate</span>
                    <span className='flex ml-8 font-heebo font-semibold '>I completed the Certificate Course through IUPUI this May 2023.</span>
                </div>
                <div className='flex'>
                    <span className='flex items-center bg-gradient-to-r from-violet-800 to-violet-400 px-5 py-2 rounded-md text-fuchsia-50 drop-shadow-xl '>Leadership</span>
                    <span className='flex ml-8 font-heebo font-semibold w-full'>I have been put into Leadership Roles as a Team Leader in the Army National Guard. I have been in for 3 years as of April 2023 and will continue to serve throughout 2026.</span>
                </div>
            </div>
        </div>
          </Modal>
        </ul>
      </nav>
      <div className='text-center p-10'>
        <h2 className='text-7xl by-2 text-violet-400 font-md font-vina '>Tyler Goodall</h2>
        <h3 className='text-2xl py-2 font-heebo font-bold dark:text-white'>Developer and Designer.</h3>
        <p className='text-xl leading-8 text-violet-800 font-heebo dark:text-white '>A young web designer and developer looking for new opportunities to grow and improve!</p>
      </div>
      <div className=' text-5xl flex justify-center gap-16 py-3 text-violet-800 dark:text-slate-100'>
      <AiFillTwitterCircle className='cursor-pointer'/> 
      <AiFillLinkedin className='cursor-pointer'/>
      <AiFillYoutube className='cursor-pointer'/>
      </div>
      <div className='relative bg-gradient-to-b from-violet-400 to-white rounded-full w-80 h-80 mt-10 mb-10 mx-auto overflow-hidden'>
        <Image className='' src={avatar} layout='fill' object-objectFit='cover' />
      </div>
    </section>

    <section className='p-5 px-20 bg-violet-400 dark:bg-violet-800'>
      <div className=''>
        <h3 className='font-vina text-white text-3xl font-md mt-20 tracking-wide '>What I specialize in!</h3>
        <p className='font-semibold text-lg dark:text-violet-200 text-center'>During my time in college, I've spent most my time learning html, css, and js. I've also worked with Firebase and SQL. Ive more recently dived into React and working making CRUD applications. My passion has continued to grow and I use my free time perfecting my craft.</p>
        <div className='flex justify-center ' >
        <VscVm className='h-20 w-20 text-white'/>
        <SlMouse className='h-20 w-20 text-white'/>
        </div>
      </div>
      <div className=''>
        <h3 className='font-vina text-white text-3xl font-md mt-20 tracking-wide '>Also..</h3>
        <p className='font-semibold text-lg dark:text-violet-200 text-center'>I also have experience using PS, Illustrator, Lightroom, and XD. I have a good understanding of design principles and how to create breath taking designs!</p>
       <div className='flex justify-evenly flex-wrap h-50'>
       <SiAdobeillustrator className='h-20 w-20 text-white'/>
        <SiAdobephotoshop className='h-20 w-20 text-white '/>
        <SiAdobelightroom className='h-20 w-20 text-white'/>
        <SiAdobexd className='h-20 w-20 text-white'/>
       </div>
      </div>
    </section>
    <footer className='bg-white h-30 p-5 flex justify-between dark:bg-violet-800 drop-shadow-2xl'>
      <span className='text-2xl font-burtons text-fuchsia-950 mt-1 dark:text-fuchsia-300'>DesignedByTyler</span>
      <GiAbstract057 className='h-10 w-20  text-fuchsia-950 dark:text-fuchsia-300 '/>
    </footer>
    </main>
    </div>
  )
}
