import React from 'react';
import ReactDom from 'react-dom';
import { FaTimesCircle } from 'react-icons/fa'
// import Data from './Data.json';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '15px',
    zIndex: 1000,
    width: '100%'
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
}

const CLOSING_STYLE = {
    top: '12%',
    right: '2%',
    fontSize: '2.5rem',
    userSelect: 'none',
    zIndex: 1000
}

export default function Modal( { open, children, onClose } ) {
    if (!open) return null
    return ReactDom.createPortal (
        <>
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
                <FaTimesCircle className="closing-cross" style={CLOSING_STYLE} onClick={onClose} />
                    {children}
            </div>
        </>,
        document.getElementById('carouselModal')
    )
}
