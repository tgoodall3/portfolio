import React from 'react';
import modalStyles from '../styles/modal.module.css';
import Resume from '../public/images/resume.jpg'


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
            <div onClick={closeModal} className={modalStyles.modal}>
            <button className={modalStyles.close} onClick={closeModal}>x</button>
            {/* <div>{children}</div> */}
            <img className='h-90 w-80' src='../public/images/resume.jpg'/>
        </div>

        ) : (
            <></>
        )}
        </>
    );
}