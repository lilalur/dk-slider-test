import React, { useState } from 'react'
import Data from './Data.json';
import "./slide.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaChevronLeft } from 'react-icons/fa'

export default function Carousel( { onClose, number } ) {

    const [current, setCurrent] = useState(0);
    const galery = Data[number].galleryImages;
    const SLIDER_STYLE = {
        position: 'relative',
        display: '',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
 
    const IMAGE_COVER_STYLE = {
        height: '10vw',
    }
    // const BLURED_BACKGROUND = {
    //     position: 'fixed',
    //     display: 'block',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     zIndex: -1,
    //     width: '100%',
    //     height: '100%',
    //     backgroundSize: 'cover',
    //     filter: 'blur(5px) opacity(5%)',
    //     backgroundPosition: 'center'
    // }
    const ARROW = {
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        fontSize: '3rem',
        color: '#00aed8',
        userSelect: 'none'
    }
    const LEFT_ARROW = {
        left: '15px'
    }
    const RIGHT_ARROW = {
        right: '15px'
    }
    const NAVIGATION_STYLE = {
        position: 'relative',
        width: '100%',
        height: '180px',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    if (!Array.isArray(galery) || galery.length <= 0) { return null; }

    const pervSlide = () => {
        setCurrent(current === 0 ? galery.length - 1 : current - 1)
    }
    const nextSlide = () => {
        setCurrent(current === galery.length - 1 ? 0 : current + 1)
    }
    return (
        <>
            <section style={SLIDER_STYLE}>
            <FaArrowAltCircleLeft style={{...LEFT_ARROW, ...ARROW}} onClick={pervSlide}  />
            <FaArrowAltCircleRight style={{...RIGHT_ARROW, ...ARROW}} onClick={nextSlide}  />
            <span className="blured-background" style={{backgroundImage: "url(" + galery[current].image.source.replace("q_75,c_limit,f_auto,w_1940,h_1532", "q_75,c_limit,f_auto,w_45,h_45") + ")"}}></span>
            {galery.map((slide, i) => {
                {/* console.log(galery[i].image.source) */}
                return (
                    <div className={i === current ? 'slide active' : 'slide'} key={i+"current slide"}>
                    {i === current && (
                        <img className="carousel-image" src={galery[i].image.source} alt={galery[i].image.alt}/>
                    )}
                    </div>
                )
            })}
            </section>
            <nav style={NAVIGATION_STYLE}>
                <div className="title-collection">
                    <img className="title-cover-image" style={IMAGE_COVER_STYLE} src={galery[0].image.source} alt={galery[0].image.alt}/>
                    <p className="title-bold-text">{galery[0].name}</p>
                    <p className="title-back-text" onClick={onClose} ><FaChevronLeft className="title-back-text"/>Back to the Book</p>
                </div>
                <div className="thumb-collection">
                    {galery.map((thumb, i) => {
                        return (
                            <span className={"thump-container " + (current === i ? 'red-border' : '')} style={{backgroundImage: "url(" + galery[i].image.source.replace("q_75,c_limit,f_auto,w_1940,h_1532", "q_75,c_limit,f_auto,w_85,h_85") + ")"}} key={i+"thumb slide"}></span>
                        )
                    })
                    }
                </div>
                <div className="thumb-counter">{current+1}/{galery.length}</div>
            </nav>
        </>
    )
}
