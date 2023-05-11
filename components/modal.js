import React from 'react';
import modalStyles from '../styles/modal.module.css';
import Resume from '../public/images/resume.jpg'
import Image from 'next/image'


export default function Modal({children, trigger}) {
    const [isOpen, setIsOpen] = React.useState(false);

    // console.log((isOpen) ? 'Open' : 'Closed');

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(e) {
        if(e.target === e.currentTarget ){
        setIsOpen(false);
        }
    }

    return (
        <>
        <div onClick={openModal} className={modalStyles.trigger}>{trigger}</div>
        { isOpen ? (
          <div className='w-screen h-screen'>
              <div onClick={closeModal} className={modalStyles.modal}>
            <button className={modalStyles.close} onClick={closeModal}>x</button>
            <div className='overscroll-contain'>{children}</div>
        </div>
          </div>

        ) : (
            <></>
        )}
        </>
    );
}